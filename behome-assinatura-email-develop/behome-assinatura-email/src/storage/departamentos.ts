const list = [
  "Administrativo",
  "Assistência Técnica",
  "Comercial",
  "Conselho de Administração",
  "Contabilidade",
  "Contas a Pagar",
  "Contas a Receber",
  "Controladoria",
  "Install",
  "Crédito Imobiliário",
  "Central de Lançamentos",
  "Diretoria",
  "Diretor de Relações com Investidores e Institucionais",
  "Diretor de Incorporação e Novos Negócios",
  "Diretor Presidente",
  "Diretor Financeiro",
  "Diretor de RI",
  "Diretora de Operações",
  "Desenvolvimento de Produto",
  "Departamento Pessoal",
  "Fiscal",
  "Incorporação",
  "Incorporação Ambiental",
  "Infraestrutura",
  "Inteligência de Mercado",
  "Institucionais",
  "Jurídico Contencioso",
  "Jurídico Imobiliário",
  "Marketing Digital",
  "Novos Negócios",
  "Obras RJ",
  "Obras SP",
  "Orçamentos",
  "Presidente",
  "Pagadoria",
  "Planejamento",
  "Planejamento Financeiro",
  "Planejamento e Orçamentos",
  "Processamento de Vendas",
  "Projeto Executivo",
  "Qualidade",
  "Recursos Humanos",
  "Registro",
  "Relacionamento Com Cliente",
  "Relações com Investidores",
  "Repasse",
  "SESMT",
  "Install",
  "Suprimentos",
  "Secretaria Diretoria",
  "Secretaria Presidência",
  "Secretaria de Vendas",
  "Secretaria da Informação",
  "Tesouraria",
  "Vendas",
  "VP Comercial",
  "VP de Engenharia",

  // Novos departamentos
  "Marketing",
  "Secretaria de Vendas",
  "Especialista Be Home",
  "Gerente de Vendas",
  "Gerente de Parceria",
];

/*
 * Listar departamentos
 *
 * Ordem alfabética [0]
 *
 */
export function get_list() {
  const order = list.sort((a, b) => a[0].localeCompare(b[0]));

  return order;
}
