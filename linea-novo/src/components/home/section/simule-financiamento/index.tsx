import { useState, useEffect } from "react";

import ModalSimuleFinanciamento from "../../../modal/simule-financiamento";
import Button from "../../../util/button";
import Titulo from "../../../util/titulo";
import styles from "./index.module.scss";

import modalStyles from "../../../modal/index.module.scss";

import Modal from "../../../modal";

export default function SimuleFinanciamento() {
  const [modalSimuleFinanciamento, setModalSimuleFinanciamento] =
    useState(null);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setModalSimuleFinanciamento(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    modalSimuleFinanciamento ? window.addEventListener("keyup", fechar) : null;
  }, [modalSimuleFinanciamento]);
  return (
    <>
      <div className={styles.simuleFinanciamento}>
        <div className={styles.simuleFinanciamento__content}>
          <Titulo>
            <strong>Simule</strong> um financiamento
          </Titulo>

          <p className={styles.simuleFinanciamento__desc}>
            Mude de vida pagando <strong>menos que um aluguel.</strong> Confira
            as condições especiais de lançamento.
          </p>

          <Button
            type="azul"
            callback={() => {
              setModalSimuleFinanciamento(true);
              document.documentElement.style.overflowY = "hidden";
            }}
          >
            SIMULAR FINANCIAMENTO
          </Button>
        </div>
      </div>

      {/* Modal Simule Financiamento */}
      <Modal open={modalSimuleFinanciamento}>
        <ModalSimuleFinanciamento>
          <button
            className={modalStyles.c_modal__closeVoltar}
            onClick={() => {
              setModalSimuleFinanciamento(false);
              document.documentElement.style.overflowY = "initial";
            }}
          >
            <img
              src="images/icon-voltar.svg"
              alt=""
              width="18px"
              height="16px"
            />
            Voltar
          </button>
        </ModalSimuleFinanciamento>
      </Modal>
      {/* Modal Simule Financiamento */}
    </>
  );
}
