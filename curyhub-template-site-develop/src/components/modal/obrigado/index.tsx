import { useRouter } from "next/router";
import Modal, { ModalContentStyled, ModalStyled } from "..";
import { ButtonStyled } from "../../form/button";
import { TextStyled, BoldTextStyled } from "../../util/titulo";

interface IModalObrigadoEnvioEmailProps {
  open: boolean;
  closeModal: () => void;
}

export default function ModalObrigadoEnvioEmail({ open = false, closeModal }: IModalObrigadoEnvioEmailProps) {
  const router = useRouter();

  return (
    <Modal open={open} hideMenu transparent>
      <ModalStyled
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            background: "white",
            borderRadius: "8px",
            padding: "16px",
            maxWidth: "536px",
          }}
        >
          <BoldTextStyled>Obrigado!</BoldTextStyled>
          <ModalContentStyled>
            <TextStyled>Entro em contato nos próximos minutos.</TextStyled>
            <ButtonStyled
              button={"retornar"}
              style={{ alignSelf: "center", margin: "51px 0 0" }}
              onClick={() => {
                router.push("/imoveis/teste"), closeModal();
              }}
            >
              Retornar
            </ButtonStyled>
          </ModalContentStyled>
        </div>
      </ModalStyled>
    </Modal>
  );
}
