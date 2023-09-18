import Image from "next/image";

import styles from "./assinatura.module.scss";

interface IAssinatura {
  nome: any;
  sobrenome: any;
  departamento: any;
  tel: any;
  cel_corporativo?: any;
  refEl?: any;
}

export default function Assinatura({ nome, sobrenome, departamento, tel, cel_corporativo, refEl }: IAssinatura) {
  return (
    <div className={styles.c_assinatura} ref={refEl}>
      {/* Parte superior com as informações */}
      <div className={styles.c_assinatura__info}>
        <div className={styles.c_assinatura__info_logo}>
          <img src="/logo-cury-branco.png" alt="Cury - Construtora" />

          <div className={styles.c_assinatura__quadradoVerde}></div>
          <div className={styles.c_assinatura__quadradoAzul}></div>

          <div className={styles.c_assinatura__info_socialIcons}>
            <img src="/images/social-icons.png" alt="" />
            <span>cury.net</span>
          </div>
        </div>

        <div className={styles.c_assinatura__info_pessoa}>
          <div className={styles.c_assinatura__quadradoTopo}>
            <div className={styles.c_assinatura__quadradoVerde}></div>
            <div className={styles.c_assinatura__quadradoAzul}></div>
          </div>

          <h1>{`${nome} ${sobrenome}`}</h1>
          <p>{departamento}</p>

          <ul>
            <li>{tel}</li>
            {cel_corporativo && <li>{cel_corporativo}</li>}
          </ul>

          <div className={styles.c_assinatura__info_vetorFundoBg}>
            <img src="/images/vetor-fundo-bg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
