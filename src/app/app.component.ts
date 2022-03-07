import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ThemeActions from './theme.actions';
import * as ThemeSelectors from './theme.selectors';
import * as UserActions from './user.actions';
import * as UserSelectors from './user.selectors';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme$: Observable<string> = this.store.select(ThemeSelectors.getAppTheme);
  username$: Observable<string> = this.store.select(UserSelectors.getUserName);

  constructor(private readonly store: Store) {}

  switchTheme() {
    this.store.dispatch(ThemeActions.switchThemeAction());
  }

  loginUser() {
    this.store.dispatch(UserActions.setUsernameAction({ username: 'Kalle' }));
  }

  onLogin(loginInfo: { username: string; password: string }) {
    this.store.dispatch(UserActions.loginUserAction(loginInfo));
  }
}
