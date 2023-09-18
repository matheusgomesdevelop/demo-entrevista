import axios from "axios";
import config from "../../../config";

const tour_virtual = {
  /*getByEmpID: async (emp_id: number): Promise<TourVirtual[]> => {
    const response = await axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${emp_id}/tour-virtual`
    );

    if (response.status !== 200) {
      throw new Error("Erro ao buscar os Tour Virtuais");
    }

    return response.data;
  },*/
};

export default tour_virtual;
