import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  showPassword = false;
  passwordStrength = 0;
  signupError: string = '';
  apiUrl = 'http://localhost:3000/users'

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      agreeTerms: [false, [Validators.requiredTrue]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {
    this.signupForm.get('password')?.valueChanges.subscribe(password => {
      this.calculatePasswordStrength(password);
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  calculatePasswordStrength(password: string): void {
    if (!password) {
      this.passwordStrength = 0;
      return;
    }

    let strength = 0;

    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 10;

    if (/[A-Z]/.test(password)) strength += 20;
    if (/[a-z]/.test(password)) strength += 15;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;

    this.passwordStrength = Math.min(strength, 100);
  }

  getPasswordStrengthText(): string {
    if (this.passwordStrength < 30) return 'Weak';
    if (this.passwordStrength < 60) return 'Medium';
    if (this.passwordStrength < 80) return 'Strong';
    return 'Very Strong';
  }

  getPasswordStrengthColor(): string {
    if (this.passwordStrength < 30) return '#dc3545'; 
    if (this.passwordStrength < 60) return '#ffc107';
    if (this.passwordStrength < 80) return '#0d6efd';
    return '#198754';
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value;
      
      this.http.post<any>(this.apiUrl, signupData)
        .pipe(
          catchError(error => {
            this.signupError = error.error.message || 'An error occurred during signup.'; 
            return of(null);
          })
        )
        .subscribe(response => {
          if (response) {
            console.log('Signup successful:', response);
            this.router.navigate(['/login']);
          } else {
            this.signupError = 'Signup failed, please try again later.';
          }
        });
    } else {
      Object.keys(this.signupForm.controls).forEach(key => {
        this.signupForm.get(key)?.markAsTouched();
      });
    }

  }
}
