import Image from "next/image";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./index.module.scss";

import { TituloSecao } from "@/common/components/Typography/Title";
import { galeriaList } from "./galeria-list";
import { useContext, useState } from "react";
import Modal from "@/common/components/Modal";
import GaleriaModal from "@/application/modal/galeria-swiper";
import { MenuContext } from "@/common/context/SideMenuContext";

export default function SectionGaleria() {
  const { isDesktop } = useContext(MenuContext);

  const [isSwiperModalOpen, setIsSwiperModalOpen] =
    useState<boolean>(false);
  const [imagemClicada, setImagemClicada] = useState<any>();
  
  return (
    <>
      <section
        className={styles.l_galeria}
        id="section-galeria">
        <div className={styles.l_galeria__container}>
          <div
            className={styles.l_galeria__container_index}>
            <TituloSecao>GALERIA</TituloSecao>
            {/* Galeria */}
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation]}
              navigation
              className={styles.l_galeria__swiper}>
              {galeriaList().map((galeria, index) => {
                return (
                  <SwiperSlide key={`galeria-image-${index + 1}`}>

                  <figure>
                    <a
                    className={styles.l_galeria__swiper_modal_button}
                      onClick={() => {
                        setIsSwiperModalOpen(true);
                        setImagemClicada(galeria);
                      }}>
                      <Image width={83} height={83} src={"/icons/openModal.png"} alt={""} />
                    </a>
                    <Image
                      className={`
                        ${styles.l_galeria__swiper_image}
                        `}
                      src={isDesktop ? galeria.thumbSrc :galeria.src}
                      alt=""
                      height={554}
                    />
                    <figcaption className={styles.l_galeria__swiper_image_figcaption}>{galeria.legenda}</figcaption>
                  </figure>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* Galeria */}
          </div>
          <div className={styles.l_galeria__container_quadrado}></div>
        </div>
      </section>
      {isSwiperModalOpen && (
        <Modal
          open={isSwiperModalOpen}
          onClose={() => setIsSwiperModalOpen(false)}
          backgroundImage>
          <GaleriaModal onClose={setIsSwiperModalOpen}
            imagemClicada={imagemClicada} />
        </Modal>
      )}
    </>
  );
}
