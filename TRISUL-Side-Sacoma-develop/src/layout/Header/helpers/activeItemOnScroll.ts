import { removeIdActive, setActiveItem } from "./activeItem";

export function ActiveItemOnScroll(links: NodeListOf<HTMLLIElement>, tamanho_scrollY: number) {
  links.forEach((link) => {
    const id_secao = link.dataset.secao;
    const secao = document.getElementById(`${id_secao}`);

    if (secao) {
      if (secao.offsetTop - 70 <= tamanho_scrollY + Number(secao.style.height)) {
        setActiveItem(links, link);
      }
    }
  });
}
