import Button from "../../../util/button";
import Titulo from "../../../util/titulo";
import styles from "./index.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

export default function DiferenciaisEngelux() {
  const date = new Date();

  return (
    <div className={styles.diferenciaisEngelux}>
      <div className={styles.diferenciaisEngelux__content}>
        <Titulo>
          <strong>Diferenciais</strong> Engelux
        </Titulo>

        <div className={styles.diferenciaisEngelux__diferenciais}>
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            breakpoints={{
              599: {
                slidesPerView: 3,
              },
            }}
            className="swiper_diferenciaisEngelux"
            pagination={{ clickable: true }}
            navigation
          >
            <SwiperSlide
              className={styles.diferenciaisEngelux__diferenciais_item}
            >
              {/*<Titulo>
                <strong>100%</strong> ENTREGUE
              </Titulo> */}
              <p>
                100% dos empreendimentos entregues dentro do prazo ou
                antecipadamente.
              </p>
            </SwiperSlide>

            <SwiperSlide
              className={styles.diferenciaisEngelux__diferenciais_item}
            >
              <p>
                Empresa com 47 anos de mercado, sólida e detentora de grande
                know-how no segmento.
              </p>
            </SwiperSlide>

            <SwiperSlide
              className={styles.diferenciaisEngelux__diferenciais_item}
            >
              <p>
                Acabamento premium: louças, metais e revestimentos de marcas
                consagradas.
              </p>
            </SwiperSlide>

            <SwiperSlide
              className={styles.diferenciaisEngelux__diferenciais_item}
            >
              <p>Clientes felizes e satisfeitos que recomendam a Engelux.</p>
            </SwiperSlide>

            <SwiperSlide
              className={styles.diferenciaisEngelux__diferenciais_item}
            >
              <p>
                Assessoria jurídica completa e gratuita para auxilio na obtenção
                do financiamento junto à instituição financeira.
              </p>
            </SwiperSlide>

            <SwiperSlide
              className={styles.diferenciaisEngelux__diferenciais_item}
            >
              <p>
                Atendimento ao cliente ágil e personalizado dispondo de portal
                exclusivo com acesso via site e App.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
