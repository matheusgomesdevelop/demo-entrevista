import { ReactNode } from "react";

import styles from "./main.module.scss";

// Template parts
import Footer from "../../components/footer";

interface IMain {
  children: ReactNode;
  clearMarginBottom?: boolean;
}

export default function Main({ children, clearMarginBottom }: IMain) {
  return (
        <main className={styles.l_main}>
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
  );
}
