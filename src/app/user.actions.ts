import { createAction, props } from '@ngrx/store';

export const setUsernameAction = createAction(
  '[User] Set Username',
  props<{ username: string }>()
);

export const setUserAddress = createAction(
  '[User] Set Address',
  props<{ city: string; streetName: string }>()
);

export const loginUserAction = createAction(
  '[User] Login',
  props<{ username: string; password: string }>()
);

export const loginUserSuccessAction = createAction(
  '[User/API] Login Success',
  props<{ username: string }>()
);

export const loginUserFailureAction = createAction(
  '[User/API] Login Failure',
  props<{ error: string }>()
);
