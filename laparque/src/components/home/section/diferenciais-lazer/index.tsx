import { useState, useEffect } from "react";

import Modal from "../../../modal";
import ModalDiferenciaisLazer from "../../../modal/diferenciais-lazer";
import Titulo from "../../../util/titulo";
import styles from "./index.module.scss";

import modalStyles from "../../../modal/index.module.scss";

export default function DiferenciaisLazer() {
  const [modalDiferenciaisLazer, setModalDiferenciaisLazer] = useState(false);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setModalDiferenciaisLazer(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    modalDiferenciaisLazer ? window.addEventListener("keyup", fechar) : null;
  }, [modalDiferenciaisLazer]);
  return (
    <>
      <div className={styles.diferenciaisLazer}>
        <div className={styles.diferenciaisLazer__content}>
          <Titulo>
            <strong>Lazer</strong>
          </Titulo>

          <p className={styles.diferenciaisLazer__desc}>
            Apartamentos bem planejados e com infraestrutura completa para o
            bem-estar da sua família. Tudo isso em um lindo parque exclusivo,
            com lazer incomparável e condições especiais.
          </p>

          <div className={styles.diferenciaisLazer__atributos}>
            <ul>
              <li>
                <img
                  width="24px"
                  height="24px"
                  src="images/diferenciais/piscina.svg"
                  alt=""
                />
                <p>Piscina</p>
              </li>
              <li>
                <img
                  width="24px"
                  height="24px"
                  src="images/diferenciais/brinquedoteca.svg"
                  alt=""
                />
                <p>Brinquedoteca</p>
              </li>
              <li>
                <img
                  width="24px"
                  height="24px"
                  src="images/diferenciais/salao-gourmet.svg"
                  alt=""
                />
                <p>Salão de Festas Gourmet</p>
              </li>
              <li>
                <img
                  width="24px"
                  height="24px"
                  src="images/diferenciais/petcare.png"
                  alt=""
                />
                <p>Pet Care</p>
              </li>
              <li>
                <img
                  width="24px"
                  height="24px"
                  src="images/diferenciais/churrasqueira.svg"
                  alt=""
                />
                <p>Churrasqueira</p>
              </li>

              <li>
                <img
                  width="24px"
                  height="24px"
                  src="images/diferenciais/jogos.svg"
                  alt=""
                />
                <p>Salão de Jogos</p>
              </li>
            </ul>
          </div>

          <a
            href={null}
            style={{ cursor: "pointer" }}
            className={styles.diferenciaisLazer__vejaMais}
            onClick={() => {
              setModalDiferenciaisLazer(true);
              document.documentElement.style.overflowY = "hidden";
            }}
          >
            veja mais
          </a>
        </div>
      </div>

      {/* Modal Diferenciais Lazer */}
      <Modal open={modalDiferenciaisLazer}>
        <ModalDiferenciaisLazer>
          <button
            className={modalStyles.c_modal__closeVoltar}
            onClick={() => {
              setModalDiferenciaisLazer(false);
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
        </ModalDiferenciaisLazer>
      </Modal>
      {/* Modal Diferenciais Lazer */}
    </>
  );
}
