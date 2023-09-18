import { useRouter } from "next/router";

import Image from "next/image";

import styles from "../../styles/layout/l-solicitar.module.scss";

// Components
import Button from "../../components/button";
import Title from "../../components/title";

export default function TPLTutorialStepFinal() {
  const router = useRouter();

  return (
    <div className={styles.l_solicitar}>
      <Title
        texto={"Parabéns!"}
        htmlDestaque={
          <>
            <strong>
              Sua nova assinatura <b>Be Home</b> está configurada.
            </strong>
          </>
        }
        colorTextReversed={true}
      />

      {/* Etapa Final */}
      <div
        className={styles.l_solicitar__processo}
        style={{ marginTop: "30px" }}
      >
        <div style={{marginTop: "30px"}}>
        <Image
          width={178}
          height={178}
          layout="intrinsic"
          src="/images/parabens.svg"
        />
        </div>

        {/* Botão Sair */}
        <div
          className={styles.l_solicitar__processo_buttons}
          style={{ marginTop: "112px" }}
        >
          <Button
            text="SAIR"
            type="primary"
            size="sm"
            callback={() => router.push("/")}
          />
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
