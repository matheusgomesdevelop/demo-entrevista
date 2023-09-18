import qs from 'qs';
import moment from 'moment';

function utm_e_valida(propriedade: string) {
  if (propriedade.indexOf("utm") !== -1) {
    return true;
  }
  return false;
}

function criar_cookie(propriedade: string, valor: string) {
  if (utm_e_valida(propriedade)) {
    const date = moment().add(3, 'days').format('LLLL');
    document.cookie = `${propriedade}=${valor}; Expires=${date}; Path=/; SameSite=None; Secure`;
  }
}

function limpar_search_string(query: string) {
  if ((query.indexOf("?")) !== -1) {
    return query.replace(/[?]+/g, '');
  }

  return query;
}

export function configurar_cookies() {
  const queryString = qs.parse(limpar_search_string(location.search)) as { [key: string]: any };
  for (const key in queryString) {
    criar_cookie(key, queryString[key]);
  }
}
