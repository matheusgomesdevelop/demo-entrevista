import { styled } from "../../../../../theme/stitches.config";

export const CardSimilarStyled = styled("div", {
  width: "294px",
  height: "465px",
  background: "$appBg",
  boxShadow: "0px 3px 6px #00000029",
  border: "1px solid $subBorderSeparators",
  display: "flex",
  flexDirection: "column",
  borderRadius: "9px",
});

export const CardSimilarNome = styled("p", {
  color: "$highContrasText",
  fontSize: "22px",
  fontWeight: "$bold",
  letterSpacing: "0px",
});

export const CardSimilarDesc = styled("p", {
  fontSize: "$md",
  color: "$solidBg",
  letterSpacing: "0",
});

export const CardSimilarValorTitle = styled("h3", {
  fontSize: "$md",
  fontWeight: "$regular",
  letterSpacing: "0",
  color: "$highContrasText",
  marginBottom: "8px",
});

export const CardSimilarPreco = styled("strong", {
  fontSize: "22px",
  fontWeight: "$bold",
  letterSpacing: "0",
  marginBottom: "0",
});
