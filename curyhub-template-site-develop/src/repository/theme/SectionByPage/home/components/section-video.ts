import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_video_principal: ThemeComponent[] = [
  {
    id: 1,
    component_name: "titulo-secao",
    is_active: true,
    styles: {
      color: white,
      fontSize: "36px",
      fontWeight: "700",
    },
  },
  {
    id: 2,
    component_name: "descricao-secao",
    is_active: true,
    styles: {
      color: white,
      fontSize: "16px",
      fontWeight: "400",
    },
  },
  {
    id: 3,
    component_name: "video-secao",
    is_active: true,
    styles: {},
  },
];
