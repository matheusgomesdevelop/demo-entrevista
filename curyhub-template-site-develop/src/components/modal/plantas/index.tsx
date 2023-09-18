import { Dispatch, SetStateAction, useMemo } from "react";

import { styled } from "../../../../theme/stitches.config";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Helpers
import { imgPlantas } from "./plantas";

// Styled componets
import { ModalHeaderStyled, ModalStyled } from "..";
import { StrongStyled } from "../../elements/strong";
import { ButtonStyled } from "../../form/button";
import { GaleriaButtonNext, GaleriaButtonPrev } from "../../section/ficha-produto/header/galeria";
import { IconExpandStyled } from "../../icons";
import { filter_component_by_name, get_component_styles } from "../../../helpers/theme/theme-component";
import { ThemeHelper } from "../../../helpers/theme";

SwiperCore.use([Navigation]);

const FooterStyled = styled("div", {
  width: "100%",
  height: "70px",
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

  "& span": {
    textAlign: "right",
    maxWidth: "200px",

    "@tablet": {
      maxWidth: "100%",
    },
  },
});

interface IModalPlantas {
  onClose: Dispatch<SetStateAction<boolean>>;
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function ModalPlantas({ onClose, section, corretor_data }: IModalPlantas) {
  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Footer
  const div_footer = useMemo(() => filter_component_by_name(active_components, "modal-footer"), []);
  const get_footer_styles = get_component_styles(div_footer);

  // Botao voltar
  const div_btn_voltar = useMemo(() => filter_component_by_name(active_components, "button-voltar"), []);
  const get_btn_voltar_styles = get_component_styles(div_btn_voltar);

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
        }}
      >
        <ButtonStyled
          button={"expand"}
          onClick={() => {
            onClose(false);
            window.document.documentElement.style.overflowY = "auto";
          }}
          css={{ ...get_btn_voltar_styles, zIndex: "99" }}
        >
          <IconExpandStyled fontSize={24} />
        </ButtonStyled>
      </ModalHeaderStyled>
      <Swiper spaceBetween={0} slidesPerView={"auto"} className="swiper_plantasModal">
        {imgPlantas().map((img) => {
          return (
            <SwiperSlide key={img.src}>
              {img.nome_unico === "41m" || img.nome_unico === "55m" ? (
                <img src={img.src} alt="" style={{ transform: "rotate(180deg)" }} />
              ) : (
                <img src={img.src} alt="" />
              )}

              <FooterStyled css={{ ...get_footer_styles }}>
                <span>
                  {`${img.nome}`} <StrongStyled>{img.metragem}</StrongStyled>,
                  <span style={{ marginRight: "5px" }}> {img.textMetragem}</span>
                </span>
              </FooterStyled>
            </SwiperSlide>
          );
        })}

        <GaleriaButtonNext />
        <GaleriaButtonPrev />
      </Swiper>
    </ModalStyled>
  );
}
