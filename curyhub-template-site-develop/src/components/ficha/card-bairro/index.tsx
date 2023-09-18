import { styled } from "../../../../theme/stitches.config";

export const CardBairroStyled = styled("div", {
  width: "100%",
  maxWidth: "611px",
  border: "1px solid $uiBorderFocus",
  paddingLeft: "20px",
  borderRadius: "8px",
  boxShadow: "0px 3px 6px #00000029",
  background: "$uiBg",
  display: "flex",
  justifyContent: "space-between",

  "@mobile": {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "20px",
    paddingRight: "20px",
  },
});
