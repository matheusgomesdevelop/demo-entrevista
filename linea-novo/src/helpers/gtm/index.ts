declare global {
  interface Window {
    dataLayer: any
  }
}

export default function dataPush(category: string, action: string, label: string, opt_interact: boolean, value: number, site: string, produto_nome: string, tipo_pagina: string) {

  let dataLayer = window.dataLayer || [];

  window.dataLayer = dataLayer;

  dataLayer.push({
    'event': 'eventTracking',
    'category': category,
    'action': action,
    'label': label,
    'opt_interact': opt_interact,
    'value': value,
    'site': site,
    'produto_nome': produto_nome,
    'tipo_pagina': tipo_pagina
  })
}