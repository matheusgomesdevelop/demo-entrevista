
async function request(url: string, options: object) {
  const req = await fetch(url, options);
  const resp = await req.json();

  return resp;
}

// POST NA API DO ANAPRO
//const anapro_url_post = "https://crm.anapro.com.br/webcrm/webapi/integracao/v2/CadastrarProspect";

const anapro_url_post = 'https://hooks.zapier.com/hooks/catch/1782683/bfjuqao/';

export function anapro_post(data: any) {

  const options = {
    method: "POST",
    /*headers: {
      "Content-Type": "application/json; charset=utf-8"
    },*/
    body: JSON.stringify(data)
  }

  return request(anapro_url_post, options);
}
