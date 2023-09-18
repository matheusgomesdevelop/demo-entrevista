import { FC, ReactNode, useEffect, useState } from "react";
import { useModalContext } from "./hooks";
import styles from "./style.module.scss";

export interface IModalProps {
  children?: ReactNode;
  open?: boolean;
  backgroundImage?: boolean;
  hideMenu?: boolean;
  onClose?: () => void;
}

const Modal: FC<IModalProps> = ({ children, open = false, backgroundImage, hideMenu, onClose }) => {
  const [openModal, setOpenModal] = useState<boolean>(open);

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  const ModalContext = useModalContext();
  const modalContextValues = {
    close: () => {
      setOpenModal(false);

      if (onClose) {
        onClose();
      }
    },
  };

  return openModal ? (
    <div className={`${styles.c_modal} ${backgroundImage ? styles.c_modal__background_image : ""}`}>
      <div className={styles.c_modal__content}>
        <ModalContext.Provider value={modalContextValues}>{children}</ModalContext.Provider>
      </div>
    </div>
  ) : null;
};

export default Modal;
