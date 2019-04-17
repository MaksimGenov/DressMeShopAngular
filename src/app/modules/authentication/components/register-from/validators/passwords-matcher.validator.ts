import { FormGroup } from "@angular/forms";

export const passwordsMatcher = (form: FormGroup) => {
  const password = form.get('password').value
  const confirm = form.get('confirmedPassword').value
  if (password === confirm) 
    return null
    
  form.get('confirmedPassword').setErrors({nomatch: 'Passwords do not macth!'})
}