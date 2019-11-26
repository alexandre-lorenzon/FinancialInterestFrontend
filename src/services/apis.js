import axios from "axios";

export const ApiGateway = axios.create({
  baseURL: "http://financialservice-api.azurewebsites.net/api"
});
