import { Swiper, SwiperSlide } from "swiper/react";

interface ICardGaleria {
  imagens: Array<{ src: string; alt: string }>;
}

export default function CardGaleria({ imagens }: ICardGaleria) {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} style={{ width: "100%" }}>
      {imagens.map((img, key) => {
        return (
          <SwiperSlide key={key}>
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopRightRadius: "9px",
                borderTopLeftRadius: "9px",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
