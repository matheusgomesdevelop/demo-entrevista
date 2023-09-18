import { useState, useEffect } from "react";

import Modal from "../../../modal";
import Titulo from "../../../util/titulo";
import styles from "./index.module.scss";

import modalStyles from "../../../modal/index.module.scss";
import ModalConhecaBairro from "../../../modal/conheca-bairro";

export default function ConhecaBairro() {
  const [modalConhecaBairro, setModalConhecaBairro] = useState(false);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setModalConhecaBairro(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    modalConhecaBairro ? window.addEventListener("keyup", fechar) : null;
  }, [modalConhecaBairro]);

  return (
    <>
      <div className={styles.conhecaBairro}>
        <div className={styles.conhecaBairro__content}>
          <div className={styles.conhecaBairro__content_title}>
            <Titulo>
              <strong>Conheça</strong> o bairro
            </Titulo>
          </div>

          <div className={styles.conhecaBairro__imgBairro}>
            <picture>
              <source
                srcSet="images/secao/conheca-bairro/img-bairro.jpg"
                media="(max-width: 599px)"
              />
              <img src="images/secao/conheca-bairro/img-bairro.jpg" alt="" />
            </picture>
          </div>

          <p className={styles.conhecaBairro__desc}>
            Morar na Vila Formosa é viver em perfeito equilíbrio entre ruas
            agradáveis e uma completa rede de serviços e comércio, sendo vizinho
            de bairros como Tatuapé, Carrão e Anália Franco. Um endereço
            privilegiado, que valoriza o seu tempo com diversas opções de lazer
            e entretenimento. Ideal para quem busca tranquilidade integrada.
          </p>

          <div className={styles.conhecaBairro__atributos}>
            <ul>
              <li>
                <img
                  width="22px"
                  height="22px"
                  src="images/diferenciais/metro.svg"
                  alt=""
                />
                <p>
                  <strong>METRÔ</strong>{" "}
                  <span>Próximo à futura estação Vila Formosa do Metrô</span>
                </p>
              </li>
              <li>
                <img
                  width="22px"
                  height="22px"
                  src="images/diferenciais/shoppings.svg"
                  alt=""
                />
                <p>
                  <strong>SHOPPINGS</strong>{" "}
                  <span>
                    Próximo ao Shopping Anália Franco. Shopping Aricanduva,
                    Shopping Metrô Tatuapé e Shopping Garden.
                  </span>
                </p>
              </li>
              <li>
                <img
                  width="22px"
                  height="22px"
                  src="images/diferenciais/supermercado.svg"
                  alt=""
                />
                <p>
                  <strong>MERCADO</strong>{" "}
                  <span>Mercado Municipal da Vila Formosa</span>
                </p>
              </li>
              <li>
                <img
                  width="22px"
                  height="22px"
                  src="images/diferenciais/endereco.svg"
                  alt=""
                />
                <p>
                  <strong>ACESSOS</strong>{" "}
                  <span>
                    Fácil acesso à Radial Leste e avenidas importantes como Dr.
                    Eduardo Cotching, João XXIII, Regente Feijó, Vereador Abel
                    Ferreira, Renata, Emília Marengo e Eleonora Cintra
                  </span>
                </p>
              </li>
            </ul>
          </div>

          <a
            href={null}
            style={{ cursor: "pointer" }}
            className={styles.conhecaBairro__vejaMais}
            onClick={() => {
              setModalConhecaBairro(true);
              document.documentElement.style.overflowY = "hidden";
            }}
          >
            veja mais
          </a>
        </div>
      </div>

      {/* Modal Conheca o Bairro */}
      <Modal open={modalConhecaBairro}>
        <ModalConhecaBairro>
          <button
            className={modalStyles.c_modal__closeVoltar}
            onClick={() => {
              setModalConhecaBairro(false);
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
        </ModalConhecaBairro>
      </Modal>
      {/* Modal Conheca o Bairro */}
    </>
  );
}
