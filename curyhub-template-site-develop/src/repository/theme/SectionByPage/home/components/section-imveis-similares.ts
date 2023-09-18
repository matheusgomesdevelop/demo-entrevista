import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_imoveis: ThemeComponent[] = [
  {
    id: 1,
    component_name: "imoveis-similares-content",
    is_active: true,
    styles: {
      color: white,
    },
  },
  {
    id: 2,
    component_name: "imoveis-similares-button",
    is_active: true,
    styles: {
      backgroundColor: secundaria,
    },
  },
  {
    id: 3,
    component_name: "imoveis-similares-button-text",
    is_active: true,
    styles: {
      backgroundColor: primaria,
    },
  },
];
