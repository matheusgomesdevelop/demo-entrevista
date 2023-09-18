//IMAGES
import esg from "../../../public/icons/esg.png";
import tree from "../../../public/images/tree.png";

//STYLE
import styles from "./style.module.scss";

//CORE HELPERS
import Image from "next/image";

//COMPONENTS
import { Text } from "@/common/components/Typography/Text";
import { UnderlineButton } from "@/common/components/Button";

export const ESG = () => {
  return (
    <>
      <section id="esg" className={styles.esg_container}>
        {/* Imagem de transição */}
        <div className={styles.esg_container_polygon_container}>
          <div className={styles.esg_container__polygon} />
        </div>
        {/* Imagem de transição */}

        <div className={styles.esg_container_wrapper}>
          <div className={styles.esg_container__esg}>
            <Image src={esg} alt="ESG" />
            <div>
              <Text type="midSize">
                ESG é uma sigla para Environmental, Social and Governance que aponta quando uma empresa é reconhecida
                por suas práticas de responsabilidade ambiental, social e de governança. A Trisul trabalha adotando
                medidas que visam a diminuição dos impactos causados ao meio ambiente e à sociedade, além de
                proporcionar aos clientes o investimento em imóveis sustentáveis.
              </Text>
              <a href="https://www.pracaomaguas.com.br/files/RelatorioESG.pdf" target="_blank">
                <UnderlineButton label="Saiba mais" type="button" />
              </a>
            </div>
            <Image src={tree} alt="Tree" />
          </div>
        </div>
      </section>
    </>
  );
};
