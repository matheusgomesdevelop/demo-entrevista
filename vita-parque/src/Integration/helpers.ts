import { parseCookies } from "nookies";

export const getUtmData = () => {
  const body: UtmBody = {
    utm_source: parseCookies().utm_source ? parseCookies().utm_source : "Site - LP",
    utm_medium: parseCookies().utm_medium ? parseCookies().utm_medium : "utm_medium",
    utm_input: parseCookies().utm_input ? parseCookies().utm_input : "utm_input",
    utm_term: parseCookies().utm_term ? parseCookies().utm_term : "utm_term",
    utm_content: parseCookies().utm_content ? parseCookies().utm_content : "utm_content",
    utm_campaign: parseCookies().utm_campaign ? parseCookies().utm_campaign : "utm_campaign",
    utm_id: parseCookies().utm_id ? parseCookies().utm_id : "utm_id",
  };

  return body;
};
