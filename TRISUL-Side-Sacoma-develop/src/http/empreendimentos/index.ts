import axios from "axios";
import config from "../../config";

const empreendimentos = {
  get: (chave_servico: string, nome_unico: string) => axios.get(`${config.configuracoes.urls.cms}/${chave_servico}/empreendimento/${nome_unico}`),
  getAll: (chave_servico: string) => axios.get(`${config.configuracoes.urls.cms}/${chave_servico}/empreendimento`)
}

export default empreendimentos;