import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import anapro_body, { anaproURLFormulario, anaproURL_formulario_string } from "../../../helpers/anapro";
import { anapro_post } from "../../../http";

import { validateCel, validateEmail } from "../../../validation/regex";
import Button from "../../util/button";
import CtaWhatsapp from "../../util/cta-whatsapp";
import CInput from "../../util/input";
import Titulo from "../../util/titulo";
import styles from "./index.module.scss";

import Swal from "sweetalert2";
import dataPush from "../../../helpers/gtm";
import { getUpCrmBody, postInteractionOpportunity } from "../../../helpers/url-crm";

export default function ModalSaibaMais({ children }) {
  const router = useRouter();

  const [nomeError, setNomeError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [telError, setTelError] = useState(null);

  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const [ctaWhatsapp, setCtaWhatsapp] = useState(false);

  useEffect(() => {
    const nome = formRef.current.nome;
    const email = formRef.current.email;
    const tel = formRef.current.tel;

    const eventos = ["change", "keyup"];

    if (nome) {
      eventos.forEach((evento) => {
        nome.addEventListener(evento, () => {
          setNomeError(null);
        });
      });
    }
    if (email) {
      eventos.forEach((evento) => {
        email.addEventListener(evento, () => {
          setEmailError(null);
        });
      });
    }
    if (tel) {
      eventos.forEach((evento) => {
        tel.addEventListener(evento, () => {
          setTelError(null);
        });
      });
    }
  }, []);

  // Enviar mensagem
  function handle_post_mensagem(event: any) {
    event.preventDefault();

    let data = {
      nome: null,
      email: null,
      tel: null,
    };

    const form = new FormData(event.target);

    form.forEach((value, key) => {
      key === "nome" && value !== "" ? (data.nome = value) : setNomeError("Preencha o campo nome");
      key === "email" && value !== "" && validateEmail(value)
        ? (data.email = value)
        : setEmailError("Informe um e-mail válido");
      key === "tel" && value !== "" && validateCel(value)
        ? (data.tel = value)
        : setTelError("Informe um celular válido");
    });

    data.nome ? setNomeError(null) : null;
    data.email ? setEmailError(null) : null;
    data.tel ? setTelError(null) : null;

    if (data.nome && data.email && data.tel) {
      const ddd = data.tel.match(/(\d+)/gm);

      const ddd_n = ddd[1];
      const numero = `${ddd[2]}-${ddd[3]}`;
      const numero_anapro = `${ddd[2]}${ddd[3]}`;
      const ramal = ddd[0];

      // Corpo do body da requisicao com os dados
      //   const body = anapro_body(data.nome, data.email, ddd_n, numero, ramal);

      const origin =
        typeof window !== "undefined" && window.location.origin ? window.location.origin.replace('""', "") : "";

      const up_crm_body = getUpCrmBody({
        first_name: data.nome,
        email: data.email,
        phone: data.tel,
        cellphone: data.tel,
        feedback: origin,
        description: "Receba uma apresentação",
        interaction_type_id: 1,
      });

      postInteractionOpportunity(up_crm_body, process.env.UP_CRM_KEY)
        .then((upCrm) => {})
        .finally(() => {
          // Enviar dados para o GTM
          dataPush(
            "lead_gerado_produto",
            "receber_apresentacao",
            `${origin + router.pathname}`,
            true,
            100,
            `${origin + router.pathname}`,
            "Vita Parque",
            "Ficha de produto"
          );
          Swal.fire({
            text: "Obrigado !",
            icon: "success",
            confirmButtonText: "OK",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              setLoading(true);
              const anapro_url_formulario = anaproURLFormulario(
                data.nome,
                data.email,
                ddd_n,
                numero_anapro,
                "Olá Gostaria de Informações sobre o empreendimento Vita Parque"
              );

              window.location.href = anapro_url_formulario;
            }
          });

          setLoading(false);
        });
    }
  }

  return (
    <div className={styles.modalSaibaMais}>
      <div className={styles.modalSaibaMais__content}>
        {children}
        <Titulo>
          <strong>Informe seu contato</strong>
        </Titulo>
        <p className={styles.modalSaibaMais__desc}>
          Nossos especialistas entraram em contato para enviar mais informações.
        </p>
        <form onSubmit={handle_post_mensagem} ref={formRef}>
          <CInput type="text" name="nome" placeholder="Nome Completo" />
          {nomeError ? <p>{nomeError}</p> : null}
          <CInput type="email" name="email" placeholder="Seu melhor e-mail" />
          {emailError ? <p>{emailError}</p> : null}
          <CInput type="text" name="tel" placeholder="Celular" />
          {telError ? <p>{telError}</p> : null}

          {loading ? <Button type="azul">Aguarde...</Button> : <Button type="azul">INICIAR</Button>}
        </form>
        <div className={styles.modalSaibaMais__contato}>
          <span>Se preferir</span>

          <div className={styles.modalSaibaMais__contato_whats}>
            <img src="images/icon-whats-blue.svg" alt="" width="36px" height="36px" />
            <p>
              Encaminhe sua mensagem pelo{" "}
              <a style={{ cursor: "pointer" }} onClick={() => setCtaWhatsapp(true)}>
                WhatsApp
              </a>
            </p>
          </div>

          <div className={styles.modalSaibaMais__contato_ligue}>
            <img src="images/icon-ligue-blue.svg" alt="" width="27px" height="25px" />
            <p>
              ligue para (11) <strong>3897-3337</strong>
            </p>
          </div>

          <div className={styles.modalSaibaMais__contato_chat}>
            <img src="images/icon-chat-blue.svg" alt="" width="28px" height="28px" />
            <p>
              converse pelo <a href={anaproURL_formulario_string}>Chat</a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.modalSaibaMais__footer}></div>

      {/* Whatsapp */}
      {ctaWhatsapp ? (
        <CtaWhatsapp>
          <button className="close-MOP19072021" onClick={() => setCtaWhatsapp(false)}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334">
              <title>Fechar</title>
              <path
                d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
          c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
          c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
          l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
          L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"></path>
            </svg>
          </button>
        </CtaWhatsapp>
      ) : null}
      {/* Whatsapp */}
    </div>
  );
}
