import config from "../../config";
import { getStorage } from "../../helpers/localStorage";

declare global {
  interface Window {
    dataLayer?: object[];
  }
}

//  Armazenar os dados no dataLayer para GTM
export default function dataPush(
  category: string,
  action: string,
  label: string,
  opt_interact: boolean,
  value: number,
  site: string,
  tipo_pagina: string,
  produto_nome?: string
) {
  let dataLayer = window.dataLayer || [];

  window.dataLayer = dataLayer;

  dataLayer.push({
    event: "eventTracking",
    category,
    action,
    label,
    opt_interact,
    value,
    site,
    produto_nome,
    tipo_pagina,
  });
}

// Verifica se possui integração com GTM e envia
export function checkAndSendGtm(
  category: string,
  action: string,
  label: string,
  opt_interact: boolean,
  value: number,
  site: string,
  tipo_pagina: string,
  produto_nome: string
) {
  if (getStorage(config.configuracoes.integracoes.gtm) !== "") {
    let origin;

    origin = typeof window !== "undefined" && window.location.origin && window.location.origin.replace('""', "");

    // Enviar dados para o GTM
    dataPush(category, action, label, opt_interact, value, site, produto_nome, tipo_pagina);
  }
}
