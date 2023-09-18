import { Dispatch, SetStateAction, useState } from "react";

import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as TSwiper } from "swiper";

import { imagensGaleriaModal, thumbnailGaleriaModal } from "./imagens";
import { GaleriaButtonNext, GaleriaButtonPrev } from "../../section/ficha-produto/header/galeria";
import { ButtonStyled } from "../../form/button";
import { IconExpandStyled } from "../../icons";
import { ModalHeaderStyled, ModalStyled } from "..";
import { styled } from "../../../../theme/stitches.config";

SwiperCore.use([Thumbs]);

interface IGaleriaModal {
  imagemClicada: ImagemClicada;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const FooterStyled = styled("div", {
  width: "100%",
  height: "100px",
  backgroundColor: "$uiBg",
  borderTop: "2px solid $hoveredUiBorder",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: "0",
  color: "highContrasText",
  fontWeight: "$regular",
  fontSize: "$md",
  zIndex: "99",
  cursor: "pointer",

  "& span": {
    textAlign: "right",
    maxWidth: "200px",

    "@tablet": {
      maxWidth: "100%",
    },
  },
});

export default function GaleriaModal({ onClose, imagemClicada }: IGaleriaModal) {
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper>();

  const slideInicial = imagensGaleriaModal().filter((value) => value.nome_unico === imagemClicada.nome_unico);

  return (
    <ModalStyled>
      <ModalHeaderStyled
        style={{
          marginTop: "70px",
          minHeight: "27px",
          background: "none",
          alignItems: "flex-end",
          paddingRight: "28px",
          position: "absolute",
        }}>
        <ButtonStyled
          button={"expand"}
          onClick={() => {
            onClose(false);
            window.document.documentElement.style.overflowY = "auto";
          }}>
          <IconExpandStyled fontSize={24} />
        </ButtonStyled>
      </ModalHeaderStyled>

      <div
        style={{
          width: "100%",
          height: "72vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          centerInsufficientSlides={true}
          initialSlide={slideInicial[0].id - 1}
          style={{ textAlign: "center", width: "100%", height: "532px" }}>
          {imagensGaleriaModal().map((img) => {
            return (
              <SwiperSlide key={img.src}>
                {img.nome_unico === "41m" || img.nome_unico === "55m" ? (
                  <img
                    src={img.src}
                    alt=""
                    style={{ transform: "rotate(180deg)", width: "max-content", height: "100%" }}
                  />
                ) : (
                  <img src={img.src} alt="" style={{ width: "max-content", height: "100%" }} />
                )}
              </SwiperSlide>
            );
          })}

          <GaleriaButtonNext />
          <GaleriaButtonPrev />
        </Swiper>
      </div>

      <FooterStyled>
        <Swiper
          onSwiper={setThumbsSwiper}
          slideToClickedSlide={true}
          spaceBetween={8}
          slidesPerView={"auto"}
          className="swiper_galeriaModal__thumb">
          {thumbnailGaleriaModal().map((thumb) => {
            return (
              <SwiperSlide key={thumb.src}>
                <img width="127" height="85" src={thumb.src} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </FooterStyled>
    </ModalStyled>
  );
}
