import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_modal_section_plantas: ThemeComponent[] = [
  {
    id: 1,
    component_name: "modal-footer",
    is_active: true,
    styles: {
      backgroundColor: primaria,
      color: white,
    },
  },
  {
    id: 2,
    component_name: "button-voltar",
    is_active: true,
    styles: {
      color: white,
      backgroundColor: "#B0B0B0CC",
    },
  },
];
