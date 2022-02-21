import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import * as fromAppTheme from './theme.reducer';
import * as fromUser from './user.reducer';

@NgModule({
  imports: [
    BrowserModule,
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
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
