import axios from "axios";
import config from "../../../config";

const quantidade = {
  getAll: (emp_id: number) =>
    axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${emp_id}/quantidade`
    ),
};

export default quantidade;
