import styles from "../../../styles/layout/l-solicitar.module.scss";

// Components
import Bullet from "../../../components/bullet";
import Progress, { ProgressValidation } from "../../../components/progress";
import Title from "../../../components/title";

export default function TPLValidandoInformacoes() {
  return (
    <div className={styles.l_solicitar}>
      <Title texto={"Assinatura de e-mail"} textoDestaque={"Be Home"} />

      {/* Solicitar assinatura */}
      <div className={styles.l_solicitar__processo}>
        <div
          className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}
        >
          {/* Numeros das etapas (Bullet)*/}
          <Bullet number={1} etapaBullet={true} active={true} />
          <Bullet number={2} etapaBullet={true} active={true} />
          <Bullet number={3} etapaBullet={true} inactive={true} />

          {/* Progress bar */}
          <div className={styles.l_solicitar__processo_etapas__progress}>
            <Progress size="50" />
          </div>
        </div>
        <h3 className={styles.l_solicitar__processo_aguarde}>
          <strong>2.</strong> Informações em validação.{" "}
          <strong>Aguarde...</strong>
        </h3>
        {/* Animação de enviando... */}
        <ProgressValidation size="50" />
      </div>
    </div>
  );
}
