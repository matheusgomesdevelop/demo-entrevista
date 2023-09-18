import qs from "qs";
import moment from "moment";
import Cookies from "js-cookie";

function utm_e_valida(propriedade: string) {
  if (propriedade.indexOf("utm") !== -1) {
    return true;
  }
  return false;
}

function criar_cookie(propriedade: string, valor: string) {
  if (utm_e_valida(propriedade)) {
    const date = moment().add(3, "days").format("LLLL");
    document.cookie = `${propriedade}=${valor}; Expires=${date}; Path=/; SameSite=None; Secure`;
  }
}

function limpar_search_string(query: string) {
  if (query.indexOf("?") !== -1) {
    return query.replace(/[?]+/g, "");
  }

  return query;
}

export function getCookie(nome: string) {
  if (nome) {
    return Cookies.get(nome);
  }

  return null;
}

export function configurar_cookies() {
  const queryString = qs.parse(limpar_search_string(location.search)) as { [key: string]: any };
  for (const key in queryString) {
    criar_cookie(key, queryString[key]);
  }
}

export function campos_utm() {
  const utm_source = getCookie("utm_source");
  const utm_medium = getCookie("utm_medium");
  const utm_campaign = getCookie("utm_campaign");
  const utm_content = getCookie("utm_content");
  const utm_term = getCookie("utm_term");

  return {
    utm_source: utm_source ? getCookie("utm_source") : "Acesso Direto",
    utm_medium: utm_medium ? getCookie("utm_medium") : "",
    utm_campaign: utm_campaign ? getCookie("utm_campaign") : "",
    utm_content: utm_content ? getCookie("utm_content") : "",
    utm_term: utm_term ? getCookie("utm_term") : "",
  };
}
