import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetails } from '../interfaces/course-interfaces';
import { CourseService } from '../services/courses-service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {

  courseId!: number;
  category!: string;
  activeTab = 'videos';
  selectedModule = 0;
  course!: CourseDetails;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.courseId = +params['id'];
      this.loadCourseDetails();
    });
  }

  loadCourseDetails(): void {
    this.course = this.courseService.getCourseDetails(this.category, this.courseId)
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  selectModule(index: number): void {
    this.selectedModule = index;
  }

  getModuleAssignments(moduleTitle: string): any[] {
    const moduleAssignment = this.course.Assignments.find(
      a => a.ModuleTitle === moduleTitle
    );
    return moduleAssignment ? moduleAssignment.Assignments : [];
  }

  updateSafeVideoUrl(url: string) {
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1];
      url = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1];
      url = `https://www.youtube.com/embed/${videoId}`;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      url
    );
  }


}
