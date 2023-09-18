import styles from "./title.module.scss";

interface ITitle {
  texto: any;
  textoDestaque: any;
  children?: any;
  colorTextReversed?: boolean;
}

export default function Title({
  texto,
  textoDestaque,
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
        {texto} <strong>{textoDestaque}</strong>
      </h1>

      {children ? <p className={styles.c_title__desc}>{children}</p> : null}
    </>
  );
}
