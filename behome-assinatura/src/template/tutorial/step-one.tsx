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
export default function TPLTutorialStepOne({ etapa, setEtapa }: ITPL) {
  return (
    <div className={`${styles.l_solicitar}`}>
      <Title texto={"Inserindo assinatura no"} textoDestaque={"Outlook"} />

      {/* Solicitar assinatura */}
      <div className={styles.l_solicitar__processo}>
        <div
          className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}
        >
          {/* Numeros das etapas (Bullet)*/}
          <Bullet number={1} etapaBullet={true} active={true} />
          <Bullet number={2} etapaBullet={true} inactive={true} />
          <Bullet number={3} etapaBullet={true} inactive={true} />
          <Bullet number={4} etapaBullet={true} inactive={true} />

          {/* Progress bar */}
          <div className={styles.l_solicitar__processo_etapas__progress}>
            <Progress size="0" />
          </div>
        </div>

        {/* Texto da etapa */}
        <p
          className={styles.l_solicitar__paragrafo_etapa}
          style={{ marginBottom: "12px" }}
        >
          Clique em <strong>“Novo Email”</strong>
        </p>

        <Image
          width={530}
          height={129}
          layout="intrinsic"
          src="/images/tutorial/1.png"
        />

        {/* Texto da etapa */}
        <p
          className={styles.l_solicitar__paragrafo_etapa}
          style={{ marginTop: "46px", marginBottom: "12px" }}
        >
          No menu, clique em <strong>“Assinaturas</strong>
        </p>

        <Image
          width={781}
          height={120}
          layout="intrinsic"
          src="/images/tutorial/2.png"
        />

        {/* Botão alterar / download */}
        <div className={styles.l_solicitar__processo_buttons}>
          <button
            className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2}`}
            onClick={() => setEtapa(etapa + 1)}
          >
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
          }}
        >
          Você ainda tem dúvidas?{" "}
          <a href="https://www.behome.imb.br/contato" target="blank">
            Entre em contato
          </a>
        </p>
      </div>
    </div>
  );
}
