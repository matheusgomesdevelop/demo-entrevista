import { styled } from "@stitches/react";
import SwiperCore from "swiper";
import { Swiper as ReactSwiper, SwiperSlide, useSwiper } from "swiper/react";
import { ButtonStyled } from "../../form/button";
import { SolidIconLeftStyled, SolidIconRightStyled } from "../../icons";
import { imagensGaleriaPrincipal } from "../../section/ficha-produto/header/galeria/imagens";
import style from './style.module.scss'

SwiperCore.use([]);

const SwiperNextButton = () => {
    const swiper = useSwiper();
  
    return (
      <ButtonStyled
        button={"opaqueSlideArrow"}
        style={{ zIndex: "9999", position: "absolute", right: "-20px", top: "32%" }}
        onClick={() => swiper.slideNext()}>
        <SolidIconRightStyled fontSize={32}/>
      </ButtonStyled>
    );
  }
  
const SwiperPrevButton = () => {
    const swiper = useSwiper();
  
    return (
      <ButtonStyled
        button={"opaqueSlideArrow"}
        style={{ zIndex: "9999", position: "absolute", left: "-20px", top: "32%" }}
        onClick={() => swiper.slidePrev()}>
        <SolidIconLeftStyled fontSize={32} />
      </ButtonStyled>
    );
}

export const Swiper = () => {
    return(
        <div className="swiperContainer">
            <ReactSwiper
            spaceBetween={2}
            slidesPerView={2.8}
            breakpoints={{
                740: {
                  slidesPerView: 1.7,
                },
                1200: {
                  slidesPerView: 2.7,
                },
            }}
            style={{padding: 24}}
            >
                {imagensGaleriaPrincipal().map((img) => {
                    return (
                    <SwiperSlide key={img.src}>
                        <figure>
                        <img src={img.src} alt={img.nome_unico} width={112} height={112} />
                        <figcaption>
                            <p style={{ backgroundColor: "transparent" }}>
                            {img.texto} <strong>{img.textoDestaque}</strong>
                            </p>
                        </figcaption>
                        </figure>
                    </SwiperSlide>
                    );
                })}
                <SwiperNextButton/>
                <SwiperPrevButton/>
            </ReactSwiper>
        </div>
    )
}
