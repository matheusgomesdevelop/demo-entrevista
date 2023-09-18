import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_diferenciais: ThemeComponent[] = [
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
    component_name: "icone-diferencial",
    is_active: true,
    styles: {
      color: secundaria,
      fontWeight: "300",
    },
  },
  {
    id: 3,
    component_name: "botao",
    is_active: true,
    styles: {
      backgroundColor: "transparent",
      color: secundaria,
    },
  },
];
