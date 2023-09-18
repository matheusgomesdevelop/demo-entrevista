import { styled } from "../../../../theme/stitches.config";

export const TituloStyled = styled("h1", {
  fontSize: "26px",
  fontWeight: "800",
  color: "$h1secundario",
  letterSpacing: "0px",

  variants: {
    titulo: {
      subtitle: {
        fontWeight: "300",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingLeft: "10px",

        "&::after": {
          content: "",
          width: "2px",
          height: "26px",
          backgroundColor: "$solidBg",
          display: "block",
          position: "absolute",
          left: "0",
        },
      },

      claro: {
        color: "$hoveredSolidBg",
      },

      escuro: {
        color: "$highContrasText",
      },
    },
  },
});

export const BoldTextStyled = styled("h2", {
  fontSize: "26px",
  fontWeight: "800",
  color: "$lowContrasText",
  letterSpacing: "0px",

  variants: {
    type: {
      light: {
        fontWeight: "bold",
        fontSize: "18px",
      },
    },
  },
});

export const TextStyled = styled("span", {
  fontSize: "24px",
  fontWeight: "500",
  color: "$lowContrasText",
  letterSpacing: "0px",

  variants: {
    type: {
      bold: {
        fontWeight: "$bold",
        fontSize: "16px",
      },
      light: {
        fontSize: "16px",
      },
    },
  },
});
