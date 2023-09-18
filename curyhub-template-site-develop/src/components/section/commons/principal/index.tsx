import { useMemo } from "react";
import styles from "./style.module.scss";
import { SectionBgStyled } from "../../../structure";
import { TituloStyled } from "../../../util/titulo";
import { VideoStyled } from "../../../video";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";
import { ThemeHelper } from "../../../../helpers/theme";
import { styled } from "../../../../../theme/stitches.config";

export const DepoimentText = styled("div", {
  variants: {
    size: {
      xsmBold: {
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "21.79px",
      },
      xsm: {
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "19.07px",
      },
      sm: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "21.79px",
      },
      smBold: {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "21.79px",
      },
      md: {
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "24.51px",
      },
      mdBold: {
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "27.24px",
      },
      lg: {
        fontSize: "28px",
        fontWeight: 700,
        lineHeight: "38.13px",
      },
      lightXl: {
        fontSize: "36px",
        fontWeight: 300,
        lineHeight: "49.03px",
      },
      xl: {
        fontSize: "36px",
        fontWeight: 700,
        lineHeight: "49.03px",
      },
      title: {
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32.68px",
      },
      bold: {
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: "29.96px",
      }
    },
  },
});

interface IPrincipalProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

export const Principal = ({ section, corretor_data }: IPrincipalProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Descrição Text
  const div_descricao = useMemo(() => filter_component_by_name(active_components, "descricao-secao"), []);
  const get_descricao_text_styles = get_component_styles(div_descricao);

  // Video
  const div_video = useMemo(() => filter_component_by_name(active_components, "video-secao"), []);
  const get_video = get_component_styles(div_video);

  return (
    <SectionBgStyled id="section-video" className={styles.container} css={{ ...section.styles }}>
      <div className={styles.container__wrapper}>
        <DepoimentText className={styles.container__introduction} css={{ ...get_descricao_text_styles }} size={{ "@initial": "sm" }}>
          <DepoimentText size={{ "@initial": "xl" }} css={{ ...get_titulo_styles }}>
            Lorem ipsum dolor sit amet, consetetur. At vero eos
          </DepoimentText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque repellat amet eveniet eos. Accusantium,
          aspernatur quod iure aliquam sed, ea quo dolorum repudiandae corrupti veniam enim voluptatem tempore qui,
          maxime consequuntur neque dolore sequi repellat earum! Numquam, ipsam sapiente accusantium distinctio in nam
          nesciunt esse, praesentium repudiandae nihil laboriosam, harum fugiat porro ullam consequuntur nulla sint! Hic
          adipisci natus, cum quod ratione odit quam quasi quo officiis minima aliquid quae rem possimus quisquam,
          libero sed optio debitis vel, nihil mollitia veritatis nobis. Voluptates illum harum deleniti consequuntur
          obcaecati vitae nostrum?
        </DepoimentText>
        <VideoStyled
          width="539"
          height="267"
          src="https://www.youtube.com/embed/UfC7vSSPIzA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          css={{ ...get_video }}
        ></VideoStyled>
      </div>
    </SectionBgStyled>
  );
};
