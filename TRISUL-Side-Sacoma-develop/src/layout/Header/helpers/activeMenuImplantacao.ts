import React, { RefObject } from "react";

// Helpers
import debounce from "../../../helpers/debounce/debounce";
import { removeIdActive } from "./activeItem";
import { ActiveItemOnScroll } from "./activeItemOnScroll";

export function activeMenuImplantacao(menuRef: RefObject<HTMLElement>) {
  if (typeof window !== "undefined" && menuRef.current) {
    const links = menuRef.current.querySelectorAll("li");
    const menu_distancia_topo = menuRef.current.offsetTop;

    window.addEventListener(
      "scroll",
      debounce(() => {
        const tamanho_scrollY = window.scrollY;

        if (menu_distancia_topo <= tamanho_scrollY + 70) {
          ActiveItemOnScroll(links, tamanho_scrollY);
        } else {
          // Remover os active
          removeIdActive(links);
        }
      }, 5)
    );
  }
}
