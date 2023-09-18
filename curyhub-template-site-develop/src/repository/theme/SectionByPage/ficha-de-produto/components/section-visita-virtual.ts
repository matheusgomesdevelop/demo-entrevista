import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_visita_virtual: ThemeComponent[] = [
  {
    id: 1,
    component_name: "titulo-secao",
    is_active: true,
    styles: {
      color: white,
      fontWeight: "300",
    },
  },
  {
    id: 2,
    component_name: "sub-titulo-secao",
    is_active: true,
    styles: {
      color: secundaria,
    },
  },
  {
    id: 3,
    component_name: "button-visita",
    is_active: true,
    styles: {
      backgroundColor: secundaria,
      color: white,
    },
  },
  {
    id: 4,
    component_name: "descricao",
    is_active: true,
    styles: {
      color: white,
    },
  },
];
