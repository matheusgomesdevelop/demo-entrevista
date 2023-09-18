const cms = "https://cms.agenciamop.com.br/v1/cms";

export const config = {
  nome_produto: "Side - Sacomã",
  id_produto: 1,
  configuracoes: {
    // Cliente
    nome_cliente: "Trisul",
    chave_servico: "dTc0NDc3MDAwMjg3NTU3",

    // Urls CMS
    urls: {
      base: "https://cms.agenciamop.com.br/v1/base",
      cms,
      cms_domain: "https://cms.agenciamop.com.br",
      cdn: "https://cms-cdn.agenciamop.com.br",
      arquivos: "https://cms-cdn.agenciamop.com.br/arquivos/engeluxcms",
    },

    // Site
    site: {
      // Nomes das galerias que estão cadastradas no CMS (O site busca as informações baseado no nome que está cadastrado no CMS)
      galerias: {
        topo: {
          secao: "Galeria principal",
          modal: "Modal Galeria principal",
          modal_thumbnails: "Galeria Principal Modal Thumbails",
        },
        empreendimento: {
          cardEmp: "galeria-card-emp",
        },
        plantas: {
          secao: "Galeria de Plantas",
          modal: "Galeria de plantas Modal",
        },

        galeria_home: {
          topo: "galeria-home",
        },
        implantacao: {
          secao: "galeria-implantacao",
        },
        bairro: {
          secao: "galeria-video-bairro",
        },
      },

      videos: {
        topo: {
          secao: "Video principal topo",
        },
      },

      localizacao: {
        topo: {
          secao: "Mapa localizacao",
        },
      },

      // Nome dos diferenciais que estão cadastrados no CMS (O site busca de acordo com a categoria)
      diferenciais: {
        principal: "diferencial-principal",
        lazer: "diferencial-lazer",
        unidade: "diferencial-unidade",
        bairro: "diferencial-bairro",
        engelux: "diferencial-engelux",
        implantacao: "diferencial-implantacao",
        cardImoveis: "diferencial-card-imoveis",
      },

      // Obras - Mes = 0 = jan, 1 = fev etc...
      obras: {
        nome: "Obra Atual",
        mes: 9,
      },
      // Formulários
      formularios: {
        whatsapp_flutuante: {
          nome: "whatsapp-flutuante",
          url: `${cms}/dTc0NDc3MDAwMjg3NTU3/formulario/whatsapp-flutuante/contato`,
          anaproChatRedirect: true,
        },
        solicite_proposta: {
          nome: "solicite-proposta",
          url: `${cms}/dTc0NDc3MDAwMjg3NTU3/formulario/solicite-proposta/contato`,
          anaproChatRedirect: false,
        },
        simule_financiamento: {
          nome: "simule-financiamento",
          url: `${cms}/dTc0NDc3MDAwMjg3NTU3/formulario/simule-financiamento/contato`,
          anaproChatRedirect: false,
        },
        ofereca_terreno: {
          nome: "ofereca-terreno",
          url: `${cms}/dTc0NDc3MDAwMjg3NTU3/formulario/ofereca-terreno/contato`,
          anaproChatRedirect: false,
        },
        seja_fornecedor: {
          nome: "seja-fornecedor",
          url: `${cms}/dTc0NDc3MDAwMjg3NTU3/formulario/seja-fornecedor/contato`,
          anaproChatRedirect: false,
        },
        atendimento_online: {
          nome: "atendimento-online",
          url: `${cms}/dTc0NDc3MDAwMjg3NTU3/formulario/atendimento-online/contato`,
          anaproChatRedirect: false,
        },
        receba_alertas: {
          nome: "receba-alertas",
          url: `${cms}/dTc0NDc3MDAwMjg3NTU3/formulario/receba-alertas/contato`,
          anaproChatRedirect: false,
        },
        trabalhe_conosco: {
          nome: "trabalhe-conosco",
          url: `${cms}/dTc0NDc3MDAwMjg3NTU3/formulario/trabalhe-conosco/contato`,
          anaproChatRedirect: false,
        },
      },
    },

    // Integrações
    integracoes: {
      id_cliente: 2,
      gtm: "gtm",
      anapro_chat: "anapro-chat",
      anapro_api: "anapro-api",
    },
  },
};

export default config;
