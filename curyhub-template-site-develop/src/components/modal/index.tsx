import { styled } from "../../../theme/stitches.config";

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
  width: "100%",
  height: "auto",
  background: "$uiBg",
  display: "flex",
  flexDirection: "column",
  padding: "25px 0 20px 0",
  marginBottom: "52px",
});

export const ModalContentStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  maxWidth: "1080px",
  margin: "0 auto",
  padding: "0 20px",
});

export const ModalFooterStyled = styled("div", {
  width: "100%",
  height: "139px",
  background: "$activeUiBg",
  display: "flex",
  flexDirection: "column",
  padding: "20px 20px 50px 20px",
  marginTop: "70px",

  "@tabletUp": {
    position: "absolute",
    bottom: "0",
  },
});

export const ModalHeaderDescStyled = styled("p", {
  color: "$highContrasText",
  fontSize: "18px",
});

export const ModalFooterDescStyled = styled("p", {
  fontSize: "$xmd",
  fontWeight: "$light",
  letterSpacing: "0",
  color: "$highConstraText",

  "& strong": {
    fontWeight: "$bold",
  },
});

import Header from "../section/ficha-produto/header";
import styles from "./index.module.scss";

interface Modal {
  children: any;
  open?: boolean;
  transparent?: boolean;
  hideMenu?: boolean;
}

export default function Modal({ children, open, transparent, hideMenu }: Modal) {
  return open ? (
    <div className={styles.c_modal} style={{ backgroundColor: transparent ? "rgba(0,0,0,.5)" : "#ffffff" }}>
      <div className={styles.c_modal__content}>
        {hideMenu ? null : null}
        {children}
      </div>
    </div>
  ) : null;
}

/* 
import Modal from "../components/modal";
import modalStyles from "../../../modal/index.module.scss";
  const [modal, setModal] = useState(false);
   <Modal open={modal}>
        <button onClick={() => setModal(false)}>Fechar modal</button>
      </Modal>
      <Modal open={openModal}>
        <GaleriaModal>
          <button  className={modalStyles.c_modal__close}
            onClick={() => {
              setOpenModal(false);
              document.documentElement.style.overflowY = "initial";
            }}
          >
           &#8592;
          </button>
        </GaleriaModal>
      </Modal>
      <button onClick={() => setModal(true)}>Abrir modal</button>
*/
