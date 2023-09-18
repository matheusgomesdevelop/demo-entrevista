import { useState } from "react";
import { useRouter } from "next/router";

import NumberFormat from "react-number-format";
import { validateCel, validateEmail } from "../../../validation/regex";

import { anaproURLWhatsapp } from "../../../helpers/anapro";
import dataPush from "../../../helpers/gtm";

export default function CtaWhatsapp({ children }) {
  const [nomeError, setNomeError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [telError, setTelError] = useState(null);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // para evitar temporariamente DDIs russos
  function validateDDI(value){

    const ddi = value.substr(1, 2);

    if((ddi == '83') || (ddi == '87') || (ddi == '89')){
      return false;
    }

    return true;
  }

  // Enviar dados para a API do anapro
  function handle_post_anapro(event: any) {
    event.preventDefault();

    const data = {
      nome: null,
      email: null,
      tel: null,
    };

    const form = new FormData(event.target);

    form.forEach((value, key) => {
      key === "nome" && value !== "" ? (data.nome = value) : null;
      key === "email" && value !== "" && validateEmail(value)
        ? (data.email = value)
        : null;
      key === "tel" && value !== "" && validateCel(value) && validateDDI(value)
        ? (data.tel = value)
        : null;
    });

    // Mensagens de erro
    !data.nome
      ? setNomeError("Preencha o campo nome corretamente.")
      : setNomeError(null);
    !data.email
      ? setEmailError("Preencha o campo e-mail corretamente.")
      : setEmailError(null);
    !data.tel
      ? setTelError("Preencha o campo telefone corretamente.")
      : setTelError(null);

    // Post
    if (data.nome && data.email && data.tel) {
      const ddd = data.tel.match(/(\d+)/gm);

      const ddd_n = ddd[1];
      const numero = `${ddd[2]}${ddd[3]}`;
      const ramal = ddd[0];

      const anapro_url_whats = anaproURLWhatsapp(
        data.nome,
        data.email,
        ddd_n,
        numero,
        "Olá Gostaria de Informações sobre o empreendimento Laparque"
      );

      const origin =
        typeof window !== "undefined" && window.location.origin
          ? window.location.origin.replace('""', "")
          : "";

      // Enviar dados para o GTM
      dataPush(
        "clique_importante",
        "clique-iniciar_whats-app",
        `${origin + router.pathname}`,
        true,
        30,
        `${origin + router.pathname}`,
        "LaParque",
        "Ficha de produto"
      );

      window.location.href = anapro_url_whats;
      // Corpo do body da requisicao com os dados
      /* const body = anapro_body(data.nome, data.email, ddd_n, numero, ramal);

      anapro_post(body)
        .then((resolve) => {
          setLoading(true);
          if (resolve.Sucesso) {
            Swal.fire({
              text: "Obrigado !",
              icon: "success",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                router.reload();
              }
            });

            setLoading(false);
          } else {
            Swal.fire({
              text: "Ocorreu um erro !",
              icon: "error",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                router.reload();
              }
            });

            setLoading(false);
          }
        })
        .catch(() => {
          Swal.fire({
            text: "Ocorreu um erro !",
            icon: "error",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              router.reload();
            }
          });
          setLoading(false);
        })
        .finally(() => setLoading(false)); */
    }
  }
  return (
    <div className="whatsapp-MOP19072021 active">
      <div className="whatsapp-MOP19072021__item">
        <div className="whatsapp-MOP19072021__item-header">
          <div className="foto-MOP19072021">
            <img src="images/whatsapp/foto.png" alt="Foto" />
          </div>
          <div className="nome-MOP19072021">
            <strong>Engelux</strong>
            <span>online</span>
          </div>
          {children}
        </div>

        <form
          action="#"
          className="whatsapp-MOP19072021__form"
          onSubmit={handle_post_anapro}
        >
          <div className="whatsapp-MOP19072021__form-ola">
            <p>
              Olá, gostaria de mais informações sobre o empreendimento? Me
              informe seu nome, email e telefone para iniciarmos uma conversa
              sem compromisso :)
            </p>
          </div>

          <div className="whatsapp-MOP19072021__form-column">
            <input type="text" name="nome" id="nome" placeholder="Nome *" />
            {nomeError ? <p>{nomeError}</p> : null}
            <input type="text" name="email" id="nome" placeholder="Email *" />
            {emailError ? <p>{emailError}</p> : null}
            <NumberFormat
              name="tel"
              format="+## (##) #####-####"
              mask="_"
              placeholder="+55"
            />
            {telError ? <p>{telError}</p> : null}

            {loading ? (
              <input type="submit" value="Aguarde..." />
            ) : (
              <input type="submit" value="Iniciar conversa" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
