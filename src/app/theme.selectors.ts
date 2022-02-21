import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_THEME, State } from './theme.reducer';

const selectThemeFeatureState = createFeatureSelector<State>(FEATURE_THEME);
export const getAppTheme = createSelector(
  selectThemeFeatureState,
  (themeFeatureState) => themeFeatureState.appTheme
);
