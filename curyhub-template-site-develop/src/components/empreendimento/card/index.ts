import { styled } from "../../../../theme/stitches.config";

export const CardGaleriaStyled = styled("div", {
  width: "100%",
  height: "178px",
  background: "$subBorderSeparators",
  display: "flex",
  position: "relative",
});

export const CardContent = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "12px 23px",
});

export const CardDiferencial = styled("p", {
  color: "$highContrasText",
  fontSize: "$md",
  display: "flex",
  gap: "11px",
  fontWeight: "$regular",
});

export const CardStatusStyled = styled("div", {
  width: "97px",
  height: "27px",
  backgroundColor: "$solidBg",
  color: "$whiteText",
  fontSize: "14px",
  fontWeight: "400",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
});
