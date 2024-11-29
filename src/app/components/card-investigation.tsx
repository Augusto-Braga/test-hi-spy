"use client";

import { useState } from "react";

interface CardInvestigationProps {
  investigation: {
    id: string;
    name: string;
    domain: string;
    access: number;
    active: boolean;
    url_path: string;
    url_redirect: string;
    created_at: string;
    updated_at: string;
  };
}

export default function CardInvestigation({
  investigation,
}: CardInvestigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className="w-full h-16 px-10 flex items-center justify-between bg-[var(--dark-blue)] text-[var(--white)] hover:bg-[var(--blue)]">
      <div className="flex">
        <div className="w-8 h-8 flex items-center justify-center bg-[var(--dark-gray)] rounded-full">
          <img src={`/${icon}`} alt="zap" />
        </div>
        <div className="ml-5">
          <p className="text-sm">{investigation.name}</p>
          <p className="text-xs mt-1 text-[var(--dark-gray)]">{`${investigation.access} Acessos`}</p>
        </div>
        <div
          className={`ml-2 px-3 h-6 ${chipBg} rounded-[6px] text-xs flex items-center justify-center`}
        >
          <p>{chipText}</p>
        </div>
      </div>
      <div className="flex gap-3 text-xs mt-1 text-[var(--dark-gray)]">
        <div>
          <p>Criado em</p>
          <p className="mt-1">{investigation.created_at}</p>
        </div>
        <div>
          <p>Atualizado em</p>
          <p className="mt-1">{investigation.updated_at}7</p>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="w-10 h-10 flex items-center justify-center rounded-[6px] border border-[var(--dark-gray)] bg-[var(--blue)]"
        >
          <p>...</p>
        </button>

        {isMenuOpen && (
          <div className="absolute top-12 right-0 w-32 bg-[var(--black)] border border-[var(--dark-gray)] rounded-[6px] shadow-md">
            <button className="w-full flex items-center text-left px-4 py-2 text-[var(--white)] hover:bg-[var(--dark-gray)]">
              <img src="/no-symbol.svg" alt="" className="mb-1 mr-1" />
              Encerrar
            </button>

            <div className="h-[1px] bg-[var(--dark-gray)]"></div>

            <button className="w-full flex items-center text-left px-4 py-2 text-red-500 hover:bg-[var(--dark-gray)]">
              <img src="/trash.svg" alt="" className="mb-1 mr-1" />
              Excluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
