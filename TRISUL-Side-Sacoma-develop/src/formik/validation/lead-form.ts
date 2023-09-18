import * as Yup from "yup";

// Helpers
import { regexpEmail, regexpCel } from "./regex";

import {
  INVALID_EMAIL,
  INVALID_NAME,
  INVALID_OPTION,
  INVALID_PHONENUMBER,
  REQUIRED_FIELD,
} from "./../../formik/validation/messages";

export const contatoList = ["Escolha uma opção de contato", "Whatsapp", "E-mail"];

export const initialValues = {
  contato: "",
  nome: "",
  email: "",
  tel: "",
};

export const validationSchema = Yup.object().shape({
  contato: Yup.string().oneOf(["whatsapp", "e-mail", "telefone"], REQUIRED_FIELD).required(REQUIRED_FIELD),
  nome: Yup.string().required(REQUIRED_FIELD).min(4, INVALID_NAME),
  email: Yup.string().required(REQUIRED_FIELD).matches(regexpEmail, INVALID_EMAIL),
  tel: Yup.string().required(REQUIRED_FIELD).matches(regexpCel, INVALID_PHONENUMBER),
});

export const validationSchemaNoSelect = Yup.object().shape({
  nome: Yup.string().required(REQUIRED_FIELD).min(4, INVALID_NAME),
  email: Yup.string().required(REQUIRED_FIELD).matches(regexpEmail, INVALID_EMAIL),
  tel: Yup.string().required(REQUIRED_FIELD).matches(regexpCel, INVALID_PHONENUMBER),
});
