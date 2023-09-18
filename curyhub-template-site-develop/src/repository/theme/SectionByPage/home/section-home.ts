import { config } from "../../../../../theme/stitches.config";
import { components_section_header } from "../ficha-de-produto/components/section-header";
import { components_section_blog } from "./components/section-blog";
import { components_section_depoimentos } from "./components/section-depoimentos";
import { components_section_galeria_carrossel } from "./components/section-galeria-carrossel";
import { components_section_imoveis } from "./components/section-imoveis";
import { components_section_posts } from "./components/section-post";
import { components_section_sonho } from "./components/section-sonho";
import { components_section_especialista } from "./components/section-specialist";
import { components_section_video_principal } from "./components/section-video";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const sectionHome: ThemeSection[] = [
  {
    id: 1,
    section_name: "header",
    is_active: true,
    styles: {
      backgroundColor: apoio,
    },
    componentes: components_section_header,
  },
  {
    id: 2,
    section_name: "secao-video",
    is_active: true,
    componentes: components_section_video_principal,
    styles: {
      backgroundColor: primaria,
    },
  },
  {
    id: 3,
    section_name: "secao-especialista",
    is_active: true,
    componentes: components_section_especialista,
    styles: {
      backgroundColor: white,
    },
  },
  {
    id: 4,
    section_name: "secao-imovel",
    is_active: true,
    componentes: components_section_imoveis,
    styles: {
      backgroundColor: white,
    },
  },
  {
    id: 5,
    section_name: "secao-depoimentos",
    is_active: true,
    componentes: components_section_depoimentos,
    styles: {
      backgroundColor: white,
    },
  },
  {
    id: 6,
    section_name: "secao-sonho",
    is_active: true,
    componentes: components_section_sonho,
    styles: {
      backgroundColor: white,
    },
  },
  {
    id: 7,
    section_name: "secao-blog",
    is_active: true,
    componentes: components_section_blog,
    styles: {
      backgroundColor: white,
    },
  },
  {
    id: 8,
    section_name: "secao-video-carrossel",
    is_active: true,
    componentes: components_section_galeria_carrossel,
    styles: {
      backgroundColor: primaria,
    },
  },
  {
    id: 9,
    section_name: "secao-posts",
    is_active: true,
    componentes: components_section_posts,
    styles: {},
  },
  {
    id: 10,
    section_name: "secao-imoveis-similares",
    is_active: true,
    componentes: components_section_posts,
    styles: {
      backgroundColor: primaria,
    },
  },
  {
    id: 12,
    section_name: "secao-contato",
    is_active: true,
    styles: {
      fontSize: "16px",
      color: primaria,
    },
    componentes: [
      {
        id: 1,
        component_name: "titulo-principal",
        is_active: true,
        styles: {
          fontSize: "20px",
          color: secundaria,
        },
      },
    ],
  },
];
