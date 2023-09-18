import { createStitches } from "@stitches/react";

// Helpers
import { ColorPalleteRepository } from "../src/repository/theme/ColorPalleteRepository";

export const { styled, theme, css, globalCss, keyframes, getCssText, createTheme, config } = createStitches({
  theme: {
    colors: ColorPalleteRepository[0].color_palette,
    fonts: {
      nunitoSans: "Nunito Sans",
      openSans: "Open Sans",
    },

    space: {
      sm: "12px",
      md: "20px",
      xmd: "32px",
      lg: "40px",
    },

    fontSizes: {
      sm: "12px",
      xsm: "14px",
      md: "16px",
      xmd: "18px",
      lg: "26px",
    },

    fontWeights: {
      light: "300",
      regular: "400",
      bold: "700",
      extraBold: "800",
      black: "900",
    },
  },

  media: {
    mobile: "(max-width: 599px)",
    tablet: "(min-width: 600px)",
    tabletUp: "(min-width: 900px)",
    desktop: "(min-width: 1200px)",
    desktopUp: "(min-width: 1800px)",
  },
});

export const ThemeDefault = createTheme("default", {
  colors: {
    white: "$white",
    primaria: "$primaria",
    secundaria: "$secundaria",
    apoio: "$apoio",
    h1secundario: "$h1secundario",
    h2: "$h2",
    h3: "$h3",
  },
});
