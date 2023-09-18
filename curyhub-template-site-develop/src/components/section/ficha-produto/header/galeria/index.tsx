import { useState, useEffect } from "react";

import styles from "./index.module.scss";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Modal
import Modal from "../../../../modal";
import GaleriaModal from "../../../../modal/galeria";

// Components
import { imagensGaleriaPrincipal } from "./imagens";
import { ButtonStyled } from "../../../../form/button";
import { IconLeftStyled, IconRightStyled } from "../../../../icons";

SwiperCore.use([]);

export function GaleriaButtonNext() {
  const swiper = useSwiper();

  return (
    <ButtonStyled
      button={"slideArrow"}
      style={{ zIndex: "9999", position: "absolute", right: "20px", top: "41%", color: "black" }}
      onClick={() => swiper.slideNext()}
    >
      <IconRightStyled fontSize={32} />
    </ButtonStyled>
  );
}

export function GaleriaButtonPrev() {
  const swiper = useSwiper();

  return (
    <ButtonStyled
      button={"slideArrow"}
      style={{ zIndex: "9999", position: "absolute", left: "20px", top: "41%", color: "black" }}
      onClick={() => swiper.slidePrev()}
    >
      <IconLeftStyled fontSize={32} />
    </ButtonStyled>
  );
}

export default function Galeria() {
  const [modalGaleria, setModalGaleria] = useState<boolean>(false);
  const [imagemClicada, setImagemClicada] = useState<ImagemClicada>();

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        document.documentElement.style.overflowY = "initial";
      }
    }

    imagemClicada ? window.addEventListener("keyup", fechar) : null;
  }, [imagemClicada]);
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
          <GaleriaButtonNext />
          <GaleriaButtonPrev />
        </Swiper>
      </section>

      {/* Modal Galeria */}
      <Modal open={modalGaleria}>
        {imagemClicada && <GaleriaModal imagemClicada={imagemClicada} onClose={setModalGaleria} />}
      </Modal>
      {/* Modal Galeria */}
    </>
  );
}
