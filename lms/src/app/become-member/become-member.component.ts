import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../welcome-page/header/header.component";

@Component({
  selector: 'app-become-member',
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './become-member.component.html',
  styleUrl: './become-member.component.css'
})
export class BecomeMemberComponent {

  membershipForm!: FormGroup;
  formSubmitted = false;
  
  membershipTypes = [
    { id: 'standard', name: 'Standard', price: 'Free', features: ['Access to community forums', 'Join study groups', 'Participate in webinars'] },
    { id: 'premium', name: 'Premium', price: '$9.99/month', features: ['All Standard features', 'Exclusive events', 'Priority Q&A responses', 'Member directory access'] },
    { id: 'professional', name: 'Professional', price: '$19.99/month', features: ['All Premium features', 'Mentorship opportunities', 'Networking events', 'Career resources'] }
  ];
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.membershipForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      membershipType: ['standard', [Validators.required]],
      interests: this.fb.group({
        technology: [false],
        business: [false],
        arts: [false],
        science: [false],
        languages: [false],
        other: [false]
      }),
      termsAccepted: [false, [Validators.requiredTrue]]
    });
  }
  
  onSubmit(): void {
    this.formSubmitted = true;
    
    if (this.membershipForm.valid) {
      // Form processing logic would go here
      console.log('Form submitted:', this.membershipForm.value);
      // Reset form or redirect
    }
  }
  
  // Helper method to check if a control is invalid after submission
  isInvalid(controlName: string): boolean | undefined {
    const control = this.membershipForm.get(controlName);
    return this.formSubmitted && control?.invalid && control.touched;
  }
  
  // Password match validation
  passwordsMatch(): boolean {
    const password = this.membershipForm.get('password')?.value;
    const confirmPassword = this.membershipForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }

}
