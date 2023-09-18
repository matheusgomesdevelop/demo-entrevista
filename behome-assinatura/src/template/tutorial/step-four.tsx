import { Dispatch, SetStateAction } from "react";

import Image from "next/image";

import styles from "../../styles/layout/l-solicitar.module.scss";
import buttonStyle from "../../components/button/button.module.scss";

// Components
import Title from "../../components/title";
import Bullet from "../../components/bullet";
import Progress from "../../components/progress";

interface ITPL {
  etapa: number;
  setEtapa: Dispatch<SetStateAction<number>>;
}

export default function TPLTutorialStepFour({ etapa, setEtapa }: ITPL) {
  return (
    <div className={styles.l_solicitar}>
      <Title texto={"Inserindo assinatura no"} textoDestaque={"Outlook"} />

      {/* Etapa 4 */}
      <div className={styles.l_solicitar__processo}>
        <div
          className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}
        >
          {/* Numeros das etapas (Bullet)*/}
          <Bullet number={1} etapaBullet={true} active={true} />
          <Bullet number={2} etapaBullet={true} active={true} />
          <Bullet number={3} etapaBullet={true} active={true} />
          <Bullet number={4} etapaBullet={true} active={true} />

          {/* Progress bar */}
          <div className={styles.l_solicitar__processo_etapas__progress}>
            <Progress size="100" />
          </div>
        </div>

        {/* Texto da etapa */}
        <p
          className={styles.l_solicitar__paragrafo_etapa}
          style={{
            maxWidth: "752px",
            textAlign: "center",
            lineHeight: "24px",
          }}
        >
          IMPORTANTE: Nas opções <strong>“Escolha a assinatura padrão”</strong>,
          defina a sua nova assinatura nas opções
        </p>

        <p
          className={styles.l_solicitar__paragrafo_etapa}
          style={{
            marginBottom: "10px",
            maxWidth: "480px",
            textAlign: "center",
            lineHeight: "24px",
          }}
        >
          <strong>“Novas Mensagens”</strong>e{" "}
          <strong>“Respostas/Encaminhamentos”</strong>. Clique em{" "}
          <strong>“Salvar”</strong> e, em seguida, <strong>“OK”</strong>
        </p>

        <Image
          width={600}
          height={415}
          layout="intrinsic"
          src="/images/tutorial/5.png"
        />

        {/* Botão voltar / avançar */}
        <div
          className={styles.l_solicitar__processo_buttons}
          style={{ marginTop: "29px" }}
        >
          <button
            className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2} ${buttonStyle.c_button__info}`}
            onClick={() => setEtapa(etapa - 1)}
          >
            Voltar
          </button>

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
