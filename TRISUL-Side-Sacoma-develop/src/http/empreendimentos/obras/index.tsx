import axios from "axios";
import config from "../../../config";

const obras = {
  getObraByEmpID: async (emp_id: number) => {
    const response = await axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${emp_id}/obra/acompanhamento`
    );

    if (response.status !== 200) {
      throw new Error("Erro ao buscar obra");
    }

    return response.data;
  },
  getPeriodoByObraID: (emp_id: number, obra_id: number) =>
    axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${emp_id}/obra/acompanhamento/${obra_id}/periodo`
    ),
};

export default obras;
