import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form.component';

import * as fromAppTheme from './theme.reducer';
import { UserLoginEffect } from './user-login.effect';
import * as fromUser from './user.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      {
        [fromAppTheme.FEATURE_THEME]: fromAppTheme.reducer,
        [fromUser.FEATURE_USER]: fromUser.reducer,
      },
      {
        runtimeChecks: {
          strictActionImmutability: this,
          strictStateImmutability: true,
          strictActionTypeUniqueness: true,
        },
      }
    ),
    EffectsModule.forRoot([UserLoginEffect]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [AppComponent, LoginFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
