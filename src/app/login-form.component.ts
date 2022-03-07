import { Component, EventEmitter, Output } from '@angular/core';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'my-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  username: string;
  password: string;

  @Output() login = new EventEmitter<{ username: string; password: string }>();

  onSubmit() {
    this.login.emit({
      username: this.username,
      password: this.password,
    });
  }
}
