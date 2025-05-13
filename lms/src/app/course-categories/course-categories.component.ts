import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from './courses/services/courses-service';

@Component({
  selector: 'app-course-categories',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './course-categories.component.html',
  styleUrl: './course-categories.component.css'
})
export class CourseCategoriesComponent {
  searchQuery: string = '';

  categories: any[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.categories = this.courseService.getCategories();
  }

}
