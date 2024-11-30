import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";

interface SuccessModalProps {
  open: boolean;
  link: string;
}

export default function SuccessModal({ open, link }: SuccessModalProps) {
  const captureUrl = link;

  const urlToIconMap = {
    airbnb: "airbnb",
    facebook: "face",
    whatsapp: "zap",
  };

  const icon =
    Object.entries(urlToIconMap).find(([key]) => link.includes(key))?.[1] || "";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(captureUrl);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Dialog open={open}>
      <DialogTitle className="hidden">test</DialogTitle>
      <DialogContent className="sm:w-[36rem] bg-zinc-900 border border-[var(--dark-gray)] text-[var(--white)]">
        <DialogHeader className="flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600">
            <Check className="h-8 w-8 text-white" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">
              Investigação criada com sucesso!
            </h2>
            <p className="text-sm text-muted-foreground">
              Copie o link e envie para o seu alvo.
            </p>
          </div>
        </DialogHeader>
        <div className="mt-8 space-y-3 bg-[var(--dark-blue)] rounded-[6px] border border-[var(--dark-gray)] p-6">
          <div className="space-y-2">
            <h3 className="font-medium">Link de captura</h3>
            <p className="text-xs text-muted-foreground">
              Com ele você obterá apenas o IP do alvo. A geolocalização não é
              precisa.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <img src={`/${icon}.svg`} alt="" />
              </div>
              <Input value={captureUrl} readOnly className="pl-9" />
            </div>
            <Button onClick={copyToClipboard} className="shrink-0">
              Copiar Link
            </Button>
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <Link href={"/"}>
            <Button variant="secondary" className="w-full sm:w-auto">
              Fechar
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
