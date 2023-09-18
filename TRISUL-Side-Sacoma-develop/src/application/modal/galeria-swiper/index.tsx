import { Dispatch, SetStateAction, useContext, useState } from "react";

import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type { Swiper as TSwiper } from "swiper";
import ArrowDown from "../../../../public/icons/thinArrowDown.svg";

import styles from "./style.module.scss";
import { IconButton } from "@/common/components/Button";
import Image from "next/image";
import { galeriaList, IImagesGaleriaModal } from "@/application/section/galeria/galeria-list";
import { Navigation } from "swiper";
import { MenuContext } from "@/common/context/SideMenuContext";

SwiperCore.use([Thumbs]);

interface IGaleriaModal {
  imagemClicada: IImagesGaleriaModal;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function GaleriaModal({ onClose, imagemClicada }: IGaleriaModal) {
  const thumbList = galeriaList;
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper>();
  const [isFooterCollapsed, setIsFooterCollapsed] = useState(false);
  const { isMobile } = useContext(MenuContext);

  const slideInicial = galeriaList().filter((value) => value.id === imagemClicada.id);

  return (
    <div className={styles.swiperModal}>
      <header className={styles.swiperModal__header}>
        <IconButton>
          <Image width={32} height={32} src={"/icons/close.png"} alt={""} onClick={() => onClose(false)} />
        </IconButton>
      </header>

      <div className={styles.swiperModal__container}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Navigation]}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation
          className={styles.swiperModal__swiper}
          initialSlide={slideInicial[0].id ?? 1 - 1}
        >
          {galeriaList().map((img) => {
            return (
              <SwiperSlide key={img.id} className={styles.swiperModal__swiper_slide}>
                <figure>
                  <Image
                    className={`
                      ${styles.swiperModal__swiper_image} ${styles.swiperModal__fachada_image}
                      `}
                    src={isMobile ? img.thumbSrc :img.src}
                    alt=""
                    height={554}
                  />
                  <figcaption className={styles.swiperModal__image_figcaption}>{img.legenda}</figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <a
        className={`${styles.swiperModal__collapse_button} ${
          isFooterCollapsed ? styles.swiperModal__active_button : ""
        }`}
        onClick={() => setIsFooterCollapsed(!isFooterCollapsed)}
      >
        <Image src={ArrowDown} alt="arrow down" />
      </a>
      <footer className={isFooterCollapsed ? styles.swiperModal__hidden : styles.swiperModal__footer}>
        <Swiper
          onSwiper={setThumbsSwiper}
          slideToClickedSlide={true}
          className={styles.swiperModal__thumbs_container}
          spaceBetween={60}
          slidesPerView={"auto"}
        >
          {thumbList().map((thumb, index) => {
            return (
              <SwiperSlide key={`thmub-slide-${index + 1}`} className={`${styles.swiperModal__thumb_slide}`}>
                <Image className={styles.swiperModal__thumb_image} src={thumb.thumbSrc} alt="" width={92} height={108} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </footer>
    </div>
  );
}
