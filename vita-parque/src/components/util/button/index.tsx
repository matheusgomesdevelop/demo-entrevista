import styles from "./index.module.scss";

interface IButton {
  type: string;
  children?: any;
  active?: boolean;
  callback?: any;
  width?: any;
  height?: any;
  submit?: boolean;
}

export default function Button({
  children,
  type,
  active,
  callback,
  width,
  height,
  submit,
}: IButton) {
  return (
    <>
      {type === "default" ? (
        callback ? (
          <button
            className={
              active
                ? `${styles.c_button} ${styles.c_button__default_active}`
                : `${styles.c_button} ${styles.c_button__default}`
            }
            onClick={callback}
          >
            {children}
          </button>
        ) : (
          <button className={styles.c_button}>{children}</button>
        )
      ) : type === "zoon" ? (
        callback ? (
          <>
            {/* Veja mais */}
            <button
              className={`${styles.c_button} ${styles.c_button__zoon}`}
              onClick={callback}
            >
              {children}
            </button>
          </>
        ) : (
          <button className={`${styles.c_button} ${styles.c_button__zoon}`}>
            {children}
          </button>
        )
      ) : type === "azul" ? (
        callback ? (
          <>
            <button
              className={`${styles.c_button} ${styles.c_button__azul}`}
              onClick={callback}
              style={{
                width: width ? width : "unset",
                height: height ? height : "unset",
              }}
              type={submit ? "submit" : "button"}
            >
              {children}
            </button>
          </>
        ) : (
          <button
            className={`${styles.c_button} ${styles.c_button__azul}`}
            style={{
              width: width ? width : "unset",
              height: height ? height : "unset",
            }}
          >
            {children}
          </button>
        )
      ) : type === "branco" ? (
        callback ? (
          <>
            {/* Branco */}
            <button
              className={`${styles.c_button} ${styles.c_button__branco}`}
              onClick={callback}
            >
              {children}
            </button>
          </>
        ) : (
          <button className={`${styles.c_button} ${styles.c_button__branco}`}>
            {children}
          </button>
        )
      ) : type === "flutuante" ? (
        callback ? (
          <>
            {/* Flutuante */}
            <button
              className={`${styles.c_button} ${styles.c_button__flutuante}`}
              onClick={callback}
            >
              {children}
            </button>
          </>
        ) : (
          <button
            className={`${styles.c_button} ${styles.c_button__flutuante}`}
          >
            {children}
          </button>
        )
      ) : null}
    </>
  );
}
