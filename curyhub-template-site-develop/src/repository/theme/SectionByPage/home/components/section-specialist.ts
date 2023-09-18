import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_especialista: ThemeComponent[] = [
  {
    id: 1,
    component_name: "image-secao",
    is_active: true,
    styles: {},
  },
  {
    id: 2,
    component_name: "titulo-secao",
    is_active: true,
    styles: {
      color: primaria,
      fontSize: "36px",
      fontWeight: "700",
    },
  },
  {
    id: 3,
    component_name: "descricao-secao",
    is_active: true,
    styles: {
      color: primaria,
      fontSize: "16px",
      fontWeight: "400",
    },
  },
];
