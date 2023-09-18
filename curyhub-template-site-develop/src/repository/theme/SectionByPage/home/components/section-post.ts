import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_posts: ThemeComponent[] = [
  {
    id: 1,
    component_name: "post_div",
    is_active: true,
    styles: {},
  },
  {
    id: 2,
    component_name: "post_content",
    is_active: true,
    styles: {
      color: "#393939",
    },
  },
];
