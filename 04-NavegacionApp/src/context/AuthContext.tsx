import React, {createContext, FC, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favouriteIcon?: string;
}

// estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favouriteIcon: undefined,
};

// que voy a exponer con el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeUserName: (newUserName: string) => void;
  changeFavouriteIcon: (iconName: string) => void;
}

// crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Expongo el componente que provee el estado global (HOC)
type Props = {
  // si quiero poner que devuelve un solo componente
  // JSX.Element
  children: JSX.Element | JSX.Element[];
};
export const AuthProvider: FC<Props> = ({children}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const signOut = () => {
    dispatch({type: 'signOut'});
  };

  const changeUserName = (newUserName: string) => {
    dispatch({type: 'changeUserName', payload: newUserName});
  };

  const changeFavouriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  return (
    <AuthContext.Provider
      value={{
        // authState: authState,
        authState,
        // signIn: signIn,
        signIn,
        signOut,
        changeUserName,
        changeFavouriteIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
