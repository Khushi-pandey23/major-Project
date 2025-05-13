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
    email: 'john.doe@example.com', // You might not need this hardcoded anymore
    id: 'STU123456' // You might not need this hardcoded anymore
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

  newPost: string = '';
  username: string | null = null; // Variable to store the username

  constructor(private router: Router) {} // Inject the Router

  

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username'); // Retrieve username from session storage
    if (this.username) {
      this.student.name = this.username; // Update the student's name
    }
    // In a real application, you might fetch the complete student profile here
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
      this.newPost = ''; // Clear input after posting
    }
  }

  logout() {
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('token'); 
  this.router.navigate(['/login']);
}
}