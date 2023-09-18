//IMAGES
import { FormWrapper } from "@/common/components/Form";
import Modal from "@/common/components/Modal";
import { Text } from "@/common/components/Typography/Text";
import { ThinTitle } from "@/common/components/Typography/Title";
import { formSend } from "@/common/components/Util/functions/form-send";
import SweetEngeluxAlert from "@/common/components/Util/sweet-alert";
import config from "@/config";
import downloadjs from "downloadjs";

//CORE HELPERS
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";
import ModalFormSuccess from "../modal/form-success";

//STYLES
import styles from "./style.module.scss";

const DownloadEbookSchema = Yup.object().shape({
  nome: Yup.string().required("Por favor, insira seu nome.").min(4, "Campo obrigatório"),
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
});

export const DownloadEbook = () => {
  const [modalSuccess, setModalSuccess] = useState<boolean>(false);
  const [nome, setNome] = useState<string>("");

  const pdfURL = "/static/EbookSideSacoma.pdf";

  // Function will execute on click of button
  const downloadEbook = () => {
    // using Java Script method to get PDF file
    fetch(pdfURL).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "EbookSideSacoma.pdf";
        alink.click();
      });
    });
  };

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
    initialValues: { nome: "", email: "" },
    validationSchema: DownloadEbookSchema,
    onSubmit: (values, { setSubmitting }) => {
      const name: string = values.nome;
      const email: string = values.email;

      setSubmitting(true);
      setNome(name);

      const zapierUrl = "https://hooks.zapier.com/hooks/catch/1782683/3ojgkav";

      const origin =
        typeof window !== "undefined" && window.location.origin ? window.location.origin.replace('""', "") : "";

      formSend({
        email,
        name,
        tel: "",
        gtmInfo: {
          enterpriseName: config.nome_produto,
          formName: "clique_importante",
          gtmAction: "clique-iniciar_ebook-app",
          pageName: `Contato - ${config.nome_produto}`,
          pathName: origin,
          subject: "Performance MoP",
        },
        zapierUrl,
        campanhaForm: {
          canal: "lp-produto",
          nome_form: "ebook",
          nome_domain: origin,
        },
      })
        .then((resolve) => {
          setSubmitting(false);
          setModalSuccess(true);
          downloadEbook();
          resetForm();
        })
        .catch((e) => {
          SweetEngeluxAlert("Erro", "Ocorreu um erro, tente novamente.", () => null);
          console.log(e);

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
      <section id="downloadEbook" className={styles.download_ebook_contatiner}>
        <div className={styles.download_ebook_contatiner__polygon_container}>
          <div className={styles.download_ebook_contatiner__polygon} />
        </div>
        <div className={styles.download_ebook_wrapper}>
          <div className={styles.download_ebook_contatiner__form}>
            <ThinTitle>
              Faça download do <b>BOOK</b> do empreendimento
            </ThinTitle>

            <FormWrapper className={styles.download_ebook_contatiner__form_wrapper}>
              <Text>Preencha com seus dados e receba o BOOK no seu e-mail.</Text>
              <form onSubmit={handleSubmit} className={styles.download_ebook_contatiner__download_form}>
                <div>
                  <input
                    type="text"
                    id="nome"
                    placeholder="Qual o seu nome?"
                    {...getFieldProps("nome")}
                    className={styles.download_ebook_contatiner_form_field}
                  />
                  {errors.nome && touched.nome && <p style={{ color: "red", fontSize: "14px" }}>{errors.nome}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Qual seu melhor e-mail?"
                    {...getFieldProps("email")}
                    className={styles.download_ebook_contatiner_form_field}
                  />
                  {errors.email && touched.email && <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>}
                </div>

                <button className={styles.download_ebook_contatiner_form_button} type="submit">
                  {isSubmitting ? "Aguarde..." : " Quero o BOOK"}
                </button>
              </form>
            </FormWrapper>
            {/* <span className={styles.download_ebook_contatiner__termsAndPolicies}>
              Consulte nossa política de privacidade acessando este <Link href="/">link</Link>.
            </span> */}
          </div>
          <div className={styles.download_ebook_contatiner__imgBook}>
            <Image src="/images/magazine3.png" alt="" width={382} height={371} />
          </div>
        </div>
      </section>

      {/* Modal Obrigado */}
      {modalSuccess && (
        <Modal open={modalSuccess} onClose={() => setModalSuccess(false)}>
          <ModalFormSuccess
            setIsOpen={setModalSuccess}
            nome={nome}
            descricao={"Você receberá o material solicitado no seu e-mail."}
          />
        </Modal>
      )}
      {/* Modal Obrigado */}
    </>
  );
};
