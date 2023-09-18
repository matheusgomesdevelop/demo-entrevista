import { useMemo } from "react";

import { styled } from "../../../../../theme/stitches.config";

// Styled componentes
import { InputStyled } from "../../../form/input";
import { IconEnvelopeClosedStyled } from "../../../icons";
import { SectionContentStyled, SectionWrapperStyled } from "../../../structure";
import { TituloStyled } from "../../../util/titulo";
import { ButtonStyled } from "../../../form/button";

// Helpers
import { ThemeHelper } from "../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";

const FormStyled = styled("form", {
  display: "flex",
  maxWidth: "552px",
  flexDirection: "column",
  gap: "32px",
  marginTop: "32px",
});

interface IRecebaAlertas {
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function RecebaAlertas({ section, corretor_data }: IRecebaAlertas) {
  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Icone Envelope
  const div_icon = useMemo(() => filter_component_by_name(active_components, "icon-envelope"), []);
  const get_icon_styles = get_component_styles(div_icon);

  // Texto Input
  const div_input_text = useMemo(() => filter_component_by_name(active_components, "input-text"), []);
  const get_input_text_styles = get_component_styles(div_input_text);

  // Botao
  const div_botao = useMemo(() => filter_component_by_name(active_components, "button-enviar"), []);
  const get_botao_styles = get_component_styles(div_botao);

  return (
    <SectionWrapperStyled css={{ ...section.styles, marginTop: "0", paddingTop: "0" }}>
      <SectionContentStyled>
        <IconEnvelopeClosedStyled width={30} height={24} />
        <TituloStyled css={{ ...get_titulo_styles, maxWidth: "286px", marginTop: "14px", fontWeight: "300" }}>
          Receba alertas e novidades
        </TituloStyled>

        <FormStyled action="#">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "22px" }}>
            <InputStyled type={"text"} name="nome" placeholder="Nome Completo" css={{ ...get_input_text_styles }} />
            <InputStyled
              type={"email"}
              name="email"
              placeholder="Seu melhor e-mail"
              css={{ ...get_input_text_styles }}
            />
          </div>
          <ButtonStyled button={"enviar"} css={{ ...get_botao_styles, alignSelf: "flex-end" }}>
            Enviar
          </ButtonStyled>
        </FormStyled>
      </SectionContentStyled>
    </SectionWrapperStyled>
  );
}
