import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  hidePassword: boolean = true;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  getErrorMessage() {
    if(!this.email.hasError) return;
    if (this.email.hasError('required')) {
      return 'This field is required!';
    }
    if (this.email.hasError('email')) {
      return 'Please enter a valid email…';
    }
    if (this.password.hasError('password')) {
      return 'Password is required!';
    }
    return this.email.hasError('email') ? 'Please enter a valid email…' : '';
  }

  submitLogin() {
    console.log(this.loginForm.value);
  }

}
