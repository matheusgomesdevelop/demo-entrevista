import { useEffect, useState } from "react";

// Helpers
import ThemeManager from "../vendor/ThemeManager/ThemeManager";

/*
 * Este hook é utilizado para facilitar o uso dos elementos do tema.
 *
 * Parâmetros *
 *
 * theme_config: Objeto de configuração do tema, que foi retornado pela api
 * page_name: Nome da página que está utilizando o custom hook
 *
 * OBS: os dados são filtrados de acordo com a página, assim só retornará os dados da respectiva pagina
 *
 * Retornos *
 *
 * theme: Estado que armazena o objeto com as configurações do tema do corretor (retornado pela api)
 * setTheme: Função para setar um novo valor de thema (useState)
 * themeSections: Lista das seções da página
 * pageIsActive: Retorna (true/false) se a página está ativa
 */

export function usePageTheme(theme_config: Theme, page_name: ThemePagesName) {
  const [theme, setTheme] = useState<Theme | undefined>(theme_config);
  const [themeSections, setThemeSections] = useState<ThemeSection[]>();
  const [pageIsActive, setPageIsActive] = useState<boolean>();

  const theme_manager = new ThemeManager(theme_config);

  useEffect(() => {
    if (theme) {
      setTheme(theme_config);

      const page = theme_manager.getPageByName(theme.template.pages, page_name);

      if (page && page.is_active) {
        setPageIsActive(true);
        const get_page_sections = theme_manager.getAllSectionByActivePage(theme.template.pages, page_name);

        const get_active_sections =
          get_page_sections && get_page_sections.filter((active_section) => active_section.is_active);

        setThemeSections(get_active_sections);
      } else {
        setPageIsActive(false);
      }
    }
  }, [theme, theme_config]);

  return {
    theme,
    setTheme,
    themeSections,
    pageIsActive,
  };
}
