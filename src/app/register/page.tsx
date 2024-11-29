"use client";

import Input from "../components/input";
import TextField from "../components/textfield";
import Button from "../components/button";
import LinkModal from "../components/link-modal";
import { useState } from "react";

export default function Register() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     name: "",
  //     domain: "",
  //     access: 0,
  //     active: true,
  //     url_path: "",
  //     url_redirect: "",
  //   },
  // });

  // const onSubmit = async ({
  //   name,
  //   domain,
  //   url_path,
  //   url_redirect,
  // }: {
  //   name: string;
  //   domain: string;
  //   url_path: string;
  //   url_redirect: string;
  // }) => {
  //   console.log({ name, domain, url_path, url_redirect });
  // };

  return (
    <div className="flex flex-col flex-grow items-center text-[var(--white)]">
      <div className="w-2/5 mt-10">
        <h1 className="text-3xl mb-10">Nova Investigação</h1>
        <Input
          label="Como quer chamar sua nova investigação?"
          placeholder="Dê um nome para a sua investigação"
        />
        <TextField
          label="Qual o objetivo dessa investigação (opccional)"
          placeholder="Descreva o objetivo dessa investigação"
          className="mt-5"
        />
        <div className="flex w-full items-center gap-2 mt-5">
          <div className="flex-1 h-36">
            <Input label="Escolha um domínio" />
          </div>
          <p className="h-12">/</p>
          <div className="flex-1 h-36">
            <Input
              label="Personalize a URL"
              helperText="Dica: Simule a URL de um site real."
              placeholder="Sugestão-url"
            />
          </div>
        </div>
        <Input
          label="Para onde deseja redirecionar o alvo?"
          placeholder="www.google.com"
          helperText="Dpois de clicar no link de captura, o alvo será redirecionado para o site acima"
        />
        <div className="w-full flex justify-end mt-10">
          <Button onClick={() => setIsModalOpen(true)}>
            Criar investigação
          </Button>
        </div>
      </div>

      {isModalOpen && <LinkModal link="Sugestão-url" success={true} />}
    </div>
  );
}
