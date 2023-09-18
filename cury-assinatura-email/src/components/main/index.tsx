import { useRouter } from "next/router";

import styles from "./main.module.scss";

// Template parts
import Footer from "../../components/footer";

interface IMain {
  children: any;
  clearMarginBottom?: boolean;
}

export default function Main({ children, clearMarginBottom }: IMain) {
  const router = useRouter();

  return (
    <>
      {/* Remove a imagem de background caso não esteja na rota principal */}
      {router.pathname === "/" ? (
        <main className={styles.l_main}>
          <section className={styles.l_main__content}>{children}</section>

          {/* Footer */}
          <Footer />
        </main>
      ) : (
        <main className={styles.l_main} style={{ background: "#ffffff" }}>
          {clearMarginBottom ? (
            <section
              className={styles.l_main__content}
              style={{ marginBottom: "0" }}
            >
              {children}
            </section>
          ) : (
            <section className={styles.l_main__content}>{children}</section>
          )}

          {/* Footer */}
          <Footer />
        </main>
      )}
    </>
  );
}
