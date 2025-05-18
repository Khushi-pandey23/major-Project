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
            level: 3,
            option1: '<a>',
            option2: '<link>',
            option3: '<href>',
            option4: '<hyperlink>',
            correctAnswer: 1,
            explanation: 'The <a> tag is used to create hyperlinks in HTML.'
          },
          {
            id: 2,
            question: 'What CSS property is used to change the text color?',
            level: 2,
            option1: 'color',
            option2: 'text-color',
            option3: 'font-color',
            option4: 'text-style',
            correctAnswer: 1,
            explanation: 'The CSS "color" property is used to change text color.'
          },
          {
            id: 3,
            question: 'Which CSS media query is used for mobile devices?',
            level: 4,
            option1: '@media (max-width: 480px)',
            option2: '@media mobile',
            option3: '@media screen and (mobile)',
            option4: '@screen small',
            correctAnswer: 1,
            explanation: 'The "@media (max-width: 480px)" targets devices with widths up to 480px.'
          },
          {
            id: 4,
            question: 'What does the "async" keyword do in JavaScript?',
            level: 4,
            option1: 'Makes a function synchronous',
            option2: 'Allows a function to be used as an API',
            option3: 'Makes a function return a promise',
            option4: 'Stops the function execution',
            correctAnswer: 3,
            explanation: 'The "async" keyword makes a function return a promise.'
          },
          {
            id: 5,
            question: 'Which HTML element is used for inserting a line break?',
            level: 1,
            option1: '<hr>',
            option2: '<br>',
            option3: '<lb>',
            option4: '<break>',
            correctAnswer: 2,
            explanation: 'The <br> tag is used for inserting a line break.'
          },
          {
            id: 6,
            question: 'Which property is used to set the background color of an element?',
            level: 2,
            option1: 'color',
            option2: 'bgcolor',
            option3: 'background-color',
            option4: 'background',
            correctAnswer: 3,
            explanation: 'The "background-color" property is used to set the background color of an element.'
          },
          {
            id: 7,
            question: 'What is the default display value for a <div> element?',
            level: 3,
            option1: 'inline',
            option2: 'inline-block',
            option3: 'block',
            option4: 'flex',
            correctAnswer: 3,
            explanation: 'The default display value for a <div> element is "block".'
          },
          {
            id: 8,
            question: 'Which JavaScript method is used to select an HTML element by ID?',
            level: 3,
            option1: 'getElementByClass()',
            option2: 'querySelector()',
            option3: 'getElementById()',
            option4: 'getElement()',
            correctAnswer: 3,
            explanation: 'The "getElementById()" method is used to select an HTML element by ID.'
          },
          {
            id: 9,
            question: 'What is the correct syntax for a CSS comment?',
            level: 1,
            option1: '// This is a comment',
            option2: '<!-- This is a comment -->',
            option3: '/* This is a comment */',
            option4: '# This is a comment',
            correctAnswer: 3,
            explanation: 'CSS comments are written with /* comment */ syntax.'
          },
          {
            id: 10,
            question: 'Which method can be used to round a number to the nearest integer in JavaScript?',
            level: 3,
            option1: 'Math.round()',
            option2: 'Math.ceil()',
            option3: 'Math.floor()',
            option4: 'Math.int()',
            correctAnswer: 1,
            explanation: 'The "Math.round()" method rounds a number to the nearest integer.'
          }
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
            question: 'Which of the following is not a primitive data type in JavaScript?',
            level: 2,
            option1: 'String',
            option2: 'Number',
            option3: 'Object',
            option4: 'Boolean',
            correctAnswer: 3,
            explanation: 'Object is a non-primitive data type in JavaScript.'
          },
          {
            id: 2,
            question: 'How do you declare a constant variable in JavaScript?',
            level: 1,
            option1: 'var myVar = 10;',
            option2: 'const myVar = 10;',
            option3: 'let myVar = 10;',
            option4: 'static myVar = 10;',
            correctAnswer: 2,
            explanation: 'The "const" keyword is used to declare a constant variable.'
          },
          {
            id: 3,
            question: 'Which method converts a JSON string into a JavaScript object?',
            level: 3,
            option1: 'JSON.stringify()',
            option2: 'JSON.parse()',
            option3: 'JSON.convert()',
            option4: 'JSON.toObject()',
            correctAnswer: 2,
            explanation: 'The "JSON.parse()" method converts a JSON string into a JavaScript object.'
          },
          {
            id: 4,
            question: 'What does the "this" keyword refer to in a JavaScript method?',
            level: 4,
            option1: 'The global window object',
            option2: 'The function itself',
            option3: 'The object that owns the method',
            option4: 'The parent object',
            correctAnswer: 3,
            explanation: '"this" refers to the object that owns the method.'
          },
          {
            id: 5,
            question: 'Which JavaScript method is used to call a function after a specific time?',
            level: 3,
            option1: 'setTimeout()',
            option2: 'setInterval()',
            option3: 'callLater()',
            option4: 'delay()',
            correctAnswer: 1,
            explanation: '"setTimeout()" is used to call a function after a specific time delay.'
          },
          {
            id: 6,
            question: 'How do you create an immediately invoked function expression (IIFE) in JavaScript?',
            level: 4,
            option1: 'function(){}()',
            option2: '(function() {})()',
            option3: 'function(){}',
            option4: '(function){}()',
            correctAnswer: 2,
            explanation: 'IIFE is written as (function() {})() to execute immediately.'
          },
          {
            id: 7,
            question: 'What is the output of "console.log(0.1 + 0.2 === 0.3)"?',
            level: 5,
            option1: 'true',
            option2: 'false',
            option3: 'undefined',
            option4: 'Syntax Error',
            correctAnswer: 2,
            explanation: 'Due to floating-point precision issues, 0.1 + 0.2 is not exactly 0.3.'
          },
          {
            id: 8,
            question: 'Which JavaScript method is used to remove the last element from an array?',
            level: 2,
            option1: 'shift()',
            option2: 'unshift()',
            option3: 'pop()',
            option4: 'push()',
            correctAnswer: 3,
            explanation: '"pop()" removes the last element of an array.'
          },
          {
            id: 9,
            question: 'How can you make an object immutable in JavaScript?',
            level: 5,
            option1: 'Object.lock()',
            option2: 'Object.freeze()',
            option3: 'Object.seal()',
            option4: 'Object.constant()',
            correctAnswer: 2,
            explanation: 'The "Object.freeze()" method makes an object immutable.'
          },
          {
            id: 10,
            question: 'Which of these is a valid arrow function syntax?',
            level: 3,
            option1: 'function => {}',
            option2: '(param) => {}',
            option3: 'function(param) => {}',
            option4: 'param => {};',
            correctAnswer: 2,
            explanation: 'An arrow function is defined using the "(param) => {}" syntax.'
          }
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
            question: 'Which React hook is used to manage side effects in functional components?',
            level: 3,
            option1: 'useState',
            option2: 'useEffect',
            option3: 'useContext',
            option4: 'useReducer',
            correctAnswer: 2,
            explanation: 'The "useEffect" hook is used for managing side effects in React functional components.'
          },
          {
            id: 2,
            question: 'What is the main difference between React context and Redux?',
            level: 4,
            option1: 'Context is for global state, Redux is not',
            option2: 'Redux has a single store, Context does not',
            option3: 'Context is asynchronous, Redux is synchronous',
            option4: 'They are the same',
            correctAnswer: 2,
            explanation: 'Redux has a single centralized store while Context can use multiple providers for state.'
          },
          {
            id: 3,
            question: 'How do you prevent a React component from re-rendering?',
            level: 4,
            option1: 'Using useMemo',
            option2: 'Using useEffect',
            option3: 'Using React.memo',
            option4: 'Using useRef',
            correctAnswer: 3,
            explanation: 'React.memo prevents a component from re-rendering if its props do not change.'
          },
          {
            id: 4,
            question: 'Which hook allows you to handle complex state logic in React?',
            level: 4,
            option1: 'useState',
            option2: 'useEffect',
            option3: 'useMemo',
            option4: 'useReducer',
            correctAnswer: 4,
            explanation: 'useReducer is used to handle complex state logic, often in place of useState.'
          },
          {
            id: 5,
            question: 'What is the use of the useRef hook?',
            level: 3,
            option1: 'To create a mutable ref object',
            option2: 'To track component lifecycle',
            option3: 'To manage side effects',
            option4: 'To force component re-render',
            correctAnswer: 1,
            explanation: 'useRef creates a mutable ref object that persists between renders.'
          },
          {
            id: 6,
            question: 'What is React Suspense used for?',
            level: 5,
            option1: 'To manage global state',
            option2: 'To create portals',
            option3: 'To manage async rendering',
            option4: 'To force component updates',
            correctAnswer: 3,
            explanation: 'React Suspense is used for managing async rendering and lazy loading components.'
          },
          {
            id: 7,
            question: 'What is the purpose of React Portals?',
            level: 4,
            option1: 'To render components at a different DOM node',
            option2: 'To enhance state management',
            option3: 'To optimize rendering',
            option4: 'To use React without JSX',
            correctAnswer: 1,
            explanation: 'React Portals allow rendering a component into a different DOM node than its parent.'
          },
          {
            id: 8,
            question: 'How can you optimize React performance for large lists?',
            level: 5,
            option1: 'By using React.memo',
            option2: 'By using useState',
            option3: 'By using React.PureComponent',
            option4: 'By using React Virtualization',
            correctAnswer: 4,
            explanation: 'React Virtualization (e.g., react-window) helps optimize performance for large lists.'
          },
          {
            id: 9,
            question: 'How does React handle reconciliation when updating components?',
            level: 5,
            option1: 'By re-rendering the entire DOM',
            option2: 'By using the Fiber architecture',
            option3: 'By direct DOM manipulation',
            option4: 'By using Web Workers',
            correctAnswer: 2,
            explanation: 'React uses the Fiber architecture for efficient reconciliation and updating of components.'
          },
          {
            id: 10,
            question: 'Which of the following is true about React keys?',
            level: 3,
            option1: 'They must be globally unique',
            option2: 'They should be the index of the array',
            option3: 'They help identify components in a list for efficient rendering',
            option4: 'They are required for all components',
            correctAnswer: 3,
            explanation: 'React keys are used to identify components in a list for efficient updates and rendering.'
          }
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
            question: 'What is React Native primarily used for?',
            level: 1,
            option1: 'Web Development',
            option2: 'Desktop App Development',
            option3: 'Mobile App Development',
            option4: 'Game Development',
            correctAnswer: 3,
            explanation: 'React Native is primarily used for developing mobile applications.'
          },
          {
            id: 2,
            question: 'Which command is used to create a new React Native project?',
            level: 2,
            option1: 'npx create-react-app myApp',
            option2: 'npx create-native-app myApp',
            option3: 'npx react-native init myApp',
            option4: 'npm install react-native myApp',
            correctAnswer: 3,
            explanation: 'The "npx react-native init myApp" command is used to create a new React Native project.'
          },
          {
            id: 3,
            question: 'Which component is used to display text in React Native?',
            level: 1,
            option1: '<div>',
            option2: '<p>',
            option3: '<Text>',
            option4: '<Label>',
            correctAnswer: 3,
            explanation: 'The <Text> component is used to display text in React Native.'
          },
          {
            id: 4,
            question: 'How do you style components in React Native?',
            level: 2,
            option1: 'Using CSS files',
            option2: 'Using StyleSheet API',
            option3: 'Using inline styles only',
            option4: 'Using SASS',
            correctAnswer: 2,
            explanation: 'React Native uses the StyleSheet API for styling components.'
          },
          {
            id: 5,
            question: 'Which component is used for user input in React Native?',
            level: 2,
            option1: '<Input>',
            option2: '<Form>',
            option3: '<TextInput>',
            option4: '<TextField>',
            correctAnswer: 3,
            explanation: 'The <TextInput> component is used for user input in React Native.'
          },
          {
            id: 6,
            question: 'Which hook is commonly used for state management in React Native?',
            level: 3,
            option1: 'useState',
            option2: 'useReducer',
            option3: 'useEffect',
            option4: 'useContext',
            correctAnswer: 1,
            explanation: 'The "useState" hook is the most common hook used for state management in React Native.'
          },
          {
            id: 7,
            question: 'Which React Native component allows you to create a scrolling list?',
            level: 3,
            option1: '<FlatList>',
            option2: '<List>',
            option3: '<ScrollView>',
            option4: '<ListView>',
            correctAnswer: 1,
            explanation: 'The <FlatList> component is used for creating scrolling lists in React Native.'
          },
          {
            id: 8,
            question: 'What is the default flex direction in React Native’s Flexbox?',
            level: 3,
            option1: 'column',
            option2: 'row',
            option3: 'row-reverse',
            option4: 'column-reverse',
            correctAnswer: 1,
            explanation: 'In React Native, the default flex direction is "column".'
          },
          {
            id: 9,
            question: 'How can you navigate between screens in React Native?',
            level: 3,
            option1: 'Using window.location',
            option2: 'Using <a> tags',
            option3: 'Using React Navigation',
            option4: 'Using navigate() method only',
            correctAnswer: 3,
            explanation: 'React Navigation is the most popular library for navigating between screens in React Native.'
          },
          {
            id: 10,
            question: 'Which package is used to handle gestures in React Native?',
            level: 4,
            option1: 'react-gesture',
            option2: 'react-native-gesture',
            option3: 'react-native-gesture-handler',
            option4: 'react-gestures-native',
            correctAnswer: 3,
            explanation: '"react-native-gesture-handler" is the package used to handle gestures in React Native.'
          }
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
            question: 'Which component is used to perform background tasks in Android?',
            level: 4,
            option1: 'Activity',
            option2: 'Service',
            option3: 'Fragment',
            option4: 'BroadcastReceiver',
            correctAnswer: 2,
            explanation: 'A Service is used to perform background tasks in Android without a UI.'
          },
          {
            id: 2,
            question: 'What is the purpose of WorkManager in Android?',
            level: 4,
            option1: 'For managing user interface components',
            option2: 'For creating background threads',
            option3: 'For scheduling background tasks that are guaranteed to execute',
            option4: 'For handling user authentication',
            correctAnswer: 3,
            explanation: 'WorkManager is used for scheduling guaranteed background tasks, even after a device reboot.'
          },
          {
            id: 3,
            question: 'Which of the following is true about Jetpack Compose?',
            level: 5,
            option1: 'It is a layout XML framework',
            option2: 'It replaces the use of Fragments',
            option3: 'It is a modern toolkit for building native UIs with Kotlin',
            option4: 'It is used for dependency injection',
            correctAnswer: 3,
            explanation: 'Jetpack Compose is a modern toolkit for building native UIs using a declarative approach with Kotlin.'
          },
          {
            id: 4,
            question: 'How do you declare a ViewModel in Android using Hilt?',
            level: 4,
            option1: '@Inject',
            option2: '@ViewModelInject',
            option3: '@HiltViewModel',
            option4: '@ProvideViewModel',
            correctAnswer: 3,
            explanation: '@HiltViewModel is the recommended way to declare a ViewModel when using Hilt for dependency injection.'
          },
          {
            id: 5,
            question: 'Which architecture is recommended by Google for Android apps?',
            level: 3,
            option1: 'MVC',
            option2: 'MVP',
            option3: 'MVVM',
            option4: 'MVU',
            correctAnswer: 3,
            explanation: 'Google recommends using the MVVM (Model-View-ViewModel) architecture for Android apps.'
          },
          {
            id: 6,
            question: 'Which method is used to observe LiveData in Android?',
            level: 3,
            option1: 'subscribe()',
            option2: 'addObserver()',
            option3: 'observe()',
            option4: 'register()',
            correctAnswer: 3,
            explanation: 'The observe() method is used to observe LiveData in Android.'
          },
          {
            id: 7,
            question: 'What is the purpose of CoroutineScope in Kotlin?',
            level: 4,
            option1: 'To manage background threads',
            option2: 'To define a lifecycle for coroutines',
            option3: 'To optimize UI performance',
            option4: 'To create complex data structures',
            correctAnswer: 2,
            explanation: 'CoroutineScope defines a lifecycle for coroutines, making it easier to manage their lifecycle.'
          },
          {
            id: 8,
            question: 'Which annotation is used to define a Room Database entity?',
            level: 3,
            option1: '@Entity',
            option2: '@Database',
            option3: '@Table',
            option4: '@Data',
            correctAnswer: 1,
            explanation: 'The @Entity annotation is used to define a Room Database entity.'
          },
          {
            id: 9,
            question: 'What is the primary advantage of using Flow over LiveData in Kotlin?',
            level: 4,
            option1: 'Flow is easier to use',
            option2: 'Flow supports asynchronous data streams',
            option3: 'Flow can only be used with ViewModel',
            option4: 'Flow is faster than LiveData',
            correctAnswer: 2,
            explanation: 'Flow supports asynchronous data streams, making it more versatile than LiveData.'
          },
          {
            id: 10,
            question: 'Which of the following is true about Navigation Component?',
            level: 3,
            option1: 'It replaces Intents',
            option2: 'It simplifies fragment transactions and navigation between destinations',
            option3: 'It is used for UI design',
            option4: 'It manages API calls',
            correctAnswer: 2,
            explanation: 'The Navigation Component simplifies fragment transactions and navigation between destinations in Android.'
          }
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
            question: 'Which language is primarily used for iOS app development?',
            level: 1,
            option1: 'Java',
            option2: 'Python',
            option3: 'Swift',
            option4: 'Kotlin',
            correctAnswer: 3,
            explanation: 'Swift is the primary language for iOS app development, introduced by Apple.'
          },
          {
            id: 2,
            question: 'Which design pattern is recommended for iOS app development?',
            level: 3,
            option1: 'MVC (Model-View-Controller)',
            option2: 'MVVM (Model-View-ViewModel)',
            option3: 'MVP (Model-View-Presenter)',
            option4: 'Singleton',
            correctAnswer: 1,
            explanation: 'Apple recommends the MVC (Model-View-Controller) design pattern for iOS apps.'
          },
          {
            id: 3,
            question: 'What is a Storyboard in iOS development?',
            level: 2,
            option1: 'A programming framework',
            option2: 'A graphical interface for designing UI',
            option3: 'A debugging tool',
            option4: 'A configuration file',
            correctAnswer: 2,
            explanation: 'Storyboard is a graphical interface for designing the UI of an iOS app.'
          },
          {
            id: 4,
            question: 'Which tool is used to create user interfaces in SwiftUI?',
            level: 3,
            option1: 'UIKit',
            option2: 'XIB',
            option3: 'SwiftUI Previews',
            option4: 'Storyboard',
            correctAnswer: 3,
            explanation: 'SwiftUI Previews allow developers to see the UI of SwiftUI components in real time.'
          },
          {
            id: 5,
            question: 'How do you make an HTTP request in iOS?',
            level: 3,
            option1: 'NSURL',
            option2: 'NSURLSession',
            option3: 'HttpClient',
            option4: 'AFNetworking',
            correctAnswer: 2,
            explanation: 'NSURLSession is the standard way to make HTTP requests in iOS.'
          },
          {
            id: 6,
            question: 'What is the purpose of the AppDelegate in an iOS app?',
            level: 3,
            option1: 'To manage UI elements',
            option2: 'To handle app lifecycle events',
            option3: 'To store user data',
            option4: 'To manage animations',
            correctAnswer: 2,
            explanation: 'AppDelegate handles app lifecycle events like launch, background, and termination.'
          },
          {
            id: 7,
            question: 'Which iOS framework is used for data persistence?',
            level: 3,
            option1: 'UIKit',
            option2: 'CoreData',
            option3: 'AVFoundation',
            option4: 'SwiftUI',
            correctAnswer: 2,
            explanation: 'CoreData is an iOS framework for data persistence.'
          },
          {
            id: 8,
            question: 'What is the default layout system in UIKit?',
            level: 2,
            option1: 'CSS Grid',
            option2: 'Auto Layout',
            option3: 'Flexbox',
            option4: 'Manual Layout',
            correctAnswer: 2,
            explanation: 'Auto Layout is the default layout system used in UIKit.'
          },
          {
            id: 9,
            question: 'Which tool is used to test iOS apps on different devices?',
            level: 3,
            option1: 'Xcode Simulator',
            option2: 'Android Emulator',
            option3: 'Browser Developer Tools',
            option4: 'XIB Preview',
            correctAnswer: 1,
            explanation: 'Xcode Simulator allows testing iOS apps on different virtual devices.'
          },
          {
            id: 10,
            question: 'Which package manager is commonly used for managing iOS dependencies?',
            level: 3,
            option1: 'npm',
            option2: 'CocoaPods',
            option3: 'Gradle',
            option4: 'Maven',
            correctAnswer: 2,
            explanation: 'CocoaPods is the most popular package manager for iOS dependencies.'
          }
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
            question: 'What is Machine Learning?',
            level: 1,
            option1: 'A programming language',
            option2: 'A method of data analysis using algorithms that learn from data',
            option3: 'A type of computer hardware',
            option4: 'A database technology',
            correctAnswer: 2,
            explanation: 'Machine Learning is a method of data analysis that uses algorithms to learn from data.'
          },
          {
            id: 2,
            question: 'Which of the following is a type of supervised learning?',
            level: 2,
            option1: 'Clustering',
            option2: 'Regression',
            option3: 'Dimensionality Reduction',
            option4: 'Association',
            correctAnswer: 2,
            explanation: 'Regression is a type of supervised learning used for predictive analysis.'
          },
          {
            id: 3,
            question: 'What is a feature in Machine Learning?',
            level: 2,
            option1: 'An output variable',
            option2: 'A hidden layer in a neural network',
            option3: 'An individual measurable property of data',
            option4: 'A loss function',
            correctAnswer: 3,
            explanation: 'A feature is an individual measurable property of the data.'
          },
          {
            id: 4,
            question: 'What is the purpose of a training set?',
            level: 2,
            option1: 'To test the model',
            option2: 'To validate the model',
            option3: 'To train the model on known data',
            option4: 'To generate new data',
            correctAnswer: 3,
            explanation: 'The training set is used to train the model on known data.'
          },
          {
            id: 5,
            question: 'What is overfitting?',
            level: 3,
            option1: 'When a model performs well on test data but poorly on training data',
            option2: 'When a model performs well on training data but poorly on test data',
            option3: 'When a model has too few features',
            option4: 'When a model uses the wrong algorithm',
            correctAnswer: 2,
            explanation: 'Overfitting occurs when a model performs well on training data but poorly on test data.'
          },
          {
            id: 6,
            question: 'Which algorithm is used for classification problems?',
            level: 3,
            option1: 'Linear Regression',
            option2: 'K-Means Clustering',
            option3: 'Decision Trees',
            option4: 'PCA',
            correctAnswer: 3,
            explanation: 'Decision Trees can be used for classification problems.'
          },
          {
            id: 7,
            question: 'What is a confusion matrix?',
            level: 3,
            option1: 'A table that visualizes feature relationships',
            option2: 'A table that shows model accuracy',
            option3: 'A table that shows prediction vs. actual values in classification',
            option4: 'A type of neural network',
            correctAnswer: 3,
            explanation: 'A confusion matrix shows the relationship between predicted and actual values for classification models.'
          },
          {
            id: 8,
            question: 'Which library is commonly used for Machine Learning in Python?',
            level: 2,
            option1: 'React',
            option2: 'NumPy',
            option3: 'Scikit-learn',
            option4: 'Flask',
            correctAnswer: 3,
            explanation: 'Scikit-learn is a popular library for Machine Learning in Python.'
          },
          {
            id: 9,
            question: 'What is feature scaling?',
            level: 3,
            option1: 'Reducing the number of features',
            option2: 'Normalizing feature values',
            option3: 'Removing irrelevant features',
            option4: 'Creating new features',
            correctAnswer: 2,
            explanation: 'Feature scaling normalizes feature values to a specific range.'
          },
          {
            id: 10,
            question: 'Which evaluation metric is used for regression models?',
            level: 3,
            option1: 'Accuracy',
            option2: 'Precision',
            option3: 'Recall',
            option4: 'Mean Squared Error (MSE)',
            correctAnswer: 4,
            explanation: 'Mean Squared Error (MSE) is a common evaluation metric for regression models.'
          }
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
            question: 'What is TensorFlow primarily used for?',
            level: 1,
            option1: 'Web Development',
            option2: 'Data Analysis',
            option3: 'Deep Learning and Machine Learning',
            option4: 'Game Development',
            correctAnswer: 3,
            explanation: 'TensorFlow is an open-source library primarily used for Deep Learning and Machine Learning.'
          },
          {
            id: 2,
            question: 'Which API in TensorFlow is recommended for building neural networks?',
            level: 3,
            option1: 'Sequential API',
            option2: 'Functional API',
            option3: 'Model API',
            option4: 'All of the above',
            correctAnswer: 4,
            explanation: 'TensorFlow provides Sequential, Functional, and Model APIs for building neural networks.'
          },
          {
            id: 3,
            question: 'What is a tensor in TensorFlow?',
            level: 2,
            option1: 'A type of neural network',
            option2: 'A data structure that represents multi-dimensional arrays',
            option3: 'A loss function',
            option4: 'A pre-trained model',
            correctAnswer: 2,
            explanation: 'A tensor is a multi-dimensional array, which is the core data structure of TensorFlow.'
          },
          {
            id: 4,
            question: 'What is the purpose of the optimizer in TensorFlow?',
            level: 3,
            option1: 'To measure model accuracy',
            option2: 'To perform data augmentation',
            option3: 'To minimize the loss function during training',
            option4: 'To scale data',
            correctAnswer: 3,
            explanation: 'An optimizer is used to minimize the loss function, improving the model performance.'
          },
          {
            id: 5,
            question: 'Which of the following is a popular optimizer in TensorFlow?',
            level: 3,
            option1: 'SGD (Stochastic Gradient Descent)',
            option2: 'RMSprop',
            option3: 'Adam',
            option4: 'All of the above',
            correctAnswer: 4,
            explanation: 'SGD, RMSprop, and Adam are all popular optimizers in TensorFlow.'
          },
          {
            id: 6,
            question: 'What is the role of an activation function in a neural network?',
            level: 3,
            option1: 'To initialize weights',
            option2: 'To transform input values to a specific range',
            option3: 'To calculate loss',
            option4: 'To store model state',
            correctAnswer: 2,
            explanation: 'Activation functions transform input values, adding non-linearity to the network.'
          },
          {
            id: 7,
            question: 'Which TensorFlow function is used to create a fully connected layer?',
            level: 3,
            option1: 'tf.nn.conv2d',
            option2: 'tf.keras.layers.Dense',
            option3: 'tf.math.reduce_mean',
            option4: 'tf.nn.dropout',
            correctAnswer: 2,
            explanation: 'tf.keras.layers.Dense is used to create a fully connected layer in TensorFlow.'
          },
          {
            id: 8,
            question: 'What is a pre-trained model in TensorFlow?',
            level: 3,
            option1: 'A model that has not been trained yet',
            option2: 'A model trained on random data',
            option3: 'A model trained on large datasets and saved for reuse',
            option4: 'A model used for testing',
            correctAnswer: 3,
            explanation: 'A pre-trained model is a model trained on large datasets and can be reused for new tasks.'
          },
          {
            id: 9,
            question: 'Which TensorFlow function is used for data augmentation?',
            level: 4,
            option1: 'tf.data.Dataset',
            option2: 'tf.image.random_flip_left_right',
            option3: 'tf.random.normal',
            option4: 'tf.keras.Model',
            correctAnswer: 2,
            explanation: 'tf.image.random_flip_left_right is used for image data augmentation in TensorFlow.'
          },
          {
            id: 10,
            question: 'Which method is used to save a trained model in TensorFlow?',
            level: 3,
            option1: 'model.save()',
            option2: 'model.export()',
            option3: 'model.backup()',
            option4: 'model.serialize()',
            correctAnswer: 1,
            explanation: 'model.save() is used to save a trained model in TensorFlow.'
          }
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
            question: 'What is Natural Language Processing (NLP)?',
            level: 1,
            option1: 'A method for image recognition',
            option2: 'A way to process user interfaces',
            option3: 'A field of AI focused on understanding and processing human language',
            option4: 'A hardware technology',
            correctAnswer: 3,
            explanation: 'NLP is a field of AI focused on understanding and processing human language.'
          },
          {
            id: 2,
            question: 'Which library is popular for NLP in Python?',
            level: 2,
            option1: 'NumPy',
            option2: 'TensorFlow',
            option3: 'NLTK (Natural Language Toolkit)',
            option4: 'Pandas',
            correctAnswer: 3,
            explanation: 'NLTK (Natural Language Toolkit) is one of the most popular NLP libraries in Python.'
          },
          {
            id: 3,
            question: 'What is tokenization in NLP?',
            level: 2,
            option1: 'Splitting text into paragraphs',
            option2: 'Converting text to lowercase',
            option3: 'Splitting text into smaller units like words or sentences',
            option4: 'Removing punctuation',
            correctAnswer: 3,
            explanation: 'Tokenization is the process of splitting text into smaller units like words or sentences.'
          },
          {
            id: 4,
            question: 'What is a Bag of Words model?',
            level: 3,
            option1: 'A model that predicts text length',
            option2: 'A model that converts text into a vector of word counts',
            option3: 'A model that translates languages',
            option4: 'A model that identifies emotions in text',
            correctAnswer: 2,
            explanation: 'The Bag of Words model converts text into a vector of word counts for NLP tasks.'
          },
          {
            id: 5,
            question: 'Which of the following is an example of a pre-trained language model?',
            level: 3,
            option1: 'K-means',
            option2: 'GPT-3',
            option3: 'PCA',
            option4: 'SVM',
            correctAnswer: 2,
            explanation: 'GPT-3 is a state-of-the-art pre-trained language model developed by OpenAI.'
          },
          {
            id: 6,
            question: 'What is named entity recognition (NER) in NLP?',
            level: 3,
            option1: 'Identifying the language of a text',
            option2: 'Classifying text into categories',
            option3: 'Identifying and classifying entities like names, dates, locations',
            option4: 'Detecting sentence boundaries',
            correctAnswer: 3,
            explanation: 'NER is used to identify and classify entities like names, dates, locations in text.'
          },
          {
            id: 7,
            question: 'What is word embedding?',
            level: 3,
            option1: 'A way to visualize text',
            option2: 'A method of converting words into vectors for machine learning',
            option3: 'A way to summarize text',
            option4: 'A way to detect emotions',
            correctAnswer: 2,
            explanation: 'Word embedding converts words into vector representations for machine learning.'
          },
          {
            id: 8,
            question: 'Which algorithm is commonly used for text classification?',
            level: 3,
            option1: 'K-means',
            option2: 'Naive Bayes',
            option3: 'PCA',
            option4: 'Linear Regression',
            correctAnswer: 2,
            explanation: 'Naive Bayes is a commonly used algorithm for text classification.'
          },
          {
            id: 9,
            question: 'What is the purpose of stop word removal in NLP?',
            level: 2,
            option1: 'To increase text length',
            option2: 'To improve model accuracy by removing common, unimportant words',
            option3: 'To make text lowercase',
            option4: 'To detect entities',
            correctAnswer: 2,
            explanation: 'Stop word removal helps improve model accuracy by removing common, unimportant words.'
          },
          {
            id: 10,
            question: 'Which of the following is an NLP task?',
            level: 3,
            option1: 'Image classification',
            option2: 'Speech synthesis',
            option3: 'Sentiment analysis',
            option4: '3D rendering',
            correctAnswer: 3,
            explanation: 'Sentiment analysis is an NLP task used to determine the emotional tone of text.'
          }
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
            question: 'What is accounting?',
            level: 1,
            option1: 'A method for managing software projects',
            option2: 'A process of recording, summarizing, and analyzing financial transactions',
            option3: 'A type of programming language',
            option4: 'A marketing strategy',
            correctAnswer: 2,
            explanation: 'Accounting is the process of recording, summarizing, and analyzing financial transactions.'
          },
          {
            id: 2,
            question: 'Which of the following is a financial statement?',
            level: 2,
            option1: 'Balance Sheet',
            option2: 'Sales Report',
            option3: 'Project Plan',
            option4: 'User Manual',
            correctAnswer: 1,
            explanation: 'The Balance Sheet is a primary financial statement showing assets, liabilities, and equity.'
          },
          {
            id: 3,
            question: 'What is the accounting equation?',
            level: 2,
            option1: 'Revenue = Expenses + Profit',
            option2: 'Assets = Liabilities + Equity',
            option3: 'Cash = Income - Expenses',
            option4: 'Revenue = Sales - Costs',
            correctAnswer: 2,
            explanation: 'The accounting equation is Assets = Liabilities + Equity.'
          },
          {
            id: 4,
            question: 'Which account type records a company’s debt?',
            level: 2,
            option1: 'Assets',
            option2: 'Revenue',
            option3: 'Expenses',
            option4: 'Liabilities',
            correctAnswer: 4,
            explanation: 'Liabilities are used to record a company’s debts.'
          },
          {
            id: 5,
            question: 'What is double-entry bookkeeping?',
            level: 3,
            option1: 'Recording each transaction once',
            option2: 'Recording each transaction in two accounts',
            option3: 'Recording transactions in cash format only',
            option4: 'Recording transactions with graphical reports',
            correctAnswer: 2,
            explanation: 'Double-entry bookkeeping means recording each transaction in two accounts: debit and credit.'
          },
          {
            id: 6,
            question: 'What is the purpose of a trial balance?',
            level: 3,
            option1: 'To summarize sales data',
            option2: 'To calculate profit',
            option3: 'To ensure that debit and credit balances are equal',
            option4: 'To generate invoices',
            correctAnswer: 3,
            explanation: 'A trial balance ensures that the debit and credit balances are equal.'
          },
          {
            id: 7,
            question: 'Which type of account is "Accounts Receivable"?',
            level: 2,
            option1: 'Asset',
            option2: 'Liability',
            option3: 'Revenue',
            option4: 'Expense',
            correctAnswer: 1,
            explanation: 'Accounts Receivable is an asset account that records amounts owed by customers.'
          },
          {
            id: 8,
            question: 'What is depreciation?',
            level: 3,
            option1: 'An increase in asset value',
            option2: 'An expense representing the reduction in the value of an asset over time',
            option3: 'An income from investments',
            option4: 'A type of revenue',
            correctAnswer: 2,
            explanation: 'Depreciation is an expense that represents the reduction in the value of an asset over time.'
          },
          {
            id: 9,
            question: 'Which document is used to record daily transactions?',
            level: 2,
            option1: 'Balance Sheet',
            option2: 'Income Statement',
            option3: 'Journal',
            option4: 'Cash Flow Statement',
            correctAnswer: 3,
            explanation: 'A Journal is used to record daily transactions in accounting.'
          },
          {
            id: 10,
            question: 'What does "credit" mean in accounting?',
            level: 2,
            option1: 'An increase in an asset account',
            option2: 'A decrease in an asset account or an increase in a liability/equity account',
            option3: 'A direct payment to employees',
            option4: 'A profit margin',
            correctAnswer: 2,
            explanation: 'In accounting, credit refers to a decrease in an asset account or an increase in a liability/equity account.'
          }
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
            question: 'What is financial ratio analysis?',
            level: 3,
            option1: 'A method for recording transactions',
            option2: 'A technique to evaluate financial performance using ratios',
            option3: 'A process for calculating taxes',
            option4: 'A tool for stock market analysis',
            correctAnswer: 2,
            explanation: 'Financial ratio analysis is used to evaluate financial performance using ratios.'
          },
          {
            id: 2,
            question: 'Which ratio is used to measure a company’s profitability?',
            level: 3,
            option1: 'Current Ratio',
            option2: 'Debt Ratio',
            option3: 'Gross Profit Margin',
            option4: 'Quick Ratio',
            correctAnswer: 3,
            explanation: 'Gross Profit Margin is used to measure a company’s profitability.'
          },
          {
            id: 3,
            question: 'What is discounted cash flow (DCF) analysis?',
            level: 4,
            option1: 'A method to calculate inventory cost',
            option2: 'A technique to value an investment based on its future cash flows',
            option3: 'A tool for calculating taxes',
            option4: 'A method for auditing accounts',
            correctAnswer: 2,
            explanation: 'DCF analysis values an investment based on its expected future cash flows.'
          },
          {
            id: 4,
            question: 'Which formula is used to calculate Return on Equity (ROE)?',
            level: 4,
            option1: 'Net Income / Total Assets',
            option2: 'Net Income / Total Equity',
            option3: 'Gross Profit / Total Revenue',
            option4: 'Operating Income / Total Sales',
            correctAnswer: 2,
            explanation: 'ROE is calculated as Net Income / Total Equity.'
          },
          {
            id: 5,
            question: 'What is the purpose of sensitivity analysis?',
            level: 4,
            option1: 'To create a financial model',
            option2: 'To assess the impact of changing variables on financial outcomes',
            option3: 'To calculate interest rates',
            option4: 'To track expenses',
            correctAnswer: 2,
            explanation: 'Sensitivity analysis assesses how changes in variables impact financial outcomes.'
          },
          {
            id: 6,
            question: 'Which metric is used to measure a company’s leverage?',
            level: 3,
            option1: 'Net Profit Margin',
            option2: 'Debt-to-Equity Ratio',
            option3: 'Return on Assets',
            option4: 'Gross Margin',
            correctAnswer: 2,
            explanation: 'Debt-to-Equity Ratio is used to measure a company’s leverage.'
          },
          {
            id: 7,
            question: 'What is vertical analysis?',
            level: 4,
            option1: 'Comparing financial data over time',
            option2: 'Calculating profitability ratios',
            option3: 'Analyzing each item as a percentage of a base amount',
            option4: 'Calculating growth rates',
            correctAnswer: 3,
            explanation: 'Vertical analysis expresses each item in a financial statement as a percentage of a base figure.'
          },
          {
            id: 8,
            question: 'Which of the following is a liquidity ratio?',
            level: 3,
            option1: 'Earnings Per Share (EPS)',
            option2: 'Quick Ratio',
            option3: 'Debt Ratio',
            option4: 'Price-to-Earnings Ratio (P/E)',
            correctAnswer: 2,
            explanation: 'Quick Ratio is a type of liquidity ratio.'
          },
          {
            id: 9,
            question: 'What does the Price-to-Earnings (P/E) ratio measure?',
            level: 3,
            option1: 'The total revenue of a company',
            option2: 'The profitability of a company',
            option3: 'The market value of a company compared to its earnings',
            option4: 'The total debt of a company',
            correctAnswer: 3,
            explanation: 'P/E ratio measures the market value of a company compared to its earnings per share.'
          },
          {
            id: 10,
            question: 'What is horizontal analysis?',
            level: 4,
            option1: 'Comparing financial data within a single period',
            option2: 'Analyzing financial data over multiple periods',
            option3: 'Calculating profitability ratios',
            option4: 'Evaluating stock prices',
            correctAnswer: 2,
            explanation: 'Horizontal analysis involves analyzing financial data over multiple periods to detect trends.'
          }
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
            question: 'What is diversification in investment strategies?',
            level: 3,
            option1: 'Investing in a single asset class',
            option2: 'Spreading investments across multiple asset classes to reduce risk',
            option3: 'Focusing only on short-term investments',
            option4: 'Investing in bonds only',
            correctAnswer: 2,
            explanation: 'Diversification involves spreading investments across different asset classes to minimize risk.'
          },
          {
            id: 2,
            question: 'What does “buy and hold” strategy refer to?',
            level: 3,
            option1: 'Buying stocks and holding them for a long period regardless of market conditions',
            option2: 'Frequent buying and selling of stocks based on short-term market trends',
            option3: 'Investing only in high-growth companies',
            option4: 'Buying only bonds for steady returns',
            correctAnswer: 1,
            explanation: 'Buy and hold strategy refers to buying investments and holding them for a long period, regardless of market fluctuations.'
          },
          {
            id: 3,
            question: 'Which of the following is a primary goal of value investing?',
            level: 4,
            option1: 'To invest in the highest-performing stocks',
            option2: 'To buy undervalued stocks and hold them for long-term gains',
            option3: 'To focus on short-term price movements',
            option4: 'To invest in bonds with the highest interest rates',
            correctAnswer: 2,
            explanation: 'Value investing focuses on buying undervalued stocks and holding them until the market recognizes their true worth.'
          },
          {
            id: 4,
            question: 'What is the main idea behind growth investing?',
            level: 4,
            option1: 'Investing in established companies with steady income',
            option2: 'Focusing on companies that are expected to grow faster than the market',
            option3: 'Buying stocks based on market sentiment',
            option4: 'Investing only in dividend-paying stocks',
            correctAnswer: 2,
            explanation: 'Growth investing involves focusing on companies with potential for above-average growth.'
          },
          {
            id: 5,
            question: 'What is an ETF (Exchange-Traded Fund)?',
            level: 2,
            option1: 'A type of bond investment',
            option2: 'A fund that tracks an index or a sector, traded on a stock exchange',
            option3: 'A savings account offering high interest rates',
            option4: 'A long-term investment in real estate',
            correctAnswer: 2,
            explanation: 'An ETF is a type of fund that tracks a specific index, sector, or asset class and is traded on stock exchanges.'
          },
          {
            id: 6,
            question: 'What is asset allocation?',
            level: 3,
            option1: 'Selecting investments based on their past performance',
            option2: 'Dividing investments among different asset categories to balance risk and reward',
            option3: 'Focusing only on equities',
            option4: 'Investing exclusively in real estate',
            correctAnswer: 2,
            explanation: 'Asset allocation is the process of dividing investments among different asset classes like stocks, bonds, and cash.'
          },
          {
            id: 7,
            question: 'What is the “efficient frontier” in investment theory?',
            level: 4,
            option1: 'A chart showing the optimal portfolio for maximum return with minimum risk',
            option2: 'A strategy to invest only in stocks with the highest dividends',
            option3: 'The point at which risk outweighs potential return',
            option4: 'A method for predicting stock prices',
            correctAnswer: 1,
            explanation: 'The efficient frontier represents the optimal combination of investments that maximize returns for a given level of risk.'
          },
          {
            id: 8,
            question: 'What does “risk tolerance” refer to in investment decisions?',
            level: 3,
            option1: 'The amount of risk a person is willing to take based on their financial situation',
            option2: 'The level of government regulation in the investment market',
            option3: 'The time taken for an investment to mature',
            option4: 'The expected return of a particular asset class',
            correctAnswer: 1,
            explanation: 'Risk tolerance refers to the amount of risk an individual is willing to take in their investments, based on personal circumstances.'
          },
          {
            id: 9,
            question: 'What is the primary difference between active and passive investing?',
            level: 4,
            option1: 'Active investing involves frequent buying and selling, while passive investing involves long-term holding of a market index',
            option2: 'Active investing focuses on bonds, while passive investing focuses on stocks',
            option3: 'Active investing is for individual investors, while passive investing is for institutions',
            option4: 'Active investing avoids risk, while passive investing embraces it',
            correctAnswer: 1,
            explanation: 'Active investing involves frequent buying and selling, while passive investing involves long-term holding of a market index.'
          },
          {
            id: 10,
            question: 'What is the main objective of dollar-cost averaging?',
            level: 3,
            option1: 'To minimize losses by investing all funds at once',
            option2: 'To reduce the average cost of investments by regularly investing a fixed amount',
            option3: 'To make quick profits through market timing',
            option4: 'To invest in only the safest assets available',
            correctAnswer: 2,
            explanation: 'Dollar-cost averaging involves investing a fixed amount of money regularly, regardless of the asset’s price, to reduce the average cost of investments over time.'
          }
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
          // Digital Marketing Fundamentals
          {
            id: 1,
            question: 'What is SEO (Search Engine Optimization)?',
            level: 3,
            option1: 'A method to create online advertisements',
            option2: 'A strategy to increase website visibility on search engines',
            option3: 'A technique for email marketing',
            option4: 'A tool for social media automation',
            correctAnswer: 2,
            explanation: 'SEO is the practice of optimizing a website to increase its visibility in search engine results.'
          },
          {
            id: 2,
            question: 'Which of the following is a primary goal of content marketing?',
            level: 3,
            option1: 'To increase direct sales through immediate calls-to-action',
            option2: 'To create valuable content that attracts and engages the target audience',
            option3: 'To focus on paid advertisements',
            option4: 'To manage social media accounts',
            correctAnswer: 2,
            explanation: 'Content marketing focuses on creating valuable, relevant content to attract and engage a target audience.'
          },
          {
            id: 3,
            question: 'What is PPC (Pay-Per-Click) advertising?',
            level: 3,
            option1: 'A type of social media strategy',
            option2: 'A model where advertisers pay a fee each time their ad is clicked',
            option3: 'An email marketing tool',
            option4: 'A method of organic content optimization',
            correctAnswer: 2,
            explanation: 'PPC advertising is a model where advertisers pay for each click on their ad, commonly used in Google Ads.'
          },
          {
            id: 4,
            question: 'What is the main goal of social media marketing?',
            level: 3,
            option1: 'To advertise products through traditional media channels',
            option2: 'To promote a brand and engage with a target audience on social platforms',
            option3: 'To increase organic search rankings',
            option4: 'To reduce email marketing costs',
            correctAnswer: 2,
            explanation: 'Social media marketing aims to promote a brand and engage with a target audience through platforms like Facebook, Instagram, and Twitter.'
          },
          {
            id: 5,
            question: 'What is the difference between organic and paid search results?',
            level: 4,
            option1: 'Organic search results are based on SEO, while paid search results are based on PPC advertising',
            option2: 'Organic results are shown only on social media, paid results appear in search engines',
            option3: 'Paid search results are free, while organic results are paid',
            option4: 'There is no difference; they are the same',
            correctAnswer: 1,
            explanation: 'Organic results are earned through SEO efforts, while paid search results are obtained by paying for ads in search engines.'
          },
          {
            id: 6,
            question: 'What is a conversion in digital marketing?',
            level: 3,
            option1: 'A paid advertisement that reaches a target audience',
            option2: 'When a user takes a desired action, such as making a purchase or signing up for a newsletter',
            option3: 'The number of visitors a website receives',
            option4: 'The total amount spent on marketing campaigns',
            correctAnswer: 2,
            explanation: 'A conversion refers to a user completing a desired action, such as purchasing a product or filling out a form.'
          },
          {
            id: 7,
            question: 'What is email marketing?',
            level: 3,
            option1: 'A way to send physical mail to customers',
            option2: 'A form of communication that sends promotional messages or updates via email',
            option3: 'A strategy to gain followers on social media',
            option4: 'A technique to boost search engine rankings',
            correctAnswer: 2,
            explanation: 'Email marketing involves sending promotional or informative emails to a targeted list of recipients to build relationships and drive sales.'
          },
          {
            id: 8,
            question: 'What is affiliate marketing?',
            level: 4,
            option1: 'A form of digital marketing focused on paid ads',
            option2: 'A marketing model where businesses reward affiliates for driving traffic or sales through their promotions',
            option3: 'A content marketing strategy for blog posts',
            option4: 'A technique for direct email campaigns',
            correctAnswer: 2,
            explanation: 'Affiliate marketing is a performance-based marketing model where affiliates earn a commission for driving traffic or sales to a business.'
          },
          {
            id: 9,
            question: 'What is a landing page?',
            level: 3,
            option1: 'A homepage of a website',
            option2: 'A page designed to capture leads or drive conversions',
            option3: 'A page with customer reviews',
            option4: 'A blog section of a website',
            correctAnswer: 2,
            explanation: 'A landing page is specifically designed to capture leads or encourage conversions, often linked from ads or email campaigns.'
          },
          {
            id: 10,
            question: 'What does CTR (Click-Through Rate) measure?',
            level: 3,
            option1: 'The number of visitors who make a purchase',
            option2: 'The percentage of people who click on an ad or link out of the total number who see it',
            option3: 'The amount of revenue generated from a campaign',
            option4: 'The total cost of a marketing campaign',
            correctAnswer: 2,
            explanation: 'CTR measures the percentage of users who click on an ad or link out of the total who view it, helping to assess the effectiveness of the campaign.'
          }
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
            question: 'What does SEO stand for?',
            level: 1,
            option1: 'Search Engagement Optimization',
            option2: 'Search Engine Optimization',
            option3: 'Search Engine Operations',
            option4: 'Search Entry Optimization',
            correctAnswer: 2,
            explanation: 'SEO stands for Search Engine Optimization, which involves optimizing a website to improve its visibility in search engine results.'
          },
          {
            id: 2,
            question: 'Which of the following is considered an on-page SEO factor?',
            level: 2,
            option1: 'Link building',
            option2: 'Keyword research',
            option3: 'Meta tags and content optimization',
            option4: 'Backlinks from other websites',
            correctAnswer: 3,
            explanation: 'On-page SEO involves optimizing elements like meta tags, content, and images on a webpage to improve search engine rankings.'
          },
          {
            id: 3,
            question: 'What is the purpose of keyword research in SEO?',
            level: 2,
            option1: 'To find the best keywords for Google Ads campaigns',
            option2: 'To identify relevant keywords that users are searching for and optimize content around them',
            option3: 'To build backlinks for a website',
            option4: 'To improve website loading speed',
            correctAnswer: 2,
            explanation: 'Keyword research helps identify the terms and phrases people are searching for, allowing you to optimize content for better rankings.'
          },
          {
            id: 4,
            question: 'What is a backlink?',
            level: 3,
            option1: 'A keyword within your website content',
            option2: 'A link from another website pointing to your website',
            option3: 'An image optimization technique',
            option4: 'A type of meta tag for mobile optimization',
            correctAnswer: 2,
            explanation: 'A backlink is a link from another website to your website, and it is important for improving a website’s authority and search ranking.'
          },
          {
            id: 5,
            question: 'What is the significance of the title tag in SEO?',
            level: 3,
            option1: 'It provides meta descriptions for search engines',
            option2: 'It is the first impression of a webpage in search results and contributes to keyword ranking',
            option3: 'It improves the loading speed of the webpage',
            option4: 'It displays the primary content of the webpage',
            correctAnswer: 2,
            explanation: 'The title tag is important because it provides the first impression of your webpage in search results and can affect its ranking and click-through rate.'
          },
          {
            id: 6,
            question: 'What is mobile optimization in SEO?',
            level: 4,
            option1: 'Ensuring your website is easy to navigate on mobile devices and loads quickly',
            option2: 'Building a mobile version of your website separate from the desktop version',
            option3: 'Using mobile-based keywords in content',
            option4: 'Adding mobile-specific meta tags for indexing',
            correctAnswer: 1,
            explanation: 'Mobile optimization ensures that a website is fully responsive and performs well on mobile devices, which is essential for ranking on search engines.'
          },
          {
            id: 7,
            question: 'What does “bounce rate” mean in SEO terms?',
            level: 3,
            option1: 'The rate at which users leave your website after viewing only one page',
            option2: 'The percentage of users who complete a desired action on your website',
            option3: 'The number of backlinks your website receives',
            option4: 'The number of keywords a page is ranked for',
            correctAnswer: 1,
            explanation: 'Bounce rate refers to the percentage of visitors who leave a site after viewing only one page, indicating user engagement.'
          },
          {
            id: 8,
            question: 'What is the purpose of alt text for images in SEO?',
            level: 3,
            option1: 'To describe the image for users with visual impairments and help search engines understand the image',
            option2: 'To make images load faster on a webpage',
            option3: 'To rank images higher in search results',
            option4: 'To track clicks on images',
            correctAnswer: 1,
            explanation: 'Alt text provides descriptions of images for accessibility and helps search engines understand the content of the images, which can improve rankings.'
          },
          {
            id: 9,
            question: 'What is the role of content length in SEO?',
            level: 4,
            option1: 'Longer content automatically ranks higher in search results',
            option2: 'Content length should be balanced, providing enough value without unnecessary filler',
            option3: 'Content length has no effect on SEO rankings',
            option4: 'Only short content is preferred for SEO ranking purposes',
            correctAnswer: 2,
            explanation: 'While longer content may have more opportunities to rank for multiple keywords, the key is to provide valuable, relevant information without filler.'
          },
          {
            id: 10,
            question: 'What is an SEO audit?',
            level: 4,
            option1: 'A tool used to analyze competitor websites',
            option2: 'A comprehensive review of a website to identify SEO issues and opportunities for improvement',
            option3: 'A process for submitting a website to search engines for indexing',
            option4: 'A method to track user behavior on your website',
            correctAnswer: 2,
            explanation: 'An SEO audit is a detailed analysis of a website to identify issues and opportunities for optimization, such as technical, on-page, and off-page factors.'
          }
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
            question: 'What is content personalization in content marketing?',
            level: 4,
            option1: 'Creating content that is only focused on a single product or service',
            option2: 'Tailoring content to individual users or segments based on their preferences and behavior',
            option3: 'Publishing content only on social media platforms',
            option4: 'Writing content in a formal tone to appeal to a wide audience',
            correctAnswer: 2,
            explanation: 'Content personalization involves tailoring content to specific users or segments based on their preferences, behaviors, and demographics.'
          },
          {
            id: 2,
            question: 'What is the role of content repurposing in a content marketing strategy?',
            level: 3,
            option1: 'To write a new blog post every day to maintain audience engagement',
            option2: 'To transform existing content into different formats for broader reach and engagement',
            option3: 'To reduce the cost of creating new content',
            option4: 'To focus only on long-form content and ignore short-form content',
            correctAnswer: 2,
            explanation: 'Content repurposing involves transforming existing content into various formats (e.g., turning a blog post into a video, infographic, or podcast) to reach a wider audience.'
          },
          {
            id: 3,
            question: 'What is the significance of storytelling in content marketing?',
            level: 4,
            option1: 'It helps to sell products directly through content',
            option2: 'It engages the audience emotionally, making content more relatable and memorable',
            option3: 'It focuses on providing detailed technical information',
            option4: 'It is only useful for B2C marketing and not B2B marketing',
            correctAnswer: 2,
            explanation: 'Storytelling in content marketing helps engage the audience emotionally and makes content more relatable, memorable, and impactful.'
          },
          {
            id: 4,
            question: 'What is a content marketing funnel?',
            level: 4,
            option1: 'A tool to organize and track blog post ideas',
            option2: 'A step-by-step process for converting prospects into customers through targeted content',
            option3: 'A strategy to create content for each social media platform',
            option4: 'A method for determining keyword density in blog posts',
            correctAnswer: 2,
            explanation: 'A content marketing funnel is a strategic approach that guides prospects through different stages (awareness, consideration, conversion) with targeted content.'
          },
          {
            id: 5,
            question: 'How do you measure the success of a content marketing campaign?',
            level: 3,
            option1: 'By counting the number of blog posts published',
            option2: 'By measuring the engagement (likes, shares, comments), lead generation, and conversions',
            option3: 'By focusing solely on the total number of website visitors',
            option4: 'By increasing the volume of email subscribers without considering their engagement',
            correctAnswer: 2,
            explanation: 'Success is measured by analyzing engagement metrics (likes, shares, comments), lead generation, and conversions, not just website traffic or subscribers.'
          },
          {
            id: 6,
            question: 'What is the difference between evergreen content and timely content?',
            level: 3,
            option1: 'Evergreen content is always relevant and timeless, while timely content is focused on current events or trends',
            option2: 'Evergreen content focuses on news articles, while timely content is focused on SEO',
            option3: 'Evergreen content is usually short-form, while timely content is long-form',
            option4: 'There is no difference between the two; they are interchangeable',
            correctAnswer: 1,
            explanation: 'Evergreen content remains relevant over time, whereas timely content focuses on current events or trends with limited relevance.'
          },
          {
            id: 7,
            question: 'What is the main purpose of a call-to-action (CTA) in content marketing?',
            level: 3,
            option1: 'To increase the website’s bounce rate',
            option2: 'To guide the audience toward taking a specific action, such as subscribing, downloading, or purchasing',
            option3: 'To promote the brand through visual elements',
            option4: 'To create more content without a clear goal',
            correctAnswer: 2,
            explanation: 'A call-to-action (CTA) is designed to guide the audience to take a specific action, such as subscribing, downloading, or purchasing.'
          },
          {
            id: 8,
            question: 'What is user-generated content (UGC) in content marketing?',
            level: 3,
            option1: 'Content created by the company to promote its brand',
            option2: 'Content created by customers or users that is shared by the brand to build trust and authenticity',
            option3: 'Content created by influencers for paid promotions',
            option4: 'Content that is published exclusively on social media platforms',
            correctAnswer: 2,
            explanation: 'User-generated content (UGC) is content created by customers or users, which brands can share to build trust, engagement, and authenticity.'
          },
          {
            id: 9,
            question: 'What is a content audit?',
            level: 4,
            option1: 'A process of removing old content from a website',
            option2: 'A thorough review of existing content to assess its performance and identify opportunities for improvement',
            option3: 'A method of curating content for social media posts',
            option4: 'A technique to track the number of content pieces produced',
            correctAnswer: 2,
            explanation: 'A content audit involves reviewing existing content to assess its performance, relevance, and quality, identifying opportunities for optimization or repurposing.'
          },
          {
            id: 10,
            question: 'How can SEO be integrated into content marketing?',
            level: 4,
            option1: 'By only focusing on keyword density',
            option2: 'By optimizing content for relevant keywords, improving readability, and ensuring technical SEO best practices are followed',
            option3: 'By writing content without considering search engine algorithms',
            option4: 'By creating content solely for social media platforms',
            correctAnswer: 2,
            explanation: 'SEO integration in content marketing involves optimizing content with relevant keywords, improving readability, and following technical SEO best practices to boost visibility in search engines.'
          }
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
            question: 'What is the primary purpose of the Layers panel in Photoshop?',
            level: 2,
            option1: 'To adjust the color balance of an image',
            option2: 'To organize and manage different elements of an image',
            option3: 'To crop and resize images',
            option4: 'To add text to an image',
            correctAnswer: 2,
            explanation: 'The Layers panel allows you to manage different elements of your design separately, making it easier to manipulate each part of the image independently.'
          },
          {
            id: 2,
            question: 'What is the shortcut key for the Brush tool in Photoshop?',
            level: 1,
            option1: 'B',
            option2: 'V',
            option3: 'P',
            option4: 'T',
            correctAnswer: 1,
            explanation: 'The Brush tool can be quickly selected by pressing the "B" key on your keyboard.'
          },
          {
            id: 3,
            question: 'What does the Clone Stamp tool do in Photoshop?',
            level: 3,
            option1: 'It clones the entire image to a new layer',
            option2: 'It copies a part of an image to another part of the same image',
            option3: 'It erases parts of an image permanently',
            option4: 'It blurs the image to create a smooth transition',
            correctAnswer: 2,
            explanation: 'The Clone Stamp tool allows you to copy a section of an image and paint it over another area to remove imperfections or duplicate elements.'
          },
          {
            id: 4,
            question: 'What is the use of the Magic Wand tool in Photoshop?',
            level: 2,
            option1: 'To select areas based on color similarity',
            option2: 'To adjust the brightness of an image',
            option3: 'To apply filters to an image',
            option4: 'To draw freehand shapes',
            correctAnswer: 1,
            explanation: 'The Magic Wand tool selects areas of an image that share similar colors, making it ideal for selecting solid-color regions quickly.'
          },
          {
            id: 5,
            question: 'What is a Mask in Photoshop?',
            level: 3,
            option1: 'A tool used for applying filters to images',
            option2: 'A technique to hide parts of a layer without permanently deleting them',
            option3: 'A function that removes the background from an image',
            option4: 'A way to crop an image',
            correctAnswer: 2,
            explanation: 'A Mask in Photoshop allows you to hide or reveal parts of a layer non-destructively, enabling flexible editing.'
          },
          {
            id: 6,
            question: 'Which file format is best for web use when you need transparency?',
            level: 2,
            option1: 'JPEG',
            option2: 'PNG',
            option3: 'GIF',
            option4: 'TIFF',
            correctAnswer: 2,
            explanation: 'PNG files support transparent backgrounds, making them ideal for use on websites where you want the image to blend seamlessly into different backgrounds.'
          },
          {
            id: 7,
            question: 'What is the purpose of the Content-Aware Fill feature in Photoshop?',
            level: 3,
            option1: 'To automatically remove unwanted objects from an image by filling the area with surrounding pixels',
            option2: 'To change the color scheme of an image',
            option3: 'To resize images without distortion',
            option4: 'To sharpen the focus of an image',
            correctAnswer: 1,
            explanation: 'Content-Aware Fill allows you to remove unwanted objects from an image and automatically fill the gap with pixels that match the surrounding area.'
          },
          {
            id: 8,
            question: 'What does the Hue/Saturation adjustment layer do?',
            level: 2,
            option1: 'It adjusts the exposure of an image',
            option2: 'It changes the overall brightness of an image',
            option3: 'It alters the colors in an image by adjusting hue, saturation, and lightness',
            option4: 'It creates a black-and-white version of an image',
            correctAnswer: 3,
            explanation: 'The Hue/Saturation adjustment layer is used to modify the colors of an image, including changing the hue, saturation, and lightness of specific color ranges.'
          },
          {
            id: 9,
            question: 'What is the primary function of the Pen tool in Photoshop?',
            level: 4,
            option1: 'To draw freehand shapes',
            option2: 'To create smooth, precise paths and selections',
            option3: 'To erase parts of an image',
            option4: 'To apply filters to an image',
            correctAnswer: 2,
            explanation: 'The Pen tool is used to create precise paths, which can be converted into selections, shapes, or masks.'
          },
          {
            id: 10,
            question: 'What is the difference between RGB and CMYK color modes in Photoshop?',
            level: 4,
            option1: 'RGB is for print, and CMYK is for digital screens',
            option2: 'RGB is for digital screens, and CMYK is for print',
            option3: 'RGB uses cyan, magenta, yellow, and black, while CMYK uses red, green, and blue',
            option4: 'There is no difference between the two color modes',
            correctAnswer: 2,
            explanation: 'RGB (Red, Green, Blue) is used for digital screens, while CMYK (Cyan, Magenta, Yellow, Black) is used for print production.'
          }
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
            question: 'What is the function of the Pen tool in Adobe Illustrator?',
            level: 4,
            option1: 'To create smooth curves and straight lines by placing anchor points',
            option2: 'To create shapes with a fixed width and height',
            option3: 'To edit raster images in vector format',
            option4: 'To apply color to objects',
            correctAnswer: 1,
            explanation: 'The Pen tool is used to create precise paths and curves by placing anchor points, which can be manipulated to form complex shapes.'
          },
          {
            id: 2,
            question: 'What is the purpose of the Pathfinder panel in Illustrator?',
            level: 3,
            option1: 'To create a seamless pattern from selected objects',
            option2: 'To merge, divide, and trim shapes into complex objects',
            option3: 'To apply different color schemes to objects',
            option4: 'To adjust the opacity of objects',
            correctAnswer: 2,
            explanation: 'The Pathfinder panel provides various shape operations such as Unite, Minus Front, and Intersect, allowing you to combine, subtract, and divide objects to create complex shapes.'
          },
          {
            id: 3,
            question: 'What is the difference between vector and raster images?',
            level: 4,
            option1: 'Vector images are made of pixels, while raster images are made of paths',
            option2: 'Vector images use paths and anchor points, while raster images are made of pixels',
            option3: 'Vector images are more detailed than raster images',
            option4: 'Raster images are used in Illustrator, while vector images are used in Photoshop',
            correctAnswer: 2,
            explanation: 'Vector images use paths and anchor points, which allow them to be infinitely scalable without losing quality, whereas raster images are made of pixels and can lose quality when resized.'
          },
          {
            id: 4,
            question: 'How do you create a perfect circle in Adobe Illustrator?',
            level: 2,
            option1: 'Hold the Shift key while using the Ellipse tool',
            option2: 'Click and drag the Pen tool',
            option3: 'Use the Rectangle tool and adjust the width and height equally',
            option4: 'Double-click the Ellipse tool to create a circle',
            correctAnswer: 1,
            explanation: 'Holding the Shift key while using the Ellipse tool creates a perfect circle, as it constrains the proportions to be equal.'
          },
          {
            id: 5,
            question: 'What is the purpose of the Direct Selection tool in Illustrator?',
            level: 3,
            option1: 'To select and move entire objects',
            option2: 'To select and move individual anchor points or path segments',
            option3: 'To apply gradients to an object',
            option4: 'To lock objects in place',
            correctAnswer: 2,
            explanation: 'The Direct Selection tool allows you to select and manipulate individual anchor points or path segments of an object, giving you precise control over the shape.'
          },
          {
            id: 6,
            question: 'What is the use of the Gradient tool in Illustrator?',
            level: 3,
            option1: 'To apply a solid color to an object',
            option2: 'To fill an object with a gradient from one color to another',
            option3: 'To create patterns for objects',
            option4: 'To transform the shape of an object',
            correctAnswer: 2,
            explanation: 'The Gradient tool is used to apply a smooth transition from one color to another across an object, which can be customized for different effects.'
          },
          {
            id: 7,
            question: 'How do you create a custom brush in Adobe Illustrator?',
            level: 4,
            option1: 'By using the Pen tool and saving it as a brush preset',
            option2: 'By creating a vector shape and defining it as a new brush',
            option3: 'By painting with the Brush tool and adjusting its opacity',
            option4: 'By modifying an existing brush from the Brush library',
            correctAnswer: 2,
            explanation: 'You can create a custom brush in Illustrator by designing a vector shape, then defining it as a new brush, which can be applied to paths or strokes.'
          },
          {
            id: 8,
            question: 'What does the Shape Builder tool do in Illustrator?',
            level: 4,
            option1: 'It allows you to combine or subtract shapes to create new ones',
            option2: 'It creates basic shapes like circles, squares, and triangles',
            option3: 'It outlines the edges of selected shapes',
            option4: 'It draws freehand shapes',
            correctAnswer: 1,
            explanation: 'The Shape Builder tool enables you to combine, subtract, or create new shapes by selecting overlapping parts of existing shapes, making complex designs easier to create.'
          },
          {
            id: 9,
            question: 'What is the function of the Artboards in Illustrator?',
            level: 3,
            option1: 'To group all objects into a single document',
            option2: 'To create multiple working areas within a single document for different designs or layouts',
            option3: 'To apply a border around selected shapes',
            option4: 'To draw background images on the canvas',
            correctAnswer: 2,
            explanation: 'Artboards in Illustrator provide multiple working areas within one document, allowing you to work on different layouts or designs within the same project.'
          },
          {
            id: 10,
            question: 'What is the purpose of the Appearance panel in Illustrator?',
            level: 4,
            option1: 'To change the font style of text objects',
            option2: 'To manage and apply multiple fills, strokes, and effects to an object without creating extra layers',
            option3: 'To modify the color of vector shapes',
            option4: 'To apply textures to an object',
            correctAnswer: 2,
            explanation: 'The Appearance panel lets you manage and apply multiple fills, strokes, and effects to an object, allowing you to create complex designs without adding extra layers.'
          }
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
            question: 'What does UI stand for in design?',
            level: 1,
            option1: 'User Interface',
            option2: 'User Interaction',
            option3: 'Uniform Interface',
            option4: 'Universal Interaction',
            correctAnswer: 1,
            explanation: 'UI stands for User Interface, which refers to the visual elements and controls through which a user interacts with a device or application.'
          },
          {
            id: 2,
            question: 'What is the main goal of UX design?',
            level: 2,
            option1: 'To improve the aesthetic appeal of a product',
            option2: 'To make a product easy and enjoyable to use',
            option3: 'To create innovative features for users',
            option4: 'To ensure the product has the latest technologies',
            correctAnswer: 2,
            explanation: 'UX (User Experience) design focuses on creating a seamless and enjoyable experience for users by understanding their needs and behaviors.'
          },
          {
            id: 3,
            question: 'Which of the following is NOT a principle of good UI design?',
            level: 3,
            option1: 'Consistency',
            option2: 'Simplicity',
            option3: 'Flexibility',
            option4: 'Over-complicating navigation',
            correctAnswer: 4,
            explanation: 'Good UI design focuses on simplicity, consistency, and usability, avoiding unnecessary complexity that may confuse users.'
          },
          {
            id: 4,
            question: 'What is a wireframe in UI/UX design?',
            level: 2,
            option1: 'A detailed final design with colors and fonts',
            option2: 'A low-fidelity sketch or blueprint of the layout and structure of a webpage or app',
            option3: 'A high-fidelity prototype with interactive features',
            option4: 'A set of icons and images used in the design',
            correctAnswer: 2,
            explanation: 'A wireframe is a simple visual guide that represents the skeletal structure of a website or app, used to plan the layout and functionality.'
          },
          {
            id: 5,
            question: 'What does the term "responsive design" refer to?',
            level: 3,
            option1: 'Design that adapts to different screen sizes and devices',
            option2: 'Design that changes based on the weather',
            option3: 'Design that adapts to the user’s emotional state',
            option4: 'Design that automatically updates based on user behavior',
            correctAnswer: 1,
            explanation: 'Responsive design refers to creating a website or app that automatically adjusts its layout and content based on the screen size and device being used.'
          },
          {
            id: 6,
            question: 'What is the main difference between UI and UX?',
            level: 2,
            option1: 'UI is about usability, UX is about the appearance of the interface',
            option2: 'UI is the design of user interfaces, while UX is the overall experience of using the product',
            option3: 'UX is focused on aesthetics, while UI is focused on functionality',
            option4: 'UI refers to the behavior of the product, UX refers to its content',
            correctAnswer: 2,
            explanation: 'UI focuses on the design and interactivity of the interface, while UX focuses on the overall experience of the user, including usability and satisfaction.'
          },
          {
            id: 7,
            question: 'Which of these is a key principle of UX design?',
            level: 3,
            option1: 'User-centric design',
            option2: 'Aesthetic design',
            option3: 'Complexity over simplicity',
            option4: 'Focus on visual details first',
            correctAnswer: 1,
            explanation: 'UX design places the user at the center of the design process, focusing on their needs, behaviors, and pain points to create a user-friendly product.'
          },
          {
            id: 8,
            question: 'What is the purpose of conducting user testing in UX design?',
            level: 4,
            option1: 'To identify bugs and errors in the code',
            option2: 'To understand how real users interact with the product and gather feedback',
            option3: 'To promote the product to potential customers',
            option4: 'To measure the aesthetic appeal of the design',
            correctAnswer: 2,
            explanation: 'User testing helps UX designers understand how actual users interact with the product, allowing them to identify pain points and improve the design based on feedback.'
          },
          {
            id: 9,
            question: 'What is the term for a high-fidelity, interactive prototype used in UI/UX design?',
            level: 4,
            option1: 'Wireframe',
            option2: 'Mockup',
            option3: 'Prototype',
            option4: 'Storyboard',
            correctAnswer: 3,
            explanation: 'A prototype is a high-fidelity, interactive version of a product or website used to test design concepts and user interactions.'
          },
          {
            id: 10,
            question: 'Which color theory concept is essential to consider when designing UI elements?',
            level: 3,
            option1: 'Complementary colors for contrast and balance',
            option2: 'Monochromatic colors for uniformity',
            option3: 'Analogous colors for variety',
            option4: 'Pastel colors for softness',
            correctAnswer: 1,
            explanation: 'Complementary colors are used to create contrast and visual interest, ensuring that UI elements are easy to distinguish and visually appealing.'
          }
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
            question: 'What is the primary function of the aperture in a camera?',
            level: 2,
            option1: 'To control the exposure time',
            option2: 'To control the depth of field',
            option3: 'To adjust the ISO sensitivity',
            option4: 'To focus the lens',
            correctAnswer: 2,
            explanation: 'The aperture controls the depth of field, which determines how much of the scene is in focus, as well as the amount of light entering the camera.'
          },
          {
            id: 2,
            question: 'What does the term "ISO" refer to in photography?',
            level: 2,
            option1: 'The camera sensor size',
            option2: 'The sensitivity of the camera’s sensor to light',
            option3: 'The camera’s shutter speed',
            option4: 'The lens aperture size',
            correctAnswer: 2,
            explanation: 'ISO refers to the sensitivity of the camera’s sensor to light. A higher ISO allows for shooting in lower light, but it may introduce more noise (grain) in the image.'
          },
          {
            id: 3,
            question: 'What is the function of the shutter speed in a camera?',
            level: 2,
            option1: 'To adjust the color balance of the image',
            option2: 'To control the exposure by adjusting the time the camera’s sensor is exposed to light',
            option3: 'To adjust the aperture size',
            option4: 'To focus the lens',
            correctAnswer: 2,
            explanation: 'Shutter speed controls how long the camera’s sensor is exposed to light, affecting the brightness of the image and the ability to freeze or blur motion.'
          },
          {
            id: 4,
            question: 'What is the rule of thirds in photography?',
            level: 3,
            option1: 'Placing the subject in the center of the frame',
            option2: 'Dividing the image into thirds both horizontally and vertically, and placing the subject at the intersection points',
            option3: 'Using only the top third of the frame for the subject',
            option4: 'Filling the frame with the subject for dramatic effect',
            correctAnswer: 2,
            explanation: 'The rule of thirds is a compositional guideline where you divide the image into thirds both horizontally and vertically, placing important elements along these lines or at their intersections.'
          },
          {
            id: 5,
            question: 'What does the term "bokeh" refer to in photography?',
            level: 3,
            option1: 'The sharpness of the background',
            option2: 'The out-of-focus areas of an image, particularly the aesthetic quality of the background blur',
            option3: 'The clarity of the subject in the image',
            option4: 'The brightness of the image',
            correctAnswer: 2,
            explanation: 'Bokeh refers to the aesthetic quality of the blur in the background of an image, which is often achieved by using a wide aperture and certain lens characteristics.'
          },
          {
            id: 6,
            question: 'What is the best technique to avoid camera shake when taking handheld photos?',
            level: 3,
            option1: 'Using a fast shutter speed',
            option2: 'Lowering the ISO setting',
            option3: 'Using a tripod',
            option4: 'Holding your breath while shooting',
            correctAnswer: 1,
            explanation: 'A fast shutter speed helps to freeze motion and reduce the effect of camera shake, especially when shooting handheld.'
          },
          {
            id: 7,
            question: 'What is the difference between a zoom lens and a prime lens?',
            level: 3,
            option1: 'A zoom lens has a fixed focal length, while a prime lens has a variable focal length',
            option2: 'A zoom lens has a variable focal length, while a prime lens has a fixed focal length',
            option3: 'A zoom lens is better for portrait photography, while a prime lens is better for landscapes',
            option4: 'A prime lens is cheaper than a zoom lens',
            correctAnswer: 2,
            explanation: 'A zoom lens allows you to adjust the focal length, providing flexibility in framing, while a prime lens has a fixed focal length, offering superior image quality and a faster aperture.'
          },
          {
            id: 8,
            question: 'Which of the following is a common mistake in composition?',
            level: 3,
            option1: 'Placing the horizon line directly in the center of the frame',
            option2: 'Using the rule of thirds',
            option3: 'Positioning the subject off-center',
            option4: 'Keeping the background simple and uncluttered',
            correctAnswer: 1,
            explanation: 'Placing the horizon line directly in the center of the frame can create an unbalanced composition. It’s better to position it higher or lower, depending on the subject.'
          },
          {
            id: 9,
            question: 'What is the purpose of white balance in photography?',
            level: 2,
            option1: 'To adjust the image’s exposure',
            option2: 'To adjust the color temperature, making whites appear neutral under different lighting conditions',
            option3: 'To blur the background of the image',
            option4: 'To sharpen the details of the image',
            correctAnswer: 2,
            explanation: 'White balance adjusts the color temperature of the image to ensure that whites appear neutral and the overall color tone is accurate, depending on the light source.'
          },
          {
            id: 10,
            question: 'What is the best way to achieve proper focus on a subject?',
            level: 2,
            option1: 'Use a smaller aperture',
            option2: 'Manually adjust the focus ring on the lens',
            option3: 'Increase the ISO setting',
            option4: 'Use a slow shutter speed',
            correctAnswer: 2,
            explanation: 'Manually adjusting the focus ring on the lens allows you to achieve precise focus on the subject. Autofocus can also be used, but manual control gives you more accuracy in some situations.'
          }
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
            question: 'What is the purpose of using a reflector in portrait photography?',
            level: 3,
            option1: 'To block unwanted light from the subject',
            option2: 'To bounce light back onto the subject to fill in shadows',
            option3: 'To create a hard light effect',
            option4: 'To diffuse the light source',
            correctAnswer: 2,
            explanation: 'A reflector bounces light back onto the subject, helping to fill in shadows and soften the overall lighting of the portrait.'
          },
          {
            id: 2,
            question: 'What is the best lens choice for achieving a shallow depth of field in portrait photography?',
            level: 3,
            option1: 'Wide-angle lens (18mm)',
            option2: 'Telephoto lens (85mm or 135mm)',
            option3: 'Standard zoom lens (24-70mm)',
            option4: 'Macro lens (50mm)',
            correctAnswer: 2,
            explanation: 'A telephoto lens (85mm or 135mm) is ideal for portraits as it allows for a shallow depth of field, which blurs the background and isolates the subject.'
          },
          {
            id: 3,
            question: 'What is the "Rembrandt lighting" technique?',
            level: 4,
            option1: 'Lighting that creates a full shadow over the subject’s face',
            option2: 'Lighting that produces a small triangular highlight on the cheek opposite the light source',
            option3: 'Lighting that produces a flat, evenly lit subject',
            option4: 'Lighting that focuses entirely on the background',
            correctAnswer: 2,
            explanation: 'Rembrandt lighting creates a small triangular highlight on the cheek opposite the light source, often used for dramatic and classic portrait lighting.'
          },
          {
            id: 4,
            question: 'What is the best camera setting to achieve a blurry background (bokeh) effect?',
            level: 3,
            option1: 'A large aperture (f/2.8 or lower)',
            option2: 'A small aperture (f/22)',
            option3: 'A fast shutter speed',
            option4: 'High ISO settings',
            correctAnswer: 1,
            explanation: 'A large aperture (f/2.8 or lower) creates a shallow depth of field, which blurs the background and emphasizes the subject, producing the bokeh effect.'
          },
          {
            id: 5,
            question: 'What does "catchlight" refer to in portrait photography?',
            level: 2,
            option1: 'The reflection of light in the subject’s eyes',
            option2: 'The light that falls on the background',
            option3: 'The shadow cast by the subject’s nose',
            option4: 'The overexposed areas in a portrait',
            correctAnswer: 1,
            explanation: 'Catchlight refers to the reflection of light in the subject’s eyes, which adds life and depth to a portrait.'
          },
          {
            id: 6,
            question: 'What is the ideal position for the main light source in a portrait setup?',
            level: 3,
            option1: 'Directly above the subject’s head',
            option2: 'To the left or right of the subject at a 45-degree angle',
            option3: 'Behind the subject, creating a backlight effect',
            option4: 'Directly in front of the subject',
            correctAnswer: 2,
            explanation: 'Placing the main light at a 45-degree angle to the side of the subject creates flattering shadows and highlights, contributing to a well-lit portrait.'
          },
          {
            id: 7,
            question: 'What is the effect of using a high-key lighting setup in portrait photography?',
            level: 3,
            option1: 'It creates dramatic, high-contrast shadows',
            option2: 'It produces soft, evenly lit portraits with minimal shadows',
            option3: 'It produces a moody, low-contrast effect',
            option4: 'It emphasizes the subject’s facial details',
            correctAnswer: 2,
            explanation: 'High-key lighting is a bright, soft lighting setup that minimizes shadows, creating a light and airy effect often used in fashion and beauty portraits.'
          },
          {
            id: 8,
            question: 'What is the best technique for photographing subjects with glasses?',
            level: 4,
            option1: 'Ensure the light source is directly in front of the subject to avoid reflections',
            option2: 'Use a high ISO to reduce reflections',
            option3: 'Position the subject with their head tilted to avoid reflections',
            option4: 'Remove the glasses from the subject for the best result',
            correctAnswer: 1,
            explanation: 'Position the light source at an angle to avoid reflections in the glasses. A light source directly in front of the subject can cause reflections that obscure the eyes.'
          },
          {
            id: 9,
            question: 'Which background is typically used to create a professional look in portrait photography?',
            level: 3,
            option1: 'Bright, busy patterns',
            option2: 'A soft, neutral-colored background',
            option3: 'A completely black background',
            option4: 'A bright outdoor scene with lots of detail',
            correctAnswer: 2,
            explanation: 'A soft, neutral-colored background helps to keep the focus on the subject while providing a professional and clean appearance.'
          },
          {
            id: 10,
            question: 'What is the effect of using a "softbox" in portrait photography?',
            level: 3,
            option1: 'It creates harsh, direct light with strong shadows',
            option2: 'It softens and diffuses the light, reducing harsh shadows',
            option3: 'It creates a dramatic, contrast-heavy portrait',
            option4: 'It focuses the light on a small area of the subject',
            correctAnswer: 2,
            explanation: 'A softbox diffuses the light, producing soft, even lighting with minimal harsh shadows, which is ideal for flattering portrait lighting.'
          }
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
            question: 'What is the purpose of using layers in photo editing software?',
            level: 3,
            option1: 'To organize different elements of the image, allowing for non-destructive editing',
            option2: 'To permanently merge all image elements into a single layer',
            option3: 'To add filters to the entire image at once',
            option4: 'To enhance the contrast of the image',
            correctAnswer: 1,
            explanation: 'Layers allow for non-destructive editing by separating different elements of the image, making it easy to adjust each component without affecting others.'
          },
          {
            id: 2,
            question: 'What does the "Clone Stamp" tool do in photo editing?',
            level: 3,
            option1: 'It duplicates a selected area of the image and paints over another area',
            option2: 'It adjusts the image’s contrast',
            option3: 'It sharpens the edges of a subject in the image',
            option4: 'It blurs the background of an image',
            correctAnswer: 1,
            explanation: 'The Clone Stamp tool duplicates a portion of the image and uses it to paint over unwanted areas, often used for retouching or removing blemishes.'
          },
          {
            id: 3,
            question: 'What is the benefit of using the "Curves" adjustment in photo editing?',
            level: 4,
            option1: 'To adjust the image’s brightness and contrast in a controlled way',
            option2: 'To apply a general color filter to the entire image',
            option3: 'To crop the image to a specific aspect ratio',
            option4: 'To blur the edges of the image',
            correctAnswer: 1,
            explanation: 'Curves adjustment allows for precise control over the image’s brightness and contrast by adjusting the tone and color balance of the image.'
          },
          {
            id: 4,
            question: 'What is the primary function of the "Healing Brush" tool?',
            level: 3,
            option1: 'To sharpen the details of the image',
            option2: 'To remove blemishes or unwanted elements while matching the surrounding texture',
            option3: 'To blur the edges of an object',
            option4: 'To change the overall color balance of the image',
            correctAnswer: 2,
            explanation: 'The Healing Brush tool is used to remove blemishes, spots, or unwanted elements in an image, seamlessly blending them with the surrounding texture.'
          },
          {
            id: 5,
            question: 'What does "Non-Destructive Editing" mean in photo editing?',
            level: 4,
            option1: 'Editing the original image and saving it with permanent changes',
            option2: 'Editing the image using adjustments and layers that can be modified or undone without permanently altering the original image',
            option3: 'Creating a completely new image without editing the original',
            option4: 'Using a low-quality version of the image to make edits',
            correctAnswer: 2,
            explanation: 'Non-destructive editing refers to making adjustments that don’t permanently alter the original image, allowing for easy changes and reversibility.'
          },
          {
            id: 6,
            question: 'What is the effect of using a "Gaussian Blur" in photo editing?',
            level: 3,
            option1: 'To sharpen the edges of the subject',
            option2: 'To create a soft, even blur across the entire image or selected area',
            option3: 'To increase the saturation of the image',
            option4: 'To adjust the contrast of the image',
            correctAnswer: 2,
            explanation: 'Gaussian Blur is used to create a soft, even blur across an image or a selected area, often used to soften backgrounds or reduce image noise.'
          },
          {
            id: 7,
            question: 'What is the purpose of using a "Gradient Map" in photo editing?',
            level: 4,
            option1: 'To apply a color overlay based on the tonal values of the image',
            option2: 'To blur the entire image progressively from top to bottom',
            option3: 'To adjust the exposure of the image',
            option4: 'To remove noise from the image',
            correctAnswer: 1,
            explanation: 'A Gradient Map applies a color gradient to an image based on its tonal values, allowing for creative color grading and stylized effects.'
          },
          {
            id: 8,
            question: 'What is the difference between "Brightness" and "Contrast" in photo editing?',
            level: 2,
            option1: 'Brightness adjusts the lightness of the entire image, while contrast adjusts the difference between light and dark areas',
            option2: 'Brightness adjusts the color balance, while contrast adjusts the sharpness',
            option3: 'Brightness adjusts the sharpness, while contrast adjusts the lightness',
            option4: 'Brightness adjusts the size of the image, while contrast adjusts the hue',
            correctAnswer: 1,
            explanation: 'Brightness changes the lightness or darkness of the entire image, while contrast increases or decreases the difference between light and dark areas.'
          },
          {
            id: 9,
            question: 'What does "Color Grading" in photo editing refer to?',
            level: 4,
            option1: 'Adjusting the sharpness of the image',
            option2: 'Adjusting the colors in an image to create a particular mood or look',
            option3: 'Adding a color overlay to the image',
            option4: 'Reducing the exposure of the image',
            correctAnswer: 2,
            explanation: 'Color grading involves adjusting the colors in an image to create a specific mood or aesthetic, often used in film and portrait photography.'
          },
          {
            id: 10,
            question: 'What is the "Dodge and Burn" technique in photo editing?',
            level: 3,
            option1: 'To adjust the color saturation of the image',
            option2: 'To lighten (dodge) or darken (burn) specific areas of the image for enhanced highlights and shadows',
            option3: 'To sharpen the image and reduce noise',
            option4: 'To apply a blur to specific areas of the image',
            correctAnswer: 2,
            explanation: 'The Dodge and Burn technique is used to selectively lighten or darken areas of the image, enhancing highlights and shadows for more depth and contrast.'
          }
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
            question: 'What is the primary purpose of a hook in the opening of a story?',
            level: 2,
            option1: 'To introduce the main characters',
            option2: 'To create suspense and draw the reader in',
            option3: 'To describe the setting in detail',
            option4: 'To provide the resolution to the story',
            correctAnswer: 2,
            explanation: 'A hook is designed to capture the reader’s attention right from the beginning by creating suspense, intrigue, or curiosity.'
          },
          {
            id: 2,
            question: 'Which of the following is an example of "show, don’t tell" in writing?',
            level: 3,
            option1: 'She was very sad.',
            option2: 'Her eyes filled with tears, and she stared at the ground, her shoulders slumping.',
            option3: 'He was extremely tired.',
            option4: 'The room was dark and cold.',
            correctAnswer: 2,
            explanation: '“Show, don’t tell” means describing actions and emotions in detail, allowing readers to experience the feelings rather than simply stating them.'
          },
          {
            id: 3,
            question: 'What does "point of view" in creative writing refer to?',
            level: 2,
            option1: 'The main message or theme of the story',
            option2: 'The character’s emotional journey throughout the story',
            option3: 'The narrator’s perspective or position in the story',
            option4: 'The setting where the story takes place',
            correctAnswer: 3,
            explanation: 'Point of view refers to the perspective from which a story is told, such as first-person, third-person, or omniscient.'
          },
          {
            id: 4,
            question: 'What is a "conflict" in a story?',
            level: 2,
            option1: 'The resolution at the end of the story',
            option2: 'The central problem or challenge the characters face',
            option3: 'The story’s plot twist',
            option4: 'The setting or environment in which the story takes place',
            correctAnswer: 2,
            explanation: 'Conflict is the main problem or struggle the characters must face, which drives the narrative forward and engages readers.'
          },
          {
            id: 5,
            question: 'What is the role of dialogue in creative writing?',
            level: 3,
            option1: 'To describe the setting in detail',
            option2: 'To reveal character traits, advance the plot, and create tension',
            option3: 'To give background information about the setting',
            option4: 'To explain the theme of the story',
            correctAnswer: 2,
            explanation: 'Dialogue helps to develop characters, move the story forward, and create a sense of realism by revealing characters’ thoughts and emotions.'
          },
          {
            id: 6,
            question: 'Which of the following is a characteristic of a well-developed character?',
            level: 3,
            option1: 'They remain static and unchanging throughout the story',
            option2: 'They have clear goals, motivations, and obstacles to overcome',
            option3: 'They do not interact with other characters',
            option4: 'They are described only by their appearance',
            correctAnswer: 2,
            explanation: 'Well-developed characters have depth, including clear motivations, goals, and challenges that help them grow throughout the story.'
          },
          {
            id: 7,
            question: 'What is the difference between a "protagonist" and an "antagonist" in a story?',
            level: 2,
            option1: 'The protagonist is the main character, while the antagonist is the character or force that opposes them',
            option2: 'The protagonist is the villain, while the antagonist is the hero',
            option3: 'The protagonist is the sidekick, while the antagonist is the main character',
            option4: 'There is no difference between protagonist and antagonist',
            correctAnswer: 1,
            explanation: 'The protagonist is the main character who drives the story, while the antagonist is the character or force that creates conflict or opposition.'
          },
          {
            id: 8,
            question: 'What is "theme" in a story?',
            level: 3,
            option1: 'The physical environment in which the story occurs',
            option2: 'The underlying message or central idea the writer is exploring',
            option3: 'The plot of the story',
            option4: 'The sequence of events in the story',
            correctAnswer: 2,
            explanation: 'Theme is the central message, idea, or moral the writer explores in the story, often dealing with universal issues like love, identity, or conflict.'
          },
          {
            id: 9,
            question: 'What does "foreshadowing" mean in creative writing?',
            level: 4,
            option1: 'The resolution of the conflict at the end of the story',
            option2: 'The use of hints or clues to suggest events that will happen later in the story',
            option3: 'A sudden change in the direction of the plot',
            option4: 'The introduction of a subplot in the middle of the story',
            correctAnswer: 2,
            explanation: 'Foreshadowing involves giving subtle hints or clues about events that will unfold later in the story, creating anticipation and suspense.'
          },
          {
            id: 10,
            question: 'What is the "climax" of a story?',
            level: 4,
            option1: 'The introduction of the main character',
            option2: 'The turning point or most intense moment of conflict in the story',
            option3: 'The resolution of the conflict at the end of the story',
            option4: 'The setting where the story takes place',
            correctAnswer: 2,
            explanation: 'The climax is the pivotal moment in the story where the conflict reaches its highest point and the outcome of the story is determined.'
          }
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
            question: 'What is the primary function of carbohydrates in the body?',
            level: 2,
            option1: 'To provide energy for bodily functions and physical activity',
            option2: 'To build and repair tissues',
            option3: 'To regulate body temperature',
            option4: 'To store excess energy as fat',
            correctAnswer: 1,
            explanation: 'Carbohydrates are the body’s primary source of energy, providing fuel for physical activity and essential functions.'
          },
          {
            id: 2,
            question: 'Which of the following is a source of complete protein?',
            level: 3,
            option1: 'Rice',
            option2: 'Chicken breast',
            option3: 'Spinach',
            option4: 'Lentils',
            correctAnswer: 2,
            explanation: 'Complete proteins contain all nine essential amino acids, and animal products like chicken breast are a good source of complete protein.'
          },
          {
            id: 3,
            question: 'What is the role of fats in the body?',
            level: 2,
            option1: 'To provide quick energy',
            option2: 'To protect internal organs and store energy',
            option3: 'To promote muscle growth',
            option4: 'To regulate blood sugar levels',
            correctAnswer: 2,
            explanation: 'Fats are essential for protecting organs, providing long-term energy storage, and supporting cell function.'
          },
          {
            id: 4,
            question: 'Which vitamin is primarily responsible for supporting immune function?',
            level: 3,
            option1: 'Vitamin A',
            option2: 'Vitamin C',
            option3: 'Vitamin D',
            option4: 'Vitamin K',
            correctAnswer: 2,
            explanation: 'Vitamin C plays a crucial role in supporting the immune system and promoting healing and tissue repair.'
          },
          {
            id: 5,
            question: 'Which of the following is a good source of dietary fiber?',
            level: 2,
            option1: 'Chicken breast',
            option2: 'Apple',
            option3: 'Olive oil',
            option4: 'Eggs',
            correctAnswer: 2,
            explanation: 'Fruits like apples are a great source of dietary fiber, which aids in digestion and helps regulate blood sugar levels.'
          },
          {
            id: 6,
            question: 'What is the primary source of calcium in the diet?',
            level: 2,
            option1: 'Beef',
            option2: 'Dairy products',
            option3: 'Citrus fruits',
            option4: 'Fish',
            correctAnswer: 2,
            explanation: 'Dairy products like milk, cheese, and yogurt are rich in calcium, which is essential for bone health and muscle function.'
          },
          {
            id: 7,
            question: 'What does the term "empty calories" refer to?',
            level: 3,
            option1: 'Foods that provide essential nutrients but are low in calories',
            option2: 'Foods high in nutrients and low in sugar',
            option3: 'Foods that provide calories but are low in nutrients',
            option4: 'Foods that are low in calories and high in protein',
            correctAnswer: 3,
            explanation: '"Empty calories" refer to foods that are high in calories but provide little to no nutritional value, such as sugary drinks or processed snacks.'
          },
          {
            id: 8,
            question: 'Which mineral is important for oxygen transport in the blood?',
            level: 3,
            option1: 'Magnesium',
            option2: 'Calcium',
            option3: 'Iron',
            option4: 'Potassium',
            correctAnswer: 3,
            explanation: 'Iron is a key component of hemoglobin, the protein in red blood cells that carries oxygen throughout the body.'
          },
          {
            id: 9,
            question: 'What is the recommended daily intake of water for most adults?',
            level: 2,
            option1: '2 cups',
            option2: '4 cups',
            option3: '8 cups',
            option4: '12 cups',
            correctAnswer: 3,
            explanation: 'It’s generally recommended that adults drink around 8 cups (64 ounces) of water a day to stay properly hydrated.'
          },
          {
            id: 10,
            question: 'What is the main function of antioxidants in the body?',
            level: 4,
            option1: 'To regulate the body’s sugar levels',
            option2: 'To support the immune system',
            option3: 'To protect cells from oxidative stress and damage',
            option4: 'To aid in digestion and nutrient absorption',
            correctAnswer: 3,
            explanation: 'Antioxidants help protect the body’s cells from damage caused by free radicals, which can contribute to aging and chronic diseases.'
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
            question: 'Which of the following is the best approach for creating a personalized diet plan?',
            level: 4,
            option1: 'A one-size-fits-all diet plan based on general recommendations',
            option2: 'A diet plan tailored to an individual’s goals, preferences, and health conditions',
            option3: 'A diet focused solely on calorie reduction',
            option4: 'A diet that excludes all carbohydrates and fats',
            correctAnswer: 2,
            explanation: 'A personalized diet plan considers an individual’s specific health needs, activity levels, and goals, ensuring better long-term success.'
          },
          {
            id: 2,
            question: 'What is the primary benefit of a low-carb diet for weight management?',
            level: 3,
            option1: 'It decreases muscle mass while promoting fat loss',
            option2: 'It increases insulin sensitivity and reduces overall calorie intake',
            option3: 'It boosts metabolism significantly',
            option4: 'It improves digestion and nutrient absorption',
            correctAnswer: 2,
            explanation: 'A low-carb diet can help reduce insulin levels and control hunger, leading to a reduction in overall calorie intake, which may support weight loss.'
          },
          {
            id: 3,
            question: 'What is the main advantage of intermittent fasting for weight loss?',
            level: 4,
            option1: 'It accelerates fat loss by decreasing calorie intake without focusing on food types',
            option2: 'It increases muscle mass while promoting fat loss',
            option3: 'It improves gut health significantly',
            option4: 'It boosts the metabolism permanently',
            correctAnswer: 1,
            explanation: 'Intermittent fasting works by creating an eating window that naturally reduces the total calorie intake, helping with weight loss without focusing on food types.'
          },
          {
            id: 4,
            question: 'What is the role of macronutrient cycling in an advanced diet plan?',
            level: 4,
            option1: 'To maintain constant energy levels throughout the day',
            option2: 'To prevent muscle loss and promote fat loss by adjusting protein, fat, and carbohydrate intake',
            option3: 'To reduce the risk of chronic diseases',
            option4: 'To keep meal preparation easier and quicker',
            correctAnswer: 2,
            explanation: 'Macronutrient cycling adjusts the intake of proteins, fats, and carbs based on training intensity or goals, helping optimize body composition and metabolism.'
          },
          {
            id: 5,
            question: 'What is the concept of "nutrient timing" in advanced diet planning?',
            level: 3,
            option1: 'Eating at specific times to optimize the absorption of nutrients and enhance performance',
            option2: 'Avoiding meals after 6 PM to improve digestion',
            option3: 'Consuming all calories in one meal for maximum energy',
            option4: 'Focusing on high-protein meals for all meals of the day',
            correctAnswer: 1,
            explanation: 'Nutrient timing involves consuming specific nutrients at optimal times to support muscle recovery, fat loss, and overall performance.'
          },
          {
            id: 6,
            question: 'Which nutrient is the most important for muscle recovery after intense physical activity?',
            level: 3,
            option1: 'Fats',
            option2: 'Proteins',
            option3: 'Carbohydrates',
            option4: 'Vitamins',
            correctAnswer: 2,
            explanation: 'Proteins provide the essential amino acids necessary for muscle repair and recovery after intense physical activity.'
          },
          {
            id: 7,
            question: 'What is the purpose of including "healthy fats" in an advanced diet plan?',
            level: 3,
            option1: 'To support hormone production, brain function, and absorption of fat-soluble vitamins',
            option2: 'To provide quick energy for endurance activities',
            option3: 'To replace all carbohydrates in the diet',
            option4: 'To reduce overall calorie intake by avoiding processed foods',
            correctAnswer: 1,
            explanation: 'Healthy fats, such as omega-3s and monounsaturated fats, play vital roles in hormone production, brain health, and nutrient absorption.'
          },
          {
            id: 8,
            question: 'What is the impact of a high-protein diet in advanced diet planning for athletes?',
            level: 4,
            option1: 'It prevents dehydration during training',
            option2: 'It increases energy expenditure significantly',
            option3: 'It supports muscle growth, recovery, and fat loss',
            option4: 'It enhances endurance by boosting carbohydrate stores',
            correctAnswer: 3,
            explanation: 'A high-protein diet helps athletes build and repair muscle, support recovery, and maintain lean body mass while promoting fat loss.'
          },
          {
            id: 9,
            question: 'Which type of fat should be minimized in a healthy, advanced diet plan?',
            level: 3,
            option1: 'Trans fats',
            option2: 'Monounsaturated fats',
            option3: 'Polyunsaturated fats',
            option4: 'Omega-3 fatty acids',
            correctAnswer: 1,
            explanation: 'Trans fats are artificially created fats that can increase the risk of heart disease and should be minimized or avoided in an advanced diet plan.'
          },
          {
            id: 10,
            question: 'What is the role of hydration in advanced diet planning?',
            level: 4,
            option1: 'Hydration is irrelevant to diet planning and performance',
            option2: 'Hydration is critical for maintaining muscle function, energy levels, and overall health',
            option3: 'Hydration is only important during exercise',
            option4: 'Hydration is necessary only in hot climates or during physical exertion',
            correctAnswer: 2,
            explanation: 'Proper hydration supports muscle function, enhances endurance, improves recovery, and is essential for overall health, especially during intense training or dietary regimens.'
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
            question: 'Which cooking method helps retain the most nutrients in vegetables?',
            level: 2,
            option1: 'Boiling',
            option2: 'Steaming',
            option3: 'Frying',
            option4: 'Grilling',
            correctAnswer: 2,
            explanation: 'Steaming helps preserve vitamins and minerals in vegetables, as it uses less water and heat compared to boiling.'
          },
          {
            id: 2,
            question: 'What is a healthy fat to use for cooking?',
            level: 3,
            option1: 'Butter',
            option2: 'Vegetable oil',
            option3: 'Olive oil',
            option4: 'Coconut oil',
            correctAnswer: 3,
            explanation: 'Olive oil is rich in monounsaturated fats, which are heart-healthy and stable at low to medium heat.'
          },
          {
            id: 3,
            question: 'Which of the following is a healthier alternative to refined sugar in cooking?',
            level: 2,
            option1: 'Honey',
            option2: 'Agave syrup',
            option3: 'Stevia',
            option4: 'High fructose corn syrup',
            correctAnswer: 3,
            explanation: 'Stevia is a natural sweetener with little to no calories, making it a healthier alternative to refined sugars.'
          },
          {
            id: 4,
            question: 'What is the benefit of using whole grains instead of refined grains?',
            level: 3,
            option1: 'Whole grains are less flavorful but more affordable',
            option2: 'Whole grains contain more fiber, vitamins, and minerals',
            option3: 'Whole grains are higher in calories',
            option4: 'Whole grains cook faster',
            correctAnswer: 2,
            explanation: 'Whole grains contain more fiber and essential nutrients, which support digestion, heart health, and overall wellness.'
          },
          {
            id: 5,
            question: 'What is the best way to cook fish to preserve its nutrients?',
            level: 2,
            option1: 'Grilling',
            option2: 'Deep frying',
            option3: 'Baking or steaming',
            option4: 'Microwaving',
            correctAnswer: 3,
            explanation: 'Baking or steaming fish is a gentle method that helps preserve its nutrients while avoiding excess fat from frying.'
          },
          {
            id: 6,
            question: 'Which of the following is a benefit of using herbs and spices in cooking?',
            level: 3,
            option1: 'They add flavor without adding extra calories or salt',
            option2: 'They make dishes less flavorful but more visually appealing',
            option3: 'They increase the calorie content of meals',
            option4: 'They reduce the overall shelf life of foods',
            correctAnswer: 1,
            explanation: 'Herbs and spices provide flavor and health benefits without the need for excess calories, sodium, or sugar.'
          },
          {
            id: 7,
            question: 'What is the healthiest way to prepare a vegetable stir-fry?',
            level: 3,
            option1: 'Using a lot of oil for frying',
            option2: 'Using a small amount of healthy oil and adding lean protein',
            option3: 'Using butter and adding sugar for flavor',
            option4: 'Stir-frying in a non-stick pan with no oil',
            correctAnswer: 2,
            explanation: 'A small amount of healthy oil, such as olive oil, combined with lean protein like chicken or tofu, creates a balanced and healthy stir-fry.'
          },
          {
            id: 8,
            question: 'Which of the following is a healthy substitute for butter in baking?',
            level: 3,
            option1: 'Margarine',
            option2: 'Coconut oil',
            option3: 'Vegetable shortening',
            option4: 'Applesauce',
            correctAnswer: 4,
            explanation: 'Applesauce can be used as a lower-fat substitute for butter in baking, helping reduce calories while maintaining moisture.'
          },
          {
            id: 9,
            question: 'Why is it important to avoid overcooking vegetables?',
            level: 2,
            option1: 'Overcooking vegetables enhances their flavor',
            option2: 'Overcooking vegetables leads to nutrient loss and a change in texture',
            option3: 'Overcooking vegetables makes them easier to digest',
            option4: 'Overcooking vegetables increases their fiber content',
            correctAnswer: 2,
            explanation: 'Overcooking vegetables can result in the loss of essential vitamins and minerals, while also negatively affecting their texture.'
          },
          {
            id: 10,
            question: 'Which of the following is a healthy way to make a salad dressing?',
            level: 2,
            option1: 'Using only mayonnaise and sugar',
            option2: 'Combining olive oil, lemon juice, and herbs',
            option3: 'Using store-bought dressings with added preservatives',
            option4: 'Using sour cream and ranch mix',
            correctAnswer: 2,
            explanation: 'A healthy salad dressing can be made by combining olive oil with fresh lemon juice and herbs, providing healthy fats and flavor without excess sugar or preservatives.'
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
            question: 'What is the primary benefit of regular aerobic exercise?',
            level: 2,
            option1: 'Building muscle mass',
            option2: 'Improving cardiovascular health',
            option3: 'Increasing bone density',
            option4: 'Enhancing flexibility',
            correctAnswer: 2,
            explanation: 'Aerobic exercise strengthens the heart and lungs, improving cardiovascular health and endurance.'
          },
          {
            id: 2,
            question: 'Which of the following is a recommended guideline for beginners starting strength training?',
            level: 3,
            option1: 'Perform high-intensity training every day',
            option2: 'Start with light weights and focus on proper form',
            option3: 'Avoid stretching before workouts',
            option4: 'Focus on cardio rather than strength exercises',
            correctAnswer: 2,
            explanation: 'Beginners should start with light weights to learn proper technique and avoid injury.'
          },
          {
            id: 3,
            question: 'What is the primary purpose of stretching before a workout?',
            level: 2,
            option1: 'To reduce muscle mass',
            option2: 'To improve flexibility and prevent injury',
            option3: 'To increase heart rate rapidly',
            option4: 'To burn fat faster',
            correctAnswer: 2,
            explanation: 'Stretching before a workout helps to improve flexibility and range of motion, reducing the risk of injury.'
          },
          {
            id: 4,
            question: 'Which of the following exercises primarily targets the chest muscles?',
            level: 3,
            option1: 'Squats',
            option2: 'Push-ups',
            option3: 'Lunges',
            option4: 'Deadlifts',
            correctAnswer: 2,
            explanation: 'Push-ups are an effective bodyweight exercise that primarily target the chest muscles, along with the shoulders and triceps.'
          },
          {
            id: 5,
            question: 'How often should a beginner engage in strength training to see progress?',
            level: 2,
            option1: 'Every day for 2 hours',
            option2: '2-3 times a week with rest days in between',
            option3: 'Once a week for 30 minutes',
            option4: 'Once a month',
            correctAnswer: 2,
            explanation: 'Strength training 2-3 times per week allows muscles to recover between sessions, promoting muscle growth and progress.'
          },
          {
            id: 6,
            question: 'Which of the following is a benefit of strength training?',
            level: 3,
            option1: 'Increased flexibility only',
            option2: 'Improved cardiovascular health only',
            option3: 'Increased muscle mass and strength',
            option4: 'Improved posture but no muscle growth',
            correctAnswer: 3,
            explanation: 'Strength training helps build muscle mass and increases overall strength, enhancing physical performance and metabolism.'
          },
          {
            id: 7,
            question: 'What is the main benefit of incorporating high-intensity interval training (HIIT) into a fitness regimen?',
            level: 4,
            option1: 'Increased endurance without much effort',
            option2: 'Maximizing fat burning in a short period',
            option3: 'Building large amounts of muscle mass quickly',
            option4: 'Improving balance and flexibility',
            correctAnswer: 2,
            explanation: 'HIIT maximizes fat burning by alternating between short bursts of intense activity and rest, improving cardiovascular health and boosting metabolism.'
          },
          {
            id: 8,
            question: 'Which of the following exercises is best for improving core strength?',
            level: 3,
            option1: 'Running',
            option2: 'Planks',
            option3: 'Cycling',
            option4: 'Leg curls',
            correctAnswer: 2,
            explanation: 'Planks engage the core muscles, improving stability and strength in the abdomen, lower back, and hips.'
          },
          {
            id: 9,
            question: 'What is a proper way to increase the intensity of your workout?',
            level: 3,
            option1: 'Skipping warm-ups and starting with maximum weights',
            option2: 'Gradually increasing weights or repetitions over time',
            option3: 'Exercising at a comfortable pace for long durations',
            option4: 'Performing exercises too quickly to feel fatigued',
            correctAnswer: 2,
            explanation: 'To safely increase intensity, gradually raise the weights or repetitions, allowing the body to adapt and avoid injury.'
          },
          {
            id: 10,
            question: 'Which of the following is the most important factor in achieving fitness goals?',
            level: 4,
            option1: 'Doing the same workout every day',
            option2: 'Consistent exercise, proper nutrition, and rest',
            option3: 'Performing exercises with the heaviest weights possible',
            option4: 'Avoiding any form of cardio',
            correctAnswer: 2,
            explanation: 'Fitness goals are best achieved through a balanced approach that includes regular exercise, proper nutrition, and adequate rest for recovery.'
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
            question: 'What is the primary benefit of strength training?',
            level: 3,
            option1: 'Improved flexibility',
            option2: 'Increased muscle mass and strength',
            option3: 'Better cardiovascular health',
            option4: 'Enhanced endurance',
            correctAnswer: 2,
            explanation: 'Strength training helps build muscle mass, improve strength, and increase metabolic rate.'
          },
          {
            id: 2,
            question: 'Which of the following is the best rep range for building muscle mass?',
            level: 4,
            option1: '1-3 reps',
            option2: '4-6 reps',
            option3: '8-12 reps',
            option4: '15-20 reps',
            correctAnswer: 3,
            explanation: 'A rep range of 8-12 reps is commonly used for hypertrophy (muscle growth).'
          },
          {
            id: 3,
            question: 'What is progressive overload in strength training?',
            level: 4,
            option1: 'Increasing the amount of rest between sets',
            option2: 'Gradually increasing the intensity or volume of exercises over time',
            option3: 'Increasing the number of exercises in your routine',
            option4: 'Focusing on only one muscle group per session',
            correctAnswer: 2,
            explanation: 'Progressive overload refers to gradually increasing the weight, reps, or sets to challenge muscles and stimulate growth.'
          },
          {
            id: 4,
            question: 'Which of the following exercises primarily targets the quadriceps?',
            level: 3,
            option1: 'Deadlift',
            option2: 'Squat',
            option3: 'Pull-up',
            option4: 'Bench press',
            correctAnswer: 2,
            explanation: 'Squats are one of the most effective exercises for targeting the quadriceps and lower body muscles.'
          },
          {
            id: 5,
            question: 'What is the proper form for performing a deadlift?',
            level: 4,
            option1: 'Keep your back straight, bend at the hips, and lift with your legs',
            option2: 'Round your back and pull with your arms',
            option3: 'Bend only at the knees and keep your back upright',
            option4: 'Push your hips forward, arch your back, and lift with your knees',
            correctAnswer: 1,
            explanation: 'Proper form for deadlifts involves keeping a neutral spine, hinging at the hips, and driving through your legs.'
          },
          {
            id: 6,
            question: 'Which of the following is an example of a compound exercise?',
            level: 3,
            option1: 'Bicep curl',
            option2: 'Leg extension',
            option3: 'Squat',
            option4: 'Tricep kickback',
            correctAnswer: 3,
            explanation: 'Compound exercises like squats engage multiple muscle groups, providing a more efficient workout than isolation exercises.'
          },
          {
            id: 7,
            question: 'How much rest should you typically take between sets for strength training?',
            level: 2,
            option1: '30-45 seconds',
            option2: '1-2 minutes',
            option3: '3-5 minutes',
            option4: 'No rest between sets',
            correctAnswer: 2,
            explanation: 'For strength training, 1-2 minutes of rest between sets is generally recommended for muscle recovery and optimal performance.'
          },
          {
            id: 8,
            question: 'Which of the following exercises targets the back and biceps?',
            level: 3,
            option1: 'Bench press',
            option2: 'Deadlift',
            option3: 'Pull-up',
            option4: 'Lunges',
            correctAnswer: 3,
            explanation: 'Pull-ups are an excellent bodyweight exercise that targets the back and biceps.'
          },
          {
            id: 9,
            question: 'What should be the focus of the first phase of strength training for beginners?',
            level: 2,
            option1: 'Maximal weight lifting with few reps',
            option2: 'Learning proper form and technique',
            option3: 'Maximal muscle fatigue in every set',
            option4: 'High-intensity training every day',
            correctAnswer: 2,
            explanation: 'For beginners, the focus should be on learning proper form and technique to avoid injury and build a solid foundation for progression.'
          },
          {
            id: 10,
            question: 'How can you avoid injury while performing strength training?',
            level: 4,
            option1: 'Lift the heaviest weight possible on the first day',
            option2: 'Perform each movement with proper form and avoid using excessive weight',
            option3: 'Skip warm-ups and start with heavy sets',
            option4: 'Perform exercises too quickly to feel fatigued',
            correctAnswer: 2,
            explanation: 'Using proper form, gradually increasing weights, and warming up before strength training can help prevent injuries.'
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
            question: 'What is the primary benefit of cardiovascular exercise?',
            level: 2,
            option1: 'Increased muscle mass',
            option2: 'Improved heart and lung function',
            option3: 'Improved flexibility',
            option4: 'Increased strength',
            correctAnswer: 2,
            explanation: 'Cardiovascular exercise improves the function of the heart and lungs, increasing endurance and overall health.'
          },
          {
            id: 2,
            question: 'Which of the following is considered a moderate-intensity cardio exercise?',
            level: 3,
            option1: 'Running at 7 mph',
            option2: 'Swimming laps at a fast pace',
            option3: 'Brisk walking',
            option4: 'Sprint intervals',
            correctAnswer: 3,
            explanation: 'Brisk walking is a moderate-intensity exercise that increases the heart rate while being less strenuous than running or sprinting.'
          },
          {
            id: 3,
            question: 'How long should you ideally perform cardio exercises for weight loss?',
            level: 3,
            option1: '10-15 minutes per session',
            option2: '20-30 minutes per session',
            option3: '40-60 minutes per session',
            option4: 'Over 1 hour per session',
            correctAnswer: 3,
            explanation: 'For weight loss, 40-60 minutes of moderate cardio can be effective in burning calories and improving fitness.'
          },
          {
            id: 4,
            question: 'Which of the following exercises is best for improving cardiovascular endurance?',
            level: 2,
            option1: 'Squats',
            option2: 'Jump rope',
            option3: 'Lunges',
            option4: 'Deadlifts',
            correctAnswer: 2,
            explanation: 'Jump rope is a high-intensity cardio exercise that significantly improves cardiovascular endurance.'
          },
          {
            id: 5,
            question: 'What is the recommended frequency for cardio workouts to maintain heart health?',
            level: 2,
            option1: 'Once a week',
            option2: '3-5 times per week',
            option3: 'Every day for 2 hours',
            option4: 'Twice a month',
            correctAnswer: 2,
            explanation: 'For optimal heart health, it is recommended to engage in moderate cardio exercise 3-5 times per week.'
          },
          {
            id: 6,
            question: 'Which of the following activities would be considered a high-intensity interval training (HIIT) exercise?',
            level: 4,
            option1: 'Walking on a treadmill at a steady pace',
            option2: 'Running sprints followed by rest periods',
            option3: 'Yoga flow',
            option4: 'Slow-paced cycling',
            correctAnswer: 2,
            explanation: 'HIIT involves alternating between intense bursts of activity and rest periods, such as sprinting followed by walking or resting.'
          },
          {
            id: 7,
            question: 'Which is the best way to monitor your cardiovascular intensity during a workout?',
            level: 3,
            option1: 'Counting your steps per minute',
            option2: 'Measuring your heart rate',
            option3: 'Checking the amount of sweat',
            option4: 'Measuring the time spent on a machine',
            correctAnswer: 2,
            explanation: 'Monitoring your heart rate helps gauge the intensity of your cardio workout and ensures you are working within your target zone.'
          },
          {
            id: 8,
            question: 'Which of the following is a benefit of doing steady-state cardio?',
            level: 3,
            option1: 'Increased muscle size',
            option2: 'Improved aerobic capacity and endurance',
            option3: 'Increased strength and power',
            option4: 'Improved balance and coordination',
            correctAnswer: 2,
            explanation: 'Steady-state cardio, performed at a consistent moderate pace, improves aerobic capacity and endurance.'
          },
          {
            id: 9,
            question: 'How does cardio exercise help with weight management?',
            level: 3,
            option1: 'It builds muscle mass which burns more calories at rest',
            option2: 'It burns calories during the workout and can help create a calorie deficit',
            option3: 'It decreases appetite, reducing food intake',
            option4: 'It promotes fat storage after workouts',
            correctAnswer: 2,
            explanation: 'Cardio exercise helps burn calories, contributing to a calorie deficit, which is essential for weight loss or maintenance.'
          },
          {
            id: 10,
            question: 'What is the best type of cardio exercise for beginners?',
            level: 2,
            option1: 'Running at high speed',
            option2: 'Jumping jacks',
            option3: 'Brisk walking or light cycling',
            option4: 'Swimming at a fast pace',
            correctAnswer: 3,
            explanation: 'For beginners, low-impact, moderate-intensity activities like brisk walking or light cycling are a good starting point.'
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
