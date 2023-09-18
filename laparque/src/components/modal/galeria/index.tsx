import { useState } from "react";
import styles from "./index.module.scss";

import SwiperCore, { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { imagensGaleriaModal, thumbnailGaleriaModal } from "./imagens";

SwiperCore.use([Navigation, Thumbs]);

export default function GaleriaModal({ children, imagemClicada }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slideInicial = imagensGaleriaModal().filter(
    (value) => value.nome_unico === imagemClicada.nome_unico
  );

  return (
    <div className={styles.galeriaModal}>
      <div className={styles.galeriaModal__voltar}>{children}</div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="swiper_galeriaModal"
        centerInsufficientSlides={true}
        initialSlide={slideInicial[0].id - 1}
      >
        <>
          {imagensGaleriaModal().map((img, index) => {
            return (
              <Swiper
                spaceBetween={0}
                slidesPerView={"auto"}
                className="swiper_plantasModal"
                navigation
                key={index}
              >
                {imagensGaleriaModal().map((img) => {
                  return (
                    <SwiperSlide key={img.src}>
                      {img.nome_unico === "41m" || img.nome_unico === "55m" ? (
                        <img
                          src={img.src}
                          alt=""
                          style={{ transform: "rotate(180deg)" }}
                        />
                      ) : (
                        <img src={img.src} alt="" />
                      )}

                      <p className={styles.modalPlantas__imgLegenda}>{img.legenda}</p>

                      <p className={styles.modalPlantas__legenda}>
                        <span>{img.textMetragem}</span>{" "}
                        <strong>{img.textoDestaque}</strong>
                      </p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            );
          })}
        </>
      </Swiper>

      <div className={styles.galeriaModal__thumb}>
        <Swiper
          onSwiper={setThumbsSwiper}
          slideToClickedSlide={true}
          spaceBetween={8}
          slidesPerView={"auto"}
          className="swiper_galeriaModal__thumb"
        >
          {thumbnailGaleriaModal().map((thumb) => {
            return (
              <SwiperSlide key={thumb.src}>
                <img width="127" height="85" src={thumb.src} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
