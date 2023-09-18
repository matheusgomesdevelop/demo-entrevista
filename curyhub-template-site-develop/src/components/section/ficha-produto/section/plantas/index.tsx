import { useState, useEffect, useMemo } from "react";

import { styled } from "../../../../../../theme/stitches.config";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

// Styled
import { SectionContentStyled, SectionWrapperStyled } from "../../../../structure";
import { TituloStyled } from "../../../../util/titulo";

// Components
import { ButtonStyled } from "../../../../form/button";
import Modal from "../../../../modal";
import ModalPlantas from "../../../../modal/plantas";

// Helpers
import { imgPlantas } from "./imagens";
import { IconExpandStyled } from "../../../../icons";

// Data

// Helpers
import { ThemeHelper } from "../../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../../helpers/theme/theme-component";

interface IPlantas {
  section: ThemeSection;
  corretor_data: Corretor;
}

const LegendaStyled = styled("p", {
  color: "$highContrasText",
  fontSize: "14px",
  position: "absolute",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  bottom: "20px",

  "@tablet": {
    bottom: "40px",
  },
});

const LegendaStatusStyled = styled("strong", {
  color: "$solidBg",
  fontWeight: "700",
});

export default function Plantas({ section, corretor_data }: IPlantas) {
  const [plantasModal, setPlantasModal] = useState<boolean>(false);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setPlantasModal(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    plantasModal ? window.addEventListener("keyup", fechar) : null;
  }, [plantasModal]);

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo_secao = useMemo(
    () => filter_component_by_name(active_components, "titulo-secao"),
    [active_components]
  );
  const get_titulo_secao_styles = get_component_styles(div_titulo_secao);

  return (
    <>
      <SectionWrapperStyled>
        <SectionContentStyled style={{ paddingBottom: "0" }}>
          <TituloStyled css={{ color: get_titulo_secao_styles ? get_titulo_secao_styles.color : "$h1secundario" }}>
            Plantas
          </TituloStyled>
          <TituloStyled titulo={"subtitle"} css={{ marginTop: "7px", color: "$h3" }}>
            conheça os detalhes
          </TituloStyled>

          <div style={{ maxWidth: "604px", marginRight: "auto" }}>
            <Swiper spaceBetween={0} slidesPerView={"auto"} className="swiper_plantas">
              {imgPlantas().map((img) => {
                return (
                  <SwiperSlide key={img.src}>
                    {img.nome_unico === "41m" || img.nome_unico === "55m" ? (
                      <img src={img.src} alt="" style={{ transform: "rotate(180deg)" }} />
                    ) : (
                      <img src={img.src} alt="" />
                    )}

                    <LegendaStyled>
                      <strong>{img.textMetragem}</strong> -
                      <LegendaStatusStyled style={{ marginLeft: "7px" }}>{img.textDestaque}</LegendaStatusStyled>
                    </LegendaStyled>
                  </SwiperSlide>
                );
              })}
              <ButtonStyled
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "9px",
                  zIndex: "9",
                  color: "white",
                  background: "#B0B0B0CC",
                }}
                onClick={() => {
                  setPlantasModal(true);
                  document.documentElement.style.overflowY = "hidden";
                }}
                button={"expand"}
              >
                <IconExpandStyled fontSize={32} />
              </ButtonStyled>
            </Swiper>
          </div>
        </SectionContentStyled>
      </SectionWrapperStyled>

      {/* Modal Plantas */}
      <Modal open={plantasModal}>
        <ModalPlantas onClose={setPlantasModal} section={section} corretor_data={corretor_data} />
      </Modal>
      {/* Modal Plantas */}
    </>
  );
}
