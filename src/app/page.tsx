"use client";

import { useState } from "react";
import Button from "./components/button";
import CardInvestigation from "./components/card-investigation";
import MessageComponent from "./components/message";
import PlusCircle from "./components/plus-circle";
import Link from "next/link";

const investigations = [
  // {
  //   id: "1",
  //   name: "test",
  //   domain: "airbnb.oficial.cam",
  //   access: 0,
  //   active: true,
  //   url_path: "Sugestão-url",
  //   url_redirect: "google.com",
  //   created_at: "09/01/1997",
  //   updated_at: "09/01/1997",
  // },
  // {
  //   id: "2",
  //   name: "test2",
  //   domain: "whatsapp.c0m",
  //   access: 0,
  //   active: false,
  //   url_path: "Sugestão-url",
  //   url_redirect: "google.com",
  //   created_at: "09/01/1997",
  //   updated_at: "09/01/1997",
  // },
  // {
  //   id: "3",
  //   name: "test3",
  //   domain: "facebook.lat",
  //   access: 0,
  //   active: true,
  //   url_path: "Sugestão-url",
  //   url_redirect: "google.com",
  //   created_at: "09/01/1997",
  //   updated_at: "09/01/1997",
  // },
];

export default function Home() {
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
