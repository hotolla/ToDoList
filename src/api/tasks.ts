import { AxiosRequestConfig } from "axios";
import { api } from "./api";

export const fetchTasks = (config: AxiosRequestConfig) => {
  return api.get("/tasks", config);
};

