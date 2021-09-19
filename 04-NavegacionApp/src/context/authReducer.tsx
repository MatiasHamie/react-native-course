import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'signOut'}
  | {type: 'changeUserName'; payload: string}
  | {type: 'changeFavIcon'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLoggedIn: true, userName: 'no-username-yet'};
    case 'changeFavIcon':
      return {...state, favouriteIcon: action.payload};
    case 'signOut':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favouriteIcon: undefined,
      };
    case 'changeUserName':
      return {...state, userName: action.payload};
    default:
      return state;
  }
};
