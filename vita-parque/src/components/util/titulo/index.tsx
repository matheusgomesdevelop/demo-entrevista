import styles from "./index.module.scss";

interface ITitulo {
  children: any;
  type?: string;
}
export default function Titulo({ children, type }: ITitulo) {
  return (
    <>
      {type && type === "modelo" ? (
        <h1 className={`${styles.c_titulo} ${styles.c_titulo__modelo}`}>
          {children}
        </h1>
      ) : (
        <h1 className={styles.c_titulo}>{children}</h1>
      )}
    </>
  );
}
