import { Dispatch, SetStateAction, useState } from "react";
import ArrowDown from "../../../../public/icons/thinArrowDown.svg";

import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as TSwiper } from "swiper";

import styles from "./style.module.scss";
import { IconButton } from "@/common/components/Button";
import Image from "next/image";
import { Navigation } from "swiper";
import { planta_list } from "@/application/section/plantas/planta-list";

SwiperCore.use([Thumbs]);

interface IPlantaModal {
  imagemClicada: number;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function PlantaModal({ onClose, imagemClicada }: IPlantaModal) {
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper>();
  const [isFooterCollapsed, setIsFooterCollapsed] = useState(false);

  const slideInicial = planta_list.filter((value) => value.id === imagemClicada);

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
          {planta_list.map((img, index) => {
            return (
              <SwiperSlide key={index} className={styles.swiperModal__swiper_slide}>
                <Image className={styles.swiperModal__swiper_image} src={img.thumbSrc} alt="" />
                <footer
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    borderTop: "1px solid #D1D0D8",
                    paddingTop: "40px",
                    marginLeft: "70px",
                  }}
                  className={styles.swiperModal__swiper_footer}
                >
                  {img && img.description}
                </footer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
