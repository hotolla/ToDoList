import { AxiosRequestConfig } from "axios";
import { IUser } from "../modules/users";
import { api } from "./api";

export const register = (user: IUser, config?: AxiosRequestConfig) => {
  return api.post("/users", user, config).then(({ data }) => {
    return data;
  });
};
