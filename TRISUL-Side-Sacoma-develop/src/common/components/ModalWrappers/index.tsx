import { styled } from "@stitches/react";

export const ModalStyled = styled("div", {
    width: "100vw",
    minHeight: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
  });
  
  export const ModalHeaderStyled = styled("div", {
    background: "transparent",
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    padding:"40px"
  });
  
  export const ModalContentStyled = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    margin: "0 auto",
    padding: "60px 20px 0",
  });
  
  export const ModalFooterStyled = styled("div", {
    width: "100vw",
    height: "133px",
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    padding: "8px 20px 50px",
  });
  