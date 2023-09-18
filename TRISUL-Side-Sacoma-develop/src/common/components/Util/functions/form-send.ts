import axios from "axios";

import { phoneNumber } from "mop-lib-phone-number";

// Helpers
import { checkAndSendGtm } from "../../../../integracoes/gtm";
import { campos_utm } from "@/helpers/track/track";

export interface GtmConfig {
  subject: string;
  gtmAction: string;
  formName: string;
  enterpriseName: string;
  pageName: string;
  pathName: string;
}

interface formSendProps {
  contato?: string;
  name: string;
  email: string;
  tel: string;
  gtmInfo?: GtmConfig;
  zapierUrl?: string;
  campanhaForm: {
    nome_form: string;
    nome_domain: string;
    canal: string;
  };
}

export const formSend = async ({ contato, email, name, tel, gtmInfo, campanhaForm, zapierUrl }: formSendProps) => {
  const phoneNumberObject = phoneNumber(tel ? tel : "(00) 0000-0000");

  const { utm_source, utm_medium, utm_campaign, utm_content, utm_term } = campos_utm();

  const midia = utm_medium ? utm_medium : "Acesso Direto";

  const join_utm = `${"LP-MoP"}-${midia}-${utm_campaign}-${utm_content}-${utm_term}-${campanhaForm.nome_form}`;

  const gtmSend = async () => {
    if (!gtmInfo) {
      return;
    }

    checkAndSendGtm(
      gtmInfo.subject,
      gtmInfo.formName,
      gtmInfo.pageName,
      true,
      100,
      gtmInfo.pageName,
      gtmInfo.enterpriseName,
      gtmInfo.pageName
    );
  };

  const sendZapier = async () => {
    if (!zapierUrl) {
      return;
    }

    // const zapier_bkp = `https://hooks.zapier.com/hooks/catch/1782683/33cakrv`;

    // const urls = [zapierUrl, zapier_bkp];

    // urls.forEach((req) => {
    axios.post(
      `${zapierUrl}/?contato=${contato}&nome=${name}&email=${email}&tel=${phoneNumberObject.formatedNumber}&canal=${campanhaForm.canal}&utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_content=${utm_content}&utm_term=${utm_term}&nome_form=${campanhaForm.nome_form}&nome_domain=${campanhaForm.nome_domain}&midia=${join_utm}`
    );
    // });
  };

  return Promise.all([sendZapier(), gtmSend()]);
};
