import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { switchThemeAction } from './theme.actions';

export const FEATURE_THEME = 'appTheme';

export interface State {
  appTheme: 'dark' | 'light';
}

const initialState: State = {
  appTheme: 'dark',
};

export const reducer = createReducer<State>(
  initialState,
  on(switchThemeAction, (state, action) => ({
    ...state,
    appTheme: state.appTheme === 'dark' ? 'light' : 'dark',
  }))
);
