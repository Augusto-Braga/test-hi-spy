"use client";

import { useEffect, useState } from "react";
import CardInvestigation from "./components/card-investigation";
import MessageComponent from "./components/message";
import Link from "next/link";
import { supabase } from "@/lib/supabase-client";
import IInvestigation from "./types/investigation";
import Button from "./components/button";
import PlusCircle from "./components/plus-circle";

export default function Home() {
  const [investigations, setInvestigations] = useState<IInvestigation[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

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

  useEffect(() => {
    getInvestigations();
  }, []);

  const justifyContent = investigations.length === 0 ? "justify-center" : "";

  const investigationsToShow = showAll
    ? filteredInvestigations
    : filteredInvestigations.slice(0, 5);

  return (
    <div className={`flex-grow flex flex-col items-center ${justifyContent}`}>
      {investigations.length === 0 ? (
        <MessageComponent />
      ) : (
        <div className="w-3/4 grid gap-4 mt-10 text-[var(--white)]">
          <div className="w-full flex items-center justify-between mb-2">
            <h2 className="text-2xl">Investigações</h2>
            <Link href={"/register"}>
              <Button icon={<PlusCircle />}>
                {" "}
                <span className="hidden sm:block">Nova investigação</span>
              </Button>
            </Link>
          </div>
          <input
            className="w-full mb-5 px-4 py-2 rounded-[8px] bg-[var(--black)] border border-[var(--dark-gray)]"
            placeholder="Pesquisar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {investigationsToShow.map((investigation) => (
            <CardInvestigation
              key={investigation.id}
              investigation={investigation}
            />
          ))}

          {filteredInvestigations.length > 5 && !showAll && (
            <div className="w-full flex justify-center mt-4">
              <div>
                <Button onClick={() => setShowAll(true)} color="secondary">
                  Ver mais
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
