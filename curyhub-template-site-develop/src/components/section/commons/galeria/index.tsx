import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NoStyleWrapper } from "../../../structure";
import { ThemeHelper } from "../../../../helpers/theme";
import { ImageComponent } from "../components/Image";
import style from "./style.module.scss";
import { DepoimentText } from "../principal";
import { useMemo } from "react";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";

interface IGaleriaCarrosselProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

type ISlideProps = {
  path: string;
  id: number;
  label: string;
};

const Slides: Array<ISlideProps> = [
  {
    id: 1,
    label: "Nome do video",
    path: "/images/carrossel/building-image.png",
  },
  {
    id: 2,
    label: "Nome do video",
    path: "/images/carrossel/building-image2.png",
  },
  {
    id: 3,
    label: "Nome do video",
    path: "/images/carrossel/building-image3.png",
  },
  {
    id: 4,
    label: "Nome do video",
    path: "/images/carrossel/building-image.png",
  },
  {
    id: 5,
    label: "Nome do video",
    path: "/images/carrossel/building-image2.png",
  },
  {
    id: 6,
    label: "Nome do video",
    path: "/images/carrossel/building-image3.png",
  },
  {
    id: 7,
    label: "Nome do video",
    path: "/images/carrossel/building-image.png",
  },
  {
    id: 8,
    label: "Nome do video",
    path: "/images/carrossel/building-image2.png",
  },
];

export const GaleriaCarrossel = ({ section, corretor_data }: IGaleriaCarrosselProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  //Title
  const title_div = useMemo(() => filter_component_by_name(active_components, "title"), []);
  const get_title_styles = get_component_styles(title_div);

  //Carrossel
  const carrossel = useMemo(() => filter_component_by_name(active_components, "carrossel"), []);
  const get_carrossel_styles = get_component_styles(carrossel);

  //Carrossel Slide text
  const carrossel_slide_text = useMemo(() => filter_component_by_name(active_components, "carrossel-slide-text"), []);
  const get_carrossel_slide_text_styles = get_component_styles(carrossel_slide_text);

  return (
    <NoStyleWrapper size={{ "@initial": "mobile", "@desktop": "desktop" }} css={{ ...section.styles }}>
      <div className={style.swiper_container}>
        <DepoimentText size={{ "@initial": "title" }} css={{ ...get_title_styles }}>
          Galeria de vídeos
        </DepoimentText>
        <Swiper
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          slidesPerView={1}
          modules={[Scrollbar]}
          scrollbar={{
            hide: false,
            horizontalClass: "scrollbar_custom_style",
          }}
          className={style.swiper_container__swiper}
        >
          {Slides.map((slide) => (
            <SwiperSlide className={style.swiper_container__swiper_slide} key={slide.id}>
              <figure>
                <ImageComponent size={{ "@initial": "noBorder" }} height="267px" width="fit-content" src={slide.path} />
                <figcaption>
                  <DepoimentText size={{ "@initial": "md" }} css={{ ...get_carrossel_slide_text_styles }}>
                    {slide.label}
                  </DepoimentText>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </NoStyleWrapper>
  );
};
