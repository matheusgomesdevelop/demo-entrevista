import axios from "axios";
import config from "../../config";

export interface GaleriaData {
  titulo: string;
  descricao: string;
  grupo: string;
  sub_grupo: string;
  tipo: "mista" | "imagens" | "videos";
}

const galeria_cliente = {
  /* getAll: async (): Promise<Galeria[]> => {
    const response = await axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/galeria`
    );

    if (response.status !== 200) {
      throw new Error("Não foi possivel buscar as galerias");
    }

    return response.data;
  },*/
  getAllOld: async () => axios.get(`${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/galeria`),
  getById: async (id: number) =>
    axios.get(`${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/galeria/${id}`),

  create: async (data: GaleriaData) =>
    axios.post(`${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/galeria`, data),
};

export default galeria_cliente;
