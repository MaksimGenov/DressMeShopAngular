import { AbstractControl } from "@angular/forms";

export const passwordsMatcher = (control: AbstractControl) => {
  const password = control.get('password').value
  const confirm = control.get('repeatPassword').value
  if (password === confirm) {
    return null
  } else {
    control.get('repeatPassword').setErrors({nomatch: 'Passwords do not macth!'})
  }
}