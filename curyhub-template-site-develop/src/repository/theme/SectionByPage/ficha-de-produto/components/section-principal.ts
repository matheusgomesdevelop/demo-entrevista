import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_principal: ThemeComponent[] = [
  {
    id: 1,
    component_name: "navlink",
    is_active: true,
    styles: {
      backgroundColor: primaria,
    },
  },
  {
    id: 2,
    component_name: "titulo-principal",
    is_active: true,
    styles: {
      fontSize: "24px",
      color: h1secundario,
    },
  },
  {
    id: 3,
    component_name: "button-fotos",
    is_active: true,
    styles: {
      backgroundColor: white,
    },
  },
  {
    id: 4,
    component_name: "button-videos",
    is_active: true,
    styles: {
      backgroundColor: white,
    },
  },
  {
    id: 5,
    component_name: "button-mapa",
    is_active: true,
    styles: {
      backgroundColor: white,
    },
  },
];
