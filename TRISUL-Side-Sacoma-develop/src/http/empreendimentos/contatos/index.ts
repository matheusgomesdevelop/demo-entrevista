import axios from "axios";
import config from "../../../config";

const contatos = {
  getAll: (idEmp: number) => axios.get(`${config.configuracoes.urls.cms}/${config.configuracoes.chave_servico}/empreendimento/${idEmp}/contato`)
}

export default contatos;