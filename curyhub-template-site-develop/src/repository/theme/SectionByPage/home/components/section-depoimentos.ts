import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_depoimentos: ThemeComponent[] = [
  {
    id: 1,
    component_name: "section-title",
    is_active: true,
    styles: {
      color: primaria,
    },
  },
  {
    id: 2,
    component_name: "section-link",
    is_active: true,
    styles: {
      color: "#9C9C9C",
      fontWeight: "400",
      fontSize: "14px",
    },
  },
  {
    id: 3,
    component_name: "image-secao",
    is_active: true,
    styles: {},
  },
  {
    id: 4,
    component_name: "user-name-section",
    is_active: true,
    styles: {},
  },
  {
    id: 5,
    component_name: "user-occupation-section",
    is_active: true,
    styles: {
      color: "#767676",
    },
  },
  {
    id: 6,
    component_name: "user-depoiment-section",
    is_active: true,
    styles: {
      color: "#393939",
    },
  },
  {
    id: 7,
    component_name: "user-address-section",
    is_active: true,
    styles: {
      color: "#393939",
    },
  },
];
