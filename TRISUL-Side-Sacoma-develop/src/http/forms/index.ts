import axios from "axios";
import config from "./../../config";

const base = `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}`;

export interface Form {
  id: number;
  nome: string;
  nome_unico: string;
  url: string;
  created_at: string;
  updated_at: string;
  tipo: {
    id: number;
    nome: string;
    nome_unico: string;
  };
}

const forms = {
  /*all: async (): Promise<TForm[]> => {
    const response = await axios.get(`${base}/formulario`);
    if (response.status !== 200) {
      throw new Error("Erro ao buscar formulários ");
    }

    return response.data;
  }, 
  find: async (slugname: string): Promise<Form> =>
    forms.all().then((forms) => {
      return forms.find((form: Form) => form.nome_unico === slugname);
    }),*/
};
export default forms;
