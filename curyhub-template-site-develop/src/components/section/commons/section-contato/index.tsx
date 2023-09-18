import { useMemo } from "react";

import { styled } from "../../../../../theme/stitches.config";

// Styled components
import { ButtonStyled } from "../../../form/button";
import { InputStyled } from "../../../form/input";

import { SectionContentStyled, SectionWrapperStyled } from "../../../structure";
import { TituloStyled } from "../../../util/titulo";

// Helpers
import { ThemeHelper } from "../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";

const FormStyled = styled("form", {
  width: "100%",
  maxWidth: "335px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "16px",
});

const Input = styled(InputStyled, {
  "@tablet": {
    minWidth: "335px",
  },
});

const Section = styled(SectionContentStyled, {
  maxWidth: "1360px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "40px",
  paddingTop: "0",
  paddingBottom: "60px",

  "@tabletUp": {
    flexDirection: "row",
    gap: "0",
  },
});

const DescStyled = styled("p", {
  fontSize: "$xmd",
  fontWeight: "$light",
  letterSpacing: "0",
  color: "$highConstraText",

  "& strong": {
    fontWeight: "$bold",
  },
});

const TelTextStyled = styled("strong", {});

interface IContato {
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function SectionContato({ section, corretor_data }: IContato) {
  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Input Text
  const div_input_text = useMemo(() => filter_component_by_name(active_components, "input-text"), []);
  const get_input_text_styles = get_component_styles(div_input_text);

  // Button Enviar
  const div_button_enviar = useMemo(() => filter_component_by_name(active_components, "button-enviar"), []);
  const get_button_enviar_styles = get_component_styles(div_button_enviar);

  // Tel Text
  const div_tel_text = useMemo(() => filter_component_by_name(active_components, "tel-text"), []);
  const get_tel_text_styles = get_component_styles(div_tel_text);

  return (
    <SectionWrapperStyled id="section-contato" css={{ ...section.styles }}>
      <Section>
        <FormStyled action="#">
          <TituloStyled css={{ ...get_titulo_styles, fontSize: "18px", alignSelf: "flex-start" }}>
            Entre em contato comigo por e-mail.
          </TituloStyled>
          <Input name="nome" type="text" placeholder="Digite seu nome" css={{ ...get_input_text_styles }} />
          <Input name="email" type="email" placeholder="Digite seu e-mail" css={{ ...get_input_text_styles }} />
          <ButtonStyled button={"enviar"} css={{ ...get_button_enviar_styles, width: "182px" }}>
            Falar por e-mail
          </ButtonStyled>
        </FormStyled>

        <FormStyled action="#">
          <TituloStyled css={{ ...get_titulo_styles, fontSize: "18px", alignSelf: "flex-start", whiteSpace: "nowrap" }}>
            Quer que eu entre em contato com você?
          </TituloStyled>
          <Input name="nome" type="text" placeholder="Digite seu nome" css={{ ...get_input_text_styles }} />
          <Input
            name="celular"
            type="celular"
            placeholder="Seu melhor número de celular"
            css={{ ...get_input_text_styles }}
          />
          <ButtonStyled button={"enviar"} css={{ ...get_button_enviar_styles, width: "188px" }}>
            Falar por e-mail
          </ButtonStyled>
        </FormStyled>

        <div>
          <TituloStyled style={{ fontSize: "18px", alignSelf: "flex-start", marginBottom: "24px" }}>
            Ou ligue a qualquer momento.
          </TituloStyled>

          <DescStyled>
            (11) <TelTextStyled css={{ ...get_tel_text_styles }}>99876-5432</TelTextStyled>
          </DescStyled>
        </div>
      </Section>
    </SectionWrapperStyled>
  );
}
