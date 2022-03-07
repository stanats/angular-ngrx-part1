import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { UserLoginService } from './user-login.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserLoginEffect {
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginUserAction),
      switchMap((action) =>
        this.userLoginService.loginUser(action.username, action.password).pipe(
          map((result) =>
            UserActions.loginUserSuccessAction({ username: result.username })
          ),
          catchError((error) =>
            of(UserActions.loginUserFailureAction({ error }))
          )
        )
      )
    )
  );

  loggingUser$ = createEffect(
    () =>
      this.actions$.pipe(
        map((action) => action.type),
        tap((typeOfAction) => console.log(typeOfAction))
      ),
    { dispatch: false }
  );

  constructor(
    private userLoginService: UserLoginService,
    private actions$: Actions // private store: Store
  ) {
    // actions$
    //   .pipe(
    //     ofType(UserActions.loginUserAction),
    //     switchMap((action) =>
    //       this.userLoginService
    //         .loginUser(action.username, action.password)
    //         .pipe(map((result) => UserActions.loginUserSuccessAction()))
    //     )
    //   )
    //   .subscribe((action) => {
    //     this.store.dispatch(action);
    //   });
  }
}
