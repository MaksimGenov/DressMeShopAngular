import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth-service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  private form: FormGroup

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(this.authService.usernamePattern)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.authService.passwordPattern)
      ])
    })
  }

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }

  onSubmit() {
    this.authService.signIn(this.username.value, this.password.value, true)
  }
}
