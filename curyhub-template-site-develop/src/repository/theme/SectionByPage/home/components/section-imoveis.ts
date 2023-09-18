import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_imoveis: ThemeComponent[] = [
  {
    id: 1,
    component_name: "titulo-secao",
    is_active: true,
    styles: {
      color: primaria,
      fontSize: "36px",
      fontWeight: "700",
    },
  },
  {
    id: 2,
    component_name: "link-secao",
    is_active: true,
    styles: {
      color: "#9C9C9C",
      fontWeight: "400",
      fontSize: "14px",
    },
  },
  {
    id: 3,
    component_name: "card-secao",
    is_active: true,
    styles: {},
  },
];
