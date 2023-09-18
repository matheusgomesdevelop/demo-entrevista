import { parseCookies } from 'nookies';

export default function anapro_body(
  nome: string,
  email: string,
  ddd: string,
  numero: string,
  ramal: string
) {
  const midia = parseCookies().utm_midia;

  const anapro_body = {
    Key: 'o8KtPJt8IMI1',
    CampanhaKey: 'qwEJqHy88Xc1',
    ProdutoKey: 'O9DXRPiu4T81',
    CanalKey: 'KxMrlB3ccrc1',
    Midia: midia ? midia : 'site',
    Peca: 'site-institucional',
    UsuarioEmail: '',
    CampanhaPeca: 'site-institucional',
    GrupoPeca: 'Performance MoP',
    PessoaNome: nome,
    ValidarEmail: 'false',
    PessoaEmail: email,
    ValidarTelefone: 'false',
    PessoaTelefones: [
      {
        Tipo: 'OUTR',
        DDD: ddd, // (99)
        Numero: numero, // 99999-9999
        Ramal: ramal, // +55
      },
    ],
    Observacoes:
      'Cliente interessado no Linea Vila Sônia. Gerou o lead a partir do site',
    KeyIntegradora: '342F6FB4-8569-4E51-BB5B-08F2ED3E8917',
    KeyAgencia: '342F6FB4-8569-4E51-BB5B-08F2ED3E8917',
  };

  return anapro_body;
}

// Novos endpoint - 30-11-2021
export const anaproURL_chat_string = `https://online.crm.anapro.com.br/WebCRMService/Pages/chat/cliente/v2/ChatClienteEntrada.aspx?conta=o8KtPJt8IMI1&keyIntegradora=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&keyAgencia=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&strDir=engelux&campanha=qwEJqHy88Xc1&canal=N1R6Lu2ecZk1&produto=O9DXRPiu4T81&strmidia=Novo+Site+Engelux&strpeca=Landing-page-produto&usuarioEmail=&strgrupopeca=&strcampanhapeca=&nome=&email=&telefoneDDD=&telefone=&strTexto=&keyexterno=&urlep=&urlcp=&urlca=&urlat=&strMostrarTopo=true&strAutoSubmit=true&strUsarDadosAnteriores=true&emailobrigatorio=true&telefoneobrigatorio=false&texto=`;

export const anaproURLChat = (
  nome: string,
  email: string,
  ddd: string,
  telefone: string,
  pergunta: string) => {
  return `https://online.crm.anapro.com.br/WebCRMService/Pages/chat/cliente/v2/ChatClienteEntrada.aspx?conta=o8KtPJt8IMI1&keyIntegradora=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&keyAgencia=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&strDir=engelux&campanha=qwEJqHy88Xc1&canal=N1R6Lu2ecZk1&produto=O9DXRPiu4T81&strmidia=Novo+Site+Engelux&strpeca=Landing-page-produto&usuarioEmail=&strgrupopeca=&strcampanhapeca=&nome=${nome}&email=${email}&telefoneDDD=${ddd}&telefone=${telefone}&strTexto=${pergunta}&keyexterno=&urlep=&urlcp=&urlca=&urlat=&strMostrarTopo=true&strAutoSubmit=true&strUsarDadosAnteriores=true&emailobrigatorio=true&telefoneobrigatorio=false&texto=
`;
}

export const anaproURL_formulario_string = `https://online.crm.anapro.com.br/WebCRMService/Pages/chat/cliente/v2/ChatClienteFaleConosco.aspx?conta=o8KtPJt8IMI1&keyIntegradora=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&keyAgencia=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&strDir=engelux&campanha=qwEJqHy88Xc1&canal=KxMrlB3ccrc1&produto=O9DXRPiu4T81&strmidia=Novo+Site+Engelux&strpeca=Landing-page-produto&usuarioEmail=&strgrupopeca=&strcampanhapeca=&nome=&email=&telefoneDDD=&telefone=&strTexto=&keyexterno=&urlep=&urlcp=&urlca=&urlat=&strMostrarTopo=true&strAutoSubmit=true&strUsarDadosAnteriores=true&emailobrigatorio=true&telefoneobrigatorio=false&texto=`;

export const anaproURLFormulario = (
  nome: string,
  email: string,
  ddd: string,
  telefone: string,
  pergunta: string) => {


  return `https://online.crm.anapro.com.br/WebCRMService/Pages/chat/cliente/v2/ChatClienteFaleConosco.aspx?conta=o8KtPJt8IMI1&keyIntegradora=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&keyAgencia=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&strDir=engelux&campanha=qwEJqHy88Xc1&canal=KxMrlB3ccrc1&produto=O9DXRPiu4T81&strmidia=Novo+Site+Engelux&strpeca=Landing-page-produto&usuarioEmail=&strgrupopeca=&strcampanhapeca=&nome=${nome}&email=${email}&telefoneDDD=${ddd}&telefone=${telefone}&strTexto=${pergunta}&keyexterno=&urlep=&urlcp=&urlca=&urlat=&strMostrarTopo=true&strAutoSubmit=true&strUsarDadosAnteriores=true&emailobrigatorio=true&telefoneobrigatorio=false&texto=`;
}

export const anaproURL_whatsapp_string = `https://online.crm.anapro.com.br/WebCRMService/Pages/chat/cliente/ChatClienteWhatsAppEntrada.aspx?conta=o8KtPJt8IMI1&keyIntegradora=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&keyAgencia=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&strDir=engelux&campanha=qwEJqHy88Xc1&canal=tITkS2XA1c41&produto=O9DXRPiu4T81&strmidia=Novo+Site+Engelux&strpeca=Landing-page-produto&usuarioEmail=&strgrupopeca=&strcampanhapeca=&nome=&email=&telefoneDDD=&telefone=&strTexto=&keyexterno=&urlep=&urlcp=&urlca=&urlat=&strMostrarTopo=true&strAutoSubmit=true&strUsarDadosAnteriores=true&emailobrigatorio=true&telefoneobrigatorio=false&texto=`;

export const anaproURLWhatsapp = (
  nome: string,
  email: string,
  ddd: string,
  telefone: string,
  pergunta: string) => {
  return `https://online.crm.anapro.com.br/WebCRMService/Pages/chat/cliente/ChatClienteWhatsAppEntrada.aspx?conta=o8KtPJt8IMI1&keyIntegradora=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&keyAgencia=8e4dbe1a-c57a-4103-af65-7f732a9b82c1&strDir=engelux&campanha=qwEJqHy88Xc1&canal=tITkS2XA1c41&produto=O9DXRPiu4T81&strmidia=Novo+Site+Engelux&strpeca=Landing-page-produto&usuarioEmail=&strgrupopeca=&strcampanhapeca=&nome=${nome}&email=${email}&telefoneDDD=${ddd}&telefone=${telefone}&strTexto=${pergunta}&keyexterno=&urlep=&urlcp=&urlca=&urlat=&strMostrarTopo=true&strAutoSubmit=true&strUsarDadosAnteriores=true&emailobrigatorio=true&telefoneobrigatorio=false&texto=`;
}