import { ReactNode, createContext, useEffect, useReducer, useRef, useState } from "react";
import { initialState, IAuthState } from "./initialState";
import { reducer } from "./reducer";
import { Types } from "./types";
import { IUser } from "../../modules/users";
import * as authApi from '../../api/auth';

interface IAuthProviderProps {
  children: ReactNode;
}
interface IAuthProviderValues extends IAuthState {
  login: (user: IUser) => void;
};

export const AuthContext = createContext<IAuthProviderValues>({
  ...initialState,

  login: () => {}
});

export const AuthProvider = ({ children } : IAuthProviderProps) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const login = (user: IUser) => {
    // localStorage.user = user.name;
    localStorage.setItem('user', `${user.name}`);

    dispatch({ type: Types.Login, payload: user });
  };

  useEffect(() => {
    // localStorage.setItem('user', `${state.user?.name}`);
    localStorage.getItem('user');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,

        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
