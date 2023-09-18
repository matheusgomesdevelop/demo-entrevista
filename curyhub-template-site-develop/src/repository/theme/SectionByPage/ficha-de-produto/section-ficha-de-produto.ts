import { config } from "../../../../../theme/stitches.config";

// Components
import { components_section_header } from "./components/section-header";
import { components_section_principal } from "./components/section-principal";
import { components_section_visita_virtual } from "./components/section-visita-virtual";
import { components_section_diferenciais } from "./components/section-diferenciais";
import { components_section_diferenciais_proximidades } from "./components/section-diferenciais-proximidiades";
import { components_section_financie } from "./components/section-financie";
import { components_section_similares } from "./components/section-similares";
import { components_section_contato } from "./components/section-contato";
import { components_section_conheca_imovel } from "./components/section-conheca-imovel";
import { components_section_plantas } from "./components/section-plantas";
import { components_section_receba_alertas } from "./components/section-receba-alertas";
import { components_section_conheca_bairro } from "./components/section-conheca-bairro";
import { components_modal_section_principal } from "./modal/modal-section-principal";
import { components_modal_section_plantas } from "./modal/modal-section-plantas";
import { components_modal_section_financie } from "./modal/modal-section-financie";
import { components_modal_section_visita_virtual } from "./modal/modal-section-visita-virtual";
import { components_modal_section_diferencial } from "./modal/modal-section-diferencial";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const sectionFichaDeProduto: ThemeSection[] = [
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
    section_name: "secao-principal",
    is_active: true,
    order: 1,
    styles: {
      backgroundColor: apoio,
    },
    componentes: [...components_section_principal, ...components_modal_section_principal],
  },
  {
    id: 3,
    section_name: "secao-conheca-bairro",
    is_active: true,
    order: 1,
    styles: {},
    componentes: components_section_conheca_bairro,
  },
  {
    id: 4,
    section_name: "secao-plantas",
    is_active: true,
    order: 1,
    styles: {},
    componentes: [...components_section_plantas, ...components_modal_section_plantas],
  },

  {
    id: 5,
    section_name: "secao-financie",
    is_active: true,
    order: 1,
    styles: {},
    componentes: [...components_section_financie, ...components_modal_section_financie],
  },
  {
    id: 6,
    section_name: "secao-visita-virtual",
    is_active: true,
    order: 1,
    styles: {
      backgroundColor: primaria,
    },
    componentes: [...components_section_visita_virtual, ...components_modal_section_visita_virtual],
  },
  {
    id: 7,
    section_name: "secao-conheca-imovel",
    is_active: true,
    order: 1,
    styles: {},
    componentes: components_section_conheca_imovel,
  },
  {
    id: 8,
    section_name: "secao-diferenciais-imovel",
    is_active: true,
    order: 1,
    styles: {
      backgroundColor: primaria,
    },
    componentes: [...components_section_diferenciais, ...components_modal_section_diferencial],
  },
  {
    id: 9,
    section_name: "secao-diferenciais-proximidades",
    is_active: true,
    order: 1,
    styles: {
      backgroundColor: apoio,
    },
    componentes: components_section_diferenciais_proximidades,
  },
  {
    id: 10,
    section_name: "secao-receba-alertas",
    is_active: true,
    order: 1,
    styles: {
      backgroundColor: apoio,
    },
    componentes: components_section_receba_alertas,
  },
  {
    id: 11,
    section_name: "secao-similares",
    is_active: true,
    order: 1,
    styles: {
      backgroundColor: secundaria,
    },
    componentes: components_section_similares,
  },
  {
    id: 12,
    section_name: "secao-contato",
    is_active: true,
    order: 1,
    styles: {
      backgroundColor: primaria,
      color: white,
    },
    componentes: components_section_contato,
  },
];
