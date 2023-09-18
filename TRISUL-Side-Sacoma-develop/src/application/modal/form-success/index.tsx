import { Dispatch, SetStateAction } from "react";

import Image from "next/image";

import styles from "./index.module.scss";

// Componentes
import { IconButton } from "@/common/components/Button";

interface IModalSuccess {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  nome: string;
  descricao: string;
  callback?: Dispatch<SetStateAction<boolean>>;
}

export default function ModalFormSuccess({ setIsOpen, nome, descricao, callback }: IModalSuccess) {
  return (
    <div className={styles.formSuccess}>
      <header className={styles.formSuccess__header}>
        <Image width={152} height={60} src={"/images/logoSideSacoma.png"} alt={""} />
        <IconButton>
          <Image
            width={32}
            height={32}
            src={"/icons/close.png"}
            alt={""}
            onClick={() => {
              setIsOpen(false);
              callback && callback(false);
            }}
          />
        </IconButton>
      </header>

      <div className={styles.formSuccess__container}>
        <h1>{nome}</h1>
        <p>{descricao}</p>

        <IconButton>
          <img
            src="/icons/ok-button.png"
            alt=""
            onClick={() => {
              setIsOpen(false);
              callback && callback(false);
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}
