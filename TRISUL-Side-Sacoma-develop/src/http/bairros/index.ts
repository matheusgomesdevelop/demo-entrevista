import axios from "axios";
import config from "../../config";

const bairros = {
  getAll: () => axios.get(`${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/endereco/bairro`)
}

export default bairros;