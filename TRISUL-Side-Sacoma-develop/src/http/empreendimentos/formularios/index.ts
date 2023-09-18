import axios from "axios";
import config from "../../../config";

interface FormularioApiStore {
  nome?: string;
  email?: string;
  telefone?: string;
  [key: string]: any;
}

export const formAPI = {
  store(form: { data: FormularioApiStore; url: string }) {
    if (form.data && form.url) {
      const { nome, email, telefone, ...rest } = form.data;

      return axios.post(form.url, {
        nome,
        email,
        telefone,
        campos_customizados_json: JSON.stringify(rest),
      });
    }
  },
};

const formularios = {
  store: (data: { [key: string]: any }, formulario_url: string) => {
    if (data && formulario_url) {
      return axios.post(formulario_url, data);
    }
  },

  store_anapro: (url: string, data: object) => {
    if (data) {
      return axios.post(url, data);
    }
  },

  /*getByEmpID: async (id_emp: string): Promise<Form[]> => {
    const response = await axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${id_emp}/formulario`
    );

    if (response.status !== 200) {
      throw new Error("Erro ao buscar formulários deste empreendimento");
    }

    return response.data;
  }, */
};

export default formularios;
