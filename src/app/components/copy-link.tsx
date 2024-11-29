"use client";

import { useState } from "react";
import Button from "./button";
import DuplicateIcon from "./duplicate-icon";

interface CopyLinkProps {
  link: string;
}

export default function CopyLink({ link }: CopyLinkProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full bg-[var(--dark-blue)] p-6 rounded-[6px] border border-[var(--dark-gray)]">
      <p className="text-[var(--white)]">Link de captura</p>
      <p className="text-[var(--gray)] mt-2 text-xs">
        Com ele você obterá apenas o IP do alvo. A geolocalização não é precisa.
      </p>
      <div className="flex items-center gap-2 mt-2">
        <div className="w-96 bg-zinc-900 p-2 text-[var(--white)] rounded-[6px] border border-[var(--dark-gray)]">
          {link}
        </div>

        <Button icon={copied ? "" : <DuplicateIcon />} onClick={handleCopy}>
          {copied ? "Copiado!" : "Copiar"}
        </Button>
      </div>
    </div>
  );
}
