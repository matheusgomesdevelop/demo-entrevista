import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_contato: ThemeComponent[] = [
  {
    id: 1,
    component_name: "titulo-secao",
    is_active: true,
    styles: {
      color: white,
    },
  },
  {
    id: 2,
    component_name: "button-enviar",
    is_active: true,
    styles: {
      color: white,
      backgroundColor: primaria,
      border: `2px solid ${white}`,
    },
  },
  {
    id: 3,
    component_name: "input-text",
    is_active: true,
    styles: {
      color: h3,
      backgroundColor: white,
      height: "40px",
      borderRadius: "9px",
      fontWeight: "400",
    },
  },
  {
    id: 4,
    component_name: "tel-text",
    is_active: true,
    styles: {
      color: secundaria,
    },
  },
];
