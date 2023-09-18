import Header from "../home/header";
import styles from "./index.module.scss";

interface Modal {
  children: any;
  open?: boolean;
  transparent?: boolean;
  hideMenu?: boolean;
}

export default function Modal({
  children,
  open,
  transparent,
  hideMenu,
}: Modal) {
  return open ? (
    <div
      className={styles.c_modal}
      style={{ backgroundColor: transparent ? "rgba(0,0,0,.5)" : "#ffffff" }}
    >
      <div className={styles.c_modal__content}>
        {hideMenu ? null : <Header />}
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
