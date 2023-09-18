import { useRouter } from "next/router";
import { useMemo } from "react";

import { styled } from "../../../../../../theme/stitches.config";

// Styled Components
import { TituloStyled } from "../../../../util/titulo";
import { SectionContentStyled, SectionWrapperStyled } from "../../../../structure";

// Helpers
import { ThemeHelper } from "../../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../../helpers/theme/theme-component";

const DescConhecaStyled = styled("p", {
  fontSize: "18px",
  letterSpacing: "0",
  fontWeight: "300",
  color: "$highContrasText",
  maxWidth: "605px",
});

interface IConhecaImovel {
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function ConhecaImovel({ section, corretor_data }: IConhecaImovel) {
  const router = useRouter();

  const nome_imovel = router.query.imovel;

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Sub Titulo
  const div_sub_titulo = useMemo(() => filter_component_by_name(active_components, "sub-titulo-secao"), []);
  const get_sub_titulo_styles = get_component_styles(div_sub_titulo);

  // Descricao
  const div_descricao = useMemo(() => filter_component_by_name(active_components, "descricao"), []);
  const get_descricao_styles = get_component_styles(div_descricao);

  return (
    <>
      <SectionWrapperStyled>
        <SectionContentStyled style={{ paddingBottom: "0", paddingLeft: "0" }}>
          <TituloStyled style={{ ...get_titulo_styles, marginBottom: "11px" }} titulo={"claro"}>
            Conheça o {nome_imovel}
          </TituloStyled>
          <TituloStyled titulo={"subtitle"} css={{ ...get_sub_titulo_styles, paddingLeft: "0" }}>
            Qualidade de vida
          </TituloStyled>

          <DescConhecaStyled css={{ ...get_descricao_styles }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus.
          </DescConhecaStyled>
        </SectionContentStyled>
      </SectionWrapperStyled>
    </>
  );
}
