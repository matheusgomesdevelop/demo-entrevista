import React from "react";

export function removerItemSecao(links: NodeListOf<HTMLLIElement>) {
  if (links.length > 0) {
    links.forEach((link: HTMLElement) => {
      const id_secao = link.dataset.secao;
      const secao = document.getElementById(`${id_secao}`);
      /*
      if (!secao) {
        link.style.display = "none";
      } else {
        link.style.display = "block";
      } */
    });
  }
}
