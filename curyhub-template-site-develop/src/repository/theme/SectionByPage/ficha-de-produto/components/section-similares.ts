import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_similares: ThemeComponent[] = [
  {
    id: 1,
    component_name: "titulo-secao",
    is_active: true,
    styles: {
      color: h1secundario,
    },
  },
  {
    id: 2,
    component_name: "icone-diferencial",
    is_active: true,
    styles: {
      color: secundaria,
    },
  },
  {
    id: 3,
    component_name: "button-ver-mais",
    is_active: true,
    styles: {
      color: white,
      backgroundColor: "transparent",
    },
  },
  {
    id: 4,
    component_name: "card",
    is_active: true,
    styles: {
      backgroundColor: white,
    },
  },
  {
    id: 5,
    component_name: "card-status",
    is_active: true,
    styles: {
      backgroundColor: primaria,
      color: white,
    },
  },
  {
    id: 6,
    component_name: "card-nome-emp",
    is_active: true,
    styles: {
      color: h1secundario,
    },
  },
  {
    id: 7,
    component_name: "card-preco",
    is_active: true,
    styles: {
      color: h1secundario,
    },
  },
  {
    id: 8,
    component_name: "icon-share",
    is_active: true,
    styles: {
      color: secundaria,
    },
  },
];
