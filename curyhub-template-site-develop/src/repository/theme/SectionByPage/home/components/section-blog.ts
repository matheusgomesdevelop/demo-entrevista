import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_blog: ThemeComponent[] = [
  {
    id: 1,
    component_name: "image-secao",
    is_active: true,
    styles: {},
  },
  {
    id: 2,
    component_name: "content-header",
    is_active: true,
    styles: {
      color: "#9C9C9C",
    },
  },
  {
    id: 3,
    component_name: "content-title",
    is_active: true,
    styles: {
      color: primaria,
    },
  },
  {
    id: 4,
    component_name: "content-description",
    is_active: true,
    styles: {
      color: "#393939",
    },
  },
  {
    id: 5,
    component_name: "content-button",
    is_active: true,
    styles: {
      color: "#9C9C9C",
    },
  },
];
