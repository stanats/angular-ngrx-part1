import { Injectable } from '@angular/core';
import { mapTo, Observable, tap, timer } from 'rxjs';

export interface LoginResult {
  success: boolean;
  username: string;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  loginUser(username: string, password: string): Observable<LoginResult> {
    return timer(1000).pipe(
      tap(() => {
        if (password !== '123') {
          throw new Error('User unauthorized');
        }
      }),
      mapTo({ success: true, username })
    );
  }
}
