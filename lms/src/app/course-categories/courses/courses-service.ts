import { Injectable } from '@angular/core';

interface Course {
  title: string;
  level: string;
  duration: string;
  rating: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesData: Record<string,Course[]> = {
    'web-development': [
      { title: 'HTML & CSS Basics', level: 'Beginner', duration: '4 Weeks', rating: 4, image: 'web-development/1681327776406.png' },
      { title: 'JavaScript Mastery', level: 'Intermediate', duration: '8 Weeks', rating: 4.5, image: 'web-development/cover.jpg' },
      { title: 'Advanced React', level: 'Advanced', duration: '10 Weeks', rating: 4.7, image: 'web-development/eba1c4863eb1a6576514ccf2b138f6f5b53871e9.png' }
    ],
    'mobile-development': [
      { title: 'React Native for Beginners', level: 'Beginner', duration: '6 Weeks', rating: 4, image: 'mobile-development/cover-cold-dive-into-react-native-a-beginners-tutorial.png' },
      { title: 'Advanced Android Development', level: 'Advanced', duration: '12 Weeks', rating: 4.7, image: 'mobile-development/717429608c93_.png' },
      { title: 'iOS App Development', level: 'Intermediate', duration: '8 Weeks', rating: 4.3, image: 'mobile-development/65f85396b33db_ios.app.development.1920.1080.png' }
    ],
    'ai-ml': [
      { title: 'Intro to Machine Learning', level: 'Beginner', duration: '5 Weeks', rating: 4.2, image: 'ai-ml/Blog-What-is-NLP.jpg' },
      { title: 'Deep Learning with TensorFlow', level: 'Advanced', duration: '10 Weeks', rating: 4.8, image: 'ai-ml/maxresdefault.jpg' },
      { title: 'Natural Language Processing', level: 'Intermediate', duration: '7 Weeks', rating: 4.5, image: 'ai-ml/Blog-What-is-NLP.jpg' }
    ],
    'finance': [
      { title: 'Basics of Accounting', level: 'Beginner', duration: '4 Weeks', rating: 4.3, image: 'finance/accounting-basics-explanation.webp' },
      { title: 'Advanced Financial Analysis', level: 'Advanced', duration: '8 Weeks', rating: 4.7, image: 'finance/Advanced-Financial-Analysis5.png' },
      { title: 'Investment Strategies', level: 'Intermediate', duration: '6 Weeks', rating: 4.5, image: 'finance/HowToBuildAnInvestmentStrategy_image1-opt.jpg' }
    ],
    'marketing': [
      { title: 'Digital Marketing Fundamentals', level: 'Beginner', duration: '4 Weeks', rating: 4.2, image: 'marketing/54-1.png' },
      { title: 'SEO Mastery', level: 'Intermediate', duration: '6 Weeks', rating: 4.6, image: 'marketing/SEO-Career-in-Chandigarh.webp' },
      { title: 'Advanced Content Marketing', level: 'Advanced', duration: '8 Weeks', rating: 4.8, image: 'marketing/advanced-content-marketing.jpg' }
    ],
    'graphic-design': [
      { title: 'Photoshop Essentials', level: 'Beginner', duration: '4 Weeks', rating: 4.3, image: 'graphic-design/photoshop.png' },
      { title: 'Advanced Illustrator', level: 'Advanced', duration: '8 Weeks', rating: 4.6, image: 'graphic-design/illustrator.png' },
      { title: 'UI/UX Design Basics', level: 'Intermediate', duration: '6 Weeks', rating: 4.5, image: 'graphic-design/ui-ux.png' }
    ],
    'photography': [
      { title: 'Basic Photography Techniques', level: 'Beginner', duration: '4 Weeks', rating: 4.2, image: 'photography/basic.png' },
      { title: 'Advanced Portrait Photography', level: 'Advanced', duration: '8 Weeks', rating: 4.7, image: 'photography/portrait.png' },
      { title: 'Photo Editing Mastery', level: 'Intermediate', duration: '6 Weeks', rating: 4.4, image: 'photography/editing.png' }
    ],
    'fitness': [
      { title: 'Fitness Fundamentals', level: 'Beginner', duration: '4 Weeks', rating: 4.3, image: 'fitness/fundamentals.png' },
      { title: 'Strength Training', level: 'Advanced', duration: '8 Weeks', rating: 4.7, image: 'fitness/strength.png' },
      { title: 'Cardio Workouts', level: 'Intermediate', duration: '6 Weeks', rating: 4.4, image: 'fitness/cardio.png' }
    ],
    'english': [
      { title: 'English Grammar Basics', level: 'Beginner', duration: '4 Weeks', rating: 4.4, image: 'english/grammar.png' },
      { title: 'Advanced English Speaking', level: 'Advanced', duration: '8 Weeks', rating: 4.8, image: 'english/speaking.png' },
      { title: 'Business English', level: 'Intermediate', duration: '6 Weeks', rating: 4.5, image: 'english/business.png' }
    ]
  };

  constructor() {}

  getCoursesByCategory(category: string) {
    return this.coursesData[category] || [];
  }

  getAllCategories() {
    return Object.keys(this.coursesData);
  }
}
