import axios from "axios";
import config from "../../config";

interface FileReturnType {
  id: number;
  recurso_id: number;
  nome: string;
  extensao: string;
  tamanho: number;
  caminho: string;
  nome_fisico: string;
  nome_unico: string;
}

export const arquivo = {
  store: async (formData: FormData) => {
    const response = await axios.post<FileReturnType>(`${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/arquivo`, formData);

    if (response.status === 201) {
      return response.data;
    }

    throw new Error("Não foi possível adidicionar arquivo");
  }
}