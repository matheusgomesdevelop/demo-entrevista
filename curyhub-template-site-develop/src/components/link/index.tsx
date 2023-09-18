import { styled } from "../../../theme/stitches.config";
import Link from "next/link";

export const LinkComponent = styled(Link, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "9px",
  color: "$whiteText",
  cursor: "pointer",

  variants: {
    link: {
      none: {
        textDecoration: "none",
      },
      underline: {
        textDecoration: "underline",
      },
    },
  },
});
