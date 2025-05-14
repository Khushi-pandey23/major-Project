import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword = false;
  loginError: string = '';
  apiUrl = 'http://localhost:3000/users'; // JSON Server users endpoint

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const { email, password } = this.loginForm.value;

  this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
    .pipe(
      catchError(error => {
        this.loginError = 'An error occurred during login.';
        return of([]);
      })
    )
    .subscribe(users => {
      if (users.length > 0) {
        const user = users[0];

        // ✅ Store everything you need
        sessionStorage.setItem('token', 'fake-token'); // For authentication simulation
        sessionStorage.setItem('username', user.email.split('@')[0]);
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('id', user.id); // <-- Store ID
        sessionStorage.setItem('firstName', user.firstName || '');
        sessionStorage.setItem('lastName', user.lastName || '');

        // ✅ Redirect to dashboard
        this.router.navigate(['/dashboard']);
      } else {
        this.loginError = 'Invalid email or password';
      }
    });
}

}
