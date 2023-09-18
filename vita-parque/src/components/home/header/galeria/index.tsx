import { useState, useEffect } from "react";

import styles from "./index.module.scss";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "../../../modal";
import GaleriaModal from "../../../modal/galeria";
import Button from "../../../util/button";
import { imagensGaleriaPrincipal } from "./imagens";

SwiperCore.use([Navigation]);

export default function Galeria() {
  const [modalGaleria, setModalGaleria] = useState(null);
  const [imagemClicada, setImagemClicada] = useState(null);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setModalGaleria(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    modalGaleria ? window.addEventListener("keyup", fechar) : null;
  }, [modalGaleria]);
  return (
    <>
      <section className={styles.slide_principal}>
        <Swiper
          spaceBetween={2}
          slidesPerView={1.2}
          breakpoints={{
            740: {
              slidesPerView: 1.7,
            },
            1200: {
              slidesPerView: 2.7,
            },
          }}
          navigation
          className="swiper_galeria"
        >
          {imagensGaleriaPrincipal().map((img) => {
            return (
              <SwiperSlide
                key={img.src}
                onClick={() => {
                  setModalGaleria(true);
                  setImagemClicada(img);
                  document.documentElement.style.overflowY = "hidden";
                }}
              >
                <figure>
                  <img src={img.src} alt="" />
                  <figcaption>
                    <p style={{ backgroundColor: "transparent" }}>
                      {img.texto} <strong>{img.textoDestaque}</strong>
                    </p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/* Modal Galeria */}
      <Modal open={modalGaleria}>
        <GaleriaModal imagemClicada={imagemClicada}>
          <Button
            type="zoon"
            callback={() => {
              setModalGaleria(false);
              document.documentElement.style.overflowY = "initial";
            }}
          >
            <img width="28" height="28" src="images/ampliar.svg" alt="" />
          </Button>
        </GaleriaModal>
      </Modal>
      {/* Modal Galeria */}
    </>
  );
}
