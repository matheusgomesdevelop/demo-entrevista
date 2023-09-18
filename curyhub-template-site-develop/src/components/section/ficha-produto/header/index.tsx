import styles from "./index.module.scss";

import { useRouter } from "next/router";
import { useMemo } from "react";

// Libs
import { styled } from "../../../../../theme/stitches.config";

// Components
import TextLink from "../../../link/text";
import { Icon } from "../../../icons";
import { LinkComponent } from "../../../link";
import { CorretorStyled } from "../../../corretor";
import { FotoCorretorStyled } from "../../../corretor/foto";
import { NomeStyled } from "../../../corretor/nome";
import { CreciCorretorStyled } from "../../../corretor/creci";
import { BlogDropdownMenu } from "../../commons/blog/components/dropdownp-navbar";

// Helpers

// Theme
import { ThemeHelper } from "../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";

interface IHeader {
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function Header({ section, corretor_data }: IHeader) {
  const router = useRouter();

  const { pathname } = router;

  const HeaderStyled = styled("div", {
    width: "100vw",
    height: "50px",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
    position: "fixed",
    top: "0px",
    backgroundColor: section.styles.backgroundColor,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.15)",
    zIndex: "99",
    transition: "0.3s",
  });

  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  const div_foto = useMemo(() => filter_component_by_name(active_components, "foto-corretor"), []);
  const get_foto_styles = get_component_styles(div_foto);

  const div_nome = useMemo(() => filter_component_by_name(active_components, "nome-corretor"), []);
  const get_nome_styles = get_component_styles(div_nome);

  const div_creci = useMemo(() => filter_component_by_name(active_components, "creci-corretor"), []);
  const get_creci_styles = get_component_styles(div_creci);

  const div_tel = useMemo(() => filter_component_by_name(active_components, "tel-corretor"), []);
  const get_tel_styles = get_component_styles(div_creci);

  const div_icon_tel = useMemo(() => filter_component_by_name(active_components, "icon-tel-corretor"), []);

  const get_icon_tel_styles = get_component_styles(div_icon_tel);

  return (
    <HeaderStyled>
      <div className={styles.header__container}>
        {/* Dados do corretor */}

        <CorretorStyled>
          <FotoCorretorStyled css={{ ...get_foto_styles }} src={"/images/template/foto-sm.png"} alt={""} />
          <div className={styles.header__corretor}>
            {div_nome.length > 0 && (
              <NomeStyled
                css={{
                  $$primaria: div_nome[0].styles.color,
                  $$fontSize: div_nome[0].styles.fontSize,
                  ...get_nome_styles,
                }}
              >
                {corretor_data.name && corretor_data.name}
              </NomeStyled>
            )}

            {div_creci.length > 0 && (
              <CreciCorretorStyled
                css={{
                  $$color: div_creci[0].styles.color,
                  $$fontSize: div_creci[0].styles.fontSize,
                  ...get_creci_styles,
                }}
              >
                CRECI: {corretor_data.creci ?? "01234-56"}
              </CreciCorretorStyled>
            )}
          </div>
        </CorretorStyled>

        {/* Dados do corretor */}

        {/*Link das paginas  */}
        {router.query.imovel && (
          <LinkComponent href="/imoveis" prefetch={false} link="underline">
            <Icon width="17px" height="15px" src="/images/template/icons/icon-house.png" alt="" />
            <TextLink>Imóveis</TextLink>
          </LinkComponent>
        )}

        {pathname === "/imoveis" && (
          <LinkComponent href="/" prefetch={false} link="underline">
            <Icon width="17px" height="15px" src="/images/template/icons/icon-house.png" alt="" />
            <TextLink>Página inicial</TextLink>
          </LinkComponent>
        )}

        {pathname === "/" && (
          <LinkComponent href="/imoveis" prefetch={false} link="underline">
            <Icon width="17px" height="15px" src="/images/template/icons/icon-house.png" alt="" />
            <TextLink>Meus imóveis</TextLink>
          </LinkComponent>
        )}

        {pathname === "/blog" && (
          <>
            <LinkComponent href="/" link="underline" className={styles.header__blog_button} prefetch={false}>
              <Icon width="17px" height="15px" src="/images/template/icons/icon-house.png" alt="" />
              <TextLink>Página inicial</TextLink>
            </LinkComponent>
            <BlogDropdownMenu />
          </>
        )}

        {pathname === "/depoimentos" && (
          <>
            <LinkComponent href="/" link="underline" prefetch={false} className={styles.header__blog_button}>
              <Icon width="17px" height="15px" src="/images/template/icons/icon-house.png" alt="" />
              <TextLink>Página inicial</TextLink>
            </LinkComponent>
            {/* <BlogDropdownMenu /> */}
          </>
        )}
        {/*Link das paginas  */}

        {/* Contato */}

        <LinkComponent
          href="tel:(99)987654321"
          prefetch={false}
          style={{ marginRight: "22px" }}
          css={{ ...get_tel_styles }}
        >
          <div className={styles.header__textWhats}>
            <TextLink>(99) 9 8765.4321</TextLink>
          </div>

          <Icon
            width="27px"
            height="28px"
            src="/images/template/icons/icon-whats.png"
            alt=""
            css={{ ...get_icon_tel_styles }}
          />
        </LinkComponent>

        {/* Contato */}
      </div>
    </HeaderStyled>
  );
}
