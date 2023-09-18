import { useState, useEffect, useRef } from "react";

import Galeria from "../../header/galeria";

// Util
import styles from "./index.module.scss";
import Button from "../../../util/button";
import Localizacao from "../../header/localizacao";
import Video from "../../header/video";
import Modal from "../../../modal";
import ModalVideos from "../../../modal/videos";

import modalStyles from "../../../modal/index.module.scss";
import ModalSaibaMais from "../../../modal/saiba-mais";
import debounce from "../../../../validation/debounce";
import CtaWhatsapp from "../../../util/cta-whatsapp";

export default function Principal() {
  const [galeria, setGaleria] = useState(true);
  const [video, setVideo] = useState(false);
  const [localizacao, setLocalizacao] = useState(false);

  const cardRef = useRef(null);

  const [ctaWhatsapp, setCtaWhatsapp] = useState(false);

  // Modal
  const [modalVideo, setModalVideo] = useState(null);
  const [modalSaibaMais, setModalSaibaMais] = useState(null);

  // Mostrar numero
  const [mostrarNumero, setMostrarNumero] = useState(false);

  useEffect(() => {
    // Scroll Card
    if (cardRef.current) {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        const section = document.getElementById("secao-termos-legais");

        window.addEventListener(
          "scroll",
          debounce(() => {
            let tamanhoScroll = window.pageYOffset;

            if (tamanhoScroll >= 399 && tamanhoScroll <= section.offsetTop - 620) {
              cardRef.current.style.transform = `translateY(${window.pageYOffset - 399}px)`;
            } else if (tamanhoScroll < 399) {
              cardRef.current.style.transform = "translateY(0)";
            }
          }, 5)
        );
      }
    }

    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setModalSaibaMais(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    modalSaibaMais ? window.addEventListener("keyup", fechar) : null;
  }, [modalSaibaMais]);

  return (
    <>
      <section className={styles.l_fvm}>
        {galeria ? <Galeria /> : null}
        {video ? <Video /> : null}
        {localizacao ? <Localizacao /> : null}
      </section>

      {/* Lançamento */}
      <div style={{ width: "100%", position: "relative" }}>
        <section className={styles.l_lancamento}>
          <div className={styles.l_lancamento__empreendimento}>
            {/* Navlink */}
            <div className={styles.l_lancamento__navlink}>
              <Button
                type="default"
                callback={() => {
                  setGaleria(true);
                  setVideo(false);
                  setLocalizacao(false);
                }}
                active={galeria}>
                <span style={{ marginLeft: "5px" }}>GALERIA</span>
              </Button>

              {
                <div className={styles.l_lancamento__navlink_video}>
                  <Button
                    type="default"
                    callback={() => {
                      setModalVideo(true);
                      document.documentElement.style.overflowY = "hidden";
                    }}
                    active={video}>
                    <span style={{ marginLeft: "5px" }}>VÍDEO</span>
                  </Button>
                  <Button
                    type="default"
                    callback={() => {
                      setVideo(true);
                      setGaleria(false);
                      setLocalizacao(false);
                    }}
                    active={video}>
                    <span style={{ marginLeft: "5px" }}>VÍDEO</span>
                  </Button>
                </div>
              }

              <Button
                type="default"
                callback={() => {
                  setLocalizacao(true);
                  setVideo(false);
                  setGaleria(false);
                }}
                active={localizacao}>
                <span style={{ marginLeft: "5px" }}>LOCALIZAÇÃO</span>
              </Button>
            </div>
            {/* Navlink */}

            {/* Informações do empreendimento. */}
            <div className={styles.l_lancamento__empreendimento_info}>
              <p className={styles.l_lancamento__empreendimento_info_nome}>
                VITA PARQUE <strong>- LANÇAMENTO</strong>
              </p>
              <div className={styles.l_lancamento__empreendimento_info_endereco}>
                <img width="15px" height="20px" src="images/diferenciais/endereco.svg" alt="" />
                <p>
                  Av. Cipriano Rodrigues, 316 - <strong>Vila Formosa</strong> - SP
                </p>
              </div>

              {/* Descrição */}
              <div className={styles.l_lancamento__empreendimento_info__descDif}>
                <p className={styles.l_lancamento__empreendimento_info_descricao}>
                  More com conforto, qualidade de vida em meio a natureza, segurança e lazer, em um endereço que te
                  conecta com a cidade. Próximo ao metrô, shoppings e importantes vias de acesso.{" "}
                  <strong>Tudo que você sempre quis para somar e transformar a sua vida.</strong>{" "}
                  <a
                    href={null}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setModalSaibaMais(true);
                      document.documentElement.style.overflowY = "hidden";
                    }}>
                    Solicite uma proposta.
                  </a>
                </p>
                {/* Descrição */}
                {/* Atributos */}
                <div className={styles.l_lancamento__empreendimento_info_atributos}>
                  <ul>
                    <li>
                      <img width="27px" height="27px" src="images/diferenciais/varanda-new.svg" alt="" />
                      <p>
                        <strong>2</strong>
                        <span>Dorms. com </span>
                        <strong>Varanda</strong>
                      </p>
                    </li>
                    <li>
                      <img width="24px" height="24px" src="images/diferenciais/area.svg" alt="" />
                      <p>
                        <span>Área do terreno: </span>
                        <strong>5.921,32m²</strong>
                      </p>
                    </li>
                    <li>
                      <img width="27px" height="27px" src="images/diferenciais/vaga.svg" alt="" />
                      <p>
                        <span>Vaga de Garagem *</span>
                      </p>
                    </li>

                    <li>
                      <img width="24px" height="24px" src="images/diferenciais/elevadores-new.svg" alt="" />
                      <p>
                        <strong>4</strong>
                        <span>elevadores</span>
                      </p>
                    </li>
                  </ul>
                </div>
                {/* Atributos */}
              </div>
            </div>
            {/* Informações do empreendimento */}
          </div>

          {/* Card preço empreendimento */}
          <div className={styles.l_lancamento__empreendimento_card} ref={cardRef}>
            {/*  Logo */}
            <div className={styles.l_lancamento__empreendimento_card_logo}>
              <img src="images/logo-vita-parque-f.png" width="180px" height="180px" alt="" />
            </div>
            {/*  Logo */}

            {/* Parcelas */}
            <p className={styles.l_lancamento__empreendimento_card_parcelas}>
              Parcelas a partir de <strong>R$ 400</strong>,00**
            </p>
            {/* Parcelas */}

            {/* Contato */}
            <div className={styles.l_lancamento__empreendimento_card_contato}>
              <div
                className={styles.l_lancamento__empreendimento_card_contato__whats}
                onClick={() => {
                  setCtaWhatsapp(true);
                }}
                style={{ cursor: "pointer" }}>
                <img width="34px" height="34px" src="images/secao/empreendimento/card-cta/icon-whats.png" alt="" />
                <span>WhatsApp</span>
              </div>
              <div
                className={styles.l_lancamento__empreendimento_card_contato__tel}
                onClick={() => setMostrarNumero(!mostrarNumero)}>
                <img width="34px" height="34px" src="images/secao/empreendimento/card-cta/icon-tel.svg" alt="" />
                <span>
                  (011) <strong>4118-{!mostrarNumero ? "****" : "4646"}</strong>
                </span>
              </div>
            </div>
            {/* Contato */}

            {/* CTA - Saiba mais */}
            <Button
              type="flutuante"
              callback={() => {
                setModalSaibaMais(true);
                document.documentElement.style.overflowY = "hidden";
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  className="a"
                  d="M17.4,3H4.6A1.6,1.6,0,0,0,3,4.6V19l3.2-3.2H17.4A1.6,1.6,0,0,0,19,14.2V4.6A1.6,1.6,0,0,0,17.4,3Zm0,11.2H6.2L4.6,15.8V4.6H17.4Z"
                  transform="translate(-3 -3)"
                />
              </svg>

              <span>RECEBA UMA APRESENTAÇÃO</span>
            </Button>
            {/* CTA - Saiba mais */}
          </div>
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
          }}></button>

        <ModalVideos />
      </Modal>
      {/* Modal Videos Mobile */}

      {/* Modal Saiba mais */}
      <Modal open={modalSaibaMais}>
        <ModalSaibaMais>
          <button
            className={modalStyles.c_modal__closeVoltar}
            onClick={() => {
              setModalSaibaMais(false);
              document.documentElement.style.overflowY = "initial";
            }}>
            <img src="images/icon-voltar.svg" alt="" width="18px" height="16px" />
            Voltar
          </button>
        </ModalSaibaMais>
      </Modal>
      {/* Modal Saiba mais */}

      {/* Whatsapp */}
      {ctaWhatsapp ? (
        <CtaWhatsapp>
          <button className="close-MOP19072021" onClick={() => setCtaWhatsapp(false)}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334">
              <title>Fechar</title>
              <path
                d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
          c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
          c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
          l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
          L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"></path>
            </svg>
          </button>
        </CtaWhatsapp>
      ) : null}
      {/* Whatsapp */}
    </>
  );
}
