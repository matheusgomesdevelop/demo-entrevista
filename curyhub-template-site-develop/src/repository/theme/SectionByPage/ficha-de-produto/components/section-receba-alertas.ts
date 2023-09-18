import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_receba_alertas: ThemeComponent[] = [
  {
    id: 1,
    component_name: "titulo-secao",
    is_active: true,
    styles: {
      color: h1secundario,
      fontWeight: "300",
    },
  },
  {
    id: 2,
    component_name: "icon-envelope",
    is_active: true,
    styles: {
      color: primaria,
    },
  },
  {
    id: 3,
    component_name: "input-text",
    is_active: true,
    styles: {
      color: h3,
      borderColor: secundaria,
    },
  },
  {
    id: 4,
    component_name: "button-submit",
    is_active: true,
    styles: {
      color: white,
      backgroundColor: primaria,
    },
  },
];
