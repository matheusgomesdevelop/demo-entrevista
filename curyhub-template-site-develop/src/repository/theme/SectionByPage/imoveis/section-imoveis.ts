import { config } from "../../../../../theme/stitches.config";
import { section_card } from "./components/section-card";
import { section_header } from "./components/section-header";
import { section_title } from "./components/section-title";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const sectionImoveis: ThemeSection[] = [
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
      {
        id: 2,
        component_name: "foto-corretor",
        is_active: true,
        styles: {},
      },
      {
        id: 3,
        component_name: "nome-corretor",
        is_active: true,
        styles: {},
      },
      {
        id: 4,
        component_name: "creci-corretor",
        is_active: true,
        styles: {},
      },
      {
        id: 5,
        component_name: "tel-corretor",
        is_active: true,
        styles: {},
      },
      {
        id: 6,
        component_name: "icon-tel-corretor",
        is_active: true,
        styles: {},
      },
    ],
  },
  {
    id: 2,
    section_name: "secao-imovel",
    is_active: true,
    styles: {},
    componentes: [...section_title, ...section_header, ...section_card],
  },
  {
    id: 12,
    section_name: "secao-contato",
    is_active: true,
    styles: {
      fontSize: "16px",
      color: white,
    },
    componentes: [
      {
        id: 1,
        component_name: "titulo-principal",
        is_active: true,
        styles: {
          fontSize: "20px",
          color: white,
        },
      },
    ],
  },
];
