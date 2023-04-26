import { IUser } from "../../modules/users";

export interface IAuthState {
  isAuthenticated: boolean,
  authToken: string | null,
  user: IUser | null
};

const stringifiedUser = localStorage.getItem('user');

export const initialState: IAuthState = {
  isAuthenticated: false,
  authToken: null,
  user: stringifiedUser ? JSON.parse(stringifiedUser) : null
};
