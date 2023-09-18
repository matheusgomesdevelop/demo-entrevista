import styles from "./index.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import { imgPlantas } from "./plantas";

SwiperCore.use([Navigation]);

export default function ModalPlantas({ children }) {
  return (
    <div className={styles.modalPlantas}>
      <div className={styles.modalPlantas__content}>
        <div className={styles.modalPlantas__voltar}>{children}</div>

        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          className="swiper_plantasModal"
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

                <p className={styles.modalPlantas__imgLegenda}>{img.legenda}</p>

                <p className={styles.modalPlantas__legenda}>
                  <span>{img.textMetragem}</span>{" "}
                  <strong>{img.textDestaque}</strong>
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
