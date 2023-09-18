import { styled } from "@stitches/react";
import { Field } from "formik";

export const FormWrapper = styled("section", {
  display: "flex",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "13px",
  letterSpacing: "0.3px",
});

export const InputField = styled(Field, {
  border: "0",
  borderRadius: "160px",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "13px",
  letterSpacing: "0.3px",
  padding: "24px 29px",
  width: "320px,",
});
