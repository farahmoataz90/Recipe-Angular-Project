import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  },{
    validators: passwordMatchValidator
  });
  constructor(private fb:FormBuilder , private authService: AuthService , private router: Router) {}

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmpassword()
  {
    return this.registerForm.controls['confirmpassword'];

  }
  submitDetails()
  {
    const postData = { ...this.registerForm.value };
    delete postData.confirmpassword;
    this.authService.registerUser(postData as User).subscribe(
      response => {
        console.log("success");
        this.router.navigate(['login']);

      },
      error => console.log(error)
    )
  }
}
