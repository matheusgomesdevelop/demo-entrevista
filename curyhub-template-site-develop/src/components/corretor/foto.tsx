import { styled } from "../../../theme/stitches.config";

export const FotoCorretorStyled = styled("img", {
  width: "34px",
  height: "34px",
  borderRadius: "100%",

  variants: {
    size: {
      large: {
        width: "178px",
        height: "178px",
      },
    },
  },
});
