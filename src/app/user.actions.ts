import { createAction, props } from '@ngrx/store';

export const setUsernameAction = createAction(
  '[User] Set Username',
  props<{ username: string }>()
);

export const setUserAddress = createAction(
  '[User] Set Username',
  props<{ city: string; streetName: string }>()
);
