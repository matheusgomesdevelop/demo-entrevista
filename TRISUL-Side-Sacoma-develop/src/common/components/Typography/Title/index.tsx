import { styled } from "@stitches/react";

export const ThinTitle = styled("span", {
  color: "#A9C486",
  fontSize: "36px",
  fontWeight: "400",
  lineHeight: "135%",

  variants: {
    type: {
      bold: {
        fontWeight: "700",
      },
      extraBold: {
        fontWeight: "800",
      },
      green: {
        color: "#7AA62C",
      },
      boldBlue: {
        color: "#041C3E",
        fontWeight: "600",
        fontSize: "30px",
        lineHeight: "42px",
        textTransform: "uppercase",
      },
    },
  },
});

export const TituloSecao = styled("h1", {
  color: "#185355",
  fontSize: "36px",
  fontWeight: "600",

  variants: {
    type: {
      white: {
        color: "#ffffff",
      },
    },
  },
});
