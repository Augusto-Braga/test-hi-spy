"use client";

import { supabase } from "@/lib/supabase-client";
import { useState } from "react";
import IInvestigation from "../types/investigation";

interface CardInvestigationProps {
  investigation: IInvestigation;
}

export default function CardInvestigation({
  investigation,
}: CardInvestigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const deleteInvestigation = async (id: string) => {
    const { error } = await supabase
      .from("investigations")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    window.location.reload();
  };

  const finishInvestigation = async (id: string) => {
    const { error } = await supabase
      .from("investigations")
      .update({ active: false })
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    window.location.reload();
  };

  const formatDate = (dateString: string) => {
    const cleanedDate = dateString.split(".")[0];

    const date = new Date(cleanedDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  let icon = "";
  switch (investigation.domain) {
    case "facebook.lat":
      icon = "face.svg";
      break;
    case "whatsapp.c0m":
      icon = "zap.svg";
      break;
    case "airbnb.oficial.cam":
      icon = "airbnb.svg";
      break;
    default:
      icon = "";
      break;
  }

  const chipBg = investigation.active
    ? "bg-[var(--dark-green)]"
    : "bg-[var(--dark-gray)]";
  const chipText = investigation.active ? "Ativo" : "Encerrado";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full p-4 md:px-10 flex flex-col md:flex-row md:items-center justify-between bg-[var(--dark-blue)] text-[var(--white)] hover:bg-[var(--blue)]">
      <div className="flex flex-col md:flex-row md:w-96">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-[var(--dark-gray)] rounded-full">
            <img src={`/${icon}`} alt="zap" />
          </div>
          <div className="ml-5">
            <p className="text-sm">{investigation.name}</p>
            <p className="text-xs mt-1 text-[var(--dark-gray)]">{`${investigation.access} Acessos`}</p>
          </div>
        </div>
        <div
          className={`md:mt-0 md:ml-2 px-3 h-6 ${chipBg} rounded-[6px] text-xs flex items-center justify-center self-start`}
        >
          <p>{chipText}</p>
        </div>
      </div>
      <div className="flex justify-between md:justify-end items-center mt-4 md:mt-0 w-full md:w-auto">
        <div className="flex gap-3 text-xs text-[var(--dark-gray)]">
          <div>
            <p>Criado em</p>
            <p className="mt-1">{formatDate(investigation.created_at)}</p>
          </div>
          <div>
            <p>Atualizado em</p>
            <p className="mt-1">{formatDate(investigation.updated_at)}</p>
          </div>
        </div>
        <div className="relative ml-4">
          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center rounded-[6px] border border-[var(--dark-gray)] bg-[var(--blue)]"
          >
            <p>...</p>
          </button>

          {isMenuOpen && (
            <div className="absolute top-12 right-0 w-32 bg-[var(--black)] border border-[var(--dark-gray)] rounded-[6px] shadow-md z-50">
              {investigation.active && (
                <button
                  className="w-full flex items-center text-left px-4 py-2 text-[var(--white)] hover:bg-[var(--dark-gray)]"
                  onClick={() => finishInvestigation(investigation.id)}
                >
                  <img src="/no-symbol.svg" alt="" className="mb-1 mr-1" />
                  Encerrar
                </button>
              )}

              <div className="h-[1px] bg-[var(--dark-gray)]"></div>

              <button
                className="w-full flex items-center text-left px-4 py-2 text-red-500 hover:bg-[var(--dark-gray)]"
                onClick={() => deleteInvestigation(investigation.id)}
              >
                <img src="/trash.svg" alt="" className="mb-1 mr-1" />
                Excluir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
