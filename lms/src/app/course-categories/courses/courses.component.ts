import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from './courses-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  categoryName: any;
  category: string = '';
  courses: any[] = [];
  filteredCourses: any[] = [];
  selectedLevels: Set<string> = new Set();
  selectedDurations: Set<string> = new Set();
  minRating: number = 0;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.loadCourses();
    });
  }

  loadCourses() {
    this.courses = this.courseService.getCoursesByCategory(this.category);
    this.filteredCourses = [...this.courses];
  }

  filterCourses() {
    this.filteredCourses = this.courses.filter((course) => {
      const levelMatch = !this.selectedLevels.size || this.selectedLevels.has(course.level);
      const durationMatch = !this.selectedDurations.size || this.selectedDurations.has(course.duration);
      const ratingMatch = course.rating >= this.minRating;

      return levelMatch && durationMatch && ratingMatch;
    });
  }

  toggleLevel(level: string) {
    if (this.selectedLevels.has(level)) this.selectedLevels.delete(level);
    else this.selectedLevels.add(level);
    this.filterCourses();
  }

  toggleDuration(duration: string) {
    if (this.selectedDurations.has(duration)) this.selectedDurations.delete(duration);
    else this.selectedDurations.add(duration);
    this.filterCourses();
  }

  setMinRating(rating: number) {
    this.minRating = rating;
    this.filterCourses();
  }

  searchCourses(event: Event) {
    const input = event.target as HTMLInputElement;
    const keyword = input?.value || '';
    this.filteredCourses = this.courses.filter((course) =>
      course.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  resetFilters() {
    this.selectedLevels.clear();
    this.selectedDurations.clear();
    this.minRating = 0;
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach((checkbox: any) => (checkbox.checked = false));
    this.filteredCourses = [...this.courses];
  }

}
