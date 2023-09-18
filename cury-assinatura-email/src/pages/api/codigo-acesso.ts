// import { encrypt, decrypt } from "../../validation/encrypt";

// Resolvendo problemas de requisição externa (CORS)
export const config = {
  api: {
    externalResolver: true
  }
}

export default function validarAcesso(req: any, res: any) {
  // Codigo de acesso que está em uma variavel de ambiente no arquivo .env.local
//   const ENV_CODIGO_ACESSO = process.env.CODIGO_ACESSO;

  // Metodos liberados
  const metodos = ["POST"];

  // Verifica se o método http é permitido
  if (metodos.includes(req.method)) {

    // Dados enviados pelo formulário
    const data = JSON.parse(req.body);

    // SERVER SECRET KEY (Gerar uma chave criptografada com a palavra secreta)
   // const secret_key = encrypt(ENV_CODIGO_ACESSO, ENV_CODIGO_ACESSO);

    // CLIENT REQUEST KEY (Verificar se a palavra enviada é igual a palavra secreta, e consegue descriptografar)
  //  const check_key = decrypt(secret_key, data.codigo_acesso);

  const check_key = true;

    // Retorna o codigo criptografado para acessar o sistema (sessionStorage)
    if (check_key) {
      res.status(200).json({ auth_key: data.codigo_acesso})
    } else {
      res.status(401).json({ message: "O código de acesso informado é inválido" });
    }

  } else {
    res.status(401).json({ message: "Método não permitido" })
  }
}
