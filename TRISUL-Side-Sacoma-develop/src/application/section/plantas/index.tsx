import { GreenButtonOpenModal, SolidBackgroundButton } from "@/common/components/Button";
import { Text } from "@/common/components/Typography/Text";
import { ThinTitle } from "@/common/components/Typography/Title";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { planta_list } from "./planta-list";
import styles from "./index.module.scss";
import Image from "next/image";
import { useContext, useState } from "react";
import { MenuContext } from "@/common/context/SideMenuContext";
import Modal from "@/common/components/Modal";
import PlantaModal from "@/application/modal/planta-swiper ";
import ArrowRight from "../../../../public/icons/arrowRight.svg";

export default function SectionPlantas() {
  const { isMobile } = useContext(MenuContext);
  const [isSwiperModalOpen, setIsSwiperModalOpen] = useState<boolean>(false);
  const [imagemClicada, setImagemClicada] = useState<any>();

  return (
    <>
      <section className={styles.l_plantas} id="section-plantas">
        <div className={styles.l_plantas__polygon_container}>
          <div className={styles.l_plantas__polygon} />
        </div>
        <div className={styles.l_plantas__wrapper}>
          <div className={styles.l_plantas__title}>
            <ThinTitle className={styles.environments_container__environment_title}>
              PLANTAS
              <Text className={styles.environments_container__environment_subtitle}>
                Tudo o que há de melhor para o seu conforto.
              </Text>
            </ThinTitle>

            {/* <a
              className={styles.l_plantas__modal_button}
              onClick={() => {
                setIsSwiperModalOpen(true);
                setImagemClicada(0);
              }}
            >
              Conheça o DECORADO
              <div className={styles.solid_background_button_container__icon_background}>
                <Image src={ArrowRight} alt="Right Arrow" />
              </div>
            </a> */}
          </div>
          <div className={styles.l_plantas__swiper_container}>
            {/* Galeria */}
            <Swiper
              spaceBetween={2}
              slidesPerView={1}
              modules={[Navigation]}
              navigation
              className={styles.l_plantas__swiper}
            >
              {planta_list.map((plantas, index) => {
                return (
                  <SwiperSlide key={index} className={styles.l_plantas__swiper_slide}>
                    <div className={styles.l_plantas__slide_info}>
                      {plantas.quartos}
                      <p className={styles.l_plantas__info_metros}>{plantas.metros}</p>
                      <p className={styles.l_plantas__info_varanda}>{plantas.label}</p>
                    </div>
                    <Image src={plantas.src} alt="" width={661} height={750} className={styles.l_plantas__image} />
                    <a
                      className={styles.l_plantas__button}
                      onClick={() => {
                        setIsSwiperModalOpen(true);
                        setImagemClicada(index);
                      }}
                    >
                      <GreenButtonOpenModal />
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* Galeria */}
          </div>
        </div>
      </section>
      {isSwiperModalOpen && (
        <Modal open={isSwiperModalOpen} onClose={() => setIsSwiperModalOpen(false)} backgroundImage>
          <PlantaModal onClose={setIsSwiperModalOpen} imagemClicada={imagemClicada} />
        </Modal>
      )}
    </>
  );
}
