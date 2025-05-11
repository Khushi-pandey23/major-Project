import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-categories',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './course-categories.component.html',
  styleUrl: './course-categories.component.css'
})
export class CourseCategoriesComponent {
  searchQuery: string = '';  // Holds the search query
  categories = [
    {
      name: 'Technology & Programming',
      subcategories: [
        { name: 'Web Development', coursesCount: 3, link: '/courses/web-development', icon: 'fas fa-laptop-code' },
        { name: 'Mobile App Development', coursesCount: 3, link: '/courses/mobile-development', icon: 'fas fa-mobile-alt' },
        { name: 'AI & Machine Learning', coursesCount: 3, link: '/courses/ai-ml', icon: 'fas fa-brain' }
      ]
    },
    {
      name: 'Business & Management',
      subcategories: [
        { name: 'Finance & Accounting', coursesCount: 3, link: '/courses/finance', icon: 'fas fa-chart-line' },
        { name: 'Marketing', coursesCount: 3, link: '/courses/marketing', icon: 'fas fa-bullhorn' }
      ]
    },
    {
      name: 'Creative Arts',
      subcategories: [
        { name: 'Graphic Design', coursesCount: 3, link: '/courses/graphic-design', icon: 'fas fa-paint-brush' },
        { name: 'Photography', coursesCount: 3, link: '/courses/photography', icon: 'fas fa-camera' },
        { name: 'Creative Writing', coursesCount: 3, link: '/courses/creative-writing', icon: 'fas fa-pen-fancy' }
      ]
    },
    {
      name: 'Health & Wellness',
      subcategories: [
        { name: 'Nutrition & Diet', coursesCount: 3, link: '/courses/nutrition', icon: 'fas fa-heartbeat' },
        { name: 'Fitness Training', coursesCount: 3, link: '/courses/fitness', icon: 'fas fa-dumbbell' }
      ]
    }
  ];
  filteredCategories = this.categories;

  // Function to filter subcategories based on search query
  onSearch() {
    if (this.searchQuery.trim() === '') {
      this.filteredCategories = this.categories;
    } else {
      this.filteredCategories = this.categories
        .map(category => ({
          ...category,
          subcategories: category.subcategories.filter(subcategory =>
            subcategory.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        }))
        .filter(category => category.subcategories.length > 0);
    }
  }

}
