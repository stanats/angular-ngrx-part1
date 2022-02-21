import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_USER, State } from './user.reducer';

const selectUserFeatureState = createFeatureSelector<State>(FEATURE_USER);

export const getUserName = createSelector(
  selectUserFeatureState,
  (userFeatureState) => userFeatureState.username
);
