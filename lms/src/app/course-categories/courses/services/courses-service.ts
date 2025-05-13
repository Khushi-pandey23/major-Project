import { Injectable } from '@angular/core';
import { Category, Course, CourseDetails } from '../interfaces/course-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesData: Record<string, Course[]> = {
    'web-development': [
      { id: 1, title: 'HTML & CSS Basics', level: 'Beginner', duration: '4 Weeks', rating: 4, image: 'web-development/1681327776406.png' },
      { id: 2, title: 'JavaScript Mastery', level: 'Intermediate', duration: '8 Weeks', rating: 4.5, image: 'web-development/cover.jpg' },
      { id: 3, title: 'Advanced React', level: 'Advanced', duration: '10 Weeks', rating: 4.7, image: 'web-development/eba1c4863eb1a6576514ccf2b138f6f5b53871e9.png' }
    ],
    'mobile-development': [
      { id: 1, title: 'React Native for Beginners', level: 'Beginner', duration: '6 Weeks', rating: 4, image: 'mobile-development/cover-cold-dive-into-react-native-a-beginners-tutorial.png' },
      { id: 2, title: 'Advanced Android Development', level: 'Advanced', duration: '12 Weeks', rating: 4.7, image: 'mobile-development/717429608c93_.png' },
      { id: 3, title: 'iOS App Development', level: 'Intermediate', duration: '8 Weeks', rating: 4.3, image: 'mobile-development/65f85396b33db_ios.app.development.1920.1080.png' }
    ],
    'ai-ml': [
      { id: 1, title: 'Intro to Machine Learning', level: 'Beginner', duration: '5 Weeks', rating: 4.2, image: 'ai-ml/Blog-What-is-NLP.jpg' },
      { id: 2, title: 'Deep Learning with TensorFlow', level: 'Advanced', duration: '10 Weeks', rating: 4.8, image: 'ai-ml/maxresdefault.jpg' },
      { id: 3, title: 'Natural Language Processing', level: 'Intermediate', duration: '7 Weeks', rating: 4.5, image: 'ai-ml/Blog-What-is-NLP.jpg' }
    ],
    'finance': [
      { id: 1, title: 'Basics of Accounting', level: 'Beginner', duration: '4 Weeks', rating: 4.3, image: 'finance/accounting-basics-explanation.webp' },
      { id: 2, title: 'Advanced Financial Analysis', level: 'Advanced', duration: '8 Weeks', rating: 4.7, image: 'finance/Advanced-Financial-Analysis5.png' },
      { id: 3, title: 'Investment Strategies', level: 'Intermediate', duration: '6 Weeks', rating: 4.5, image: 'finance/HowToBuildAnInvestmentStrategy_image1-opt.jpg' }
    ],
    'marketing': [
      { id: 1, title: 'Digital Marketing Fundamentals', level: 'Beginner', duration: '4 Weeks', rating: 4.2, image: 'marketing/54-1.png' },
      { id: 2, title: 'SEO Mastery', level: 'Intermediate', duration: '6 Weeks', rating: 4.6, image: 'marketing/SEO-Career-in-Chandigarh.webp' },
      { id: 3, title: 'Advanced Content Marketing', level: 'Advanced', duration: '8 Weeks', rating: 4.8, image: 'marketing/advanced-content-marketing.jpg' }
    ],
    'graphic-design': [
      { id: 1, title: 'Photoshop Essentials', level: 'Beginner', duration: '4 Weeks', rating: 4.3, image: 'graphic-design/22qHomepageFeatureBox-PS-ES-ARP18.jpg' },
      { id: 2, title: 'Advanced Illustrator', level: 'Advanced', duration: '8 Weeks', rating: 4.6, image: 'graphic-design/maxresdefault.jpg' },
      { id: 3, title: 'UI/UX Design Basics', level: 'Intermediate', duration: '6 Weeks', rating: 4.5, image: 'graphic-design/effective_ways_to_learn_ui_ux_design.webp' }
    ],
    'photography': [
      { id: 1, title: 'Basic Photography Techniques', level: 'Beginner', duration: '4 Weeks', rating: 4.2, image: 'photography/basic.png' },
      { id: 2, title: 'Advanced Portrait Photography', level: 'Advanced', duration: '8 Weeks', rating: 4.7, image: 'photography/portrait.png' },
      { id: 3, title: 'Photo Editing Mastery', level: 'Intermediate', duration: '6 Weeks', rating: 4.4, image: 'photography/editing.png' }
    ],
    'creative-writing': [
      { id: 1, title: 'Creative Writing Basics', level: 'Beginner', duration: '4 Weeks', rating: 4.3, image: 'creative-writing/basics.png' },
      { id: 2, title: 'Advanced Storytelling', level: 'Advanced', duration: '8 Weeks', rating: 4.8, image: 'creative-writing/storytelling.png' },
      { id: 3, title: 'Poetry Writing Mastery', level: 'Intermediate', duration: '6 Weeks', rating: 4.5, image: 'creative-writing/poetry.png' }
    ],
    'nutrition': [
      { id: 1, title: 'Basic Nutrition Guide', level: 'Beginner', duration: '4 Weeks', rating: 4.2, image: 'nutrition/guide.png' },
      { id: 2, title: 'Advanced Diet Planning', level: 'Advanced', duration: '8 Weeks', rating: 4.7, image: 'nutrition/diet.png' },
      { id: 3, title: 'Healthy Cooking', level: 'Intermediate', duration: '6 Weeks', rating: 4.4, image: 'nutrition/cooking.png' }
    ],
    'fitness': [
      { id: 1, title: 'Fitness Fundamentals', level: 'Beginner', duration: '4 Weeks', rating: 4.3, image: 'fitness/fundamentals.png' },
      { id: 2, title: 'Strength Training', level: 'Advanced', duration: '8 Weeks', rating: 4.7, image: 'fitness/strength.png' },
      { id: 3, title: 'Cardio Workouts', level: 'Intermediate', duration: '6 Weeks', rating: 4.4, image: 'fitness/cardio.png' }
    ]
  };

  private categories: Category[] = [
    {
      name: 'Technology & Programming',
      subcategories: [
        { name: 'Web Development', coursesCount: this.coursesData["web-development"].length, link: '/courses/web-development', icon: 'fas fa-laptop-code' },
        { name: 'Mobile App Development', coursesCount: this.coursesData['mobile-development'].length, link: '/courses/mobile-development', icon: 'fas fa-mobile-alt' },
        { name: 'AI & Machine Learning', coursesCount: this.coursesData['ai-ml'].length, link: '/courses/ai-ml', icon: 'fas fa-brain' }
      ]
    },
    {
      name: 'Business & Management',
      subcategories: [
        { name: 'Finance & Accounting', coursesCount: this.coursesData['finance'].length, link: '/courses/finance', icon: 'fas fa-chart-line' },
        { name: 'Marketing', coursesCount: this.coursesData['marketing'].length, link: '/courses/marketing', icon: 'fas fa-bullhorn' }
      ]
    },
    {
      name: 'Creative Arts',
      subcategories: [
        { name: 'Graphic Design', coursesCount: this.coursesData['graphic-design'].length, link: '/courses/graphic-design', icon: 'fas fa-paint-brush' },
        { name: 'Photography', coursesCount: this.coursesData['photography'].length, link: '/courses/photography', icon: 'fas fa-camera' },
        { name: 'Creative Writing', coursesCount: this.coursesData['creative-writing'].length, link: '/courses/creative-writing', icon: 'fas fa-pen-fancy' }
      ]
    },
    {
      name: 'Health & Wellness',
      subcategories: [
        { name: 'Nutrition & Diet', coursesCount: this.coursesData['nutrition'].length, link: '/courses/nutrition', icon: 'fas fa-heartbeat' },
        { name: 'Fitness Training', coursesCount: this.coursesData['fitness'].length, link: '/courses/fitness', icon: 'fas fa-dumbbell' }
      ]
    }
  ];

  private course: CourseDetails[] =
    [
      {
        CourseCategory: 'web-development',
        CourseId: 1,
        Title: 'HTML & CSS Basics',
        NumOfModules: 3,
        ModulesTitle: ['HTML Tags', 'CSS Selectors', 'CSS Media Queries'],
        VideoTutorials: [
          'https://youtu.be/K_EVuLegRZ0?si=FcUzrP3WTwv4BhZV',
          'https://youtu.be/l1mER1bV0N0?si=VaFAy7EqdX0B5lXv',
          'https://youtu.be/n9yI6fjkrfE?si=eLHobSG25-N-i3rD'
        ],
        Assignments: [
          {
            ModuleTitle: 'HTML Tags',
            Assignments: [
              { AssignmentId: 'HTCSBa1A1', Question: 'Design a form for storing employee details.' }
            ]
          },
          {
            ModuleTitle: 'CSS Selectors',
            Assignments: [
              { AssignmentId: 'HTCSBa2A1', Question: 'Create personalized resume' },
              { AssignmentId: 'HTCSBa2A2', Question: 'Create Basic layout of the application which contain header, footer, leftbar and sidebar.' }
            ]
          },
          {
            ModuleTitle: 'CSS Media Queries',
            Assignments: [
              { AssignmentId: 'HTCSBa3A1', Question: 'Create Photo Album Gallery, which must be responsive. Using Media Queries Implement this task.' },
              { AssignmentId: 'HTCSBa3A2', Question: 'Build a responsive blog page with the following layout: Header, Content, Footer' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'Which HTML tag is used to create a hyperlink?',
            level: 3
          },
          {
            id: 2,
            question: 'What CSS property is used to change the text color?',
            level: 2
          },
        ]
      },
      {
        CourseCategory: 'web-development',
        CourseId: 2,
        Title: 'JavaScript Mastery',
        NumOfModules: 4,
        ModulesTitle: ['JavaScript Fundamentals', 'DOM Manipulation', 'Asynchronous JavaScript', 'Modern JS Features'],
        VideoTutorials: [
          'https://youtu.be/hdI2bqOjy3c?si=QdN82-7HZIXu9ILP',
          'https://youtu.be/W6NZfCO5SIk?si=_qH7BHQrTwCjSbKA',
          'https://youtu.be/PkZNo7MFNFg?si=UeOQkG3MqnUAFxfJ',
          'https://youtu.be/Qqx_wzMmFeA?si=sDKWM-MmjS8MHpBp'
        ],
        Assignments: [
          {
            ModuleTitle: 'JavaScript Fundamentals',
            Assignments: [
              { AssignmentId: 'JSMas1A1', Question: 'Create a calculator that performs basic arithmetic operations.' },
              { AssignmentId: 'JSMas1A2', Question: 'Build a program that validates user input for a registration form.' }
            ]
          },
          {
            ModuleTitle: 'DOM Manipulation',
            Assignments: [
              { AssignmentId: 'JSMas2A1', Question: 'Create a dynamic to-do list where items can be added, edited, and removed.' },
              { AssignmentId: 'JSMas2A2', Question: 'Build a carousel/slider that displays images with navigation controls.' }
            ]
          },
          {
            ModuleTitle: 'Asynchronous JavaScript',
            Assignments: [
              { AssignmentId: 'JSMas3A1', Question: 'Create a weather app that fetches data from a public API.' },
              { AssignmentId: 'JSMas3A2', Question: 'Implement infinite scrolling for a list of items fetched from an API.' }
            ]
          },
          {
            ModuleTitle: 'Modern JS Features',
            Assignments: [
              { AssignmentId: 'JSMas4A1', Question: 'Refactor an existing application to use ES6+ features.' },
              { AssignmentId: 'JSMas4A2', Question: 'Create a module-based application with proper import/export functionality.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'Which method is used to add an element at the end of an array?',
            level: 2
          },
          {
            id: 2,
            question: 'What is the difference between let, const, and var?',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'web-development',
        CourseId: 3,
        Title: 'Advanced React',
        NumOfModules: 5,
        ModulesTitle: ['React Hooks', 'State Management', 'Performance Optimization', 'Testing React Apps', 'Advanced Patterns'],
        VideoTutorials: [
          'https://youtu.be/w7ejDZ8SWv8?si=LVGzFoA-IITk0gBP',
          'https://youtu.be/4UZrsTqkcW4?si=Vp5lYUCjPGBPQF34',
          'https://youtu.be/bMknfKXIFA8?si=2Y9ZnQQkLQ1wT8Gj',
          'https://youtu.be/a_7Z7C_JCyo?si=vGOdFF-aEpCl-G9X',
          'https://youtu.be/Ke90Tje7VS0?si=ZAiLKmPaXQx2_e7n'
        ],
        Assignments: [
          {
            ModuleTitle: 'React Hooks',
            Assignments: [
              { AssignmentId: 'ARea1A1', Question: 'Convert a class component application to functional components with hooks.' },
              { AssignmentId: 'ARea1A2', Question: 'Create a custom hook for form validation.' }
            ]
          },
          {
            ModuleTitle: 'State Management',
            Assignments: [
              { AssignmentId: 'ARea2A1', Question: 'Implement Redux in a React application.' },
              { AssignmentId: 'ARea2A2', Question: 'Build a context-based state management system for a complex application.' }
            ]
          },
          {
            ModuleTitle: 'Performance Optimization',
            Assignments: [
              { AssignmentId: 'ARea3A1', Question: 'Optimize a React application that has performance issues.' },
              { AssignmentId: 'ARea3A2', Question: 'Implement code splitting and lazy loading in a React application.' }
            ]
          },
          {
            ModuleTitle: 'Testing React Apps',
            Assignments: [
              { AssignmentId: 'ARea4A1', Question: 'Write unit tests for React components using Jest and React Testing Library.' },
              { AssignmentId: 'ARea4A2', Question: 'Implement end-to-end testing for a React application using Cypress.' }
            ]
          },
          {
            ModuleTitle: 'Advanced Patterns',
            Assignments: [
              { AssignmentId: 'ARea5A1', Question: 'Implement the Compound Component pattern in a UI component.' },
              { AssignmentId: 'ARea5A2', Question: 'Build a component library using advanced React patterns.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the purpose of the useEffect hook?',
            level: 3
          },
          {
            id: 2,
            question: 'Explain the concept of React Context and when to use it.',
            level: 4
          },
        ]
      },
      {
        CourseCategory: 'mobile-development',
        CourseId: 1,
        Title: 'React Native for Beginners',
        NumOfModules: 4,
        ModulesTitle: ['React Native Basics', 'Navigation', 'Styling in React Native', 'Using Native Device Features'],
        VideoTutorials: [
          'https://youtu.be/0-S5a0eXPoc?si=hP_lhgRjpBuKCFbQ',
          'https://youtu.be/qSRrxpdMpVc?si=ckDw72iG2UMHQzrK',
          'https://youtu.be/VozPNrt-LfE?si=QVFI4dGr7Yd-wwkX',
          'https://youtu.be/mJ3bGvy0WAY?si=RBWYMmUEMWZ8pxcV'
        ],
        Assignments: [
          {
            ModuleTitle: 'React Native Basics',
            Assignments: [
              { AssignmentId: 'RNBe1A1', Question: 'Create a simple to-do list application using React Native components.' },
              { AssignmentId: 'RNBe1A2', Question: 'Build a calculator app with React Native.' }
            ]
          },
          {
            ModuleTitle: 'Navigation',
            Assignments: [
              { AssignmentId: 'RNBe2A1', Question: 'Implement stack navigation in a multi-screen app.' },
              { AssignmentId: 'RNBe2A2', Question: 'Create a tab-based navigation system for a social media app clone.' }
            ]
          },
          {
            ModuleTitle: 'Styling in React Native',
            Assignments: [
              { AssignmentId: 'RNBe3A1', Question: 'Recreate a complex UI design from a provided mockup.' },
              { AssignmentId: 'RNBe3A2', Question: 'Create a responsive layout that works on different screen sizes.' }
            ]
          },
          {
            ModuleTitle: 'Using Native Device Features',
            Assignments: [
              { AssignmentId: 'RNBe4A1', Question: 'Build a camera app that can take photos and save them to the device.' },
              { AssignmentId: 'RNBe4A2', Question: 'Create a location-based app that uses the devices GPS.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the difference between React and React Native?',
            level: 2
          },
          {
            id: 2,
            question: 'How do you handle platform-specific code in React Native?',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'mobile-development',
        CourseId: 2,
        Title: 'Advanced Android Development',
        NumOfModules: 5,
        ModulesTitle: ['Kotlin for Android', 'Architecture Components', 'Material Design', 'Background Processing', 'App Publishing'],
        VideoTutorials: [
          'https://youtu.be/Ob64lXtAJ0U?si=9cjnCOabLnrwxOZD',
          'https://youtu.be/fis26HvvDII?si=kXRxqW5Wdnxhs_y0',
          'https://youtu.be/LjrFuJN1hnI?si=88ZQsOHRyWDXXCuQ',
          'https://youtu.be/F-K-jy5uNk8?si=K0GJrLl9hIIcGCby',
          'https://youtu.be/YxZXMgdmOFM?si=xmwZsNfyQwL7lbk4'
        ],
        Assignments: [
          {
            ModuleTitle: 'Kotlin for Android',
            Assignments: [
              { AssignmentId: 'AADe1A1', Question: 'Convert a Java-based Android application to Kotlin.' },
              { AssignmentId: 'AADe1A2', Question: 'Implement coroutines for asynchronous operations in an Android app.' }
            ]
          },
          {
            ModuleTitle: 'Architecture Components',
            Assignments: [
              { AssignmentId: 'AADe2A1', Question: 'Build an app using MVVM architecture with LiveData and ViewModel.' },
              { AssignmentId: 'AADe2A2', Question: 'Create a database application using Room persistence library.' }
            ]
          },
          {
            ModuleTitle: 'Material Design',
            Assignments: [
              { AssignmentId: 'AADe3A1', Question: 'Redesign an existing app using Material Design 3 principles.' },
              { AssignmentId: 'AADe3A2', Question: 'Implement complex animations and transitions in an Android app.' }
            ]
          },
          {
            ModuleTitle: 'Background Processing',
            Assignments: [
              { AssignmentId: 'AADe4A1', Question: 'Create a music player app with background service.' },
              { AssignmentId: 'AADe4A2', Question: 'Implement WorkManager for scheduled background tasks.' }
            ]
          },
          {
            ModuleTitle: 'App Publishing',
            Assignments: [
              { AssignmentId: 'AADe5A1', Question: 'Prepare an app for release with proper signing and optimization.' },
              { AssignmentId: 'AADe5A2', Question: 'Implement in-app purchases in an Android application.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What are the advantages of using Kotlin over Java for Android development?',
            level: 3
          },
          {
            id: 2,
            question: 'Explain the concept of LiveData and its benefits.',
            level: 4
          },
        ]
      },
      {
        CourseCategory: 'mobile-development',
        CourseId: 3,
        Title: 'iOS App Development',
        NumOfModules: 4,
        ModulesTitle: ['Swift Programming', 'UIKit Fundamentals', 'Core Data', 'App Store Submission'],
        VideoTutorials: [
          'https://youtu.be/comQ1-x2a1Q?si=1n4ciFP-BN6FnRbJ',
          'https://youtu.be/TZL5AmwuwlA?si=JA3lZBHDVIj1iF8A',
          'https://youtu.be/bZNAFkkUeKs?si=OE8i7mD5V7QnBWEi',
          'https://youtu.be/xAhgj1t0yvM?si=BIYZvMvEEGVF1wPx'
        ],
        Assignments: [
          {
            ModuleTitle: 'Swift Programming',
            Assignments: [
              { AssignmentId: 'IOSAp1A1', Question: 'Create a simple calculator application using Swift.' },
              { AssignmentId: 'IOSAp1A2', Question: 'Implement object-oriented programming concepts in a Swift application.' }
            ]
          },
          {
            ModuleTitle: 'UIKit Fundamentals',
            Assignments: [
              { AssignmentId: 'IOSAp2A1', Question: 'Design and implement a multi-screen app with UIKit.' },
              { AssignmentId: 'IOSAp2A2', Question: 'Create a custom table view with complex cell layouts.' }
            ]
          },
          {
            ModuleTitle: 'Core Data',
            Assignments: [
              { AssignmentId: 'IOSAp3A1', Question: 'Build a note-taking app with persistent storage using Core Data.' },
              { AssignmentId: 'IOSAp3A2', Question: 'Implement data relationships and migrations in a Core Data application.' }
            ]
          },
          {
            ModuleTitle: 'App Store Submission',
            Assignments: [
              { AssignmentId: 'IOSAp4A1', Question: 'Prepare an app for submission to the App Store.' },
              { AssignmentId: 'IOSAp4A2', Question: 'Implement TestFlight for beta testing of an iOS application.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What are the key differences between structs and classes in Swift?',
            level: 3
          },
          {
            id: 2,
            question: 'Explain how Auto Layout works in iOS development.',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'ai-ml',
        CourseId: 1,
        Title: 'Intro to Machine Learning',
        NumOfModules: 4,
        ModulesTitle: ['ML Fundamentals', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
        VideoTutorials: [
          'https://youtu.be/ngLyX54e1LU?si=8MbjYFVtpOjyKsXU',
          'https://youtu.be/rvVkVsG49uU?si=fkHBs1MlFj9hh-vF',
          'https://youtu.be/v6VJ2RO66Ag?si=JJ-IzI7O_XHPN2hW',
          'https://youtu.be/LvaTokhYnDw?si=D5CuJxjW7ONwTrZs'
        ],
        Assignments: [
          {
            ModuleTitle: 'ML Fundamentals',
            Assignments: [
              { AssignmentId: 'ITML1A1', Question: 'Implement data preprocessing techniques on a given dataset.' },
              { AssignmentId: 'ITML1A2', Question: 'Explore a dataset and perform exploratory data analysis.' }
            ]
          },
          {
            ModuleTitle: 'Supervised Learning',
            Assignments: [
              { AssignmentId: 'ITML2A1', Question: 'Build a linear regression model to predict house prices.' },
              { AssignmentId: 'ITML2A2', Question: 'Create a classification model for a binary classification problem.' }
            ]
          },
          {
            ModuleTitle: 'Unsupervised Learning',
            Assignments: [
              { AssignmentId: 'ITML3A1', Question: 'Implement K-means clustering on a customer segmentation dataset.' },
              { AssignmentId: 'ITML3A2', Question: 'Apply dimensionality reduction techniques on a high-dimensional dataset.' }
            ]
          },
          {
            ModuleTitle: 'Model Evaluation',
            Assignments: [
              { AssignmentId: 'ITML4A1', Question: 'Compare multiple models using appropriate evaluation metrics.' },
              { AssignmentId: 'ITML4A2', Question: 'Implement cross-validation and hyperparameter tuning on a machine learning model.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the difference between supervised and unsupervised learning?',
            level: 2
          },
          {
            id: 2,
            question: 'Explain the bias-variance tradeoff in machine learning models.',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'ai-ml',
        CourseId: 2,
        Title: 'Deep Learning with TensorFlow',
        NumOfModules: 5,
        ModulesTitle: ['Neural Networks Basics', 'TensorFlow Fundamentals', 'Convolutional Neural Networks', 'Recurrent Neural Networks', 'Deployment'],
        VideoTutorials: [
          'https://youtu.be/aircAruvnKk?si=2e4JKoUaYPsJP0Nf',
          'https://youtu.be/tpCFfeUEGs8?si=7bQ7Lfj6qx1hpIgM',
          'https://youtu.be/KhU4CGfE5m4?si=NM0a1O4p-KqQcMIY',
          'https://youtu.be/SEnXr6v2ifU?si=NvLWvbJsQPDC_cZp',
          'https://youtu.be/5ECD8J3dvDQ?si=cKFajXwqYZ2ZRY76'
        ],
        Assignments: [
          {
            ModuleTitle: 'Neural Networks Basics',
            Assignments: [
              { AssignmentId: 'DLTF1A1', Question: 'Implement a simple neural network from scratch using NumPy.' },
              { AssignmentId: 'DLTF1A2', Question: 'Analyze the effect of different activation functions on model performance.' }
            ]
          },
          {
            ModuleTitle: 'TensorFlow Fundamentals',
            Assignments: [
              { AssignmentId: 'DLTF2A1', Question: 'Build and train a neural network using TensorFlow for a regression problem.' },
              { AssignmentId: 'DLTF2A2', Question: 'Implement callbacks and tensorboard for model monitoring.' }
            ]
          },
          {
            ModuleTitle: 'Convolutional Neural Networks',
            Assignments: [
              { AssignmentId: 'DLTF3A1', Question: 'Create an image classification model using CNN architecture.' },
              { AssignmentId: 'DLTF3A2', Question: 'Implement transfer learning using a pre-trained CNN model.' }
            ]
          },
          {
            ModuleTitle: 'Recurrent Neural Networks',
            Assignments: [
              { AssignmentId: 'DLTF4A1', Question: 'Build a sentiment analysis model using RNNs.' },
              { AssignmentId: 'DLTF4A2', Question: 'Create a sequence prediction model for time series data.' }
            ]
          },
          {
            ModuleTitle: 'Deployment',
            Assignments: [
              { AssignmentId: 'DLTF5A1', Question: 'Convert a TensorFlow model to TensorFlow Lite for mobile deployment.' },
              { AssignmentId: 'DLTF5A2', Question: 'Deploy a deep learning model as a web service using TensorFlow Serving.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'Explain the concept of backpropagation in neural networks.',
            level: 4
          },
          {
            id: 2,
            question: 'What are the advantages of using CNNs for image processing tasks?',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'ai-ml',
        CourseId: 3,
        Title: 'Natural Language Processing',
        NumOfModules: 4,
        ModulesTitle: ['Text Processing', 'Word Embeddings', 'Sequence Models', 'Transformer Models'],
        VideoTutorials: [
          'https://youtu.be/CMrHM8a3hqw?si=4XZCWoXbr3tH9uZ9',
          'https://youtu.be/QvYIrztylH0?si=DHGEWgv6dxU2yFIS',
          'https://youtu.be/QEn9bdJR1Y0?si=8dT5lY4eFTaQqyUc',
          'https://youtu.be/TQQlZhbC5ps?si=rnlrr6_xDfaVcAVj'
        ],
        Assignments: [
          {
            ModuleTitle: 'Text Processing',
            Assignments: [
              { AssignmentId: 'NLP1A1', Question: 'Implement text preprocessing techniques for a corpus of documents.' },
              { AssignmentId: 'NLP1A2', Question: 'Create a bag-of-words model and apply TF-IDF transformation.' }
            ]
          },
          {
            ModuleTitle: 'Word Embeddings',
            Assignments: [
              { AssignmentId: 'NLP2A1', Question: 'Train a Word2Vec model on a text corpus and analyze word similarities.' },
              { AssignmentId: 'NLP2A2', Question: 'Use pre-trained GloVe embeddings for a text classification task.' }
            ]
          },
          {
            ModuleTitle: 'Sequence Models',
            Assignments: [
              { AssignmentId: 'NLP3A1', Question: 'Build a text generation model using LSTM networks.' },
              { AssignmentId: 'NLP3A2', Question: 'Create a named entity recognition system using bidirectional LSTM.' }
            ]
          },
          {
            ModuleTitle: 'Transformer Models',
            Assignments: [
              { AssignmentId: 'NLP4A1', Question: 'Fine-tune BERT for a sentiment analysis task.' },
              { AssignmentId: 'NLP4A2', Question: 'Implement a question-answering system using a transformer architecture.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What are the advantages of transformer models over RNNs for NLP tasks?',
            level: 4
          },
          {
            id: 2,
            question: 'Explain the concept of attention mechanism in neural networks.',
            level: 4
          },
        ]
      },
      {
        CourseCategory: 'finance',
        CourseId: 1,
        Title: 'Basics of Accounting',
        NumOfModules: 3,
        ModulesTitle: ['Accounting Principles', 'Financial Statements', 'Bookkeeping Basics'],
        VideoTutorials: [
          'https://youtu.be/VU4-yhkxG6w?si=CzaI3VYMbKYZ9DJw',
          'https://youtu.be/YqpyCdLGDHM?si=E6YOQVFhP4yCW67e',
          'https://youtu.be/BmQyTDt7UXc?si=YpIHtSQRl6xr0xnb'
        ],
        Assignments: [
          {
            ModuleTitle: 'Accounting Principles',
            Assignments: [
              { AssignmentId: 'BOA1A1', Question: 'Explain the double-entry accounting system with examples.' },
              { AssignmentId: 'BOA1A2', Question: 'Analyze a business scenario and apply accounting principles.' }
            ]
          },
          {
            ModuleTitle: 'Financial Statements',
            Assignments: [
              { AssignmentId: 'BOA2A1', Question: 'Create a balance sheet and income statement for a small business.' },
              { AssignmentId: 'BOA2A2', Question: 'Analyze financial statements and draw conclusions about business health.' }
            ]
          },
          {
            ModuleTitle: 'Bookkeeping Basics',
            Assignments: [
              { AssignmentId: 'BOA3A1', Question: 'Set up a chart of accounts for a new business.' },
              { AssignmentId: 'BOA3A2', Question: 'Record business transactions in a general ledger.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the accounting equation?',
            level: 1
          },
          {
            id: 2,
            question: 'Explain the difference between cash basis and accrual basis accounting.',
            level: 2
          },
        ]
      },
      {
        CourseCategory: 'finance',
        CourseId: 2,
        Title: 'Advanced Financial Analysis',
        NumOfModules: 4,
        ModulesTitle: ['Financial Ratios', 'Valuation Methods', 'Capital Budgeting', 'Financial Modeling'],
        VideoTutorials: [
          'https://youtu.be/TZZFBkbC2lA?si=E3TmQ7axRTgY3S4-',
          'https://youtu.be/znmQ7oMiQrM?si=D8vSZ0__wZEXJcOt',
          'https://youtu.be/4AFcPg2TTfk?si=MiDLR2G-E2y-0JLU',
          'https://youtu.be/IxRdAXxzQdU?si=3EB-0wXzTTuBgJBv'
        ],
        Assignments: [
          {
            ModuleTitle: 'Financial Ratios',
            Assignments: [
              { AssignmentId: 'AFA1A1', Question: 'Analyze a public company using financial ratio analysis.' },
              { AssignmentId: 'AFA1A2', Question: 'Compare financial performance of companies in the same industry using ratio analysis.' }
            ]
          },
          {
            ModuleTitle: 'Valuation Methods',
            Assignments: [
              { AssignmentId: 'AFA2A1', Question: 'Value a company using the discounted cash flow method.' },
              { AssignmentId: 'AFA2A2', Question: 'Apply comparable company analysis to value a private business.' }
            ]
          },
          {
            ModuleTitle: 'Capital Budgeting',
            Assignments: [
              { AssignmentId: 'AFA3A1', Question: 'Evaluate an investment opportunity using NPV, IRR, and payback period.' },
              { AssignmentId: 'AFA3A2', Question: 'Create a capital budgeting plan for a company with multiple projects.' }
            ]
          },
          {
            ModuleTitle: 'Financial Modeling',
            Assignments: [
              { AssignmentId: 'AFA4A1', Question: 'Build a three-statement financial model for a company.' },
              { AssignmentId: 'AFA4A2', Question: 'Create a scenario analysis model to evaluate business risks.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What factors affect a companys weighted average cost of capital(WACC)?',
            level: 4
          },
          {
            id: 2,
            question: 'Explain the difference between enterprise value and equity value.',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'finance',
        CourseId: 3,
        Title: 'Investment Strategies',
        NumOfModules: 4,
        ModulesTitle: ['Investment Fundamentals', 'Asset Allocation', 'Portfolio Management', 'Risk Management'],
        VideoTutorials: [
          'https://youtu.be/rpM1TA7FzOI?si=KcuoCn7ek3iP2h9y',
          'https://youtu.be/lw1yXE3vn38?si=hGnxXIRzPh_xzPUx',
          'https://youtu.be/vRPqUbMrpXg?si=jyAoHJWxxz76iP2L',
          'https://youtu.be/GR3D8C-8P48?si=X6GdVWPPa0p9U3W9'
        ],
        Assignments: [
          {
            ModuleTitle: 'Investment Fundamentals',
            Assignments: [
              { AssignmentId: 'IS1A1', Question: 'Analyze different investment vehicles and their characteristics.' },
              { AssignmentId: 'IS1A2', Question: 'Evaluate the impact of economic indicators on investment markets.' }
            ]
          },
          {
            ModuleTitle: 'Asset Allocation',
            Assignments: [
              { AssignmentId: 'IS2A1', Question: 'Create an asset allocation strategy for different investor profiles.' },
              { AssignmentId: 'IS2A2', Question: 'Analyze the performance of different asset classes over various market cycles.' }
            ]
          },
          {
            ModuleTitle: 'Portfolio Management',
            Assignments: [
              { AssignmentId: 'IS3A1', Question: 'Construct an investment portfolio using modern portfolio theory.' },
              { AssignmentId: 'IS3A2', Question: 'Develop a rebalancing strategy for a long-term investment portfolio.' }
            ]
          },
          {
            ModuleTitle: 'Risk Management',
            Assignments: [
              { AssignmentId: 'IS4A1', Question: 'Implement risk management techniques to protect an investment portfolio.' },
              { AssignmentId: 'IS4A2', Question: 'Analyze the use of derivatives for hedging investment risks.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the efficient frontier in modern portfolio theory?',
            level: 3
          },
          {
            id: 2,
            question: 'Explain the relationship between risk and return in investments.',
            level: 2
          },
        ]
      },
      {
        CourseCategory: 'marketing',
        CourseId: 1,
        Title: 'Digital Marketing Fundamentals',
        NumOfModules: 4,
        ModulesTitle: ['Marketing Principles', 'Social Media Marketing', 'Email Marketing', 'Analytics Basics'],
        VideoTutorials: [
          'https://youtu.be/nU-IIXBWlS4?si=OKKJDDRKldWMH_JQ',
          'https://youtu.be/q26seh4vuOw?si=8TYRx35TzEVfOB7o',
          'https://youtu.be/KAW7UH0dUQg?si=6z3H9_Zj5FYl9RmM',
          'https://youtu.be/mxVShs72IwU?si=gNRB3RkgG9NFNW02'
        ],
        Assignments: [
          {
            ModuleTitle: 'Marketing Principles',
            Assignments: [
              { AssignmentId: 'DMF1A1', Question: 'Create a digital marketing strategy for a small business.' },
              { AssignmentId: 'DMF1A2', Question: 'Analyze the digital marketing approach of a successful brand.' }
            ]
          },
          {
            ModuleTitle: 'Social Media Marketing',
            Assignments: [
              {
                AssignmentId: 'DMF2A1', Question: "Develop a content calendar for a company's social media presence."
              },
              { AssignmentId: 'DMF2A2', Question: 'Create a social media campaign for a product launch.' }
            ]
          },
          {
            ModuleTitle: 'Email Marketing',
            Assignments: [
              { AssignmentId: 'DMF3A1', Question: 'Design an email marketing campaign for customer acquisition.' },
              { AssignmentId: 'DMF3A2', Question: 'Create an email nurture sequence for leads.' }
            ]
          },
          {
            ModuleTitle: 'Analytics Basics',
            Assignments: [
              { AssignmentId: 'DMF4A1', Question: 'Set up tracking for a marketing campaign using Google Analytics.' },
              { AssignmentId: 'DMF4A2', Question: 'Analyze marketing data and provide recommendations for improvement.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the difference between organic and paid digital marketing?',
            level: 2
          },
          {
            id: 2,
            question: 'Explain the concept of customer acquisition cost (CAC).',
            level: 2
          },
        ]
      },
      {
        CourseCategory: 'marketing',
        CourseId: 2,
        Title: 'SEO Mastery',
        NumOfModules: 4,
        ModulesTitle: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'SEO Analytics'],
        VideoTutorials: [
          'https://youtu.be/MYE6T_gd_FA?si=TKgRq1xFnb3QFiqe',
          'https://youtu.be/oaf_-NeHXZ8?si=9RwXrMjXKfyhzdZS',
          'https://youtu.be/J3SeBQnlW9U?si=7RbMQNS02yFI_8iI',
          'https://youtu.be/lb26Ah15iyU?si=RFgtUmIyb8lHxxdP'
        ],
        Assignments: [
          {
            ModuleTitle: 'On-Page SEO',
            Assignments: [
              { AssignmentId: 'SEOM1A1', Question: 'Conduct keyword research for a specific industry and create content strategy.' },
              { AssignmentId: 'SEOM1A2', Question: "Optimize a website's on- page elements for better search engine visibility." }
            ]
          },
          {
            ModuleTitle: 'Off-Page SEO',
            Assignments: [
              { AssignmentId: 'SEOM2A1', Question: 'Develop a link building strategy for a website.' },
              { AssignmentId: 'SEOM2A2', Question: 'Create a guest blogging campaign to improve domain authority.' }
            ]
          },
          {
            ModuleTitle: 'Technical SEO',
            Assignments: [
              { AssignmentId: 'SEOM3A1', Question: 'Perform a technical SEO audit of a website and provide recommendations.' },
              { AssignmentId: 'SEOM3A2', Question: 'Implement schema markup for a business website.' }
            ]
          },
          {
            ModuleTitle: 'SEO Analytics',
            Assignments: [
              { AssignmentId: 'SEOM4A1', Question: 'Set up SEO tracking and reporting using Google Search Console and Analytics.' },
              { AssignmentId: 'SEOM4A2', Question: 'Analyze SEO data and create a performance improvement plan.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What are the most important ranking factors for search engines?',
            level: 3
          },
          {
            id: 2,
            question: 'Explain the concept of domain authority and how to improve it.',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'marketing',
        CourseId: 3,
        Title: 'Advanced Content Marketing',
        NumOfModules: 4,
        ModulesTitle: ['Content Strategy', 'Content Creation', 'Content Distribution', 'Content Analytics'],
        VideoTutorials: [
          'https://youtu.be/RywGDoJQepI?si=OdRxaFmQNWKLgErD',
          'https://youtu.be/O0LjZGzYPvs?si=CqdZqmU2c-vklc-o',
          'https://youtu.be/-tlNJ9jG27M?si=iRX4j5qxPWYQSPAL',
          'https://youtu.be/ZY1j33w7s0g?si=f3RQFQGHKWpVRr24'
        ],
        Assignments: [
          {
            ModuleTitle: 'Content Strategy',
            Assignments: [
              { AssignmentId: 'ACM1A1', Question: 'Develop a comprehensive content marketing strategy for a B2B company.' },
              { AssignmentId: 'ACM1A2', Question: "Create buyer personas and content mapping for different stages of the buyer's journey." }
            ]
          },
          {
            ModuleTitle: 'Content Creation',
            Assignments: [
              { AssignmentId: 'ACM2A1', Question: 'Produce a pillar content piece with supporting cluster content.' },
              { AssignmentId: 'ACM2A2', Question: 'Create a content style guide for brand consistency.' }
            ]
          },
          {
            ModuleTitle: 'Content Distribution',
            Assignments: [
              { AssignmentId: 'ACM3A1', Question: 'Develop a multi-channel content distribution strategy.' },
              { AssignmentId: 'ACM3A2', Question: 'Create a content repurposing plan to maximize content value.' }
            ]
          },
          {
            ModuleTitle: 'Content Analytics',
            Assignments: [
              { AssignmentId: 'ACM4A1', Question: 'Set up content performance tracking using various analytics tools.' },
              { AssignmentId: 'ACM4A2', Question: 'Analyze content performance data and create an optimization strategy.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the purpose of a content audit and how do you conduct one?',
            level: 3
          },
          {
            id: 2,
            question: 'Explain the concept of content ROI and how to measure it.',
            level: 4
          },
        ]
      },
      {
        CourseCategory: 'graphic-design',
        CourseId: 1,
        Title: 'Photoshop Essentials',
        NumOfModules: 4,
        ModulesTitle: ['Interface & Tools', 'Selection & Manipulation', 'Layers & Masks', 'Effects & Filters'],
        VideoTutorials: [
          'https://youtu.be/IyR_uYsRdPs?si=d1SvRe-sA2DSwZVW',
          'https://youtu.be/T-aRrSJcCgI?si=ZJCcIDFH8KRXPCwJ',
          'https://youtu.be/NciB1YSrRJA?si=8lB-eInZ-ioLMT5F',
          'https://youtu.be/DpUu-pG-M7g?si=FbJJYP9s6h9gA8_B'
        ],
        Assignments: [
          {
            ModuleTitle: 'Interface & Tools',
            Assignments: [
              { AssignmentId: 'PE1A1', Question: 'Create a custom workspace and explain your tool organization.' },
              { AssignmentId: 'PE1A2', Question: 'Demonstrate the use of basic tools to create a simple composition.' }
            ]
          },
          {
            ModuleTitle: 'Selection & Manipulation',
            Assignments: [
              { AssignmentId: 'PE2A1', Question: 'Extract a subject from a complex background using various selection techniques.' },
              { AssignmentId: 'PE2A2', Question: 'Manipulate and transform objects in a composite image.' }
            ]
          },
          {
            ModuleTitle: 'Layers & Masks',
            Assignments: [
              { AssignmentId: 'PE3A1', Question: 'Create a multi-layered document with organized layer structure.' },
              { AssignmentId: 'PE3A2', Question: 'Use layer masks to create a seamless photo composite.' }
            ]
          },
          {
            ModuleTitle: 'Effects & Filters',
            Assignments: [
              { AssignmentId: 'PE4A1', Question: 'Apply adjustment layers and blending modes to enhance a photograph.' },
              { AssignmentId: 'PE4A2', Question: 'Create a text effect using layer styles and filters.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the difference between destructive and non-destructive editing?',
            level: 2
          },
          {
            id: 2,
            question: 'Explain the purpose of layer masks and how they differ from layer opacity.',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'graphic-design',
        CourseId: 2,
        Title: 'Advanced Illustrator',
        NumOfModules: 4,
        ModulesTitle: ['Vector Drawing Mastery', 'Typography & Text Effects', 'Pattern & Symbol Creation', 'Advanced Techniques'],
        VideoTutorials: [
          'https://youtu.be/y73xqqrBdJ4?si=rP_hZ1d1cq3tJRbH',
          'https://youtu.be/pFOy3_6AJeM?si=lzLN64p9R9RQdSx8',
          'https://youtu.be/jh5u7azS-ZY?si=kYQJOEcVhQG9uR4h',
          'https://youtu.be/YgNRAtrZ0B4?si=52g-lmxXz3VbE0_v'
        ],
        Assignments: [
          {
            ModuleTitle: 'Vector Drawing Mastery',
            Assignments: [
              { AssignmentId: 'AI1A1', Question: 'Create a complex illustration using the Pen tool and shape builder.' },
              { AssignmentId: 'AI1A2', Question: 'Recreate a photograph as a vector illustration using gradient mesh.' }
            ]
          },
          {
            ModuleTitle: 'Typography & Text Effects',
            Assignments: [
              { AssignmentId: 'AI2A1', Question: 'Design a typographic poster with custom text effects.' },
              { AssignmentId: 'AI2A2', Question: 'Create a custom font or lettering piece using Illustrator.' }
            ]
          },
          {
            ModuleTitle: 'Pattern & Symbol Creation',
            Assignments: [
              { AssignmentId: 'AI3A1', Question: 'Design a seamless pattern collection with coordinating themes.' },
              { AssignmentId: 'AI3A2', Question: 'Create a symbol library for a branding project.' }
            ]
          },
          {
            ModuleTitle: 'Advanced Techniques',
            Assignments: [
              {
                AssignmentId: 'AI4A1', Question: "Create an isometric illustration using Illustrator's 3D capabilities."
              },
              { AssignmentId: 'AI4A2', Question: 'Design a complex infographic combining charts, icons, and text.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What are the advantages of using symbols in Illustrator?',
            level: 3
          },
          {
            id: 2,
            question: 'Explain the concept of pathfinder operations and their uses.',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'graphic-design',
        CourseId: 3,
        Title: 'UI/UX Design Basics',
        NumOfModules: 4,
        ModulesTitle: ['UX Fundamentals', 'UI Design Principles', 'Wireframing & Prototyping', 'User Testing'],
        VideoTutorials: [
          'https://youtu.be/c9Wg6Cb_YlU?si=TkSiNHBdffcyBrPT',
          'https://youtu.be/cYfu0vUaU7s?si=i4T1ZHfjA7dZKUbU',
          'https://youtu.be/PnWN6jrV9fA?si=IcO8ZgGt_sFaY7H8',
          'https://youtu.be/WAi6ixIfdd4?si=XeJZSdXJwj-8GXKu'
        ],
        Assignments: [
          {
            ModuleTitle: 'UX Fundamentals',
            Assignments: [
              { AssignmentId: 'UIUX1A1', Question: 'Conduct user research and create user personas for a mobile application.' },
              { AssignmentId: 'UIUX1A2', Question: 'Create a user journey map for a specific digital product.' }
            ]
          },
          {
            ModuleTitle: 'UI Design Principles',
            Assignments: [
              { AssignmentId: 'UIUX2A1', Question: 'Design a color scheme and typography system for a digital product.' },
              { AssignmentId: 'UIUX2A2', Question: 'Create a UI component library with consistent design language.' }
            ]
          },
          {
            ModuleTitle: 'Wireframing & Prototyping',
            Assignments: [
              { AssignmentId: 'UIUX3A1', Question: 'Create low-fidelity wireframes for a multi-screen application.' },
              { AssignmentId: 'UIUX3A2', Question: 'Develop an interactive prototype for a website or application.' }
            ]
          },
          {
            ModuleTitle: 'User Testing',
            Assignments: [
              { AssignmentId: 'UIUX4A1', Question: 'Design and conduct a usability test for a digital product.' },
              { AssignmentId: 'UIUX4A2', Question: 'Analyze user testing results and propose design improvements.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the difference between UX and UI design?',
            level: 2
          },
          {
            id: 2,
            question: 'Explain the concept of accessibility in UI/UX design.',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'photography',
        CourseId: 1,
        Title: 'Basic Photography Techniques',
        NumOfModules: 4,
        ModulesTitle: ['Camera Basics', 'Composition', 'Lighting', 'Manual Settings'],
        VideoTutorials: [
          'https://youtu.be/YAt4315-uH4?si=uHKUKrGxsY8AXoZS',
          'https://youtu.be/vP-jLCv7-1c?si=3wz8KxlO33vVpJvK',
          'https://youtu.be/js6ZQV8BpNI?si=rLptbKI9KVGJ6VQD',
          'https://youtu.be/LutIudRhm10?si=9_o2I-wW-XCk6I9j'
        ],
        Assignments: [
          {
            ModuleTitle: 'Camera Basics',
            Assignments: [
              { AssignmentId: 'BPT1A1', Question: 'Explain the different parts of your camera and their functions.' },
              { AssignmentId: 'BPT1A2', Question: 'Compare and contrast different types of cameras and lenses.' }
            ]
          },
          {
            ModuleTitle: 'Composition',
            Assignments: [
              { AssignmentId: 'BPT2A1', Question: 'Create a series of photos demonstrating different composition rules.' },
              { AssignmentId: 'BPT2A2', Question: 'Photograph the same subject using different perspectives and framing.' }
            ]
          },
          {
            ModuleTitle: 'Lighting',
            Assignments: [
              { AssignmentId: 'BPT3A1', Question: 'Demonstrate the effect of different lighting conditions on the same subject.' },
              { AssignmentId: 'BPT3A2', Question: 'Create a photo series using natural light at different times of day.' }
            ]
          },
          {
            ModuleTitle: 'Manual Settings',
            Assignments: [
              { AssignmentId: 'BPT4A1', Question: 'Create photos that demonstrate understanding of aperture, shutter speed, and ISO.' },
              { AssignmentId: 'BPT4A2', Question: 'Shoot in manual mode to achieve specific creative effects.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'Explain the exposure triangle and how its elements interact.',
            level: 2
          },
          {
            id: 2,
            question: 'What is the rule of thirds and when should you break it?',
            level: 2
          },
        ]
      },
      {
        CourseCategory: 'photography',
        CourseId: 2,
        Title: 'Advanced Portrait Photography',
        NumOfModules: 4,
        ModulesTitle: ['Portrait Composition', 'Studio Lighting', 'Posing Techniques', 'Environmental Portraits'],
        VideoTutorials: [
          'https://youtu.be/uOHmAql7vQM?si=0UXmbkn0V0oCmogU',
          'https://youtu.be/XDGqH73AJjU?si=gJ2TtZQmUGWm3tnc',
          'https://youtu.be/kmi9TPQ54iY?si=5BEz5EWkHNiJy4Ee',
          'https://youtu.be/oP_R2_DWKRs?si=9EkL-eLDUJiXSoqU'
        ],
        Assignments: [
          {
            ModuleTitle: 'Portrait Composition',
            Assignments: [
              { AssignmentId: 'APP1A1', Question: 'Create a series of portraits using different focal lengths to demonstrate their effect.' },
              { AssignmentId: 'APP1A2', Question: 'Photograph a subject using various compositional techniques.' }
            ]
          },
          {
            ModuleTitle: 'Studio Lighting',
            Assignments: [
              { AssignmentId: 'APP2A1', Question: 'Create portraits using different lighting setups (Rembrandt, butterfly, split, etc.).' },
              { AssignmentId: 'APP2A2', Question: 'Design and execute a high-key and low-key portrait session.' }
            ]
          },
          {
            ModuleTitle: 'Posing Techniques',
            Assignments: [
              { AssignmentId: 'APP3A1', Question: 'Direct a model through various poses for headshots and full-body portraits.' },
              { AssignmentId: 'APP3A2', Question: 'Create a portrait series showing effective posing for different body types.' }
            ]
          },
          {
            ModuleTitle: 'Environmental Portraits',
            Assignments: [
              { AssignmentId: 'APP4A1', Question: 'Create environmental portraits that tell a story about the subject.' },
              { AssignmentId: 'APP4A2', Question: 'Photograph a subject in multiple locations that reflect their personality or profession.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'How does the inverse square law affect portrait lighting?',
            level: 4
          },
          {
            id: 2,
            question: 'What considerations should be made when posing subjects of different body types?',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'photography',
        CourseId: 3,
        Title: 'Photo Editing Mastery',
        NumOfModules: 4,
        ModulesTitle: ['Lightroom Basics', 'Advanced Lightroom', 'Photoshop for Photographers', 'Creative Editing'],
        VideoTutorials: [
          'https://youtu.be/bN2jqsJgbBs?si=e5tOQ9ZTRtGf0HLI',
          'https://youtu.be/PJQmK1uDmBQ?si=TJsFUVpvFkaNhFCz',
          'https://youtu.be/Qb1c_-nQm9g?si=N2Y0xp8BFNkPZ3w2',
          'https://youtu.be/frFY-8oGrbM?si=TLPX8RpJNfW5QfXt'
        ],
        Assignments: [
          {
            ModuleTitle: 'Lightroom Basics',
            Assignments: [
              { AssignmentId: 'PEM1A1', Question: 'Import, organize, and apply basic adjustments to a set of images.' },
              { AssignmentId: 'PEM1A2', Question: 'Create and apply presets to a batch of similar photos.' }
            ]
          },
          {
            ModuleTitle: 'Advanced Lightroom',
            Assignments: [
              { AssignmentId: 'PEM2A1', Question: 'Use local adjustments to enhance specific areas of photographs.' },
              { AssignmentId: 'PEM2A2', Question: 'Create a consistent look across a series of images taken in different conditions.' }
            ]
          },
          {
            ModuleTitle: 'Photoshop for Photographers',
            Assignments: [
              { AssignmentId: 'PEM3A1', Question: 'Perform advanced retouching techniques on a portrait.' },
              { AssignmentId: 'PEM3A2', Question: 'Create a composite image combining elements from multiple photographs.' }
            ]
          },
          {
            ModuleTitle: 'Creative Editing',
            Assignments: [
              { AssignmentId: 'PEM4A1', Question: 'Develop a personal editing style and apply it to a series of images.' },
              { AssignmentId: 'PEM4A2', Question: 'Create artistic photo manipulations using advanced techniques.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the difference between destructive and non-destructive editing?',
            level: 2
          },
          {
            id: 2,
            question: 'Explain the purpose of color calibration in a photo editing workflow.',
            level: 3
          },
        ]
      },
      {
        CourseCategory: 'creative-writing',
        CourseId: 1,
        Title: 'Creative Writing Basics',
        NumOfModules: 4,
        ModulesTitle: ['Elements of Storytelling', 'Character Development', 'Setting & Description', 'Dialogue Writing'],
        VideoTutorials: [
          'https://youtu.be/ymMcYjZoTtg?si=eGpRoPrDlaNZDGvh',
          'https://youtu.be/os1j8-2RjLo?si=e0tTgY2tAFIQpPc7',
          'https://youtu.be/kJbl0IQTopw?si=JG0qMa14f9vw9SHv',
          'https://youtu.be/xGDLkt-jBJ4?si=YO8r1H9QTm1wFiMa'
        ],
        Assignments: [
          {
            ModuleTitle: 'Elements of Storytelling',
            Assignments: [
              { AssignmentId: 'CWB1A1', Question: 'Write a short story demonstrating the basic elements of plot structure.' },
              { AssignmentId: 'CWB1A2', Question: 'Analyze a published short story for its storytelling elements.' }
            ]
          },
          {
            ModuleTitle: 'Character Development',
            Assignments: [
              { AssignmentId: 'CWB2A1', Question: 'Create detailed character profiles for a protagonist and antagonist.' },
              { AssignmentId: 'CWB2A2', Question: 'Write a scene that reveals character through action rather than description.' }
            ]
          },
          {
            ModuleTitle: 'Setting & Description',
            Assignments: [
              { AssignmentId: 'CWB3A1', Question: 'Write a descriptive passage about a setting using sensory details.' },
              { AssignmentId: 'CWB3A2', Question: 'Create a setting that functions as a character in your story.' }
            ]
          },
          {
            ModuleTitle: 'Dialogue Writing',
            Assignments: [
              { AssignmentId: 'CWB4A1', Question: 'Write a scene that is primarily dialogue and advances the plot.' },
              { AssignmentId: 'CWB4A2', Question: 'Create dialogue that reveals character and subtext.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What are the elements of a traditional narrative arc?',
            level: 2
          },
          {
            id: 2,
            question: 'Explain the concept of "show, dont tell" in creative writing.',
            level: 2
          },
        ]
      },
      {
        CourseCategory: 'nutrition',
        CourseId: 1,
        Title: 'Basic Nutrition Guide',
        NumOfModules: 3,
        ModulesTitle: ['Macronutrients', 'Micronutrients', 'Meal Planning'],
        VideoTutorials: [
          'https://youtu.be/nutrition1?si=NutritionModule1',
          'https://youtu.be/nutrition2?si=NutritionModule2',
          'https://youtu.be/nutrition3?si=NutritionModule3'
        ],
        Assignments: [
          {
            ModuleTitle: 'Macronutrients',
            Assignments: [
              { AssignmentId: 'BNUTR1A1', Question: 'Create a daily meal plan that balances proteins, carbohydrates, and fats.' },
              { AssignmentId: 'BNUTR1A2', Question: 'Analyze your current diet and identify macronutrient imbalances.' }
            ]
          },
          {
            ModuleTitle: 'Micronutrients',
            Assignments: [
              { AssignmentId: 'BNUTR2A1', Question: 'Research and present the key vitamins and minerals found in common foods.' },
              { AssignmentId: 'BNUTR2A2', Question: 'Create a week-long meal plan focused on addressing common micronutrient deficiencies.' }
            ]
          },
          {
            ModuleTitle: 'Meal Planning',
            Assignments: [
              { AssignmentId: 'BNUTR3A1', Question: 'Design a shopping list and meal prep strategy for a busy professional.' },
              { AssignmentId: 'BNUTR3A2', Question: 'Create a budget-friendly meal plan that meets all nutritional requirements.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'Which macronutrient provides 9 calories per gram?',
            level: 1
          },
          {
            id: 2,
            question: 'What vitamin is primarily obtained through sun exposure?',
            level: 2
          },
          {
            id: 3,
            question: 'What is the recommended daily water intake for the average adult?',
            level: 1
          }
        ]
      },
      {
        CourseCategory: 'nutrition',
        CourseId: 2,
        Title: 'Advanced Diet Planning',
        NumOfModules: 4,
        ModulesTitle: ['Personalized Nutrition', 'Sports Nutrition', 'Diet for Medical Conditions', 'Nutrition Psychology'],
        VideoTutorials: [
          'https://youtu.be/advdiet1?si=AdvDietModule1',
          'https://youtu.be/advdiet2?si=AdvDietModule2',
          'https://youtu.be/advdiet3?si=AdvDietModule3',
          'https://youtu.be/advdiet4?si=AdvDietModule4'
        ],
        Assignments: [
          {
            ModuleTitle: 'Personalized Nutrition',
            Assignments: [
              { AssignmentId: 'ADVDP1A1', Question: 'Create a personalized nutrition plan based on metabolic type assessment.' },
              { AssignmentId: 'ADVDP1A2', Question: 'Design a nutrition tracking system tailored to specific health goals.' }
            ]
          },
          {
            ModuleTitle: 'Sports Nutrition',
            Assignments: [
              { AssignmentId: 'ADVDP2A1', Question: 'Develop pre and post-workout nutrition strategies for different types of athletic performance.' },
              { AssignmentId: 'ADVDP2A2', Question: 'Create a hydration and nutrition plan for an endurance athlete.' }
            ]
          },
          {
            ModuleTitle: 'Diet for Medical Conditions',
            Assignments: [
              { AssignmentId: 'ADVDP3A1', Question: 'Research and present nutritional approaches for managing a specific chronic condition.' },
              { AssignmentId: 'ADVDP3A2', Question: 'Design a meal plan for individuals with multiple food sensitivities.' }
            ]
          },
          {
            ModuleTitle: 'Nutrition Psychology',
            Assignments: [
              { AssignmentId: 'ADVDP4A1', Question: 'Develop strategies for addressing emotional eating patterns.' },
              { AssignmentId: 'ADVDP4A2', Question: 'Create a mindful eating protocol with practical implementation steps.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the recommended protein intake for strength athletes?',
            level: 3
          },
          {
            id: 2,
            question: 'How does the glycemic index impact blood sugar management?',
            level: 3
          },
          {
            id: 3,
            question: 'What are the key nutritional considerations for autoimmune conditions?',
            level: 4
          }
        ]
      },
      {
        CourseCategory: 'nutrition',
        CourseId: 3,
        Title: 'Healthy Cooking',
        NumOfModules: 3,
        ModulesTitle: ['Cooking Techniques', 'Meal Preparation', 'Recipe Modification'],
        VideoTutorials: [
          'https://youtu.be/healthycook1?si=HealthyCookModule1',
          'https://youtu.be/healthycook2?si=HealthyCookModule2',
          'https://youtu.be/healthycook3?si=HealthyCookModule3'
        ],
        Assignments: [
          {
            ModuleTitle: 'Cooking Techniques',
            Assignments: [
              { AssignmentId: 'HCOOK1A1', Question: 'Demonstrate three cooking methods that preserve nutrient content in vegetables.' },
              { AssignmentId: 'HCOOK1A2', Question: 'Create a dish using healthy oil-free cooking techniques.' }
            ]
          },
          {
            ModuleTitle: 'Meal Preparation',
            Assignments: [
              { AssignmentId: 'HCOOK2A1', Question: 'Design and execute a weekly meal prep plan with emphasis on efficiency and nutrition.' },
              { AssignmentId: 'HCOOK2A2', Question: 'Create a system for storing and preserving prepared meals to maintain nutritional value.' }
            ]
          },
          {
            ModuleTitle: 'Recipe Modification',
            Assignments: [
              { AssignmentId: 'HCOOK3A1', Question: 'Modify a traditional high-calorie recipe to create a healthier version without sacrificing flavor.' },
              { AssignmentId: 'HCOOK3A2', Question: 'Create three versions of a recipe to accommodate different dietary needs (vegan, gluten-free, low-carb).' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'Which cooking method typically preserves the most nutrients in vegetables?',
            level: 2
          },
          {
            id: 2,
            question: 'What is a suitable replacement for butter in baking to reduce saturated fat?',
            level: 2
          },
          {
            id: 3,
            question: 'How does the Maillard reaction affect the nutritional profile of food?',
            level: 3
          }
        ]
      },

      // Fitness Courses
      {
        CourseCategory: 'fitness',
        CourseId: 1,
        Title: 'Fitness Fundamentals',
        NumOfModules: 3,
        ModulesTitle: ['Body Mechanics', 'Workout Basics', 'Recovery Principles'],
        VideoTutorials: [
          'https://youtu.be/fitfund1?si=FitFundModule1',
          'https://youtu.be/fitfund2?si=FitFundModule2',
          'https://youtu.be/fitfund3?si=FitFundModule3'
        ],
        Assignments: [
          {
            ModuleTitle: 'Body Mechanics',
            Assignments: [
              { AssignmentId: 'FITFU1A1', Question: 'Perform and record proper form for five basic movement patterns (squat, hinge, push, pull, carry).' },
              { AssignmentId: 'FITFU1A2', Question: 'Create a posture assessment protocol and evaluate your own posture.' }
            ]
          },
          {
            ModuleTitle: 'Workout Basics',
            Assignments: [
              { AssignmentId: 'FITFU2A1', Question: 'Design a balanced full-body workout using only bodyweight exercises.' },
              { AssignmentId: 'FITFU2A2', Question: 'Create and execute a progressive four-week fitness plan for a beginner.' }
            ]
          },
          {
            ModuleTitle: 'Recovery Principles',
            Assignments: [
              { AssignmentId: 'FITFU3A1', Question: 'Design a comprehensive recovery protocol including sleep, nutrition, and active recovery.' },
              { AssignmentId: 'FITFU3A2', Question: 'Implement and document a week-long recovery optimization plan.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the correct knee position during a proper squat?',
            level: 1
          },
          {
            id: 2,
            question: 'How much rest is typically recommended between strength training workouts for the same muscle group?',
            level: 2
          },
          {
            id: 3,
            question: 'What is the difference between static and dynamic stretching?',
            level: 2
          }
        ]
      },
      {
        CourseCategory: 'fitness',
        CourseId: 2,
        Title: 'Strength Training',
        NumOfModules: 4,
        ModulesTitle: ['Resistance Principles', 'Workout Programming', 'Advanced Techniques', 'Progression Methods'],
        VideoTutorials: [
          'https://youtu.be/strength1?si=StrengthModule1',
          'https://youtu.be/strength2?si=StrengthModule2',
          'https://youtu.be/strength3?si=StrengthModule3',
          'https://youtu.be/strength4?si=StrengthModule4'
        ],
        Assignments: [
          {
            ModuleTitle: 'Resistance Principles',
            Assignments: [
              { AssignmentId: 'STRTR1A1', Question: 'Demonstrate and analyze the biomechanics of three compound lifting movements.' },
              { AssignmentId: 'STRTR1A2', Question: 'Create a training plan that applies progressive overload principles over 8 weeks.' }
            ]
          },
          {
            ModuleTitle: 'Workout Programming',
            Assignments: [
              { AssignmentId: 'STRTR2A1', Question: 'Design a periodized training program for a specific strength goal.' },
              { AssignmentId: 'STRTR2A2', Question: 'Create a split routine that optimizes recovery while maintaining training frequency.' }
            ]
          },
          {
            ModuleTitle: 'Advanced Techniques',
            Assignments: [
              { AssignmentId: 'STRTR3A1', Question: 'Implement and document results from using three intensity techniques (drop sets, supersets, etc.).' },
              { AssignmentId: 'STRTR3A2', Question: 'Design a workout incorporating tempo manipulation for specific training adaptations.' }
            ]
          },
          {
            ModuleTitle: 'Progression Methods',
            Assignments: [
              { AssignmentId: 'STRTR4A1', Question: 'Create a system for tracking progress and determining when to adjust variables in a program.' },
              { AssignmentId: 'STRTR4A2', Question: 'Design a plateau-breaking protocol for when linear progression stalls.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What principle states that the body will adapt to the specific demands placed upon it?',
            level: 2
          },
          {
            id: 2,
            question: 'How does time under tension affect muscle development?',
            level: 3
          },
          {
            id: 3,
            question: 'What is the difference between myofibrillar and sarcoplasmic hypertrophy?',
            level: 4
          }
        ]
      },
      {
        CourseCategory: 'fitness',
        CourseId: 3,
        Title: 'Cardio Workouts',
        NumOfModules: 3,
        ModulesTitle: ['Cardiovascular Basics', 'Training Methods', 'Program Design'],
        VideoTutorials: [
          'https://youtu.be/cardio1?si=CardioModule1',
          'https://youtu.be/cardio2?si=CardioModule2',
          'https://youtu.be/cardio3?si=CardioModule3'
        ],
        Assignments: [
          {
            ModuleTitle: 'Cardiovascular Basics',
            Assignments: [
              { AssignmentId: 'CARWK1A1', Question: 'Measure and establish your baseline cardiovascular fitness using three assessment methods.' },
              { AssignmentId: 'CARWK1A2', Question: 'Research and present the physiological adaptations that occur with consistent cardio training.' }
            ]
          },
          {
            ModuleTitle: 'Training Methods',
            Assignments: [
              { AssignmentId: 'CARWK2A1', Question: 'Design and execute three different HIIT protocols and document results from each.' },
              { AssignmentId: 'CARWK2A2', Question: 'Create a zone-based training plan using heart rate or perceived exertion.' }
            ]
          },
          {
            ModuleTitle: 'Program Design',
            Assignments: [
              { AssignmentId: 'CARWK3A1', Question: 'Develop an 8-week cardiovascular program for a specific goal (endurance, fat loss, etc.).' },
              { AssignmentId: 'CARWK3A2', Question: 'Create a cardio program that complements a strength training regimen without hindering recovery.' }
            ]
          }
        ],
        Quiz: [
          {
            id: 1,
            question: 'What is the formula for calculating maximum heart rate?',
            level: 1
          },
          {
            id: 2,
            question: 'How does steady-state cardio differ from interval training in terms of physiological effects?',
            level: 3
          },
          {
            id: 3,
            question: 'What is cardiac output and how is it calculated?',
            level: 3
          }
        ]
      }
    ];


  getCategories() {
    return this.categories;
  }

  getCoursesByCategory(category: string) {
    return this.coursesData[category] || [];
  }

  getCategorySubcategories(categoryName: string) {
    const category = this.categories.find(c => c.name === categoryName);
    return category ? category.subcategories : [];
  }

  getCourseDetails(category: string, courseId: number): CourseDetails {
    if (!category || category === undefined) {
      console.error('Category is undefined or null');
      return this.getEmptyCourseDetails(); // Return empty object instead of undefined
    }

    try {
      const result = this.course?.find(c =>
        c?.CourseCategory?.toLowerCase() === category.toLowerCase() &&
        c?.CourseId === courseId
      );
      
      return result || this.getEmptyCourseDetails();
    } catch (error) {
      console.error('Error in getCourseDetails:', error);
      return this.getEmptyCourseDetails();
    }
  }

  // Helper method to return an empty course object
  private getEmptyCourseDetails(): CourseDetails {
    return {
      Assignments: [],
      CourseCategory: '',
      CourseId: 0,
      ModulesTitle: [],
      NumOfModules: 0,
      Quiz: [],
      Title: '',
      VideoTutorials: []
    };
  }

}
