//IMAGES
import aqua from "../../../public/icons/aquaCompany.png";
import edge from "../../../public/icons/edgeCompany.png";
import iso from "../../../public/icons/iso.png";
import procel from "../../../public/icons/procel.png";
import thumbUp from "../../../public/icons/thumbUp.svg";
import building from "../../../public/icons/building.svg";
import building2 from "../../../public/icons/building2.svg";
import markup from "../../../public/icons/markup.svg";

//CORE HELPERS
import Image from "next/image";

//STYLES
import styles from "./style.module.scss";

//COMPONENTS
import { Text } from "@/common/components/Typography/Text";
import { ThinTitle } from "@/common/components/Typography/Title";
import { SolidBackgroundIcon } from "@/common/components/Icon";

export const Trisul = () => {
  return (
    <section className={styles.trisul_container}>
      <div className={styles.trisul_container_wrapper}>
        <div className={styles.trisul_container__trisul}>
          <Text type="midSizeDark">
            A Trisul é a Incorporadora Brasileira pionera em oferecer os seguintes selos de sustentabilidade em parte de
            seus empreendimentos:
          </Text>
          <div className={styles.trisul_container__images}>
            <Image src={aqua} alt="Empreendimento Aqua" />
            <div>
              <Image src={edge} alt="Edge" />
              <Image src={procel} alt="Provel" />
              <Image src={iso} alt="ISO" />
            </div>
          </div>
        </div>
        <div className={styles.trisul_container__trisul_numbers}>
          <ThinTitle type="boldBlue">Trisul em números</ThinTitle>
          <div className={styles.trisul_container__numbers}>
            <SolidBackgroundIcon icon={thumbUp} title="+ de 40" label="anos de experiência" />
            <SolidBackgroundIcon
              icon={building}
              preTitle="Empresa de"
              title="CAPITAL ABERTO"
              label="listada na b3 desde 2007"
            />
            <SolidBackgroundIcon icon={markup} title="+ de 40" label="anos de experiência" />
            <SolidBackgroundIcon icon={building2} title="+ de 60 MIL" label="Unidades entregues" />
          </div>
        </div>
      </div>
    </section>
  );
};
