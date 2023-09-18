import { Dispatch, SetStateAction } from "react";

import { useRouter } from "next/router";

import Image from "next/image";

// Lib
import { useFormik } from "formik";
import SweetEngeluxAlert from "../sweet-alert";

// Helper
import { initialValues, validationSchemaNoSelect } from "../../../../formik/validation/lead-form";
import { campos_utm } from "@/helpers/track/track";
import { hypnoboxUrlChat } from "@/http/hypnobox";
import { formSend } from "../functions/form-send";

// Components
import CInput from "../input";

// Config
import config from "@/config";

interface IWhatsapp {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FormCtaWhatsapp({ setIsOpen }: IWhatsapp) {
  const router = useRouter();

  const product_name = "Side Sacomã";

  const name = product_name;
  const text_welcome = `${"Olá, gostaria de mais informações sobre o empreendimento? Me informe seu nome, email e telefone para iniciarmos uma conversa sem compromisso :)."}`;

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    getFieldProps,
    errors,
    values,
    touched,
    setSubmitting,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchemaNoSelect,
    onSubmit: (values, { setSubmitting }) => {
      const name: string = values.nome;
      const email: string = values.email;
      const phonenumber: string = values.tel;
      const contato: string = "Whatsapp";

      setSubmitting(true);

      const zapierUrl = "https://hooks.zapier.com/hooks/catch/1782683/33cakrv";

      const origin =
        typeof window !== "undefined" && window.location.origin ? window.location.origin.replace('""', "") : "";

      formSend({
        email,
        name,
        tel: phonenumber,
        contato,
        gtmInfo: {
          enterpriseName: config.nome_produto,
          formName: "clique_importante",
          gtmAction: "clique-iniciar_whats-app",
          pageName: `whatsapp`,
          pathName: router.pathname,
          subject: "Performance MoP",
        },
        zapierUrl,
        campanhaForm: {
          canal: "lp-produto",
          nome_form: "Formulário de Whatsapp",
          nome_domain: origin,
        },
      })
        .then((resolve) => {
          setSubmitting(false);

          SweetEngeluxAlert(
            "Obrigado!",
            "Cadastro enviado com sucesso! <p>Nossos especialistas entrarão em contato.</p>",
            () => {
              //   setIsOpen(false);

              const tel_split = phonenumber.match(/(\d+)/gm);

              if (tel_split) {
                const ramal = tel_split[0];
                const numero = `${tel_split[1]}${tel_split[2]}`;
                const telefone = `${tel_split[0]}${tel_split[1]}${tel_split[2]}`;

                const { utm_source, utm_medium, utm_campaign, utm_content, utm_term } = campos_utm();

                const midia = utm_medium ? utm_medium : "Acesso Direto";

                const join_utm = `${utm_source}-${midia}-${utm_campaign}-${utm_content}-${utm_term}`;

                const produto_id = "45576";

                const whats_url = `${hypnoboxUrlChat}/?controle=Atendimento&acao=index&produto=${produto_id}&tipo_atendente=whatsapp&canal=whatsapp&subcanal=whatsapp&pre_chat=1&midia=${join_utm}&nome=${name}&email=${email}&telefone=${telefone}`;
                const whats_url_autosubmit = `${hypnoboxUrlChat}/?controle=Atendimento&acao=index&produto=${produto_id}&tipo_atendente=whatsapp&canal=whatsapp&subcanal=whatsapp&midia=${join_utm}&nome=${name}&email=${email}&telefone=${telefone}`;
                const hypno_url = `${hypnoboxUrlChat}/?controle=Atendimento&acao=index&produto=${produto_id}&nome=${name}&email=${email}&ddd_residencial=${ramal}&tel_residencial=${numero}&midia=${join_utm}`;

                window.open(whats_url_autosubmit);

                setIsOpen(false);
                //router.push(whats_url);
              }
            }
          );
        })
        .catch(() => {
          SweetEngeluxAlert("Erro", "Ocorreu um erro, tente novamente.", () => setIsOpen(false));
          setSubmitting(false);
        })
        .finally(() => setSubmitting(false));
    },

    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
  });

  const handleEvents = { onBlur: handleBlur, onChange: handleChange };

  return (
    <div className="whatsapp-MOP19072021 active" id="modal-floatbar">
      <div className="whatsapp-MOP19072021__item">
        <div className="whatsapp-MOP19072021__item-header">
          <div className="foto-MOP19072021">
            <Image src="/images/whatsapp/foto.png" alt="Foto" width={100} height={100} />
          </div>
          <div className="nome-MOP19072021">
            <strong>{name}</strong>
            <span>online</span>
          </div>

          <button className="close-MOP19072021" onClick={() => setIsOpen(false)}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334">
              <title>Fechar</title>
              <path
                d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
          c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
          c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
          l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
          L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
              ></path>
            </svg>
          </button>
        </div>

        <form className="whatsapp-MOP19072021__form" method="POST" onSubmit={handleSubmit}>
          <div className="whatsapp-MOP19072021__form-ola">
            <p>{text_welcome}</p>
          </div>

          <div className="whatsapp-MOP19072021__form-column">
            <input type="text" id="nome" placeholder="Nome*:" {...getFieldProps("nome")} />
            {errors.nome && touched.nome && <p style={{ color: "red", fontSize: "14px" }}>{errors.nome}</p>}

            <input type="text" placeholder="Email*:" {...getFieldProps("email")} />
            {errors.email && touched.email && <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>}

            <CInput placeholder="Celular*:" type={"text"} {...getFieldProps("tel")} />
            {errors.tel && touched.tel && <p style={{ color: "red", fontSize: "14px" }}>{errors.tel}</p>}

            <button type="submit">{isSubmitting ? "Aguarde..." : "Iniciar conversa"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
