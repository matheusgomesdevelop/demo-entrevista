import { config } from "../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const sectionBlog: ThemeSection[] = [
  {
    id: 1,
    section_name: "header",
    is_active: true,
    styles: {
      backgroundColor: apoio,
    },
    componentes: [
      {
        id: 1,
        component_name: "dados-corretor",
        is_active: true,
        styles: {},
      },
    ],
  },
  {
    id: 12,
    section_name: "secao-contato",
    is_active: true,
    styles: {
      fontSize: "16px",
      color: "red",
    },
    componentes: [
      {
        id: 1,
        component_name: "titulo-principal",
        is_active: true,
        styles: {
          fontSize: "20px",
          color: "yellow",
        },
      },
    ],
  },
];
