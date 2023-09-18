import { useState, useEffect, useMemo } from "react";

import { styled } from "../../../../../../theme/stitches.config";

// Styled Components
import { CardBairroStyled } from "../../../../ficha/card-bairro";
import { TituloStyled } from "../../../../util/titulo";
import { ButtonStyled } from "../../../../form/button";
import { SectionContentStyled, SectionWrapperStyled } from "../../../../structure";

// Modal
import Modal from "../../../../modal";
import ModalConhecaBairro from "../../../../modal/conheca-bairro";

// Helpers
import { filter_component_by_name, get_component_styles } from "../../../../../helpers/theme/theme-component";
import { ThemeHelper } from "../../../../../helpers/theme";

interface IConhecaBairro {
  section: ThemeSection;
  corretor_data: Corretor;
}

const NomeBairroStyled = styled("h2", {
  color: "$h2",
  fontSize: "20px",
  letterSpacing: "0",
  fontWeight: "400",
});

const DescBairroStyled = styled("p", {
  color: "$h3",
  fontSize: "16px",
  fontWeight: "300",
});

export default function ConhecaBairro({ section, corretor_data }: IConhecaBairro) {
  const [modalConhecaBairro, setModalConhecaBairro] = useState(false);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setModalConhecaBairro(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    modalConhecaBairro ? window.addEventListener("keyup", fechar) : null;
  }, [modalConhecaBairro]);

  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Nome bairro
  const div_nome_bairro = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_nome_bairro_styles = get_component_styles(div_nome_bairro);

  return (
    <>
      <SectionWrapperStyled style={{ paddingBottom: "0" }}>
        <SectionContentStyled style={{ padding: "0" }}>
          <CardBairroStyled>
            <div style={{ paddingTop: "24px", paddingBottom: "35px" }}>
              <TituloStyled
                titulo={"subtitle"}
                css={{ color: get_nome_bairro_styles ? get_nome_bairro_styles.color : "$h2", paddingLeft: "0" }}
              >
                Conheça
              </TituloStyled>
              <NomeBairroStyled
                css={{
                  marginTop: "11px",
                  marginBottom: "21px",
                }}
              >
                O Bairro - Nome do Bairro
              </NomeBairroStyled>

              <DescBairroStyled>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              </DescBairroStyled>
            </div>

            <img src="/images/template/bairro.png" alt="" style={{ objectFit: "cover" }} width={"100%"} />
          </CardBairroStyled>
        </SectionContentStyled>
      </SectionWrapperStyled>

      {/* Modal Conheca o Bairro */}
      <Modal open={modalConhecaBairro}>
        <ModalConhecaBairro>
          <ButtonStyled
            onClick={() => {
              setModalConhecaBairro(false);
              document.documentElement.style.overflowY = "initial";
            }}
          >
            <img src="/images/icon-voltar.svg" alt="" width="18px" height="16px" />
            Voltar
          </ButtonStyled>
        </ModalConhecaBairro>
      </Modal>
      {/* Modal Conheca o Bairro */}
    </>
  );
}
