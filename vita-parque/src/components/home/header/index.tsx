import { useState, useEffect } from "react";

import Head from "next/head";

import styles from "./index.module.scss";

export default function Header() {
  const [menuBranco, setMenuBranco] = useState(false);

  useEffect(() => {
    // Mudar cor do menu ao scroll
    function mudarMenu() {
      window.addEventListener("scroll", () => {
        let tamanhoScroll = window.scrollY;
        if (tamanhoScroll >= 70) {
          setMenuBranco(true);
        } else {
          setMenuBranco(false);
        }
      });
    }

    mudarMenu();
  }, []);

  return (
    <>
      <Head>
        <title>Engelux - Vita Parque</title>
        <link
          rel="shortcut icon"
          href="images/favicon.ico"
          type="image/x-icon"
        />
      </Head>

      {!menuBranco ? (
        <header className={styles.header}>
          <div className={styles.header__container}>
            {/* Este zIndex serve para a logo ficar acima do menu, para dar um efeito no mobile */}
            <a
              href="#"
              style={{
                zIndex: 3,
                alignSelf: "center",
              }}
            >
              <img
                width="204"
                height="32"
                src="images/logo-engelux.png"
                alt="Vita Parque"
              />
            </a>
          </div>
        </header>
      ) : (
        <header className={`${styles.header} ${styles.header__branco}`}>
          <div className={styles.header__container}>
            {/* Este zIndex serve para a logo ficar acima do menu, para dar um efeito no mobile */}
            <a href="#" style={{ zIndex: 3, alignSelf: "center" }}>
              <img
                width="204"
                height="32"
                src="images/logo-engelux-f.png"
                alt="Vita Parque"
              />
            </a>
          </div>
        </header>
      )}
    </>
  );
}
