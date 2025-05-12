import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from './services/courses-service';
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
      this.categoryName = this.category.charAt(0).toUpperCase() + this.category.slice(1).replace('-', ' ');
    });
  }

  loadCourses() {
    this.courses = this.courseService.getCoursesByCategory(this.category);
    this.filteredCourses = [...this.courses];
  }

  filterCourses() {
    this.filteredCourses = this.courses.filter((course) => {
      const levelMatch = !this.selectedLevels.size || this.selectedLevels.has(course.level);
      const durationMatch = !this.selectedDurations.size || this.checkDuration(course.duration);
      const ratingMatch = course.rating >= this.minRating;

      return levelMatch && durationMatch && ratingMatch;
    });
  }

  checkDuration(duration: string): boolean {
    if (this.selectedDurations.has('Short') && this.parseDuration(duration) <= 4) return true;
    if (this.selectedDurations.has('Medium') && this.parseDuration(duration) > 4 && this.parseDuration(duration) <= 12) return true;
    if (this.selectedDurations.has('Long') && this.parseDuration(duration) > 12) return true;
    return false;
  }

  parseDuration(duration: string): number {
    const match = duration.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 0;
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
