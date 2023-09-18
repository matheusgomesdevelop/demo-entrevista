import { Dispatch, SetStateAction } from "react";

import styles from "../../../styles/layout/l-solicitar.module.scss";

// Components
import Bullet from "../../../components/bullet";
import Button from "../../../components/button";
import Title from "../../../components/title";

interface ITpl {
  etapa: number;
  setEtapa: Dispatch<SetStateAction<number>>;
}

export default function TPLSolicitarAssinatura({ etapa, setEtapa }: ITpl) {
  return (
    <div className={styles.l_solicitar}>
      <Title texto={"Assinatura de e-mail"} textoDestaque={"Be Home"}>
        Nesta página, você pode solicitar a sua nova assinatura de e-mail.
      </Title>

      {/* Solicitar assinatura */}
      <div className={styles.l_solicitar__processo}>
        <h2>O processo é muito simples:</h2>

        <div className={styles.l_solicitar__processo_etapas}>
          {/* Numeros das etapas (Bullet)*/}
          <Bullet
            inactive={true}
            number={1}
            text="Preencha adequadamente o formulário;"
          />
          <Bullet
            number={2}
            text="Aguarde a validação interna das suas informações;"
          />
          <Bullet
            active={true}
            number={3}
            text="Com as informações aprovadas, o arquivo será disponibilizado para download."
          />
        </div>
      </div>

      {/* Solicite agora */}
      <Button
        text="Solicite agora a sua assinatura!"
        size="lg"
        callback={() => setEtapa(etapa + 1)}
      />
    </div>
  );
}
