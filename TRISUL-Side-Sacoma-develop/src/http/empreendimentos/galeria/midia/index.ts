import axios from "axios";
import config from "../../../../config";

const midia = {
  getAll: (galeria_id: number) =>
    axios.get(
      `${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/galeria/${galeria_id}/midia`
    ),
};

export default midia;
