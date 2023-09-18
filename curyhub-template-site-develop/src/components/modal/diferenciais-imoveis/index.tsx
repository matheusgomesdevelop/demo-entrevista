import { Dispatch, SetStateAction, useMemo } from "react";

// Styled Components
import {
  ModalContentStyled,
  ModalFooterDescStyled,
  ModalFooterStyled,
  ModalHeaderDescStyled,
  ModalHeaderStyled,
  ModalStyled,
} from "..";
import { ButtonStyled } from "../../form/button";
import {
  IconBrinquedotecaStyled,
  IconChurrasqueiraStyled,
  IconFestatecaStyled,
  IconLeftStyled,
  IconPetCareStyled,
  IconPiscinaStyled,
} from "../../icons";
import { ListChildStyled, ListStyled } from "../../list";
import { TituloStyled } from "../../util/titulo";

// Helpers
import { ThemeHelper } from "../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../helpers/theme/theme-component";

interface IDifLazer {
  onClose: Dispatch<SetStateAction<boolean>>;
  section: ThemeSection;
  corretor_data: Corretor;
}
export default function ModalDiferenciaisImoveis({ onClose, section, corretor_data }: IDifLazer) {
  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Header
  const div_header = useMemo(() => filter_component_by_name(active_components, "modal-header"), []);
  const get_header_styles = get_component_styles(div_header);

  // Icon Diferencial
  const div_icon = useMemo(() => filter_component_by_name(active_components, "icon-diferencial"), []);
  const get_icon_styles = get_component_styles(div_icon);

  // Footer
  const div_footer = useMemo(() => filter_component_by_name(active_components, "footer"), []);
  const get_footer_styles = get_component_styles(div_footer);

  return (
    <ModalStyled>
      <ModalHeaderStyled css={{ ...get_header_styles }}>
        <ModalContentStyled>
          <TituloStyled css={{ ...get_titulo_styles }}>Viva bem!</TituloStyled>
          <ModalHeaderDescStyled>
            Confira todos os diferenciais e itens para a sua qualidade de vida
          </ModalHeaderDescStyled>
        </ModalContentStyled>
      </ModalHeaderStyled>

      <ModalContentStyled>
        <ButtonStyled
          button={"voltar"}
          onClick={() => {
            onClose(false);
            document.documentElement.style.overflowY = "initial";
          }}
          style={{ marginLeft: "-9px" }}
        >
          <IconLeftStyled fontSize={24} />
          <span style={{ fontWeight: "400" }}>Voltar</span>
        </ButtonStyled>
        <ListStyled list={"modalList"}>
          <ListChildStyled list={"modalList"}>
            <IconPiscinaStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Piscina</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconBrinquedotecaStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Brinquedoteca</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconFestatecaStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Salão de festas</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconPetCareStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>PetCare</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconChurrasqueiraStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Churrasqueira</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconPiscinaStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Piscina</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconBrinquedotecaStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Brinquedoteca</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconFestatecaStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Salão de festas</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconPetCareStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>PetCare</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconChurrasqueiraStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Churrasqueira</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconPiscinaStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Piscina</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconBrinquedotecaStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Brinquedoteca</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconFestatecaStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Salão de festas</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconPetCareStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>PetCare</p>
          </ListChildStyled>
          <ListChildStyled list={"modalList"}>
            <IconChurrasqueiraStyled fontSize={32} css={{ ...get_icon_styles }} />
            <p>Churrasqueira</p>
          </ListChildStyled>
        </ListStyled>
      </ModalContentStyled>

      <ModalFooterStyled css={{ ...get_footer_styles }}>
        <ModalContentStyled>
          <TituloStyled>Dúvidas?</TituloStyled>
          <ModalFooterDescStyled>
            <p>
              <strong style={{ marginRight: "13px" }}>Ligue a qualquer momento</strong> (11) <strong>99876-5432</strong>
            </p>
          </ModalFooterDescStyled>
        </ModalContentStyled>
      </ModalFooterStyled>
    </ModalStyled>
  );
}
