import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_modal_section_financie: ThemeComponent[] = [
  {
    id: 1,
    component_name: "modal-header",
    is_active: true,
    styles: {
      backgroundColor: secundaria,
    },
  },
  {
    id: 2,
    component_name: "title-form",
    is_active: true,
    styles: {
      color: h1secundario,
    },
  },
  {
    id: 3,
    component_name: "modal-form-title",
    is_active: true,
    styles: {
      color: h2,
    },
  },
  {
    id: 4,
    component_name: "button-enviar",
    is_active: true,
    styles: {
      backgroundColor: primaria,
      color: white,
    },
  },
  {
    id: 5,
    component_name: "footer",
    is_active: true,
    styles: {
      backgroundColor: primaria,
      color: white,
    },
  },
  {
    id: 6,
    component_name: "button-voltar",
    is_active: true,
    styles: {
      color: h1secundario,
    },
  },
];
