import React from "react";

export function clickAndScroll(links: NodeListOf<HTMLLIElement>) {
  if (links.length > 0) {
    links.forEach((link: HTMLElement) => {
      link.addEventListener("click", () => {
        const id_secao = link.dataset.secao;
        const secao = document.getElementById(`${id_secao}`);

        if (secao) {
          window.scrollTo({
            top: secao.offsetTop - 70,
          });
        }
      });
    });
  }
}
