// Native
import { GetServerSideProps } from "next";
import { createContext } from "react";


// Hooks
import { usePageTheme } from "../../hooks/theme";

// Helpers
import { checkPageDataToShow } from "../../helpers/theme/theme-page";

// Sections
import Header from "../../components/section/ficha-produto/header";
import RecebaAlertas from "../../components/section/commons/receba-alertas";
import SectionContato from "../../components/section/commons/section-contato";
import { BlogPost } from "../../components/section/commons/blog/components/posts/blog-post";

type CorretorResponse = {
  corretor_data: Corretor;
  corretor_theme: Theme;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { host } = context.req.headers;

  // Request corretor data
  const get_corretor_theme = null;

  return {
    props: {
      corretor_data: [],
      corretor_theme: get_corretor_theme,
    },
  };
};

const page_name = "blog";

export default function PageBlog({ corretor_data, corretor_theme }: CorretorResponse) {
  const { theme, pageIsActive, themeSections } = usePageTheme(corretor_theme, page_name);

  const ThemeProvider = createContext({
    corretor_data,
    corretor_theme,
  });
  return (
    <ThemeProvider.Provider value={{ corretor_data, corretor_theme }}>
      {checkPageDataToShow(corretor_data, theme, pageIsActive)
        ? themeSections &&
          themeSections.length > 0 &&
          themeSections.map((section) => {
            return (
              <div key={section.id}>
                {section.section_name === "header" ? (
                  <Header section={section} corretor_data={corretor_data} />
                ) : section.section_name === "secao-blog-post" ? (
                  <BlogPost />
                ) : section.section_name === "secao-contato" ? (
                  <SectionContato section={section} corretor_data={corretor_data} />
                ) : null}
              </div>
            );
          })
        : "Ocorreu um erro ao carregar esta página"}
    </ThemeProvider.Provider>
  );
}
