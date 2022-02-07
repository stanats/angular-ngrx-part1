import { createAction, props, createReducer, on, Action } from '@ngrx/store';
import { Subject, scan, startWith } from 'rxjs';

export interface State {
  appTheme: 'dark' | 'light';
  username: string | null;
  substate?: {
    prop1: number;
    prop2: string;
  };
}

export const initialState: State = {
  appTheme: 'dark',
  username: '<NO USER>',
};

export const switchThemeAction = createAction('SWITCH_THEME');
export const setUsernameAction = createAction(
  'SET_USERNAME',
  props<{ username: string }>()
);

const reducer = createReducer<State>(
  initialState,
  on(switchThemeAction, (state, action) => ({
    ...state,
    appTheme: state.appTheme === 'dark' ? 'light' : 'dark',
  })),
  on(setUsernameAction, (state, action) => ({
    ...state,
    username: action.username,
  }))
);

export const actionStream = new Subject<Action>();

export const store$ = actionStream.pipe(
  // tap((action) => console.log('The action is: ', action)),
  scan(reducer, undefined),
  startWith(initialState)
);

export const selectUsername = (state: State) => state.username;
export const selectAppTheme = (state: State) => state.appTheme;
