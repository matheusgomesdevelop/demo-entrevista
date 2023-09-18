import { styled } from "../../../theme/stitches.config";

import styles from "./index.module.scss";

export const ButtonStyled = styled("button", {
  width: "86px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$apoio",
  borderRadius: "8px",
  transition: "0.3s",
  fontWeight: "500",
  letterSpacing: "1.2px",
  fontSize: "14px",
  border: "none",
  cursor: "pointer",
  outline: "0",
  fontFamily: "$nunitoSans",
  whiteSpace: "nowrap",

  variants: {
    button: {
      default: {
        fontSize: "16px",

        color: "$h3",
        "&:hover": {
          background: "$secundaria",
          color: "white",
          border: "1px solid $solidBg",
          fontWeight: "$bold",
        },
      },

      active: {
        backgroundColor: "$solidBg",
        color: "$white",
        fontWeight: "700",
        fontSize: "16px",

        "&:hover": {
          background: "$secundaria",
          border: "1px solid $solidBg",
        },
      },
      agendeVisita: {
        borderRadius: "19px",
        width: "226px",
        height: "42px",
        border: "2px solid $hoveredSoligBg",
        boxShadow: "0px 3px 6px #00000029",
        letterSpacing: "0px",
        fontWeight: "900",
        fontSize: "18px",

        "&:hover": {
          border: "1px solid $solidBg",
        },
      },

      simularFinanciamento: {
        width: "272px",
        height: "51px",
        borderRadius: "8px",
        border: "1px solid $hoveredUiBorder",
        padding: "24px",
        color: "$solidBg",
        fontWeight: "800",

        "&:hover": {
          border: "1px solid $solidBg",
        },
      },

      visitaVirtual: {
        minWidth: "266px",
        height: "54px",
        borderRadius: "8px",
        border: "1px solid $hoveredUiBorder",
        padding: "12px 20px",
        color: "$lowContrasText",
        fontWeight: "800",
        fontSize: "18px",
        whiteSpace: "nowrap",

        "&:hover": {
          border: "1px solid $solidBg",
        },
      },
      enviar: {
        width: "114px",
        height: "45px",
        borderRadius: "50px",
        border: "2px solid $white",
        color: "$whiteText",
        boxShadow: "0px 3px 6px #00000029",
        background: "$solidBg",
        fontSize: "$md",
        fontWeight: "$bold",

        "&:hover": {
          background: "$subBg",
          color: "$highContrasText",
          border: "1px solid $solidBg",
        },
      },
      voltar: {
        fontWeight: "$bold",
        background: "none",
        color: "black",
      },
      retornar: {
        borderRadius: "19px",
        background: "$solidBg",
        width: "128px",
        height: "44px",
        border: "2px solid $hoveredSoligBg",
        color: "$whiteText",
        boxShadow: "0px 3px 6px #00000029",
        letterSpacing: "0px",
        fontWeight: "900",
        fontSize: "18px",

        "&:hover": {
          background: "$subBg",
          color: "$highContrasText",
          border: "1px solid $solidBg",
        },
      },
      verTodos: {
        width: "auto",
        color: "$white",
        textDecoration: "none",
        fontSize: "14px",
        whiteSpace: "nowrap",
      },
      expand: {
        width: "40px",
        height: "40px",
        borderRadius: "9px",
        background: "$activeUiBg",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      slideArrow: {
        width: "50px",
        height: "50px",
        background: "$uiBg",
        borderRadius: "100%",
        border: "1px solid $uiBg",
        opacity: "1",

        "&:hover": {
          border: "1px solid $subBorderSeparators",
          opacity: "0.9",
        },
      },
      opaqueSlideArrow: {
        width: "50px",
        height: "50px",
        background: "transparent",
      },
    },
  },
});

interface IButton {
  type: string;
  children?: any;
  active?: boolean;
  callback?: any;
  width?: any;
  height?: any;
  submit?: boolean;
}

export default function Button({ children, type, active, callback, width, height, submit }: IButton) {
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
            <button className={`${styles.c_button} ${styles.c_button__zoon}`} onClick={callback}>
              {children}
            </button>
          </>
        ) : (
          <button className={`${styles.c_button} ${styles.c_button__zoon}`}>{children}</button>
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
            <button className={`${styles.c_button} ${styles.c_button__branco}`} onClick={callback}>
              {children}
            </button>
          </>
        ) : (
          <button className={`${styles.c_button} ${styles.c_button__branco}`}>{children}</button>
        )
      ) : type === "flutuante" ? (
        callback ? (
          <>
            {/* Flutuante */}
            <button className={`${styles.c_button} ${styles.c_button__flutuante}`} onClick={callback}>
              {children}
            </button>
          </>
        ) : (
          <button className={`${styles.c_button} ${styles.c_button__flutuante}`}>{children}</button>
        )
      ) : null}
    </>
  );
}
