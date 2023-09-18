import { useRouter } from "next/router";

import styles from "../../../styles/layout/l-solicitar.module.scss";
import styleTpl from "./index.module.scss";

// Components
import Button from "../../../components/button";
import Title from "../../../components/title";

export default function TPLDownloadSucesso() {
  const router = useRouter();

  return (
    <div className={`${styles.l_solicitar} ${styleTpl.tpl}`}>
      <Title texto={"Assinatura de e-mail"} textoDestaque={"Be Home"} />

      {/* Solicitar assinatura */}
      <div className={styles.l_solicitar__processo}>
        <h3
          className={styles.l_solicitar__processo_aguarde}
          style={{ marginTop: "40px" }}
        >
          <strong>Download realizado com Sucesso!</strong>
        </h3>

        <p className={styles.l_solicitar__paragrafo}>
          Veja aqui como inserir a sua assinatura no{" "}
          <strong>Microsoft Outlook</strong>
        </p>
        {/* Botão alterar / download */}
        <div className={styles.l_solicitar__processo_buttons}>
          <Button
            text="Ver Tutorial"
            size="xs"
            callback={() =>
              router.push("/tutorial")
            }
          />
        </div>

        <p
          className={styles.l_solicitar__paragrafo}
          style={{
            fontSize: "18px",
            maxWidth: "400px",
            marginTop: "175px",
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
