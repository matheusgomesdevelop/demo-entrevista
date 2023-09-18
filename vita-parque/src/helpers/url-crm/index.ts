import axios from "axios";

// Helpers
import { getUtmData } from "../../Integration/helpers";
import { IntegrationConfig } from "../../Integration/index";

const { utm_source, utm_campaign, utm_medium, utm_input, utm_term, utm_content, utm_id } = getUtmData();

export const getUpCrmBody = ({
  first_name,
  email,
  phone,
  cellphone,
  feedback,
  description,
  interaction_type_id,
}: UPCRMBody) => {
  const up_crm_body: UPCRMBody = {
    first_name,
    email,
    phone,
    cellphone,
    utm_source,
    utm_campaign,
    utm_medium,
    utm_input,
    utm_term,
    utm_content,
    utm_id,
    feedback,
    description,
    interaction_type_id,
  };

  return up_crm_body;
};

export const postInteractionOpportunity = (body: UPCRMBody, token: string) => {
  const req = axios.post(
    `${IntegrationConfig.up_crm.endpoints.post_interaction_opportunity}`,
    {
      ...body,
    },
    {
      headers: {
        token,
      },
    }
  );

  return req;
};
