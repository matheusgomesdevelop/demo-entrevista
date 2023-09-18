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
          {imagensGaleriaModal().map((img) => {
            return (
              <SwiperSlide key={img.src}>
                <figure>
                  {img.nome_unico === "fachada" ? (
                    <img
                      src={img.src}
                      alt=""
                      className={`${styles.galeriaModal__fachada} ${
                        img.wide ? styles.galeriaModal__wide : null
                      }`}
                    />
                  ) : img.wide ? (
                    <img
                      src={img.src}
                      alt=""
                      className={styles.galeriaModal__wide}
                    />
                  ) : (
                    <img width="100%" height="100%" src={img.src} alt="" />
                  )}

                  <figcaption>
                    <p>
                      {img.texto} <strong>{img.textoDestaque}</strong>
                    </p>
                  </figcaption>
                </figure>
              </SwiperSlide>
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
                <img
                  width="127"
                  height="85"
                  src={thumb.src}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
