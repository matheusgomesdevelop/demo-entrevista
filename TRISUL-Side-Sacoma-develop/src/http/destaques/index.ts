import axios from "axios";
import config from "../../config";

const destaques = {
  /*getAll: async (): Promise<BannerPropaganda[]> => {
    const response = await axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/destaque`
    ); 

    if (response.status !== 200) {
      throw new Error("Não foi possivel buscar as propagandas");
    }

    return response.data;
  },*/
  getAllByEmpID: (emp_id: number) =>
    axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${emp_id}/diferencial`
    ),
};

export default destaques;
