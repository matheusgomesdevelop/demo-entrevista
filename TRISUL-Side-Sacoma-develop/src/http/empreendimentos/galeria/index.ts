import axios from "axios";
import config from "../../../config";

export interface GaleriaData {
  empreendimento_id: number;
  titulo: string;
  descricao: string;
  grupo: string;
  sub_grupo: string;
  tipo: "mista" | "imagens" | "videos";
}

const galeria = {
  /*  getAllByEmpID: async (empreendimento_id: number): Promise<Galeria[]> => {
    const response = await axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${empreendimento_id}/galeria`
    );

    if (response.status !== 200) {
      throw new Error("Não foi possível buscar a galeria");
    }

    return response.data;
  },
  getAllByEmpIDold: (empreendimento_id: number) =>
    axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${empreendimento_id}/galeria`
    ),

  old: {
    getAllByEmpID: async (empreendimento_id: number) =>
      axios.get<Galeria[]>(
        `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${empreendimento_id}/galeria`
      ),
    getAll: async () =>
      axios.get(
        `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/galeria`
      ),
  },

  getById: async (id: number) =>
    axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/galeria/${id}`
    ),
  create: async (data: GaleriaData) =>
    axios.post(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${data.empreendimento_id}/galeria`,
      data
    ),*/
};

export default galeria;
