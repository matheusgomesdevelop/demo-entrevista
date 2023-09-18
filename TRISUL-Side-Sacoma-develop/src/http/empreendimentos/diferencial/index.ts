import axios from "axios";
import config from "../../../config";

const diferenciais = {
  getAllByEmpID: (empreendimento_id: number) =>
    axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${empreendimento_id}/diferencial`
    ),
  getAll: () => axios.get(`${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/diferencial`),
};

export default diferenciais;
