import { useState, useEffect } from "react";

import styles from "./index.module.scss";

import modalStyles from "../../../modal/index.module.scss";
import Modal from "../../../modal";
import TermosLegaisModal from "../../../modal/termos-legais";

export default function TermosLegais() {
  const [OpenTermosLegais, setOpenTermosLegais] = useState(false);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setOpenTermosLegais(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    OpenTermosLegais ? window.addEventListener("keyup", fechar) : null;
  }, [OpenTermosLegais]);
  return (
    <>
      <div className={styles.TermosLegais} id="secao-termos-legais">
        <div className={styles.TermosLegais__content}>
          <p className={styles.TermosLegais__content_textoLegal}>
            E.D.I. Serra do Mar Empreendimentos Imobiliários SPE Ltda. CNPJ:
            32.896.632/0001-71. R dos Pinheiros, 870 - Andar 8 Conj. 84 Sala N -
            CEP 05422-001 – Pinheiros. Incorporação registrada sob R.2 na
            matrícula nº 255.261 do 18º Cartório de Registro de Imóveis de SP em
            06/08/2020. *Preço de R$ 210 mil referente a unidade 108 da Torre A
            e unidade 107 da torre B, tabela de Novembro/21. Sujeito a alteração
            sem aviso prévio. As condições e benefícios mencionados neste
            material são referentes ao programa Casa Verde e Amarela do Governo
            Federal, vigentes nesta data e deverão ser validadas no momento da
            obtenção do financiamento pelo comprador. Consulte disponibilidade
            de vagas no stand de vendas. A infraestrutura prevista para futura
            instalação de ar-condicionado consiste na entrega de ponto de dreno
            e ponto de energia. A instalação de rede frigorígena, equipamentos e
            sanca serão por conta do comprador. Para melhor visualização e
            entendimento da disposição das áreas de lazer, a imagem da
            implantação é composta por parte do térreo e do 4º pavimento. Em
            caso de dúvida, consulte equipe de vendas no stand. As áreas comuns
            serão entregues equipadas e decoradas conforme Memorial Descritivo.
            As imagens são meramente ilustrativas, com sugestão de decoração e
            paisagismo. A vegetação que compõe o paisagismo retratado nas
            perspectivas é meramente ilustrativa e representa o porte adulto. Na
            entrega do empreendimento, poderá apresentar diferenças de tamanho e
            porte, mas estará de acordo com o projeto de paisagismo. Os móveis e
            utensílios são meramente ilustrativos, de dimensões comerciais e não
            fazem parte do Compromisso de Compra e Venda. Housen Imóveis e
            Gestão Ltda. – CRECI/SP 036973-J.
          </p>
          {/*  <a
            href={null}
            style={{
              cursor: "pointer",
              color: "#0C91E5",
              textDecoration: "underline",
              fontSize: "14px",
            }}
            onClick={() => {
              setOpenTermosLegais(true);
              document.documentElement.style.overflowY = "hidden";
            }}
          >
            Confira termos legais
          </a>*/}
        </div>
      </div>
      {/* Termos Legais */}
      <Modal open={OpenTermosLegais} hideMenu={true}>
        <TermosLegaisModal>
          {/* 
  <button
            className={modalStyles.c_modal__closeVoltar}
            onClick={() => {
              console.log("download");
            }}
          >
            <img
              src="images/icon-download.svg"
              alt=""
              width="16px"
              height="12px"
            />
          </button>
*/}

          <button
            className={modalStyles.c_modal__closeVoltar}
            onClick={() => {
              setOpenTermosLegais(false);
              document.documentElement.style.overflowY = "initial";
            }}
          >
            <img
              src="images/close-modal-videos.svg"
              alt=""
              width="36px"
              height="36px"
            />
          </button>
        </TermosLegaisModal>
      </Modal>
      {/* Termos Legais */}
    </>
  );
}
