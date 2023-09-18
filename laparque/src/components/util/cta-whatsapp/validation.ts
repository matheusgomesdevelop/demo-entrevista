import * as Yup from "yup";

// Helpers
import { regexpEmail, regexpCel } from "../../../formik/validation/regex";

import { INVALID_EMAIL, INVALID_NAME, INVALID_PHONENUMBER, REQUIRED_FIELD } from "../../../formik/validation/messages";
export const initialValues = {
  nome: "",
  email: "",
  tel: "",
};

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required(REQUIRED_FIELD).min(4, INVALID_NAME),
  email: Yup.string().required(REQUIRED_FIELD).matches(regexpEmail, INVALID_EMAIL),
  tel: Yup.string().required(REQUIRED_FIELD).matches(regexpCel, INVALID_PHONENUMBER),
});
