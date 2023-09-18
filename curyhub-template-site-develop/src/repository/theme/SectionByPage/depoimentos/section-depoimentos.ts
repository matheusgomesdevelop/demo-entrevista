import { config } from "../../../../../theme/stitches.config";
import { components_section_contato } from "../ficha-de-produto/components/section-contato";
import { components_section_header } from "../ficha-de-produto/components/section-header";
import { components_section_depoiments } from "./components/section-depoiments";
import { components_section_titulo } from "./components/section-titulo";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const sectionDepoimentos: ThemeSection[] = [
  {
    id: 1,
    section_name: "header",
    is_active: true,
    order: 1,
    styles: {
      backgroundColor: apoio,
    },
    componentes: components_section_header,
  },
  {
    id: 2,
    section_name: "secao-depoimentos",
    is_active: true,
    order: 2,
    styles: {},
    componentes: [...components_section_titulo, ...components_section_depoiments],
  },
  {
    id: 12,
    section_name: "secao-contato",
    is_active: true,
    order: 12,
    styles: {
      backgroundColor: primaria,
      color: white,
    },
    componentes: components_section_contato,
  },
];
