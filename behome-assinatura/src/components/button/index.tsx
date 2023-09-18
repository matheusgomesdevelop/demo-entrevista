import { useEffect, useRef } from "react";

import styles from "./button.module.scss";

interface IButton {
  type?: string;
  size?: string;
  text: string;
  callback?: () => void;
}

export default function Button({ text, type, size, callback }: IButton) {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Executar o callback
    if (callback) {
      buttonRef.current.addEventListener("click", callback);
    }
  }, []);

  // Converter a string para respectiva classe
  let convertProps = {
    type: null,
    size: null,
  };

  // Converter o tipo de botao
  if (type) {
    if (type === "info") {
      convertProps.type = styles.c_button__info;
    } else if (type === "success") {
      convertProps.type = styles.c_button__success;
    }
  }

  // Converter o tamanho do botao
  if (size) {
    if (size === "sm") {
      convertProps.size = styles.c_button__sm;
    } else if (size === "xs") {
      convertProps.size = styles.c_button__xs;
    } else if (size === "xs2") {
      convertProps.size = styles.c_button__xs2;
    } else if (size === "md") {
      convertProps.size = styles.c_button__md;
    } else if (size === "lg") {
      convertProps.size = styles.c_button__lg;
    }
  }

  return (
    <>
      {/* Passou o type e não passou o size */}
      {convertProps.type && !convertProps.size ? (
        <button
          className={`${styles.c_button} ${convertProps.type}`}
          ref={buttonRef}
          type={"submit"}
        >
          {text}
        </button>
      ) : (
        <>
          {/* Passou o type e o size */}
          {convertProps.type && convertProps.size ? (
            <button
              className={`${styles.c_button} ${convertProps.type} ${convertProps.size}`}
              ref={buttonRef}
            >
              {text}
            </button>
          ) : (
            <>
              {/* Passou o size e não passou o type */}
              {convertProps.size && !convertProps.type ? (
                <button
                  className={`${styles.c_button} ${convertProps.size}`}
                  ref={buttonRef}
                >
                  {text}
                </button>
              ) : (
                <>
                  {/* Default */}
                  <button className={styles.c_button} ref={buttonRef}>
                    {text}
                  </button>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
