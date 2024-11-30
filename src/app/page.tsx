"use client";

import { useEffect, useState } from "react";
import Button from "./components/button";
import CardInvestigation from "./components/card-investigation";
import MessageComponent from "./components/message";
import PlusCircle from "./components/plus-circle";
import Link from "next/link";
import { supabase } from "@/lib/supabase-client";
import IInvestigation from "./types/investigation";

export default function Home() {
  const [investigations, setInvestigations] = useState<IInvestigation[]>([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Exibir 5 itens por página

  const getInvestigations = async () => {
    const { data, error } = await supabase
      .from("investigations")
      .select()
      .order("created_at", { ascending: true });
    if (error) {
      console.error(error);
      return;
    }

    setInvestigations(data);
  };

  const filteredInvestigations = investigations.filter((investigation) =>
    investigation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInvestigations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInvestigations = filteredInvestigations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    getInvestigations();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const justifyContent = investigations.length === 0 ? "justify-center" : "";

  return (
    <div className={`flex-grow flex flex-col items-center ${justifyContent}`}>
      {investigations.length === 0 ? (
        <MessageComponent />
      ) : (
        <div className="w-3/4 grid gap-4 mt-10 text-[var(--white)]">
          <div className="w-full flex items-center justify-between mb-2">
            <h2 className="text-2xl">Investigações</h2>
            <Link href={"/register"}>
              <Button icon={<PlusCircle />}>Nova investigação</Button>
            </Link>
          </div>
          <input
            className="w-full mb-5 px-4 py-2 rounded-[8px] bg-[var(--black)] border border-[var(--dark-gray)]"
            placeholder="Pesquisar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {currentInvestigations.map((investigation) => (
            <CardInvestigation
              key={investigation.id}
              investigation={investigation}
            />
          ))}
          <div className="flex justify-between mt-4">
            <Button
              onClick={handlePrevPage}
              color="secondary"
              disabled={currentPage === 1}
              className="px-4 py-2"
            >
              Anterior
            </Button>
            <span className="text-lg">
              Página {currentPage} de {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2"
            >
              Próxima
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
