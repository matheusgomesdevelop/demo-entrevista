import { useMemo } from "react";

import { styled } from "../../../../../../theme/stitches.config";

import styles from "./index.module.scss";

// Styled components
import { TituloStyled } from "../../../../util/titulo";
import {
  IconBrinquedotecaStyled,
  IconChurrasqueiraStyled,
  IconFestatecaStyled,
  IconJogosStyled,
  IconPetCareStyled,
  IconPiscinaStyled,
} from "../../../../icons";
import { ThemeHelper } from "../../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../../helpers/theme/theme-component";

//Helpers

const DiferenciaisProximidadesStyled = styled("div", {
  display: "flex",
  width: "100%",
  padding: "0",
  position: "relative",
  margin: "60px auto",

  "@mobile": {
    marginTop: "32px",
  },
});

interface IDiferenciaisProximidades {
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function DiferenciaisProximidades({ section, corretor_data }: IDiferenciaisProximidades) {
  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Icone dif
  const div_icone_dif = useMemo(() => filter_component_by_name(active_components, "icone-diferencial"), []);
  const get_icone_dif_styles = get_component_styles(div_icone_dif);

  return (
    <>
      <DiferenciaisProximidadesStyled
        css={{ ...section.styles, marginBottom: "0px", marginTop: "0", paddingTop: "44px" }}
      >
        <div className={styles.diferenciaisProximidades__content}>
          <TituloStyled css={{ ...get_titulo_styles }}>Proximidades</TituloStyled>

          <div className={styles.diferenciaisProximidades__atributos}>
            <ul>
              <li>
                <IconPiscinaStyled fontSize={32} css={{ ...get_icone_dif_styles }} />
                <p>Piscina</p>
              </li>
              <li>
                <IconBrinquedotecaStyled fontSize={32} css={{ ...get_icone_dif_styles }} />
                <p>Brinquedoteca</p>
              </li>
              <li>
                <IconFestatecaStyled fontSize={32} css={{ ...get_icone_dif_styles }} />
                <p>Salão de Festas Gourmet</p>
              </li>
              <li>
                <IconPetCareStyled fontSize={32} css={{ ...get_icone_dif_styles }} />
                <p>Pet Care</p>
              </li>
              <li>
                <IconChurrasqueiraStyled fontSize={32} css={{ ...get_icone_dif_styles }} />
                <p>Churrasqueira</p>
              </li>

              <li>
                <IconJogosStyled fontSize={32} css={{ ...get_icone_dif_styles }} />
                <p>Salão de Jogos</p>
              </li>
            </ul>
          </div>
        </div>
      </DiferenciaisProximidadesStyled>
    </>
  );
}
