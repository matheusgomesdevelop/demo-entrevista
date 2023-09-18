const up_crm_url = "https://engelux.up.rocks/api";

export const IntegrationConfig = {
  up_crm: {
    auth_key: process.env.UP_CRM_KEY,
    endpoints: {
      api: up_crm_url,
      post_interaction_opportunity: `${up_crm_url}/interaction/opportunity`,
    },
  },
};
