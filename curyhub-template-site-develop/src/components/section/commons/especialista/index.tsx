import style from "./style.module.scss";
import { ThemeHelper } from "../../../../helpers/theme";
import { DepoimentText } from "../principal";
import { useMemo } from "react";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";
import { NoStyleWrapper } from "../../../structure";
import { ImageComponent } from "../components/Image";

interface IEspecialistaProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

export const Especialista = ({ section, corretor_data }: IEspecialistaProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Image
  const div_image = useMemo(() => filter_component_by_name(active_components, "image-secao"), []);
  const get_image_styles = get_component_styles(div_image);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_text_styles = get_component_styles(div_titulo);

  // Descrição Text
  const div_descricao = useMemo(() => filter_component_by_name(active_components, "descricao-secao"), []);
  const get_descricao = get_component_styles(div_descricao);

  return (
    <NoStyleWrapper
      size={{ "@initial": "mobile", "@desktop": "desktop" }}
      className={style.container}
      id="secao-especialista"
      css={{ ...section.styles }}
    >
      <div className={style.container__specialist}>
        <ImageComponent
          css={{ ...get_image_styles }}
          src="/images/template/foto-sm.png"
          className={style.container__specialist_avatar}
        />
        <div className={style.container__specialist_presentation}>
          <DepoimentText css={{ ...get_titulo_text_styles }} size={{ "@initial": "lg" }}>
            Lorem, ipsum dolor sit amet consectetur.
          </DepoimentText>
          <DepoimentText css={{ ...get_descricao }} className={style.container__title} size={{ "@initial": "sm" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, illo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fuga, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, illo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, illo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </DepoimentText>
        </div>
      </div>
    </NoStyleWrapper>
  );
};
