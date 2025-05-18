export interface Course {
  id: number;
  title: string;
  level: string;
  duration: string;
  rating: number;
  image: string;
}

export interface Category {
  name: string;
  subcategories: {
    name: string;
    coursesCount: number;
    link: string;
    icon: string;
  }[];
}

export interface CourseDetails {
  CourseCategory: string;
  CourseId: number;
  Title: string;
  NumOfModules: number;
  ModulesTitle: string[];
  VideoTutorials: string[];
  Assignments: Assignment[];
  Quiz: QuizQuestion[];
}

export interface Assignment {
  ModuleTitle: string;
  Assignments: AssignmentQuestion[]
}

export interface AssignmentQuestion {
  AssignmentId: string;
  Question: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  level: number; //1-5
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: number;
  explanation?: string;
}