import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

import Button from "../../../util/button";
import Titulo from "../../../util/titulo";
import styles from "./index.module.scss";
import Modal from "../../../modal";
import ModalPlantas from "../../../modal/plantas";

import { imgPlantas } from "./imagens";

export default function Plantas() {
  const [plantasModal, setPlantasModal] = useState(false);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setPlantasModal(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    plantasModal ? window.addEventListener("keyup", fechar) : null;
  }, [plantasModal]);
  return (
    <>
      <section className={styles.l_plantas} id="plantas">
        <div className={styles.l_plantas__content}>
          <Titulo type="default">PLANTAS E IMPLANTAÇÃO</Titulo>

          {/* Planta */}
          <div className={styles.l_plantas__plantas}>
            <Swiper
              spaceBetween={0}
              slidesPerView={"auto"}
              className="swiper_plantas"
              navigation
            >
              {imgPlantas().map((img) => {
                return (
                  <SwiperSlide key={img.src}>
                    {img.nome_unico === "45m" ? (
                      <img
                        src={img.src}
                        alt=""
                        style={{ transform: "rotate(-90deg)" }}
                      />
                    ) : img.nome_unico === "8770m" ? (
                      <img
                        src={img.src}
                        alt=""
                        style={{ transform: "rotate(-180deg)" }}
                      />
                    ) : (
                      <img src={img.src} alt="" />
                    )}
                    <p className={styles.l_plantas__plantas_legenda}>
                      <span>{img.textMetragem}</span>
                      <strong>{img.textDestaque}</strong>
                    </p>
                  </SwiperSlide>
                );
              })}
              <div className={styles.l_plantas__plantas_zoon}>
                <Button
                  type="zoon"
                  callback={() => {
                    setPlantasModal(true);
                    document.documentElement.style.overflowY = "hidden";
                  }}
                >
                  <img width="28" height="28" src="images/ampliar.svg" alt="" />
                </Button>
              </div>
            </Swiper>
          </div>
          {/* Planta */}
        </div>
      </section>

      {/* Modal Plantas */}
      <Modal open={plantasModal}>
        <ModalPlantas>
          <Button
            type="zoon"
            callback={() => {
              setPlantasModal(false);
              document.documentElement.style.overflowY = "initial";
            }}
          >
            <img width="28" height="28" src="images/ampliar.svg" alt="" />
          </Button>
        </ModalPlantas>
      </Modal>
      {/* Modal Plantas */}
    </>
  );
}
