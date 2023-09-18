import { useState, useEffect, useRef } from "react";

import styles from "./index.module.scss";

export default function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  const hamburguer = useRef(null);

  useEffect(() => {
    function outsideClose(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target) && event.target !== hamburguer.current) {
        setToggleMenu(false);
      }
    }

    document.body.addEventListener("click", outsideClose);
  }, []);

  return (
    <>
      {/* Menu */}

      <nav className={toggleMenu ? `${styles.menu} ${styles.menu_active}` : styles.menu} ref={menuRef}>
        <ul>
          <li>
            <a href="#">Imóveis a venda </a>
          </li>
          <li>
            <a href="#">Portal do cliente</a>
          </li>
        </ul>
      </nav>

      {/* Hamburguer button (Mobile) */}
      <button
        className={
          toggleMenu ? `${styles.menu__hamburguer} ${styles.menu__hamburguer_active}` : `${styles.menu__hamburguer}`
        }
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
        ref={hamburguer}></button>
    </>
  );
}
