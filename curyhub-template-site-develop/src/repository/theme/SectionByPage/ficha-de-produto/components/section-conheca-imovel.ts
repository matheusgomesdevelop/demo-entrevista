import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_conheca_imovel: ThemeComponent[] = [
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
    component_name: "sub-titulo-secao",
    is_active: true,
    styles: {
      color: h1secundario,
      fontWeight: "300",
    },
  },
  {
    id: 3,
    component_name: "descricao",
    is_active: true,
    styles: {
      color: h3,
      fontWeight: "300",
    },
  },
];
