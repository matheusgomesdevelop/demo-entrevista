import { Dispatch, SetStateAction, useMemo, useRef, useState } from "react";

import { styled } from "@stitches/react";

// Styled components
import { ButtonStyled } from "../../form/button";
import { DescStyled, FormStyled } from "../simule-financiamento";
import { TituloStyled } from "../../util/titulo";
import Modal, { ModalContentStyled, ModalFooterStyled, ModalHeaderStyled, ModalStyled } from "./..";
import { IconLeftStyled } from "../../icons";

// Helpers
import { ThemeHelper } from "../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../helpers/theme/theme-component";

interface IVisitaVirtualModalProps {
  state: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  section: ThemeSection;
  corretor_data: Corretor;
}

const VoltarWrapperStyled = styled("div", {
  width: "100%",
  maxWidth: "335px",
  margin: "0 auto",
  zIndex: 1040,
});

export const VisitaVirtualModal = ({ state, open, section, corretor_data }: IVisitaVirtualModalProps) => {
  const formRef: any = useRef(null);

  const [step, setStep] = useState(0);

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Header
  const div_header = useMemo(() => filter_component_by_name(active_components, "footer"), []);
  const get_header_styles = get_component_styles(div_header);

  // Footer
  const div_footer = useMemo(() => filter_component_by_name(active_components, "footer"), []);
  const get_footer_styles = get_component_styles(div_footer);

  // Enviar
  const div_btn_enviar = useMemo(() => filter_component_by_name(active_components, "button-enviar"), []);
  const get_btn_enviar_styles = get_component_styles(div_btn_enviar);

  // Titulo form
  const div_title_form = useMemo(() => filter_component_by_name(active_components, "title-form"), []);
  const get_title_form_styles = get_component_styles(div_title_form);

  return (
    <Modal open={open}>
      <ModalStyled>
        <ModalHeaderStyled
          css={{
            ...get_header_styles,
            height: "138px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {
            /* Step 1*/ step === 0 ? (
              <TituloStyled titulo="escuro" css={{ alignSelf: "center" }}>
                Agende uma visita virtual
              </TituloStyled>
            ) : /* Step 1*/
            step === 1 ? (
              /* Step 2*/ "proximo passo" /* Step 2*/
            ) : step === 2 ? (
              /* Step 3*/ "proximo passo" /* Step 3*/
            ) : null
          }
        </ModalHeaderStyled>

        <FormStyled action="#" onSubmit={(event: any) => event.preventDefault()} ref={formRef}>
          <ModalContentStyled
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {
              <VoltarWrapperStyled>
                <ButtonStyled
                  button={"voltar"}
                  onClick={() => {
                    state(false);
                    document.documentElement.style.overflowY = "initial";
                  }}
                  style={{ marginLeft: "-9px" }}
                >
                  <IconLeftStyled fontSize={24} />
                  <span style={{ fontWeight: "400" }}> Voltar </span>
                </ButtonStyled>
              </VoltarWrapperStyled>
            }
            {step === 0 ? (
              <>
                <TituloStyled titulo={"claro"} css={{ ...get_title_form_styles, fontSize: "24px" }}>
                  Olá! Vamos agendar uma visita virtual?
                </TituloStyled>
                <ButtonStyled
                  button={"agendeVisita"}
                  css={{ ...get_btn_enviar_styles, width: "136px", fontSize: "16px", marginTop: "40px" }}
                  onClick={() => {
                    setStep(step + 1);
                  }}
                >
                  Continuar
                </ButtonStyled>
              </>
            ) : /* Step 1*/
            step === 1 ? (
              /* Step 2*/ "proximo passo" /* Step 2*/
            ) : step === 2 ? (
              /* Step 3*/ "proximo passo" /* Step 3*/
            ) : null}
          </ModalContentStyled>
        </FormStyled>

        <ModalFooterStyled
          css={{
            ...get_footer_styles,
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            padding: "50px",
          }}
        >
          {
            /* Step 1*/ step === 0 ? (
              <>
                <TituloStyled
                  titulo={"claro"}
                  style={{
                    fontSize: "18px",
                    marginLeft: "231px",
                  }}
                >
                  Ou ligue a qualquer momento
                </TituloStyled>
                <DescStyled style={{ marginLeft: "12px" }}>
                  (11) <strong>99876-5432</strong>
                </DescStyled>
              </>
            ) : /* Step 1*/
            step === 1 ? (
              /* Step 2*/ "proximo passo" /* Step 2*/
            ) : step === 2 ? (
              /* Step 3*/ "proximo passo" /* Step 3*/
            ) : null
          }
        </ModalFooterStyled>
      </ModalStyled>
    </Modal>
  );
};
