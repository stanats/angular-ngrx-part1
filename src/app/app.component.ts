import { Component } from '@angular/core';
import {
  store$,
  actionStream,
  switchThemeAction,
  setUsernameAction,
  selectUsername,
  selectAppTheme,
} from './state';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme$: Observable<string> = store$.pipe(map(selectAppTheme));
  username$: Observable<string> = store$.pipe(map(selectUsername));

  switchTheme() {
    actionStream.next(switchThemeAction());
  }

  loginUser() {
    actionStream.next(setUsernameAction({ username: 'Kalle' }));
  }
}
