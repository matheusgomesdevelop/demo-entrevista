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
            E.D.I Serra das Araras Empreendimentos Imobiliários SPE Ltda. – Rua
            dos Pinheiros, 870, 8º and. – conj. 84, Pinheiros/SP. Incorporação
            registrada sob nº R.04 da matrícula 328.117, de 30/08/2021, do 9º
            Oficial de Registro de Imóveis de São Paulo. *As vagas de garagem
            estão disponíveis para algumas unidades. Consulte disponibilidade.
            **Preço total R$ 264.000,00 referente à unidade 103 da torre A, com
            vaga de garagem. Tabela de Novembro/2021 sujeita à alteração sem
            aviso prévio. As imagens são meramente ilustrativas e preliminares,
            com sugestão de decoração e paisagismo sujeitas a alterações. A
            vegetação que compõe o paisagismo retratado nas perspectivas é
            meramente ilustrativa e representa o porte adulto. Na entrega do
            empreendimento, poderá apresentar diferenças de tamanho e porte, mas
            estará de acordo com o projeto de paisagismo. As áreas comuns serão
            entregues equipadas e decoradas conforme memorial descritivo.
            Consulte demais condições e informações no plantão de vendas. Housen
            Imóveis e Gestão Ltda. – CRECI/SP 036973-J.
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
