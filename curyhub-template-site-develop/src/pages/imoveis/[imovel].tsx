import { GetServerSideProps } from "next";
import { createContext, useEffect, useState } from "react";

// Sections
import RecebaAlertas from "../../components/section/commons/receba-alertas";
import SectionContato from "../../components/section/commons/section-contato";
import Header from "../../components/section/ficha-produto/header";
import ConhecaBairro from "../../components/section/ficha-produto/section/conheca-bairro";
import ConhecaImovel from "../../components/section/ficha-produto/section/conheca-imovel";
import DiferenciaisImovel from "../../components/section/ficha-produto/section/diferenciais-imovel";
import DiferenciaisProximidades from "../../components/section/ficha-produto/section/diferenciais-proximidades";
import Financie from "../../components/section/ficha-produto/section/financie";
import Similares from "../../components/section/ficha-produto/section/imoveis-similares";
import Plantas from "../../components/section/ficha-produto/section/plantas";
import Principal from "../../components/section/ficha-produto/section/principal";
import VisitaVirtual from "../../components/section/ficha-produto/section/visita-virtual";

// Hooks
import { usePageTheme } from "../../hooks/theme";

// Helpers
import { checkPageDataToShow } from "../../helpers/theme/theme-page";
import { remove_protocol } from "../../http/theme";
import { useRouter } from "next/router";

// Experimentartema

/*
import { template_01 } from "../../data/template-01";
import { template_02 } from "../../data/template-02";
import { template_03 } from "../../data/template-03";
*/
// Http
import ThemeChamadasApi from "../../vendor/ThemeChamadasApi/ThemeChamadasApi";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { host } = context.req.headers;

  const theme_chamadas_api = new ThemeChamadasApi(`${process.env.API_URL}`, "");
  const get_user_template = (await theme_chamadas_api.getTemplateByDomain(`${remove_protocol(`${host}`)}`));

  const { corretor, template } = get_user_template;

  if (corretor && corretor.user_active && template) {
    return {
      props: {
        template,
        corretor,
      },
    };
  }

  return {
    notFound: true,
  };
};

const page_name = "ficha-de-produto";

export default function PageFichaDeProduto({ template, corretor }: PageResponse) {
  const [experimental, setExperimental] = useState<Theme>(template);
  const { theme, pageIsActive, themeSections } = usePageTheme(experimental, page_name);

  const router = useRouter();

  // Experimentar tema
  useEffect(() => {
    const { template } = router.query;

    if (template) {
      /*   if (template === "template-01") {
        setExperimental(template_01);
        return;
      } else if (template === "template-02") {
        setExperimental(template_02);
        return;
      } else if (template === "template-03") {
        setExperimental(template_03);
        return;
      } */
    }
  }, []);

  const ThemeProvider = createContext({
    corretor,
    theme,
  });

  return (
    <ThemeProvider.Provider
      value={{
        corretor,
        theme,
      }}
    >
      {checkPageDataToShow(corretor, theme, pageIsActive) &&
        theme &&
        themeSections &&
        themeSections.length > 0 &&
        themeSections.map((section) => {
          return (
            <div key={section.id}>
              {section.section_name === "header" ? (
                <Header section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-principal" ? (
                <Principal section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-plantas" ? (
                <Plantas section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-conheca-bairro" ? (
                <ConhecaBairro section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-financie" ? (
                <Financie section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-visita-virtual" ? (
                <VisitaVirtual section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-conheca-imovel" ? (
                <ConhecaImovel section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-diferenciais-imovel" ? (
                <DiferenciaisImovel section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-diferenciais-proximidades" ? (
                <DiferenciaisProximidades section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-receba-alertas" ? (
                <RecebaAlertas section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-similares" ? (
                <Similares section={section} corretor_data={corretor} />
              ) : section.section_name === "secao-contato" ? (
                <SectionContato section={section} corretor_data={corretor} />
              ) : (
                ""
              )}
            </div>
          );
        })}
    </ThemeProvider.Provider>
  );
}
