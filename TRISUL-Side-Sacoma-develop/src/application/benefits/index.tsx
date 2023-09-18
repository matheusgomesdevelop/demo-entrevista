import { useState } from "react";

//IMAGES
import Image from "next/image";
import Logo3D from "../../../public/images/logo3D.png";
import quality from "../../../public/icons/badget.svg";
import beachClub from "../../../public/icons/beachClub.svg";
import security from "../../../public/icons/security.svg";
import trainMobility from "../../../public/icons/trainMobility.svg";
import esquadro from "../../../public/icons/esquadro.svg";
import bankNote from "../../../public/icons/bankNote.svg";

//STYLE
import styles from "./style.module.scss";

//COMPONENTS
import { UnderlineButton } from "@/common/components/Button";
import { Text } from "@/common/components/Typography/Text";
import { BenefitsIcon } from "@/common/components/Icon";
import Modal from "@/common/components/Modal";
import ModalFormTel from "../modal/form-tel";

export const SacomaBenefits = () => {
  const [isTeltOpen, setIsTelOpen] =
    useState<boolean>(false);
  return (
    <>
    <section className={styles.benefits}>
      <div className={styles.benefits_container} id="benefits">
        <aside className={styles.benefits_container__left_aside}>
          <Image src={Logo3D} alt="Logo Trisul 3D" className={styles.benefits_container__image} />
        </aside>
         <aside className={styles.benefits_container__right_aside}>
          <p className={styles.benefits_container__benefits_title}>
            por que escolher um <span>side</span>?
          </p>
          <Text style={{maxWidth: "1100px", textAlign: "justify"}}>
          Tudo aqui é pensado com cuidado. Pensado nas pessoas, nos seus sonhos e ideais. Da escolha do terreno à entrega das chaves. Do desenho
          da fachada e das plantas. No endereço e em todo lazer. Estamos ao seu lado.
          Entregamos qualidade construtiva e proporcionamos qualidade de vida para quem vai morar.
          Você imagina, a Trisul realiza.
          </Text>

          {/* List */}
          <div className={styles.benefits_container__benefits}>
            <BenefitsIcon
              icon={quality}
              label={
                "São mais de 40 anos de experiência em construção civil, com profissionais capacitados, fornecedores de confiança, tecnologia de ponta e preços competitivos, além do compromisso de realizar as entregas no prazo."
              }
              iconHeight={80}
              iconWidth={80}
            >
              <>
                QUALIDADE TRISUL
              </>
            </BenefitsIcon>
            <BenefitsIcon
              icon={beachClub}
              label={
                "Um clube residencial que contempla o bem-estar e a tranquilidade, sem sair de casa. São espaços exclusivos que aliam qualidade de vida, diversão, convivência e estímulos ao esporte e vida saudável."
              }
              iconHeight={80}
              iconWidth={80}
            >
              <>
                LAZER
                  DE CLUBE
              </>
            </BenefitsIcon>
            <BenefitsIcon
              icon={security}
              label={
                "Monitoramento das áreas feito por equipamentos de alta tecnologia e com posicionamento estratégico, proporcionam maior qualidade de cobertura e permite que os moradores tenham mais tranquilidade e maior garantia de segurança."
              }
              iconHeight={80}
              iconWidth={80}
            >
              <>
                SEGURANÇA 24H
              </>
            </BenefitsIcon>
            <BenefitsIcon
              icon={trainMobility}
              label={
                "Em cada escolha de endereço prevalece a capacidade de deslocamento das pessoas. Na correria do dia a dia, morar em uma localização com fácil acesso a diversas opções de transporte, serviços e estruturas de comércio, significa viver bem. Fazemos tudo para tornar a vida das pessoas mais prática e fácil."
              }
              iconHeight={80}
              iconWidth={80}
            >
              <>
                MOBILIDADE URBANA
              </>
            </BenefitsIcon>
            <BenefitsIcon
              icon={esquadro}
              label={
                "Para garantir que sua casa atenda todas as suas necessidades, desenhamos um conceito de plantas que têm como foco a funcionalidade, conforto e otimização dos espaços."
              }
              iconHeight={80}
              iconWidth={80}
            >
              <>
                PLANTAS  FUNCIONAIS
              </>
            </BenefitsIcon>
            <BenefitsIcon
              icon={bankNote}
              label={
                "Um imóvel constitui um grande valor de investimento. Aqui, respeitamos seu planejamento financeiro, oferecendo as melhores condições comerciais. Além disso, colocamos à sua disposição um time de especialistas, prontos para te ajudar nessa conquista."
              }
              iconHeight={80}
              iconWidth={80}
            >
              <>
                CABE NO BOLSO
              </>
            </BenefitsIcon>
          </div>
         {/* List*/}

          <a onClick={() => setIsTelOpen(true)}>
            <UnderlineButton
              label="Consulte um corretor"
              type="button"
            />
          </a>
        </aside> 
        </div>
      </section>
      {isTeltOpen && (
        <Modal
          open={isTeltOpen}
          onClose={() => setIsTelOpen(false)}>
          <ModalFormTel setIsOpen={setIsTelOpen} />
        </Modal>
      )}
    </>
  );
};
