import { RefObject } from "react";

import styles from "./assinatura.module.scss";

interface IAssinatura {
  nome: string;
  departamento: string;
  tel: string;
  creci: string;
  foto: string;
  refEl?: RefObject<HTMLDivElement>;
}

export default function Assinatura({ nome, departamento, tel, creci, foto, refEl }: IAssinatura) {
  return (
    <div className={styles.c_assinatura} ref={refEl}>
      <div className={styles.c_assinatura__info}>
        <div className={styles.c_assinatura__foto}>
          <div className={styles.c_assinatura__foto_imagem}>
            <img src={foto} alt="" />
          </div>
          <img src="/images/assinatura/elemento-c.png" alt="" />
        </div>

        <p>
          <img src="/images/assinatura/icon-user.png" alt="" />
          <strong>{nome}</strong>
        </p>

        <span>{departamento}</span>
        {creci && creci[0] !== "_" && (
          <span style={{ textTransform: "uppercase" }}>
            CRECI {creci[creci.length - 1] !== "_" ? creci : creci.replace("-", "").replace("_", "")}
          </span>
        )}
        <p>
          <img src="/images/assinatura/icon-whats.png" alt="" />
          <strong>{tel}</strong>
        </p>
      </div>
    </div>
  );
}
