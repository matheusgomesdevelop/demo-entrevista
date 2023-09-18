import { useRouter } from "next/router";

import { useFormik } from "formik";

// Helpers
import { anaproURLWhatsapp } from "../../../helpers/anapro";
import dataPush from "../../../helpers/gtm";
import { initialValues, validationSchema } from "./validation";

// Integration
import { getUpCrmBody, postInteractionOpportunity } from "../../../helpers/url-crm";

export default function CtaWhatsapp({ children }) {
  const router = useRouter();

  // para evitar temporariamente DDIs russos
  function validateDDI(value) {
    const ddi = value.substr(1, 2);

    if (ddi == "83" || ddi == "87" || ddi == "89") {
      return false;
    }

    return true;
  }

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
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      const name: string = values.nome;
      const email: string = values.email;
      const phonenumber: string = values.tel;

      // Post
      if (name && email && phonenumber && validateDDI(phonenumber)) {
        setSubmitting(true);

        const ddd = phonenumber.match(/(\d+)/gm);

        const ddd_n = ddd[1];
        const numero = `${ddd[2]}${ddd[3]}`;
        const ramal = ddd[0];

        const anapro_url_whats = anaproURLWhatsapp(
          name,
          email,
          ddd_n,
          numero,
          "Olá Gostaria de Informações sobre o empreendimento Laparque"
        );

        const origin =
          typeof window !== "undefined" && window.location.origin ? window.location.origin.replace('""', "") : "";

        const up_crm_body = getUpCrmBody({
          first_name: name,
          email,
          phone: phonenumber,
          cellphone: phonenumber,
          feedback: origin,
          description: "CTA Whatsapp",
          interaction_type_id: 1,
        });

        // Enviar os dados para os CRM's
        postInteractionOpportunity(up_crm_body, process.env.UP_CRM_KEY)
          .then((upCrm) => {})
          .finally(() => {
            // Enviar dados para o GTM
            dataPush(
              "clique_importante",
              "clique-iniciar_whats-app",
              `${origin + router.pathname}`,
              true,
              30,
              `${origin + router.pathname}`,
              "Vita Parque",
              "Ficha de produto"
            );

            window.location.href = anapro_url_whats;
          });
      } else {
        setSubmitting(false);
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
  });

  const handleEvents = { onBlur: handleBlur, onChange: handleChange };

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

        <form action="#" className="whatsapp-MOP19072021__form" onSubmit={handleSubmit}>
          <div className="whatsapp-MOP19072021__form-ola">
            <p>
              Olá, gostaria de mais informações sobre o empreendimento? Me informe seu nome, email e telefone para
              iniciarmos uma conversa sem compromisso :)
            </p>
          </div>

          <div className="whatsapp-MOP19072021__form-column">
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome *"
              {...getFieldProps("nome")}
              defaultValue={values.nome}
            />
            {errors.nome && touched.nome && <p>{errors.nome}</p>}

            <input
              type="text"
              name="email"
              id="nome"
              placeholder="Email *"
              {...getFieldProps("email")}
              defaultValue={values.email}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}


            {isSubmitting ? (
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
