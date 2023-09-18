import { styled } from "../../../theme/stitches.config";

export const NomeStyled = styled("p", {
  fontSize: "$$fontSize",
  fontWeight: "bold",
  color: "$$primaria",

  "@mobile": {
    fontSize: "10px",
  },
});
