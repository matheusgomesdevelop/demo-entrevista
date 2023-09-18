import { useMemo } from "react";
import { ThemeHelper } from "../../../../helpers/theme";
import { ButtonStyled } from "../../../form/button";
import { NoStyleWrapper } from "../../../structure";
import style from "./style.module.scss";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";
import { DepoimentText } from "../principal";
import { styled } from "../../../../../theme/stitches.config";

interface IImoveisEspeciaisProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

export const ImoveisEspeciais = ({ section, corretor_data }: IImoveisEspeciaisProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // User Name
  const content = useMemo(() => filter_component_by_name(active_components, "imoveis-similares-content"), []);
  const get_content_styles = get_component_styles(content);

  // Section Button
  const button = useMemo(() => filter_component_by_name(active_components, "imoveis-similares-button"), []);
  const get_button_styles = get_component_styles(button);

  // Button Text
  const button_text = useMemo(() => filter_component_by_name(active_components, "imoveis-similares-button-text"), []);
  const get_button_text_styles = get_component_styles(button_text);

  const Button = styled("button", {
    border: "2px solid #FFFFFF",
    borderRadius: "20px",
    cursor: "pointer",
    background: "#484848",
    height: "40px",
    padding: "9px 28px",
    width: "fit-content",
  });

  return (
    <NoStyleWrapper
      size={{ "@initial": "mobile", "@desktop": "desktop" }}
      css={{ ...section.styles }}
      className={style.container}
    >
      <div className={style.container__wrapper}>
        <DepoimentText size={{ "@initial": "title" }} css={{ ...get_content_styles }}>
          Imóveis que escolhi especialmente para você!
        </DepoimentText>
        <Button css={{ ...get_button_styles }}>
          <DepoimentText size={{ "@initial": "smBold" }} css={{ ...get_button_text_styles }}>
            Ver imóveis
          </DepoimentText>
        </Button>
      </div>
    </NoStyleWrapper>
  );
};
