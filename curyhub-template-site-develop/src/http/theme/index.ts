import axios from "axios";

export function remove_protocol(host: string) {
  return host.replace("http://", "").replace("https://", "").replace(":3000", "");
}

export const HttpTheme = {
  getTemplateByDomain: (domain: string) => {},
};
