import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const section_title: ThemeComponent[] = [
  {
    id: 1,
    component_name: "title-section",
    is_active: true,
    styles: {
      backgroundColor: primaria,
    },
  },
  {
    id: 2,
    component_name: "title",
    is_active: true,
    styles: {
      color: white,
    },
  },
];
