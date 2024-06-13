const api_url = process.env.API_URL || "https://cury-assinatura.vercel.app/api";

async function request(url: any, options: object) {
  const req = await fetch(url, options);
  const resp = await req.json();

  return resp;
}

// Validar codigo de acesso
export function validarAcesso(data: any) {
  const options = {
    method: "POST",
    "Content-Type": "application/json; charset=utf-8",
    body: JSON.stringify(data),
  };

  return request(`${api_url}/codigo-acesso`, options);
}
