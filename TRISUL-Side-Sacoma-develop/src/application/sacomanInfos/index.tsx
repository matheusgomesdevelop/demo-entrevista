//CORE HELPERS
import Image from "next/image";

//STYLES
import styles from "./style.module.scss";
// Image
import logo from "../../../public/images/logoSacoma.svg";
import doubleArrow from "../../../public/icons/doubleArrow.svg";
import totem from "../../../public/images/trainTotem.png";

//COMPONENTS
import { SolidBackgroundButton } from "@/common/components/Button";

export const SacomaInfos = () => {
  return (
    <section id="infos" className={styles.sacoman_infos_container}>
      {/* Container */}
      <div className={styles.sacoman_infos_container__infos_container}>
        <div className={styles.sacoman_infos_container__logo}>
          <Image src={logo} alt="Logo Side Sacomã" />

          {/*
          <SolidBackgroundButton label="SIMULE AQUI" />
          <p>
            Use o seu <strong>FGTS</strong>
          </p>
         */}
        </div>

        {/* Diferenciais fgts */}
        <div className={styles.sacoman_infos_container__infos_aside}>
          <div className={styles.sacoman_infos_container__infos_aside_inline}>
            <div className={styles.sacoman_infos_container__info}>
              <div>
                <Image src={doubleArrow} alt="Layout arrow" />
              </div>
              <div>
                <h3>
                  <strong>2</strong> e <strong>3</strong>
                  <br /> DORMS. <span>(suíte)</span>
                </h3>
                <p>VARANDA GOURMET* VAGA*</p>
              </div>
            </div>
            <div className={styles.sacoman_infos_container__info}>
              <div>
                <Image src={doubleArrow} alt="Layout arrow" />
              </div>
              <div>
                <h3>GANHE TEMPO E QUALIDADE DE VIDA </h3>
                <p>
                  More a apenas <b>2 min</b>.
                  <br />
                  Da estação do Metrô.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sacoman_infos_container__infos_aside_inline}>
            <div className={styles.sacoman_infos_container__info}>
              <div>
                <Image src={doubleArrow} alt="Layout arrow" />
              </div>
              <div>
                <h3>
                  CLUBE <br />
                  RESIDENCIAL
                </h3>
                <span>+ DE 30</span> <p>ITENS DE LAZER</p>
              </div>
            </div>
            <div className={styles.sacoman_infos_container__info}>
              <div>
                <Image src={doubleArrow} alt="Layout arrow" />
              </div>
              <div>
                <h3>
                  POR TODOS OS LADOS <br />
                  UM EMPREENDIMENTO <br />
                  COMPLETO.
                </h3>
                <span>+ DE 25</span> <p>DIFERENCIAIS</p>
              </div>
            </div>
          </div>
        </div>
        {/* Diferenciais fgts */}

        <Image src={totem} alt="Train Totem" className={styles.sacoman_infos_container__infos_container__totem} />
      </div>
      {/* Container */}
    </section>
  );
};
