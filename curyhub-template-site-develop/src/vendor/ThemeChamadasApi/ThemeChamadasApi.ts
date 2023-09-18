import axios from "axios";
import { template1 } from "../../config/ThemeConfig";

export default class ThemeChamadasApi {
  private endpoint: string;
  private token: string;

  constructor(endpoint: string, token: string) {
    this.endpoint = endpoint;
    this.token = `Bearer ${token}`;
  }

  /*
   * Templates
   */

  // Lista todos os templates do banco de dados ou um template pelo nome
  listTemplates = () => {
    return axios.get<ThemeChamadasApiListTemplates>(
      `${this.endpoint}/templates`,
      {
        headers: {
          Authorization: this.token,
        },
      }
    );
  };

  // Filtrar tempalte
  getTemplateById = (id: number) => {
    return axios.get<Theme>(`${this.endpoint}/templates/${id}`, {
      headers: {
        Authorization: this.token,
      },
    });
  };

  // Retorna os templates instalados pelo usuário
  listTemplatesByUser = async () => {
    const resp = await axios.get<ThemeChamadasApiListTemplateByUser[]>(
      `${this.endpoint}/user-template-new`,
      {
        headers: {
          Authorization: this.token,
        },
      }
    );

    return resp;
  };

  // Retorna o template que está sendo utilizado pelo usuário
  getInUseTemplateByUser = async () => {
    const resp = await axios.get<ThemeChamadasApiTemplateByUserData>(
      `${this.endpoint}/user-template-new/active-template`,
      {
        headers: {
          Authorization: this.token,
        },
      }
    );

    return resp;
  };

  // Instalar um template ao usuario (vincular)
  installTemplateInUser = (template_id: number) => {
    return axios.post<ApiStatusMessageInstallTemplate>(
      `${this.endpoint}/user-template-new/publish/${template_id}`,
      {},
      {
        headers: {
          Authorization: this.token,
        },
      }
    );
  };

  // Criar um template do usuario
  createTemplatesByUser = (template_id: number) => {
    return axios.post<Theme>(
      `${this.endpoint}/user-template-new`,
      {
        template_id,
      },
      {
        headers: {
          Authorization: this.token,
        },
      }
    );
  };

  // Atualizar um template do usuario
  updateTemplatesByUser = (template_id: number, template: Theme) => {
    return axios.patch(
      `${this.endpoint}/user-template/${template_id}`,
      {
        template,
      },
      {
        headers: {
          Authorization: this.token,
        },
      }
    );
  };

  // Update color pallete
  updateColorPallete = (
    template_id: number,
    color_palette: ThemeColorPallete
  ) => {
    return axios.patch<ThemeChamadasApiTemplateByUserData>(
      `${this.endpoint}/user-template/color/${template_id}`,
      {
        color_palette,
      },
      {
        headers: {
          Authorization: this.token,
        },
      }
    );
  };

  // =============================================================================

  /*
   * Color palettes
   */

  // Buscar paleta pelo id
  getColorPalette = async (name?: string) => {
    const req = await axios.get<ThemeChamadasApiListColorPalette>(
      `${this.endpoint}/${
        name ? `color-palette?name=${name}` : "color-palette"
      }`,
      {
        headers: {
          Authorization: this.token,
        },
      }
    );

    return req.data;
  };

  // =============================================================================

  /*
   * Domain
   */

  // Pegar dominio do usuário
  getUserDomain = async () => {
    const resp = await axios.get<ThemeChamadasApiUserDomain>(
      `${this.endpoint}/user-domain`,
      {
        headers: {
          Authorization: this.token,
        },
      }
    );

    return resp;
  };

  // Pegar template pelo dominio
  getTemplateByDomain = async (domain: string) => {
    // const resp = await axios.get<ThemeChamadasApiGetTemplateByDomain>(`${this.endpoint}/template-site/${domain}`);

    const corretor = {
      name: "teste",
      email: "test@test.com",
      nickname: "test",
      regional_slug: "sp",
      creci: "3333-x",
      user_active: true,
    };
    const resp = {
      corretor,
      template: template1,
    };

    return resp;
  };

  // Register domain
  postRegisterDomainInUser = async (domain: ThemeChamadasApiMyDomainBody) => {
    return axios.post(
      `${this.endpoint}/user-domain`,
      {
        ...domain,
      },
      {
        headers: {
          Authorization: this.token,
        },
      }
    );
  };
}
