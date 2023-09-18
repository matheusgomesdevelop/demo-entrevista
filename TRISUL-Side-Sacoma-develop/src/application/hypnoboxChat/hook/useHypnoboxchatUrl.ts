export interface ChatProps {
  controle?: string;
  acao?: string;
  produto?: number;
  nome?: string;
  email?: string;
  ddd_residencial?: string;
  tel_residencial?: string;
  midia?: string;
}

export function useHypnoboxchatUrl(props: ChatProps): string {
  const data = {
    ...props,
    controle: props.controle || "Atendimento",
    acao: props.acao || "index",
    produto: props.produto || 0,
    midia: props.midia || "Acesso Direto",
    nome: props.nome || "",
    email: props.email || "",
    ddd_residencial: props.ddd_residencial || "",
    tel_residencial: props.tel_residencial || "",
  };

  return (
    `https://trisul-sa.hypnobox.com.br/` +
    encodeURI(
      `?controle=${data.controle}` +
        `&acao=${data.acao}&produto=${data.produto}&nome=${data.nome}&email=${data.email}` +
        `&ddd_residencial=${data.ddd_residencial}&tel_residencial=${data.tel_residencial}` +
        `&midia=${data.midia}-chat`
    )
  );
}
