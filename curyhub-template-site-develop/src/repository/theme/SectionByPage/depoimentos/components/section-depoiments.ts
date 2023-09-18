import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_depoiments: ThemeComponent[] = [
  {
    id: 1,
    component_name: "depoiments-container",
    is_active: true,
    styles: {
      backgroundColor: white,
    },
  },
  {
    id: 2,
    component_name: "depoiments-header",
    is_active: true,
    styles: {},
  },
  {
    id: 3,
    component_name: "depoiments-header-title",
    is_active: true,
    styles: {},
  },
  {
    id: 4,
    component_name: "depoiments-container",
    is_active: true,
    styles: {},
  },
  {
    id: 5,
    component_name: "image-secao",
    is_active: true,
    styles: {},
  },
  {
    id: 6,
    component_name: "user-name-section",
    is_active: true,
    styles: {},
  },
  {
    id: 7,
    component_name: "user-occupation-section",
    is_active: true,
    styles: {},
  },
  {
    id: 8,
    component_name: "user-depoiment-section",
    is_active: true,
    styles: {},
  },
  {
    id: 9,
    component_name: "user-address-section",
    is_active: true,
    styles: {},
  },
];
