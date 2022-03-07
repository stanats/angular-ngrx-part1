import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  loginUserFailureAction,
  loginUserSuccessAction,
  setUserAddress,
  setUsernameAction,
} from './user.actions';

export const FEATURE_USER = 'user';

export interface State {
  lastError?: string;
  username: string | null;
  email?: string | null;
  address: {
    streetName: string;
    city: string;
  };
}

export const initialState: State = {
  username: '<NO USER>',
  address: {
    city: 'Gothenburg',
    streetName: 'Drakegatan 1',
  },
};

export const reducer = createReducer<State>(
  initialState,
  on(setUsernameAction, loginUserSuccessAction, (state, action) => ({
    ...state,
    username: action.username,
  })),
  on(loginUserFailureAction, (state, action) => ({
    ...state,
    lastError: action.error,
  })),
  on(setUserAddress, (state, action) => ({
    ...state,
    address: {
      streetName: action.streetName,
      city: action.city,
    },
  }))
);
