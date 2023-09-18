import { useState, useEffect, useMemo } from "react";

import { styled } from "../../../../../../theme/stitches.config";

// Styled Components
import { ButtonStyled } from "../../../../form/button";
import { TituloStyled } from "../../../../util/titulo";
import { SectionContentStyled } from "../../../../structure";
import { VisitaVirtualModal } from "../../../../modal/visita-virtual";
import { ThemeHelper } from "../../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../../helpers/theme/theme-component";

// Helpers

const DescVisitaStyled = styled("p", {
  fontSize: "18px",
  letterSpacing: "0",
  fontWeight: "300",
  color: "$highContrasText",
  marginTop: "21px",
  marginBottom: "21px",
  maxWidth: "535px",
});

const CardStyled = styled("div", {
  width: "218px",
  height: "448px",
  borderRadius: "18px",
  border: "4px solid $white",
  display: "block",
  position: "absolute",
  left: "0",
  top: "-70px",
  overflow: "hidden",

  "@mobile": {
    left: "-188px",
  },
});

const VisitaVirtualStyled = styled("div", {
  display: "flex",
  width: "100%",
  padding: "44px 0",
  background: "$uiBg",
  position: "relative",
  margin: "0 auto",
  height: "362px",

  "@mobile": {
    marginTop: "32px",
  },
});

const VisitaVirtualContentStyled = styled("div", {
  marginLeft: "248px",
  maxWidth: "403px",

  "@mobile": {
    marginLeft: "32px",
  },
});

interface IVisitaVirtual {
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function VisitaVirtual({ section, corretor_data }: IVisitaVirtual) {
  const [modalVisitaVirtual, setModalVisitaVirtual] = useState<boolean>(false);

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setModalVisitaVirtual(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    modalVisitaVirtual ? window.addEventListener("keyup", fechar) : null;
  }, [modalVisitaVirtual]);

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Sub Titulo
  const div_sub_titulo = useMemo(() => filter_component_by_name(active_components, "sub-titulo-secao"), []);
  const get_sub_titulo_styles = get_component_styles(div_sub_titulo);

  // Sub Titulo
  const div_botao = useMemo(() => filter_component_by_name(active_components, "button-visita"), []);
  const get_botao_styles = get_component_styles(div_botao);

  // Descricao
  const div_descricao = useMemo(() => filter_component_by_name(active_components, "descricao"), []);
  const get_descricao_styles = get_component_styles(div_descricao);

  return (
    <>
      <VisitaVirtualStyled css={{ ...section.styles }}>
        <SectionContentStyled
          style={{ position: "relative", margin: "0 auto", paddingTop: "0", paddingBottom: "50px" }}
        >
          <CardStyled>
            <img src="/images/template/visita.jpg" alt="" />
          </CardStyled>

          <VisitaVirtualContentStyled>
            <TituloStyled css={{ ...get_titulo_styles }} titulo={"escuro"}>
              Visita Virtual
            </TituloStyled>
            <TituloStyled titulo={"claro"} css={{ ...get_sub_titulo_styles }}>
              Agende
            </TituloStyled>

            <DescVisitaStyled css={{ ...get_descricao_styles }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            </DescVisitaStyled>

            <ButtonStyled
              button={"visitaVirtual"}
              onClick={() => {
                setModalVisitaVirtual(true);
                document.documentElement.style.overflowY = "hidden";
              }}
              css={{ ...get_botao_styles }}
            >
              Agende visita virtual
            </ButtonStyled>
          </VisitaVirtualContentStyled>
        </SectionContentStyled>
      </VisitaVirtualStyled>
      <VisitaVirtualModal
        open={modalVisitaVirtual}
        state={setModalVisitaVirtual}
        section={section}
        corretor_data={corretor_data}
      />
    </>
  );
}
