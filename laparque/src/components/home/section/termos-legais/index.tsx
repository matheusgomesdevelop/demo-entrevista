import { useState, useEffect } from 'react';

import styles from './index.module.scss';

import modalStyles from '../../../modal/index.module.scss';
import Modal from '../../../modal';
import TermosLegaisModal from '../../../modal/termos-legais';

export default function TermosLegais() {
  const [OpenTermosLegais, setOpenTermosLegais] = useState(false);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === 'Escape') {
        setOpenTermosLegais(false);
        document.documentElement.style.overflowY = 'initial';
      }
    }

    OpenTermosLegais ? window.addEventListener('keyup', fechar) : null; }, [OpenTermosLegais]); 

    return ( 
      <> 
      <div className={styles.TermosLegais} id="secao-termos-legais"> 
        <div className={styles.TermosLegais__content}> 
          <p className={styles.TermosLegais__content_textoLegal}> 
            Jaçanã Empreendimentos
            Imobiliários SPE Ltda. Rua dos Pinheiros, 870 – 8.º andar – conj.
            84B – Pinheiros – São Paulo – SP. Incorporação Registrada sob R5
            na matrícula nº 159.571 do 10º Cartório de Registro de Imoveis de
            SP, em 02/07/2021. Área recreativa externa (reservada para
            atendimento ao futuro melhoramento viário). O salão de festas
            gourmet, a oficina de bicicletas, o espaço delivery, o Lamarket e
            o lounge coberto serão entregues com a torre A. A infraestrutura
            para futura instalação do ar condicionado consiste na entrega de
            ponto de dreno e ponto de energia. A instalação de rede
            frigorígena, equipamentos e sanca serão por conta do comprador.
            As áreas comuns serão entregues equipadas e decoradas conforme
            Memorial Descritivo. As imagens são meramente ilustrativas, com
            sugestão de decoração e paisagismo. A vegetação que compõem o
            paisagismo retratado nas perspectivas é meramente ilustrativa e
            representa o porte adulto. Na entrega do empreendimento, poderá
            apresentar diferenças de tamanho e porte, mas estará de acordo
            com o projeto de paisagismo. Os móveis e utensílios são meramente
            ilustrativos, de dimensões comerciais e não fazem parte do
            Compromisso de Compra e Venda. *Disponível para algumas
            unidades. **Preço de R$ 235 mil referente a unidade 106 da torre
            B Bálsamo. Tabela fevereiro/2022. Sujeita a alteração sem aviso
            prévio. Endereço do Laparque: Rua Marina Ciufuli Zanfelice,176.
            Consulte a equipe de vendas no stand para documentação
            necessária. Vendas: Lopes CRECI/SP 24.073-J e Housen Imóveis e
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
              document.documentElement.style.overflowY = 'initial';
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
