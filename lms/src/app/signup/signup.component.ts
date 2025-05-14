import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { catchError, of } from 'rxjs';  // Import catchError and of

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
  signupError: string = ''; // Add error property
  apiUrl = 'http://localhost:3000/users'; // Updated for json-server users endpoint

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient // Inject HttpClient
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
    // Listen for password changes to calculate strength
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

    // Length criteria
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 10;

    // Character criteria
    if (/[A-Z]/.test(password)) strength += 20; // Uppercase
    if (/[a-z]/.test(password)) strength += 15; // Lowercase
    if (/[0-9]/.test(password)) strength += 15; // Numbers
    if (/[^A-Za-z0-9]/.test(password)) strength += 20; // Special chars

    this.passwordStrength = Math.min(strength, 100);
  }

  getPasswordStrengthText(): string {
    if (this.passwordStrength < 30) return 'Weak';
    if (this.passwordStrength < 60) return 'Medium';
    if (this.passwordStrength < 80) return 'Strong';
    return 'Very Strong';
  }

  getPasswordStrengthColor(): string {
    if (this.passwordStrength < 30) return '#dc3545'; // Red
    if (this.passwordStrength < 60) return '#ffc107'; // Yellow
    if (this.passwordStrength < 80) return '#0d6efd'; // Blue
    return '#198754'; // Green
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value;
      
      // Send data to json-server
      this.http.post<any>(this.apiUrl, signupData) //  Use post and the correct type.
        .pipe(
          catchError(error => {
            this.signupError = error.error.message || 'An error occurred during signup.'; 
            return of(null);  // Return an observable with a null value
          })
        )
        .subscribe(response => {
          if (response) {
            console.log('Signup successful:', response);
            // Handle the API response.
            // Assuming json-server sends back the user object with the added user
            this.router.navigate(['/login']); // Navigate to login page after success
          } else {
            this.signupError = 'Signup failed, please try again later.'; // Show general error if response is null
          }
        });
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.signupForm.controls).forEach(key => {
        this.signupForm.get(key)?.markAsTouched();
      });
    }
  }
}
