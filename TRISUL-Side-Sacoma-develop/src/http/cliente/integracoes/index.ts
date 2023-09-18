import axios from "axios";
import config from "../../../config";

const integracoes = {
  get: (cliente_id: number, nome_integracao: string) =>
    axios.get(`${config.configuracoes.urls.base}/cliente/${cliente_id}/configuracao/${nome_integracao}`),
};

type AnaproIntegracao = {
  Key?: string;
  CampanhaKey?: string;
  ProdutoKey?: string;
  CanalKey?: string;
  Midia?: string;
  Peca?: string;
  UsuarioEmail?: string;
  CampanhaPeca?: string;
  GrupoPeca?: string;
  PessoaNome?: string;
  ValidarEmail?: string;
  PessoaEmail?: string;
  ValidarTelefone: string;
  KeyIntegradora: string;
  KeyAgencia: string;
};

/*
export const getIntegracaoAnapro = async (): Promise<AnaproIntegracao> => {
  const response = await integracoes
  .get(
    config.configuracoes.integracoes.id_cliente,
    config.configuracoes.integracoes.anapro_api
  );

  if (response.status === 200) {
    const integracao = response.data;
    const campos_integracao: CampoIntegracao[] = Object.values(integracao.campos);

    const configuracoes_anapro = Object.fromEntries(
      campos_integracao.map((item: CampoIntegracao) => [item.nome, item.valor])
    ) as AnaproIntegracao;

    return configuracoes_anapro;
  }
  else {
    throw new Error("Não foi possível encontrar as integrações com o anápro");
  }
}
*/
export default integracoes;
