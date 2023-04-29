import { IUser } from "../../modules/users";

export interface IAuthState {
  isAuthenticated: boolean,
  authToken: string | null,
  user: IUser | null
};

const stringifiedUser = localStorage.getItem('user');
const stringifiedisAuthenticated = localStorage.getItem('isAuthenticated');

export const initialState: IAuthState = {
  isAuthenticated: stringifiedisAuthenticated ? JSON.parse(stringifiedisAuthenticated) : null,
  authToken: null,
  user: stringifiedUser ? JSON.parse(stringifiedUser) : null
};
