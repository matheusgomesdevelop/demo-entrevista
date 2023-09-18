import { SectionRepository } from "./SectionRepository";

export const PagesRepository: Array<ThemePages> = [
  {
    id: 1,
    page_name: "ficha-de-produto",
    is_active: true,
    section: SectionRepository.fichaDeProduto,
  },
  {
    id: 2,
    page_name: "home",
    is_active: true,
    section: SectionRepository.home,
  },
  {
    id: 3,
    page_name: "imoveis",
    is_active: true,
    section: SectionRepository.imoveis,
  },
  {
    id: 4,
    page_name: "blog",
    is_active: false,
    section: SectionRepository.blog,
  },
  {
    id: 5,
    page_name: "depoimentos",
    is_active: true,
    section: SectionRepository.depoimentos,
  },
];
