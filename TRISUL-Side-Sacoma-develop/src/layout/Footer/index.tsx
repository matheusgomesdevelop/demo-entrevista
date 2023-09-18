//IMAGES
import emailIcon from "../../../public/icons/emailIcon.svg";
import messageIcon from "../../../public/icons/messageIcon.svg";
import phoneIcon from "../../../public/icons/phoneIcon.svg";

//STYLES
import styles from "./style.module.scss";

//CORE HELPERS
import { styled } from "@stitches/react";

//COMPONENTS
import { Icon } from "@/common/components/Icon";
import ButtonWhatsFlutuante from "@/common/components/ButtonWhatsFlutuante";
import { useEffect, useState } from "react";
import FormCtaWhatsapp from "@/common/components/Util/form-cta-whatsapp";
import ModalFormConsultor from "@/application/modal/form-consultor";
import Modal from "@/common/components/Modal";
import ModalFormTel from "@/application/modal/form-tel";
import { HypnoboxModal } from "@/application/hypnoboxChat/modal";
import { campos_utm } from "@/helpers/track/track";
import { useHypnoboxchatUrl } from "@/application/hypnoboxChat/hook/useHypnoboxchatUrl";

const FooterWrapper = styled("footer", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#1F1F21E5",
  height: "97px",
  width: "100vw",
  position: "fixed",
  bottom: "0",
  left: "0",
  zIndex: "99",
});

export const FooterLayout = () => {
  const [isWhatsOpen, setIsWhatsOpen] = useState<boolean>(false);
  const [isConsultOpen, setIsConsultOpen] = useState<boolean>(false);
  const [isTeltOpen, setIsTelOpen] = useState<boolean>(false);

  const [chatData, setChatData] = useState<{ midia: string; produto: number }>({
    midia: "",
    produto: 0,
  });

  useEffect(() => {
    const { utm_medium, utm_source, utm_campaign, utm_content, utm_term } = campos_utm();
    const produto_id = 45576;

    const midia = utm_medium ? utm_medium : "Acesso Direto";

    const join_utm = `${"LP-MoP"}-${midia}-${utm_campaign}-${utm_content}-${utm_term}`;

    setChatData({
      midia: join_utm,
      produto: produto_id,
    });
  }, []);

  return (
    <>
      <FooterWrapper>
        <div className={styles.first_footer_section}>
          <b>Gostou?</b> Fale agora mesmo com nossa equipe.
        </div>
        <div className={styles.second_footer_section}>
          <a onClick={() => setIsTelOpen(true)}>
            <Icon icon={emailIcon} label="E-mail" iconHeight={23.33} iconWidth={23.33} />
          </a>
          <a
            onClick={() => {
              window.open(useHypnoboxchatUrl(chatData));
            }}
            style={{ cursor: "pointer" }}
          >
            <Icon icon={messageIcon} label="Chat" iconHeight={23.33} iconWidth={23.33} />
          </a>
          <a onClick={() => setIsTelOpen(true)}>
            <Icon icon={phoneIcon} label="Telefone" iconHeight={23.33} iconWidth={23.33} />
          </a>
        </div>
      </FooterWrapper>

      {/* Cta whats flutuante */}
      <ButtonWhatsFlutuante />
      {/* Cta whats flutuante */}

      {/* <HypnoboxModal isOpen={isWhatsOpen}
        onClose={() => setIsWhatsOpen(false)}
        produto={ chatData.produto }
        midia={ chatData.midia }
      /> */}

      {isConsultOpen && (
        <Modal open={isConsultOpen} onClose={() => setIsConsultOpen(false)}>
          <ModalFormConsultor setIsOpen={setIsConsultOpen} />
        </Modal>
      )}

      {isTeltOpen && (
        <Modal open={isTeltOpen} onClose={() => setIsTelOpen(false)}>
          <ModalFormTel setIsOpen={setIsTelOpen} />
        </Modal>
      )}
    </>
  );
};
