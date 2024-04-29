import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      // TODO
    } else {
      this.form.markAllAsTouched();
    }
  }

}
