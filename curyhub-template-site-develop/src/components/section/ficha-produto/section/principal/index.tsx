import { useRouter } from "next/router";

import { useState, useEffect, useRef, useMemo } from "react";

import { styled } from "../../../../../../theme/stitches.config";

import styles from "./index.module.scss";
import modalStyles from "../../../../modal/index.module.scss";

// Helpers
import debounce from "../../../../../validation/debounce";

// Theme
import { filter_component_by_name, get_component_styles } from "../../../../../helpers/theme/theme-component";
import { ThemeHelper } from "../../../../../helpers/theme";

// Section
import Localizacao from "../../header/localizacao";
import Video from "../../header/video";
import Galeria from "../../header/galeria";

// Modal
import Modal from "../../../../modal";
import ModalVideos from "../../../../modal/videos";
import ModalCompartilhe from "../../../../util/compartilhe";
import ModalAgendeVisita from "../../../../modal/agende-visita";

// Styled Components
import { LinkComponent } from "../../../../link";
import {
  IconCarStyled,
  IconDormStyled,
  IconElevadorStyled,
  IconLocationStyled,
  IconShareStyled,
  IconTreeStyled,
} from "../../../../icons";
import { StatusStyled } from "../../../../elements/status";
import { StrongStyled } from "../../../../elements/strong";
import { ButtonStyled } from "../../../../form/button";
import {
  CardFlutuanteLabelStyled,
  CardFlutuanteStyled,
  CardFlutuanteSubTitleStyled,
} from "../../../../ficha/card-flutuante";

interface IPrincipal {
  section: ThemeSection;
  corretor_data: Corretor;
}

const NavLinkStyled = styled("div", {
  backgroundColor: "$primaria",
});

export default function Principal({ section, corretor_data }: IPrincipal) {
  const [galeria, setGaleria] = useState<boolean>(true);
  const [video, setVideo] = useState<boolean>(false);
  const [localizacao, setLocalizacao] = useState<boolean>(false);

  // Modal
  const [modalVideo, setModalVideo] = useState<boolean>(false);
  const [modalCompartilhe, setModalCompartilhe] = useState<boolean>(false);
  const [modalAgendeVisita, setModalAgendeVisita] = useState<boolean>(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const nome_emp = router.query.imovel;

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // NavLink
  const div_navlink = useMemo(() => filter_component_by_name(active_components, "navlink"), []);
  const get_navlink_styles = get_component_styles(div_navlink);

  // Titulo
  const div_nome_emp = useMemo(
    () => filter_component_by_name(active_components, "titulo-principal"),
    [active_components]
  );
  const get_nome_emp_styles = get_component_styles(div_nome_emp);

  // Botoes
  const div_button_fotos = useMemo(() => filter_component_by_name(active_components, "button-fotos"), []);
  const get_button_fotos_styles = get_component_styles(div_button_fotos);

  const div_button_videos = useMemo(() => filter_component_by_name(active_components, "button-videos"), []);
  const get_button_videos_styles = get_component_styles(div_button_videos);

  const div_button_mapa = useMemo(() => filter_component_by_name(active_components, "button-mapa"), []);
  const get_button_mapa_styles = get_component_styles(div_button_mapa);

  const NomeStyled = styled("p", {
    color: get_nome_emp_styles ? get_nome_emp_styles.color : "$h1secundario",
    fontFamily: "$openSans",
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: get_nome_emp_styles ? get_nome_emp_styles.fontSize : "24px",
  });

  useEffect(() => {
    // Scroll Card
    if (cardRef.current) {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        const section = document.getElementById("section-contato");

        if (section) {
          window.addEventListener(
            "scroll",
            debounce(() => {
              let tamanhoScroll = window.pageYOffset;

              if (tamanhoScroll >= 399 && tamanhoScroll <= section.offsetTop - 620) {
                if (cardRef.current) {
                  cardRef.current.style.transform = `translateY(${window.pageYOffset - 399}px)`;
                }
              }
            }, 5)
          );
        }
      }
    }

    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setModalAgendeVisita(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    modalAgendeVisita ? window.addEventListener("keyup", fechar) : null;
  }, [modalAgendeVisita]);

  return (
    <>
      {/* Conteudo fotos, videos e mapa */}
      <section className={styles.l_fvm}>
        {galeria && div_button_fotos.length > 0 ? <Galeria /> : null}
        {video && div_button_videos.length > 0 ? <Video /> : null}
        {localizacao && div_button_mapa.length > 0 ? <Localizacao /> : null}

        {/* Botoes Navlink */}
        {div_navlink.length > 0 && (
          <NavLinkStyled
            className={styles.l_lancamento__navlink}
            css={{ backgroundColor: get_navlink_styles ? get_navlink_styles.backgroundColor : "$primaria" }}
          >
            <div className={styles.l_lancamento__navlink_container}>
              <ButtonStyled
                css={{
                  backgroundColor: get_button_fotos_styles
                    ? galeria
                      ? "$secundaria"
                      : get_button_fotos_styles.backgroundColor
                    : "",
                }}
                button={galeria ? "active" : "default"}
                onClick={() => {
                  setGaleria(true);
                  setVideo(false);
                  setLocalizacao(false);
                }}
              >
                <span style={{ marginLeft: "5px" }}>fotos </span>
              </ButtonStyled>

              <div className={styles.l_lancamento__navlink_video}>
                <ButtonStyled
                  css={{
                    backgroundColor: get_button_videos_styles
                      ? video
                        ? "$secundaria"
                        : get_button_videos_styles.backgroundColor
                      : "",
                  }}
                  button={video ? "active" : "default"}
                  onClick={() => {
                    setModalVideo(true);
                    document.documentElement.style.overflowY = "hidden";
                  }}
                >
                  <span style={{ marginLeft: "5px" }}>vídeos</span>
                </ButtonStyled>
                <ButtonStyled
                  button={video ? "active" : "default"}
                  css={{
                    backgroundColor: get_button_videos_styles
                      ? video
                        ? "$secundaria"
                        : get_button_videos_styles.backgroundColor
                      : "",
                  }}
                  onClick={() => {
                    setVideo(true);
                    setGaleria(false);
                    setLocalizacao(false);
                  }}
                >
                  <span style={{ marginLeft: "5px" }}>vídeos</span>
                </ButtonStyled>
              </div>

              <ButtonStyled
                button={localizacao ? "active" : "default"}
                css={{
                  backgroundColor: get_button_mapa_styles
                    ? localizacao
                      ? "$secundaria"
                      : get_button_mapa_styles.backgroundColor
                    : "",
                }}
                onClick={() => {
                  setLocalizacao(true);
                  setVideo(false);
                  setGaleria(false);
                }}
              >
                <span style={{ marginLeft: "5px" }}>mapa</span>
              </ButtonStyled>
            </div>
          </NavLinkStyled>
        )}

        {/* Botoes Navlink */}
      </section>
      {/* Conteudo fotos, videos e mapa */}

      {/* Lançamento */}
      <div style={{ width: "100%", position: "relative", backgroundColor: section.styles.backgroundColor }}>
        <section className={styles.l_lancamento}>
          <div className={styles.l_lancamento__empreendimento}>
            {/* Informações do empreendimento. */}
            <div className={styles.l_lancamento__empreendimento_info}>
              <div className={styles.l_lancamento__empreendimento_info_nome}>
                <NomeStyled>{nome_emp}</NomeStyled>
              </div>
              <div className={styles.l_lancamento__empreendimento_info_endereco}>
                <span style={{ width: "24px" }}>
                  <IconLocationStyled fontSize={24} css={{ color: "$primaria" }} />
                </span>
                <p>Av. Miguel Yunes, 1100 - Usina Piratininga, São Paulo - SP, 04444-000</p>
              </div>

              {/* Descrição */}
              <div className={styles.l_lancamento__empreendimento_info__descDif}>
                {/* Descrição */}
                {/* Atributos */}
                <div className={styles.l_lancamento__empreendimento_info_atributos}>
                  <ul>
                    <li>
                      <IconDormStyled fontSize={24} css={{ color: "$secundaria" }} />
                      <p>4 dormitórios</p>
                    </li>
                    <li>
                      <IconCarStyled fontSize={24} css={{ color: "$secundaria" }} />
                      <p>3 suítes</p>
                    </li>
                    <li>
                      <IconTreeStyled fontSize={27} css={{ color: "$secundaria" }} />
                      <p>2 Vagas</p>
                    </li>

                    <li>
                      <IconElevadorStyled fontSize={24} css={{ color: "$secundaria" }} />
                      <p>168 m²</p>
                    </li>
                  </ul>
                </div>
                {/* Atributos */}
              </div>
            </div>
            {/* Informações do empreendimento */}
          </div>

          {/* Card preço empreendimento */}
          <CardFlutuanteStyled ref={cardRef} css={{ background: "$white" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <StatusStyled css={{ background: "$primaria" }}>Lançamento</StatusStyled>
              <LinkComponent href="#" prefetch={false} link={"none"} onClick={() => setModalCompartilhe(true)}>
                <IconShareStyled fontSize={23} css={{ color: "$secundaria" }} />
              </LinkComponent>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <StrongStyled
                css={{
                  fontSize: "26px",
                  marginTop: "10px",
                  marginBottom: "6px",
                  fontWeight: "800",
                  color: "$h1secundario",
                }}
              >
                R$ 500.000
              </StrongStyled>
              <CardFlutuanteSubTitleStyled>Lorem ipsum</CardFlutuanteSubTitleStyled>

              <CardFlutuanteLabelStyled css={{ marginTop: "26px" }}>
                Condomínio: <StrongStyled css={{ fontWeight: "700", color: "$h1secundario" }}>R$ 333,33</StrongStyled>{" "}
                mês
              </CardFlutuanteLabelStyled>

              <CardFlutuanteLabelStyled css={{ marginTop: "12px" }}>
                IPTU: <StrongStyled css={{ fontWeight: "700", color: "$h1secundario" }}>R$ 122,12</StrongStyled> mês
              </CardFlutuanteLabelStyled>

              <p style={{ marginTop: "12px", fontSize: "18px" }}>Lorem ipsum dolor sit amet</p>
            </div>

            <ButtonStyled
              button={"agendeVisita"}
              style={{ marginTop: "24px" }}
              onClick={() => setModalAgendeVisita(true)}
              css={{ background: "$secundaria", color: "$white" }}
            >
              Agende uma Visita
            </ButtonStyled>
          </CardFlutuanteStyled>
          {/* Card preço empreendimento */}
        </section>
      </div>
      {/* Lançamento */}

      {/* Modal Videos Mobile */}
      <Modal open={modalVideo}>
        <button
          className={`${modalStyles.c_modal__close} ${modalStyles.c_modal__closeVideo}`}
          onClick={() => {
            setModalVideo(false);
            document.documentElement.style.overflowY = "initial";
          }}
        ></button>

        <ModalVideos />
      </Modal>
      {/* Modal Videos Mobile */}

      {/* Modal Compartilhe */}
      <Modal open={modalCompartilhe} transparent={true}>
        <ModalCompartilhe state={setModalCompartilhe} />
      </Modal>
      {/* Modal Compartilhe */}

      {/* Modal Agende uma visita */}

      <Modal open={modalAgendeVisita}>
        <ModalAgendeVisita state={setModalAgendeVisita} section={section} corretor_data={corretor_data} />
      </Modal>
      {/* Modal Agende uma visita */}
    </>
  );
}
