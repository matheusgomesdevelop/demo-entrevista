import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

//IMAGES
import mopLogo from "../../../public/icons/mopLogo.svg";
import polygon1 from "../../../public/images/polygon1.svg";

//CORE HELPERS
import { useFormik } from "formik";

//STYLE
import styles from "./style.module.scss";

//COMPONENTS
import { FormWrapper } from "@/common/components/Form";
import { ThinTitle } from "@/common/components/Typography/Title";
import SweetEngeluxAlert from "@/common/components/Util/sweet-alert";
import CInput from "@/common/components/Util/input";
import InputSelect from "@/common/components/Input/InputSelect";

// Modal
import ModalFormSuccess from "../modal/form-success";
import Modal from "@/common/components/Modal";

// Helpers
import config from "@/config";
import { formSend } from "@/common/components/Util/functions/form-send";
import { contatoList, initialValues, validationSchema } from "../../formik/validation/lead-form";

export const ContactSection = () => {
  const [modalSuccess, setModalSuccess] = useState<boolean>(false);
  const [nome, setNome] = useState<string>("");

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    getFieldProps,
    setFieldValue,
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
          nome_form: "Formulário de Contato",
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

  const handleEvents = { onBlur: handleBlur, onChange: handleChange };
  return (
    <>
      {/* Imagem de transição */}
      <a href="#contact">
        <div className={styles.contact_container__polygon_1}>
          <div className={styles.background} />
          <Image src={polygon1} alt="polygon" />
          <div className={styles.background} />
        </div>
      </a>
      {/* Imagem de transição */}
      <section className={styles.contact_container}>
        <div className={styles.contact_container_wrapper} id="contact">
          {/* Texto de condições e politicas de envio de cadastro contato */}
          <aside className={styles.contact_container__contact_info}>
            <ThinTitle>
              fale com um consultor <ThinTitle type="bold">trisul</ThinTitle>
            </ThinTitle>
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
            <div className={styles.contact_container__policiesTerms_desktop}>
              BREVE LANÇAMENTO: TRISUL 35 EMPREENDIMENTOS IMOBILIÁRIOS. INFORMAÇÕES PRELIMINARES SUJEITAS A ALTERAÇÕES.
              O EMPREENDIMENTO SOMENTE PODERÁ SER COMERCIALIZADO APÓS O REGISTRO DE MEMORIAL DE INCORPORAÇÃO NO CARTÓRIO
              DE REGISTRO DE IMÓVEIS. FUTURA INTERMEDIAÇÃO: TRISUL VENDAS CONSULTORIA DE IMÓVEIS LTDA. CRECI J20186
              –ALAMEDA DOS JAÚNAS, 70 –MOEMA –SÃO PAULO –SP –CEP: 04522-020 –TEL.: (11) 3147-0001. * 1 VAGA DE GARAGEM
              LIMITADA ÀS UNIDADES DE 3 DORMITÓRIOS CONFORME MEMORIAL DESCRITIVO.  
              **REFERENTE A UNIDADE DO 1º ANDAR NO FINAL 14.
            </div>
          </aside>
          {/* Texto de condições e politicas de envio de cadastro contato */}

          {/* Formulário de contato*/}
          <section id="contact" className={styles.contact_container__form_section}>
            <FormWrapper className={styles.contact_container__form_wrapper}>
              <p>Por onde podemos conversar?</p>
              <form className={styles.contact_container__contact_form} onSubmit={handleSubmit} method="POST">
                <div>
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
                  {errors.nome && touched.nome && <p style={{ color: "red", fontSize: "14px" }}>{errors.nome}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Qual seu melhor e-mail?"
                    {...getFieldProps("email")}
                    className={styles.contact_container_form_field}
                  />
                  {errors.email && touched.email && <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>}
                </div>

                <div>
                  <CInput
                    placeholder="DDD + Celular"
                    type={"text"}
                    {...getFieldProps("tel")}
                    className={styles.contact_container_form_field}
                  />
                  {errors.tel && touched.tel && <p style={{ color: "red", fontSize: "14px" }}>{errors.tel}</p>}
                </div>

                <button className={styles.contact_container_form_button} type="submit">
                  {isSubmitting ? "Aguarde..." : "Enviar Contato"}
                </button>
              </form>
              {/* <span>
                Consulte nossa política de privacidade acessando este <Link href="/">link</Link>.
              </span> */}
            </FormWrapper>
          </section>
          {/* Formulário de contato*/}

          {/* Logo Agência MoP*/}
          <aside className={styles.contact_container__float_right_aside}>
            <div className={styles.contact_container__mop_logo}>
              {/* Texto informativo mobile*/}
              <div className={styles.contact_container__policiesTerms_mobile}>
                BREVE LANÇAMENTO: TRISUL 35 EMPREENDIMENTOS IMOBILIÁRIOS. INFORMAÇÕES PRELIMINARES SUJEITAS A
                ALTERAÇÕES. O EMPREENDIMENTO SOMENTE PODERÁ SER COMERCIALIZADO APÓS O REGISTRO DE MEMORIAL DE
                INCORPORAÇÃO NO CARTÓRIO DE REGISTRO DE IMÓVEIS. FUTURA INTERMEDIAÇÃO: TRISUL VENDAS CONSULTORIA DE
                IMÓVEIS LTDA. CRECI J20186 –ALAMEDA DOS JAÚNAS, 70 –MOEMA –SÃO PAULO –SP –CEP: 04522-020 –TEL.: (11)
                3147-0001. * 1 VAGA DE GARAGEM LIMITADA ÀS UNIDADES DE 3 DORMITÓRIOS CONFORME MEMORIAL DESCRITIVO.
                **REFERENTE A UNIDADE DO 1º ANDAR NO FINAL 14.
                IMPRESSO EM FEVEREIRO DE 2023.
              </div>
              {/* Texto informativo mobile */}

              <div style={{ display: "flex" }}>
                <p>Desenvolvido por</p>
                <Image src={mopLogo} alt="Agência MoP - Direitos reservados" />
              </div>
            </div>
          </aside>
          {/* Logo Agência MoP*/}
        </div>
      </section>

      {/* Modal Obrigado */}
      {modalSuccess && (
        <Modal open={modalSuccess} onClose={() => setModalSuccess(false)}>
          <ModalFormSuccess
            setIsOpen={setModalSuccess}
            nome={nome}
            descricao={"Agradecemos e entraremos em contato."}
          />
        </Modal>
      )}
      {/* Modal Obrigado */}
    </>
  );
};
