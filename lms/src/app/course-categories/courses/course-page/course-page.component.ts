import { Component, HostListener } from '@angular/core';
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

  currentDifficulty = 3;
  userProgress: { questionId: number; correct: boolean }[] = [];

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

  adjustDifficulty(isCorrect: boolean): void {
    if (isCorrect) {
      this.currentDifficulty = Math.min(this.currentDifficulty + 1, 5);
    } else {
      this.currentDifficulty = Math.max(this.currentDifficulty - 1, 1);
    }
  }

  answerQuestion(questionId: number, isCorrect: boolean): void {
    this.userProgress.push({ questionId, correct: isCorrect });
    this.adjustDifficulty(isCorrect);
  }

  getAdaptiveQuestions() {
    return this.course.Quiz.filter(q => q.level === this.currentDifficulty);
  }

  getCurrentQuestion() {
    const availableQuestions = this.getAdaptiveQuestions();
    return availableQuestions.length ? availableQuestions[0] : null;
  }

  submitQuizAnswer(isCorrect: boolean) {
    const currentQuestion = this.getCurrentQuestion();
    if (currentQuestion) {
      this.answerQuestion(currentQuestion.id, isCorrect);
    }
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
  focusMode: boolean = false;

  toggleFocusMode() {
    this.focusMode = !this.focusMode;
    this.updateBodyOverflow();
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.focusMode) {
      this.focusMode = false;
      this.updateBodyOverflow();
    }
  }

  updateBodyOverflow() {
    document.body.style.overflow = this.focusMode ? 'hidden' : 'auto';
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }
  
  quizStarted = false;
  minutes = 30;
  seconds = 0;
  timer: any;
  userAnswers: any = {};

  startQuiz() {
    if (sessionStorage.getItem("id") == null) {
      alert("Login to take the quiz.")
      return;
    }
    this.quizStarted = true;
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.timer);
          this.endQuiz();
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  recordAnswer(questionId: number, answer: string) {
    this.userAnswers[questionId] = answer;
  }

  async submitQuiz() {
    this.endQuiz();
    await this.sendDataToJson(this.userAnswers);
    alert('Quiz submitted successfully!');
  }

  async sendDataToJson(data: any) {
    const userId = sessionStorage.getItem('userId');
    const quizData = { userId, answers: data };

    const response = await fetch('assets/quiz_results.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quizData)
    });

    console.log('Data sent to JSON:', quizData);
  }

  endQuiz() {
    clearInterval(this.timer);
    this.quizStarted = false;
    alert('Time is up! Your quiz has ended.');
  }
}


