import { IconButton } from "@/common/components/Button";
import Image from "next/image";
import Modal from "@/common/components/Modal";

import style from "./style.module.scss";
import { FC, useEffect, useState } from "react";

import { HipnoboxChat, HipnoboxChatProps } from "./";

interface HypnoboxModalProps extends HipnoboxChatProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const HypnoboxModal: FC<HypnoboxModalProps> = ({
  isOpen, onClose, ...rest
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  useEffect(() => {
    setModalIsOpen(isOpen);
  }, [isOpen]);

  return <Modal open={ modalIsOpen }>
    <div  className={style.headerContainer}>
      <header>
        <Image width={152} height={60} src={"/images/logoSideSacoma.png"} alt={""} />
        <Image width={32} height={32} src={"/icons/close.png"} 
          style={{cursor: 'pointer', zIndex: 99999}}
          alt={""} 
          onClick={() => {
            setModalIsOpen(false);
            if (onClose) {
              onClose();
            }
          }} 
        />
      </header>        
    </div>
    <HipnoboxChat 
      { ...rest }
    />
  </Modal>
}