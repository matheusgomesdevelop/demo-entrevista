import { useFormik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.scss";

// Componentes
import { IconButton } from "@/common/components/Button";
import SweetEngeluxAlert from "@/common/components/Util/sweet-alert";
import { FormWrapper } from "@/common/components/Form";
import CInput from "@/common/components/Util/input";
import InputSelect from "@/common/components/Input/InputSelect";

// Helpers
import config from "@/config";
import { formSend } from "@/common/components/Util/functions/form-send";
import { validationSchema, initialValues, contatoList } from "@/formik/validation/lead-form";

// Modal
import ModalFormSuccess from "../form-success";
import Modal from "@/common/components/Modal";

interface IModalSuccess {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ModalFormTel({ setIsOpen }: IModalSuccess) {
  const [modalSuccess, setModalSuccess] = useState<boolean>(false);
  const [nome, setNome] = useState<string>("");

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
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      const contato: string = values.contato;
      const name: string = values.nome;
      const email: string = values.email;
      const phonenumber: string = values.tel;

      setSubmitting(true);
      setNome(name);

      const zapierUrl = "https://hooks.zapier.com/hooks/catch/1782683/3ojgkav";

      const origin =
        typeof window !== "undefined" && window.location.origin ? window.location.origin.replace('""', "") : "";

      formSend({
        contato,
        email,
        name,
        tel: phonenumber,
        gtmInfo: {
          enterpriseName: config.nome_produto,
          formName: "clique_importante",
          gtmAction: "clique-iniciar_contato-app",
          pageName: `Contato - ${config.nome_produto}`,
          pathName: origin,
          subject: "Performance MoP",
        },
        zapierUrl,
        campanhaForm: {
          canal: "lp-produto",
          nome_form: "fale-consultor",
          nome_domain: origin,
        },
      })
        .then((resolve) => {
          setSubmitting(false);
          setModalSuccess(true);
          resetForm();
        })
        .catch(() => {
          SweetEngeluxAlert("Erro", "Ocorreu um erro, tente novamente.", () => null);
          setSubmitting(false);
        })
        .finally(() => setSubmitting(false));
    },

    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
  });

  const handleEvents = {
    onBlur: handleBlur,
    onChange: handleChange,
  };

  return (
    <>
      <div className={styles.formTel}>
        <header className={styles.formTel__header}>
          <Image width={152} height={60} src={"/images/logoSideSacoma.png"} alt={""} />
          <IconButton>
            <Image width={32} height={32} src={"/icons/close.png"} alt={""} onClick={() => setIsOpen(false)} />
          </IconButton>
        </header>

        <div className={styles.formTel__container}>
          {/* Formulário de contato*/}
          <section id="contact" className={styles.contact_container__form_section}>
            <h3>
              FALE COM UM CONSULTOR
              <b>TRISUL</b>
            </h3>

            <FormWrapper className={styles.contact_container__form_wrapper}>
              <div className={styles.contact_container__contact_policies}>
                Ao iniciar atendimento, você está fornecendo
                <br />
                consentimento para as seguintes finalidades:
                <ul>
                  <li>
                    Receber atendimento do Corretor via chat, e-mail ou
                    <br />
                    whatsapp;
                  </li>
                  <li>Receber promoções dos nossos empreendimentos.</li>
                </ul>
              </div>
              <form className={styles.contact_container__contact_form} onSubmit={handleSubmit} method="POST">
                <div>
                  <p>Por onde podemos conversar?</p>
                  <InputSelect {...getFieldProps("contato")} optionsList={contatoList} {...handleEvents} />

                  {errors.contato && touched.contato && (
                    <p style={{ color: "red", fontSize: "14px" }}>{errors.contato}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    id="nome"
                    placeholder="Qual o seu nome?"
                    {...getFieldProps("nome")}
                    className={styles.contact_container_form_field}
                  />
                  {errors.nome && touched.nome && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                      }}
                    >
                      {errors.nome}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Qual seu melhor e-mail?"
                    {...getFieldProps("email")}
                    className={styles.contact_container_form_field}
                  />
                  {errors.email && touched.email && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <CInput
                    placeholder="DDD + Celular"
                    type={"text"}
                    {...getFieldProps("tel")}
                    className={styles.contact_container_form_field}
                  />
                  {errors.tel && touched.tel && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                      }}
                    >
                      {errors.tel}
                    </p>
                  )}
                </div>

                <button className={styles.contact_container_form_button} type="submit">
                  {isSubmitting ? "Aguarde..." : "Solicitar contato"}
                </button>
              </form>
              {/* <span className={styles.contact_container__privacy}>
                Consulte nossa política de privacidade acessando este <Link href="/">link</Link>.
              </span> */}
            </FormWrapper>
          </section>
          {/* Formulário de contato*/}
        </div>
      </div>

      {/* Modal Obrigado */}
      {modalSuccess && (
        <Modal open={modalSuccess} onClose={() => setModalSuccess(false)}>
          <ModalFormSuccess
            setIsOpen={setModalSuccess}
            callback={setIsOpen}
            nome={nome}
            descricao={"Agradecemos e entraremos em contato."}
          />
        </Modal>
      )}
      {/* Modal Obrigado */}
    </>
  );
}
