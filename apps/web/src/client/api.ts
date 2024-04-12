import * as client from "@kcv/api-client";
import { axios } from "@/client/auth";

const config = new client.Configuration({
  basePath: process.env.REST_API_URL,
});

export const rootApi = new client.RootApi(config, void 0, axios);
export const sitesApi = new client.SitesApi(config, void 0, axios);
