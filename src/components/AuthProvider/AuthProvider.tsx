import { ReactNode, createContext, useEffect, useReducer } from "react";
import { initialState, IAuthState } from "./initialState";
import { reducer } from "./reducer";
import { Types } from "./types";
import { IUser } from "../../modules/users";

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
    localStorage.setItem('user', JSON.stringify(user));

    dispatch({ type: Types.Login, payload: user });
  };

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
  }, [ 'isAuthenticated', state.isAuthenticated ]);

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
