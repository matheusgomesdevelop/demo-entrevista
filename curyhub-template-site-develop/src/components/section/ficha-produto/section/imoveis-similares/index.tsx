import { useMemo, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Styled components
import { ButtonStyled } from "../../../../form/button";
import { IconArrowRightStyled, IconCarStyled, IconDormStyled, IconShareStyled } from "../../../../icons";
import { LinkComponent } from "../../../../link";
import { SectionContentStyled, SectionWrapperBgStyled } from "../../../../structure";
import { TituloStyled } from "../../../../util/titulo";
import { CardContent, CardDiferencial, CardGaleriaStyled, CardStatusStyled } from "../../../../empreendimento/card";
import {
  CardSimilarDesc,
  CardSimilarNome,
  CardSimilarPreco,
  CardSimilarStyled,
  CardSimilarValorTitle,
} from "../../../../empreendimento/card/similar";

// Components
import CardGaleria from "../../../../empreendimento/card/galeria";

// Modal
import Modal from "../../../../modal";
import ModalCompartilhe from "../../../../util/compartilhe";

// Helpers
import { ThemeHelper } from "../../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../../helpers/theme/theme-component";

interface ISimilares {
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function Similares({ section, corretor_data }: ISimilares) {
  const [modalCompartilhe, setModalCompartilhe] = useState<boolean>(false);

  const imagens = [
    {
      src: "https://cury.net/storage/images_webp/products/gallery/62c5cc56e4184.jpeg.webp",
      alt: "",
    },
    {
      src: "https://cury.net/storage/images/products/gallery/62c5cc6f15aaf.jpeg",
      alt: "",
    },
    {
      src: "https://cury.net/storage/images_webp/products/gallery/62bc995bad172.jpeg.webp",
      alt: "",
    },
    {
      src: "https://cury.net/storage/images_webp/products/gallery/62c5cc56e4184.jpeg.webp",
      alt: "",
    },
  ];

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Botão
  const div_botao = useMemo(() => filter_component_by_name(active_components, "button-ver-mais"), []);
  const get_botao_styles = get_component_styles(div_botao);

  // Card
  const div_card = useMemo(() => filter_component_by_name(active_components, "card"), []);
  const get_card_styles = get_component_styles(div_card);

  // Card - status
  const div_card_status = useMemo(() => filter_component_by_name(active_components, "card-status"), []);
  const get_card_status_styles = get_component_styles(div_card_status);

  // Card - diferencial
  const div_card_dif = useMemo(() => filter_component_by_name(active_components, "icone-diferencial"), []);
  const get_card_dif_styles = get_component_styles(div_card_dif);

  // Card - nome emp
  const div_nome_emp = useMemo(() => filter_component_by_name(active_components, "card-nome-emp"), []);
  const get_nome_emp_styles = get_component_styles(div_nome_emp);

  // Card - preco
  const div_preco = useMemo(() => filter_component_by_name(active_components, "card-preco"), []);
  const get_preco_styles = get_component_styles(div_preco);

  // Icone compartilhe
  const div_icon_share = useMemo(() => filter_component_by_name(active_components, "icon-share"), []);
  const get_icon_share_styles = get_component_styles(div_icon_share);

  return (
    <>
      <SectionWrapperBgStyled id="section-similares" css={{ ...section.styles }}>
        <SectionContentStyled>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "598px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "26px" }}>
              <TituloStyled css={{ ...get_titulo_styles }}>Imóveis similares</TituloStyled>
              <ButtonStyled button={"verTodos"} css={{ ...get_botao_styles }}>
                <IconArrowRightStyled fontSize={24} />
                <span style={{ textDecoration: "underline", marginLeft: "12px" }}>ver todos</span>
              </ButtonStyled>
            </div>

            <Swiper
              spaceBetween={22}
              slidesPerView={1}
              style={{ width: "100%" }}
              breakpoints={{
                599: {
                  slidesPerView: 2,
                },
              }}
            >
              {/* Card Similar */}
              {imagens.map((index, key) => {
                return (
                  <SwiperSlide key={key}>
                    <CardSimilarStyled css={{ ...get_card_styles }}>
                      <CardGaleriaStyled>
                        <CardGaleria imagens={imagens} />
                      </CardGaleriaStyled>
                      <CardContent>
                        <CardStatusStyled css={{ ...get_card_status_styles }}>Lançamento</CardStatusStyled>
                        <CardSimilarNome css={{ ...get_nome_emp_styles, margin: "12px 0px 6px 0px" }}>
                          Lorem ipsum
                        </CardSimilarNome>
                        <CardSimilarDesc>Lorem ipsum dolor sit amet</CardSimilarDesc>

                        <div style={{ margin: "20px 0" }}>
                          <CardDiferencial style={{ marginBottom: "16px" }}>
                            <IconDormStyled fontSize={24} css={{ ...get_card_dif_styles }} /> 2 e 3 suítes - 136 a 168
                            m²
                          </CardDiferencial>
                          <CardDiferencial>
                            <IconCarStyled fontSize={24} css={{ ...get_card_dif_styles }} /> 2 e 3 suítes - 136 a 168 m²
                          </CardDiferencial>
                        </div>

                        <CardSimilarValorTitle>Valor do imóvel</CardSimilarValorTitle>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <CardSimilarPreco css={{ ...get_preco_styles }}>R$ 500.000</CardSimilarPreco>
                          <LinkComponent href="#" prefetch={false} link={"none"} onClick={() => setModalCompartilhe(true)}>
                            <IconShareStyled fontSize={23} css={{ ...get_icon_share_styles }} />
                          </LinkComponent>
                        </div>
                      </CardContent>
                    </CardSimilarStyled>
                  </SwiperSlide>
                );
              })}
              {/* Card Similar */}
            </Swiper>
          </div>
        </SectionContentStyled>
      </SectionWrapperBgStyled>

      {/* Modal Compartilhe */}
      <Modal open={modalCompartilhe} transparent={true}>
        <ModalCompartilhe state={setModalCompartilhe} />
      </Modal>
      {/* Modal Compartilhe */}
    </>
  );
}
