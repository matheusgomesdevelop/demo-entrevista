import { styled } from "../../../../theme/stitches.config";

export const CardFlutuanteStyled = styled("div", {
  width: "100%",
  maxWidth: "336px",
  height: "352px",
  border: "1px solid $uiBorderFocus",
  backgroundColor: "$apoio",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "8px",
  boxShadow: "0px 3px 6px #00000029",
  margin: "0 auto",
  textAlign: "center",
  transition: "0.3s",
  marginTop: "32px",
  marginBottom: "20px",
  zIndex: "2",
  padding: "25px",
  paddingTop: "20px",
  paddingBottom: "0",

  "@desktop": {
    position: "absolute",
    right: "0",
    top: "-100px",
    marginBottom: "0",
  },
});

export const CardFlutuanteSubTitleStyled = styled("p", {
  color: "$solidBg",
  fontWeight: "400",
  fontSize: "20px",
});

export const CardFlutuanteLabelStyled = styled("p", {
  color: "$highContrasText",
  fontSize: "18px",
  letterSpacing: "0px",
  fontWeight: "300",
});
