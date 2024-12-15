import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Include CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  loginError: string | null = null;

  constructor(private fb: FormBuilder , private authService:AuthService , private router : Router) {}

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }
  loginUser()
  {
    const {email,password} = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        if(response.length > 0 && response[0].password === password)
        {
          sessionStorage.setItem('email',email as string) ;
          this.router.navigate(['/home']);
        } else {
          this.loginError = 'Incorrect username or password.';
        }
      }, error =>
      {
        console.error("Error occurred during login", error);
        this.loginError = 'An error occurred. Please try again later.';
      }
    )
  }
}
