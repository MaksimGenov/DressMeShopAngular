import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth-service/auth.service';
import { passwordsMatcher } from './validators/passwords-matcher.validator';

@Component({
  selector: 'app-register-from',
  templateUrl: './register-from.component.html',
  styleUrls: ['./register-from.component.css']
})
export class RegisterFromComponent implements OnInit {
  private usernamePattern: RegExp = /^[a-zA-Z]\w{2,20}$/
  private passwordPattern: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/
  private form: FormGroup

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.pattern(this.usernamePattern)]),
        password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
        repeatPassword: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)])
      },
      { validators: passwordsMatcher }
    )
  }

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }

  get repeatPassword() {
    return this.form.get('repeatPassword')
  }

  onSubmit() {
    this.authService.register(
      this.username.value,
      this.password.value,
      this.repeatPassword.value,
      true
    )
  }
}
