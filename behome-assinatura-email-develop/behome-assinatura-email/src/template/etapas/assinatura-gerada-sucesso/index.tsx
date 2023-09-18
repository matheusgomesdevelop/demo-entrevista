import { Dispatch, RefObject, SetStateAction } from "react";

import styles from "../../../styles/layout/l-solicitar.module.scss";

// Components
import Bullet from "../../../components/bullet";
import Button from "../../../components/button";
import Title from "../../../components/title";
import Progress from "../../../components/progress";
import Assinatura from "../../../components/assinatura";

interface ITpl {
  dadosAssinatura: DadosAssinatura;
  assinaturaRef: RefObject<HTMLDivElement>;
  messages: {
    erroGerarAssinatura: string;
    msgEnviando: string;
  };
  setEtapa: Dispatch<SetStateAction<number>>;
  handleDownload: () => void;
}

export default function TPLAssinaturaGeradaSucesso({
  dadosAssinatura,
  assinaturaRef,
  messages,
  setEtapa,
  handleDownload,
}: ITpl) {
  return (
    <div className={styles.l_solicitar}>
      <Title texto={"Assinatura de e-mail"} textoDestaque={"Be Home"} />

      {/* Solicitar assinatura */}
      <div className={styles.l_solicitar__processo} style={{ overflowX: "auto" }}>
        {/* Assinatura gerada */}
        {dadosAssinatura ? (
          <>
            <div className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
              {/* Numeros das etapas (Bullet)*/}
              <Bullet number={1} etapaBullet={true} active={true} />
              <Bullet number={2} etapaBullet={true} active={true} />
              <Bullet number={3} etapaBullet={true} active={true} />

              {/* Progress bar */}
              <div className={styles.l_solicitar__processo_etapas__progress}>
                <Progress size="100" />
              </div>
            </div>
            <h3 className={styles.l_solicitar__processo_aguarde}>
              <strong>3.</strong> Assinatura gerada com sucesso!
            </h3>

            <div className={styles.l_solicitar__processo_assinaturaBox}>
              <Assinatura
                nome={dadosAssinatura.nome}
                departamento={dadosAssinatura.departamento}
                tel={dadosAssinatura.tel}
                creci={dadosAssinatura.creci}
                foto={dadosAssinatura.foto}
                refEl={assinaturaRef}
              />
            </div>

            {/* Mensagem de erro ao gerar assinatura */}
            {messages.erroGerarAssinatura ? (
              <p
                style={{
                  color: "#ff3333",
                  fontSize: "14px",
                  textAlign: "center",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginTop: "20px",
                }}>
                {messages.erroGerarAssinatura}
              </p>
            ) : null}

            {/* Botão alterar / download */}
            <div className={styles.l_solicitar__processo_buttons}>
              <Button text="Alterar" type="info" callback={() => setEtapa(1)} />

              {messages.msgEnviando ? (
                <Button text={messages.msgEnviando} size="xs" />
              ) : (
                <Button text="Download" size="xs" callback={handleDownload} />
              )}
            </div>
          </>
        ) : (
          <>
            <p
              style={{
                color: "#ff3333",
                fontSize: "14px",
                textAlign: "center",
                paddingLeft: "20px",
                paddingRight: "20px",
                marginTop: "20px",
              }}>
              Não foi possível gerar a assinatura, por favor preencha o formulário
            </p>
            {/* Botão alterar / download */}
            <div className={styles.l_solicitar__processo_buttons}>
              <Button text="Voltar" size="sm" callback={() => setEtapa(1)} />
            </div>
          </>
        )}
        {/* Assinatura gerada */}
      </div>
    </div>
  );
}
