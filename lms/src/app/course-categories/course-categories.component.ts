import { Component } from '@angular/core';
import { CoursesComponent } from "./courses/courses.component";

@Component({
  selector: 'app-course-categories',
  imports: [CoursesComponent],
  templateUrl: './course-categories.component.html',
  styleUrl: './course-categories.component.css'
})
export class CourseCategoriesComponent {

}
