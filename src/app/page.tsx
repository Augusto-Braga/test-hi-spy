"use client";

import { useEffect, useState } from "react";
import Button from "./components/button";
import CardInvestigation from "./components/card-investigation";
import MessageComponent from "./components/message";
import PlusCircle from "./components/plus-circle";
import Link from "next/link";
import { supabase } from "@/lib/supabase-client";

export default function Home() {
  const [investigations, setInvestigations] = useState([]);

  const getInvestigations = async () => {
    const { data, error } = await supabase.from("investigations").select();
    if (error) {
      console.error(error);
      return;
    }

    setInvestigations(data);
  };

  useEffect(() => {
    getInvestigations();
  }, []);

  const justifyContent = investigations.length === 0 ? "justify-center" : "";

  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvestigations = investigations.filter((investigation) =>
    investigation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className={`flex-grow flex flex-col items-center ${justifyContent}`}>
      {investigations.length === 0 ? (
        <MessageComponent />
      ) : (
        <div className="w-3/4 grid gap-4 mt-10 text-[var(--white)] overflow-auto">
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
