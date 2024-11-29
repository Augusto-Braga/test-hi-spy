import Link from "next/link";
import Button from "./button";
import CopyLink from "./copy-link";

interface SuccessModalProps {
  link: string;
  success: boolean;
}

export default function LinkModal({ link, success }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-[36rem] flex flex-col items-center justify-center p-6 rounded-[6px] border-2 border-[var(--blue)] bg-zinc-900 border border-[var(--dark-gray)]">
        {success && (
          <>
            <img src="/check.svg" alt="check" className="w-16 h-16" />
            <p className="text-[var(--white)] mt-3 text-lg">
              Investigação criada com sucesso!
            </p>
            <p className="text-[var(--gray)] mt-2 text-sm mb-10">
              Copie o link e envie para o seu alvo.
            </p>
          </>
        )}
        <div className="w-full">
          <CopyLink link={link} />
        </div>
        <div className="w-full mt-10 flex justify-end">
          <Link href={"/"}>
            <Button color="secondary">Fechar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
