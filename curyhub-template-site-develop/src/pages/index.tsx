// Native
import { GetServerSideProps } from "next";
import { createContext, useEffect, useState } from "react";

// Hooks
import { usePageTheme } from "../hooks/theme";

// Helpers
import { checkPageDataToShow } from "../helpers/theme/theme-page";

// Sections
import Header from "../components/section/ficha-produto/header";
import RecebaAlertas from "../components/section/commons/receba-alertas";
import SectionContato from "../components/section/commons/section-contato";
import { Principal } from "../components/section/commons/principal";
import { Especialista } from "../components/section/commons/especialista";
import { EmDestaque } from "../components/section/commons/em-destaque";
import { Depoimento } from "../components/section/commons/depoimento";
import { ClientesRealizados } from "../components/section/commons/clientes-realizados";
import { Blog } from "../components/section/commons/blog";
import { GaleriaCarrossel } from "../components/section/commons/galeria";
import { InstagramPosts } from "../components/section/commons/instagram-posts";
import { ImoveisEspeciais } from "../components/section/commons/imoveis-similares";
import ThemeChamadasApi from "../vendor/ThemeChamadasApi/ThemeChamadasApi";
import { remove_protocol } from "../http/theme";

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

const page_name = "home";

export default function PageHome({ corretor, template }: PageResponse) {
  const { theme, pageIsActive, themeSections } = usePageTheme(template, page_name);

  const ThemeProvider = createContext({
    corretor,
    template,
  });

  return (
    <ThemeProvider.Provider
      value={{
        corretor,
        template,
      }}
    >
      {checkPageDataToShow(corretor, theme, pageIsActive)
        ? themeSections &&
          themeSections.length > 0 &&
          themeSections.map((section) => {
            return (
              <div key={section.id}>
                {section.section_name === "header" ? (
                  <Header section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-receba-alertas" ? (
                  <RecebaAlertas section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-contato" ? (
                  <SectionContato section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-video" ? (
                  <Principal section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-especialista" ? (
                  <Especialista section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-imovel" ? (
                  <EmDestaque section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-depoimentos" ? (
                  <Depoimento section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-sonho" ? (
                  <ClientesRealizados section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-blog" ? (
                  <Blog section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-video-carrossel" ? (
                  <GaleriaCarrossel section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-posts" ? (
                  <InstagramPosts section={section} corretor_data={corretor} />
                ) : section.section_name === "secao-imoveis-similares" ? (
                  <ImoveisEspeciais section={section} corretor_data={corretor} />
                ) : null}
              </div>
            );
          })
        : "Ocorreu um erro ao carregar esta página"}
    </ThemeProvider.Provider>
  );
}
