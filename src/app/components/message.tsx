import Link from "next/link";
import Button from "./button";
import PlusCircle from "./plus-circle";

export default function MessageComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="./alert-icon.svg" alt="alert" className="w-14 h-14" />
      <p className="mt-5 text-[var(--white)]">
        Você não tem investigações criadas
      </p>
      <p className="mt-2 text-[var(--dark-gray)] mt-2 text-sm]">
        Criar uma investigação com HI SPY é simples. Em alguns passos a sua
        investigação será criada.
      </p>
      <div className="mt-5">
        <Link href={"/register"}>
          <Button icon={<PlusCircle />}>Nova investigação</Button>
        </Link>
      </div>
    </div>
  );
}
