import { Dispatch, SetStateAction } from "react";

import Image from "next/image";

import styles from "../../styles/layout/l-solicitar.module.scss";
import buttonStyle from "../../components/button/button.module.scss";

// Components
import Bullet from "../../components/bullet";
import Progress from "../../components/progress";
import Title from "../../components/title";

interface ITPL {
  etapa: number;
  setEtapa: Dispatch<SetStateAction<number>>;
}

export default function TPLTutorialStepTree({ etapa, setEtapa }: ITPL) {
  return (
    <div className={styles.l_solicitar}>
      <Title texto={"Inserindo assinatura no"} textoDestaque={"Outlook"} />

      {/* Etapa 3 */}
      <div className={styles.l_solicitar__processo}>
        <div className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
          {/* Numeros das etapas (Bullet)*/}
          <Bullet number={1} etapaBullet={true} active={true} />
          <Bullet number={2} etapaBullet={true} active={true} />
          <Bullet number={3} etapaBullet={true} active={true} />
          <Bullet number={4} etapaBullet={true} inactive={true} />

          {/* Progress bar */}
          <div className={styles.l_solicitar__processo_etapas__progress}>
            <Progress size="60" />
          </div>
        </div>

        {/* Texto da etapa */}
        <p
          className={styles.l_solicitar__paragrafo_etapa}
          style={{
            marginBottom: "14px",
            maxWidth: "510px",
            textAlign: "center",
            lineHeight: "24px",
          }}>
          Nas ferramentas da caixa de edição de textos, clique em{" "}
          <strong>“Imagens”</strong> Selecione o arquivo de imagem da sua assinatura e clique em{" "}
          <strong>“Inserir”</strong>
          {/* Icone */}
          <img width="32" height="30" src="/images/icone.png" className={styles.l_solicitar__paragrafo_etapa_icone} />
        </p>

        <Image width={914} height={363} layout="intrinsic" src="/images/tutorial/4.png" />

        {/* Botão voltar / avançar */}
        <div className={styles.l_solicitar__processo_buttons} style={{ marginTop: "29px" }}>
          <button
            className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2} ${buttonStyle.c_button__info}`}
            onClick={() => setEtapa(etapa - 1)}>
            Voltar
          </button>

          <button
            className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2}`}
            onClick={() => setEtapa(etapa + 1)}>
            Avançar
          </button>
        </div>

        {/* Contato */}
        <p
          className={styles.l_solicitar__paragrafo}
          style={{
            fontSize: "18px",
            maxWidth: "400px",
            marginTop: "83px",
            marginBottom: "26px",
          }}>
          Você ainda tem dúvidas?{" "}
          <a href="https://www.behome.imb.br/contato" target="blank">
            Entre em contato
          </a>
        </p>
      </div>
    </div>
  );
}
