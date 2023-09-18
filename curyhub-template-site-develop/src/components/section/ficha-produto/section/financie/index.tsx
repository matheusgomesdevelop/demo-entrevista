import { useState, useEffect, useMemo } from "react";

import { styled } from "../../../../../../theme/stitches.config";

// Modal
import ModalSimuleFinanciamento from "../../../../modal/simule-financiamento";
import modalStyles from "../../../../modal/index.module.scss";
import Modal from "../../../../modal";

// Styled components
import { ButtonStyled } from "../../../../form/button";
import { TituloStyled } from "../../../../util/titulo";
import { SectionContentStyled, SectionWrapperStyled } from "../../../../structure";

// Helpers
import { ThemeHelper } from "../../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../../helpers/theme/theme-component";

const DescFinancieStyled = styled("p", {
  fontSize: "18px",
  letterSpacing: "0",
  fontWeight: "300",
  color: "$highContrasText",
  maxWidth: "535px",
  marginBottom: "0",
});

interface IFinancie {
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function Financie({ section, corretor_data }: IFinancie) {
  const [modalSimuleFinanciamento, setModalSimuleFinanciamento] = useState<boolean>(false);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setModalSimuleFinanciamento(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    modalSimuleFinanciamento ? window.addEventListener("keyup", fechar) : null;
  }, [modalSimuleFinanciamento]);

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Botão
  const div_botao = useMemo(() => filter_component_by_name(active_components, "button-financie"), []);
  const get_botao_styles = get_component_styles(div_botao);

  return (
    <>
      <SectionWrapperStyled>
        <SectionContentStyled style={{ paddingBottom: "40px" }}>
          <TituloStyled css={{ ...get_titulo_styles }} titulo={"claro"}>
            Financie este imóvel
          </TituloStyled>

          <DescFinancieStyled>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna
          </DescFinancieStyled>

          <ButtonStyled
            button={"simularFinanciamento"}
            onClick={() => {
              setModalSimuleFinanciamento(true);
              document.documentElement.style.overflowY = "hidden";
            }}
            css={{ ...get_botao_styles, marginTop: "18px" }}
          >
            SIMULAR FINANCIAMENTO
          </ButtonStyled>
        </SectionContentStyled>
      </SectionWrapperStyled>

      {/* Modal Simule Financiamento */}
      <Modal open={modalSimuleFinanciamento}>
        <ModalSimuleFinanciamento state={setModalSimuleFinanciamento} section={section} corretor_data={corretor_data} />
      </Modal>
      {/* Modal Simule Financiamento */}
    </>
  );
}
