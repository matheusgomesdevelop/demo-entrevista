import { ReactNode } from "react";

import styles from "./title.module.scss";

interface ITitle {
  texto: string;
  textoDestaque?: string;
  htmlDestaque?: ReactNode;
  children?: ReactNode;
  colorTextReversed?: boolean;
}

export default function Title({
  texto,
  textoDestaque,
  htmlDestaque,
  colorTextReversed,
  children,
}: ITitle) {
  return (
    <>
      <h1
        className={
          colorTextReversed
            ? `${styles.c_title} ${styles.c_title_reverse}`
            : styles.c_title
        }
      >
        {texto} {htmlDestaque ? htmlDestaque : <strong>{textoDestaque}</strong>}
      </h1>

      {children ? <p className={styles.c_title__desc}>{children}</p> : null}
    </>
  );
}
