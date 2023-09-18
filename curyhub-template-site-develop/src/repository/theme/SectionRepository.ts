import { sectionBlog } from "./SectionByPage/section-blog";
import { sectionFichaDeProduto } from "./SectionByPage/ficha-de-produto/section-ficha-de-produto";
import { sectionHome } from "./SectionByPage/home/section-home";
import { sectionImoveis } from "./SectionByPage/imoveis/section-imoveis";
import { sectionDepoimentos } from "./SectionByPage/depoimentos/section-depoimentos";

export const SectionRepository = {
  fichaDeProduto: sectionFichaDeProduto,
  home: sectionHome,
  imoveis: sectionImoveis,
  blog: sectionBlog,
  depoimentos: sectionDepoimentos
};
