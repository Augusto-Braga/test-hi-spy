"use client";

import { useEffect, useState } from "react";
import CardInvestigation from "./components/card-investigation";
import MessageComponent from "./components/message";
import Link from "next/link";
import { supabase } from "@/lib/supabase-client";
import IInvestigation from "./types/investigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [investigations, setInvestigations] = useState<IInvestigation[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className={`flex-grow flex flex-col items-center ${justifyContent}`}>
      {investigations.length === 0 ? (
        <MessageComponent />
      ) : (
        <div className="w-3/4 grid gap-4 mt-10 text-[var(--white)]">
          <div className="w-full flex items-center justify-between mb-2">
            <h2 className="text-2xl">Investigações</h2>
            <Link href={"/register"}>
              <Button>Nova investigação</Button>
            </Link>
          </div>
          <input
            className="w-full mb-5 px-4 py-2 rounded-[8px] bg-[var(--black)] border border-[var(--dark-gray)]"
            placeholder="Pesquisar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {filteredInvestigations.map((investigation) => (
            <CardInvestigation
              key={investigation.id}
              investigation={investigation}
            />
          ))}
        </div>
      )}
    </div>
  );
}
