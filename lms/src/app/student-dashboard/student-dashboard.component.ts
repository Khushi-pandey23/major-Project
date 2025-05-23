import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit {

  student = {
    name: '', // Initialize as empty
    email: '', // You might not need this hardcoded anymore
    id: '' // You might not need this hardcoded anymore
  };

  enrolledCourses = [
    { id: 1, title: 'Angular Basics', instructor: 'Jane Smith', duration: 6, progress: 70 },
    { id: 2, title: 'Advanced TypeScript', instructor: 'Mark Lee', duration: 4, progress: 50 }
  ];

  upcomingQuizzes = [
    { id: 1, title: 'Angular Quiz 1', dueDate: '2025-04-10' },
    { id: 2, title: 'TypeScript Assessment', dueDate: '2025-04-15' }
  ];

  notifications = [
    { message: 'New assignment added to Angular Basics.', date: '2025-03-28' },
    { message: 'Reminder: TypeScript quiz due soon!', date: '2025-03-30' }
  ];

  forumPosts = [
    { user: 'Alice', content: 'How do I use services in Angular?' },
    { user: 'Bob', content: 'What is the difference between observables and promises?' }
  ];

  studyMaterials = [
    { title: 'Angular Docs', link: 'https://angular.io/docs' },
    { title: 'TypeScript Guide', link: 'https://www.typescriptlang.org/docs/' }
  ];
  id: string = '';
  newPost: string = '';
  username: string | null = null;
  email: string | null = null;
  firstName: string = '';
  lastName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id') || '';
    this.username = sessionStorage.getItem('username');
    this.email = sessionStorage.getItem('email');
    this.firstName = sessionStorage.getItem('firstName') || '';
    this.lastName = sessionStorage.getItem('lastName') || '';
    if (this.username) {
      this.student.name = this.firstName;
    }
    if (this.email) {
      this.student.email = this.email;
    }
    if (this.id) {
      this.student.id = this.id;
    }
  }

  viewCourse(courseId: number) {
    alert(`Navigating to course ${courseId}`);
  }

  startQuiz(quizId: number) {
    alert(`Starting quiz ${quizId}`);
  }

  postMessage() {
    if (this.newPost.trim() !== '') {
      this.forumPosts.unshift({ user: 'You', content: this.newPost });
      this.newPost = '';
    }
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}