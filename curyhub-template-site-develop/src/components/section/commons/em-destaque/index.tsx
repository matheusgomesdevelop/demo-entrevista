import { useMemo } from "react";
import { ThemeHelper } from "../../../../helpers/theme";
import { Icon } from "../../../icons";
import { LinkComponent } from "../../../link";
import { NoStyleWrapper } from "../../../structure";
import { DepoimentText } from "../principal";
import style from "./style.module.scss";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";
import { CardComponent, CardsWrapper } from "../components/Card";
import { styled } from "@stitches/react";

interface IEmDestaqueProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

export const EmDestaque = ({ section, corretor_data }: IEmDestaqueProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_text_styles = get_component_styles(div_titulo);

  // Link
  const link_anchor = useMemo(() => filter_component_by_name(active_components, "link-secao"), []);
  const get_link_styles = get_component_styles(link_anchor);

  // Cards
  const div_card = useMemo(() => filter_component_by_name(active_components, "cards-secao"), []);
  const get_card_styles = get_component_styles(div_card);

  return (
    <NoStyleWrapper
      className={style.container}
      css={{ ...section.styles }}
      size={{ "@initial": "mobile", "@desktop": "desktop" }}
    >
      <div className={style.container__wrapper}>
        <div className={style.container__header}>
          <DepoimentText size={{ "@initial": "lg" }} css={{ ...get_titulo_text_styles }}>
            Imóveis em destaque
          </DepoimentText>
          <LinkComponent href="/imoveis" prefetch={false} link="underline" css={{ ...get_link_styles }} style={{ minWidth: "110.56px" }}>
            <Icon width="39.56px" height="13.5px" src="/images/icon-arrow-forward.svg" alt="" />
            <p className={style.container__header_link}>Ver todos</p>
          </LinkComponent>
        </div>
        <CardsWrapper className={style.container__body}>
          <CardComponent flexSize={{ "@initial": "1" }} className={style.container__body_card}>
            <figure>
              <img
                src="https://cury.net/storage/images_webp/products/gallery/62c5d00a1ddbd.jpeg.webp"
                height="320"
                width="100%"
                alt="imóvel"
              />
              <figcaption>
                <p className={style.container__subtitle}>
                  Perspectiva ilustrada da <strong>Portaria</strong>
                </p>
              </figcaption>
            </figure>
          </CardComponent>
          <CardComponent flexSize={{ "@initial": "2" }} className={style.container__body_card}>
            <figure>
              <img
                src="https://cury.net/storage/images_webp/products/gallery/62c5d00a1ddbd.jpeg.webp"
                height="320"
                width="100%"
                alt="imóvel"
              />
              <figcaption>
                <p className={style.container__subtitle}>
                  Perspectiva ilustrada da <strong>Portaria</strong>
                </p>
              </figcaption>
            </figure>
          </CardComponent>
          <CardComponent flexSize={{ "@initial": "2" }} className={style.container__body_card}>
            <figure>
              <img
                src="https://cury.net/storage/images_webp/products/gallery/62c5d00a1ddbd.jpeg.webp"
                height="320"
                width="100%"
                alt="imóvel"
              />
              <figcaption>
                <p className={style.container__subtitle}>
                  Perspectiva ilustrada da <strong>Portaria</strong>
                </p>
              </figcaption>
            </figure>
          </CardComponent>
          {/* <div className={style.container__body_card}>
              <img
                src="https://cury.net/storage/images/products/gallery/62c5cc6f15aaf.jpeg"
                height="320"
                alt="imóvel"
              />
              <figcaption>
                <p className={style.container__subtitle}>
                  Perspectiva ilustrada da{" "}
                  <strong>Parque Linear</strong>
                </p>
              </figcaption>
            </div> */}
        </CardsWrapper>
      </div>
    </NoStyleWrapper>
  );
};
