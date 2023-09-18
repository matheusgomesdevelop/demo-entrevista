import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_diferenciais_proximidades: ThemeComponent[] = [
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
      color: primaria,
      fontWeight: "300",
    },
  },
];
