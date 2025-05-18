using System.Xml;
using Microsoft.EntityFrameworkCore;

namespace LearningManagementSystem.Models
{
    public class LearningManagementContext: DbContext
    {
        public LearningManagementContext(DbContextOptions options): base(options) { }

        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<AssignmentQuestion> AssignmentQuestions { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseDetails> CourseDetails { get; set; }
        public DbSet<QuizQuestion> QuizQuestions { get; set; }
        public DbSet<Subcategory> Subcategories { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<UserQuizAttempt> UserQuizAttempts { get; set; }
        public DbSet<UserAssignmentSubmission> UserAssignmentSubmissions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserCourse>()
               .HasOne(uc => uc.User)
               .WithMany(u => u.EnrolledCourses)
               .HasForeignKey(uc => uc.UserId);

            modelBuilder.Entity<UserQuizAttempt>()
                .HasOne(uqa => uqa.User)
                .WithMany(u => u.QuizAttempts)
                .HasForeignKey(uqa => uqa.UserId);

            modelBuilder.Entity<UserQuizAttempt>()
                .HasOne(uqa => uqa.Quiz)
                .WithMany()
                .HasForeignKey(uqa => uqa.QuizId);

            modelBuilder.Entity<UserAssignmentSubmission>()
                .HasOne(uas => uas.User)
                .WithMany(u => u.UploadedAssignments)
                .HasForeignKey(uas => uas.UserId);



            modelBuilder.Entity<Course>().HasKey(opt => opt.Title);

            modelBuilder.Entity<Course>().HasData(
                new Course { Id = 1, Title = "HTML & CSS Basics", CourseCategory = "web-development", Duration = "4 Weeks", Level = "Beginner" , Rating = 4, Image = "web-development/1681327776406.png" },
                new Course { Id = 2, Title = "JavaScript Mastery", CourseCategory = "web-development", Duration = "8 Weeks", Level = "Intermediate", Rating = 4.5, Image = "web-development/cover.jpg" },
                new Course { Id = 3, Title = "Advanced React", CourseCategory = "web-development", Duration = "10 Weeks", Level = "Advanced", Rating = 4.7, Image = "web-development/eba1c4863eb1a6576514ccf2b138f6f5b53871e9.png" },

                new Course { Id = 1, Title = "React Native for Beginners", CourseCategory = "mobile-development", Duration = "6 Weeks", Level = "Beginner", Rating = 4.0, Image = "mobile-development/cover-cold-dive-into-react-native-a-beginners-tutorial.png" },
                new Course { Id = 2, Title = "Advanced Android Development", CourseCategory = "mobile-development", Duration = "12 Weeks", Level = "Advanced", Rating = 4.7, Image = "mobile-development/717429608c93_.png" },
                new Course { Id = 3, Title = "iOS App Development", CourseCategory = "mobile-development", Duration = "8 Weeks", Level = "Intermediate", Rating = 4.3, Image = "mobile-development/65f85396b33db_ios.app.development.1920.1080.png" },

                new Course { Id = 1, Title = "Intro to Machine Learning", CourseCategory = "ai-ml", Duration = "5 Weeks", Level = "Beginner", Rating = 4.2, Image = "ai-ml/Blog-What-is-NLP.jpg" },
                new Course { Id = 2, Title = "Deep Learning with TensorFlow", CourseCategory = "ai-ml", Duration = "10 Weeks", Level = "Advanced", Rating = 4.8, Image = "ai-ml/maxresdefault.jpg" },
                new Course { Id = 3, Title = "Natural Language Processing", CourseCategory = "ai-ml", Duration = "7 Weeks", Level = "Intermediate", Rating = 4.5, Image = "ai-ml/Blog-What-is-NLP.jpg" },

                new Course { Id = 1, Title = "Digital Marketing Fundamentals", CourseCategory = "marketing", Duration = "4 Weeks", Level = "Beginner", Rating = 4.2, Image = "marketing/54-1.png" },
                new Course { Id = 2, Title = "SEO Mastery", CourseCategory = "marketing", Duration = "6 Weeks", Level = "Intermediate", Rating = 4.6, Image = "marketing/SEO-Career-in-Chandigarh.webp" },
                new Course { Id = 3, Title = "Advanced Content Marketing", CourseCategory = "marketing", Duration = "8 Weeks", Level = "Advanced", Rating = 4.8, Image = "marketing/advanced-content-marketing.jpg" },

                new Course { Id= 1, Title= "Photoshop Essentials", CourseCategory = "graphic-design", Level= "Beginner", Duration= "4 Weeks", Rating= 4.3, Image= "graphic-design/22qHomepageFeatureBox-PS-ES-ARP18.jpg" },
                new Course { Id= 2, Title= "Advanced Illustrator", CourseCategory = "graphic-design", Level= "Advanced", Duration= "8 Weeks", Rating= 4.6, Image= "graphic-design/maxresdefault.jpg" },
                new Course { Id= 3, Title= "UI/UX Design Basics", CourseCategory = "graphic-design", Level= "Intermediate", Duration= "6 Weeks", Rating= 4.5, Image= "graphic-design/effective_ways_to_learn_ui_ux_design.webp" },

                new Course { Id= 1, Title= "Basic Photography Techniques", CourseCategory = "photography", Level= "Beginner", Duration= "4 Weeks", Rating= 4.2, Image= "photography/basic.png" },
                new Course { Id= 2, Title= "Advanced Portrait Photography", CourseCategory = "photography", Level= "Advanced", Duration= "8 Weeks", Rating= 4.7, Image= "photography/portrait.png" },
                new Course { Id= 3, Title= "Photo Editing Mastery", CourseCategory = "photography", Level= "Intermediate", Duration= "6 Weeks", Rating= 4.4, Image= "photography/editing.png" },

                new Course { Id= 1, Title= "Creative Writing Basics", CourseCategory = "creative-writing", Level= "Beginner", Duration= "4 Weeks", Rating= 4.3, Image= "creative-writing/basics.png" },
                new Course { Id= 2, Title= "Advanced Storytelling", CourseCategory = "creative-writing", Level= "Advanced", Duration= "8 Weeks", Rating= 4.8, Image= "creative-writing/storytelling.png" },
                new Course { Id= 3, Title= "Poetry Writing Mastery", CourseCategory = "creative-writing", Level= "Intermediate", Duration= "6 Weeks", Rating= 4.5, Image= "creative-writing/poetry.png" },

                new Course { Id= 1, Title= "Basic Nutrition Guide", CourseCategory = "nutrition", Level= "Beginner", Duration= "4 Weeks", Rating= 4.2, Image= "nutrition/guide.png" },
                new Course { Id= 2, Title= "Advanced Diet Planning", CourseCategory = "nutrition", Level= "Advanced", Duration= "8 Weeks", Rating= 4.7, Image= "nutrition/diet.png" },
                new Course { Id= 3, Title= "Healthy Cooking", CourseCategory = "nutrition", Level= "Intermediate", Duration= "6 Weeks", Rating= 4.4, Image= "nutrition/cooking.png" },

                new Course { Id= 1, Title= "Fitness Fundamentals",CourseCategory = "fitness", Level= "Beginner", Duration= "4 Weeks", Rating= 4.3, Image= "fitness/fundamentals.png" },
                new Course { Id= 2, Title= "Strength Training", CourseCategory = "fitness", Level= "Advanced", Duration= "8 Weeks", Rating= 4.7, Image= "fitness/strength.png" },
                new Course { Id= 3, Title= "Cardio Workouts", CourseCategory = "fitness", Level= "Intermediate", Duration= "6 Weeks", Rating= 4.4, Image= "fitness/cardio.png" }
            
            );

            modelBuilder.Entity<CourseDetails>().HasData(
                new CourseDetails
                {
                    CourseId = 1,
                    CourseCategory = "web-development",
                    Title = "HTML & CSS Basics",
                    NumOfModules = 3,
                    ModulesTitle = new List<string> { "HTML Tags", "CSS Selectors", "CSS Media Queries" },
                    VideoTutorials = new List<string> { "https://youtu.be/K_EVuLegRZ0?si=FcUzrP3WTwv4BhZV", "https://youtu.be/l1mER1bV0N0?si=VaFAy7EqdX0B5lXv", "https://youtu.be/n9yI6fjkrfE?si=eLHobSG25-N-i3rD" }
                },
                new CourseDetails
                {
                    CourseId = 2,
                    CourseCategory = "web-development",
                    Title = "JavaScript Mastery",
                    NumOfModules = 4,
                    ModulesTitle = new List<string> { "JavaScript Fundamentals", "DOM Manipulation", "Asynchronous JavaScript", "Modern JS Features" },
                    VideoTutorials = new List<string> { "https://youtu.be/hdI2bqOjy3c?si=QdN82-7HZIXu9ILP", "https://youtu.be/W6NZfCO5SIk?si=_qH7BHQrTwCjSbKA", "https://youtu.be/PkZNo7MFNFg?si=UeOQkG3MqnUAFxfJ", "https://youtu.be/Qqx_wzMmFeA?si=sDKWM-MmjS8MHpBp" }
                },
                new CourseDetails
                {
                    CourseId = 3,
                    CourseCategory = "web-development",
                    Title = "Advanced React",
                    NumOfModules = 5,
                    ModulesTitle = new List<string> { "React Hooks", "State Management", "Performance Optimization", "Testing React Apps", "Advanced Patterns" },
                    VideoTutorials = new List<string> { "https://youtu.be/w7ejDZ8SWv8?si=LVGzFoA-IITk0gBP", "https://youtu.be/4UZrsTqkcW4?si=Vp5lYUCjPGBPQF34", "https://youtu.be/bMknfKXIFA8?si=2Y9ZnQQkLQ1wT8Gj", "https://youtu.be/a_7Z7C_JCyo?si=vGOdFF-aEpCl-G9X", "https://youtu.be/Ke90Tje7VS0?si=ZAiLKmPaXQx2_e7n" }
                }
            );

            modelBuilder.Entity<QuizQuestion>().HasData(
               new QuizQuestion
               {
                   Id = 1,
                   CourseTitle = "HTML & CSS Basics",
                   Question = "What does HTML stand for?",
                   Level = 1,
                   Option1 = "Hyper Text Markup Language",
                   Option2 = "High Text Markup Language",
                   Option3 = "Hyper Tabular Markup Language",
                   Option4 = "None of the above",
                   CorrectAnswer = 1,
                   Explanation = "HTML stands for Hyper Text Markup Language."
               },
               new QuizQuestion
               {
                   Id = 2,
                   CourseTitle = "HTML & CSS Basics",
                   Question = "Which CSS property is used to change the text color?",
                   Level = 1,
                   Option1 = "font-style",
                   Option2 = "color",
                   Option3 = "text-color",
                   Option4 = "background-color",
                   CorrectAnswer = 2,
                   Explanation = "The 'color' property in CSS is used to change the text color."
               },
               new QuizQuestion
               {
                   Id = 3,
                   CourseTitle = "JavaScript Mastery",
                   Question = "Which of the following is NOT a JavaScript data type?",
                   Level = 1,
                   Option1 = "Undefined",
                   Option2 = "Number",
                   Option3 = "Boolean",
                   Option4 = "Character",
                   CorrectAnswer = 4,
                   Explanation = "JavaScript does not have a 'Character' data type."
               },
               new QuizQuestion
               {
                   Id = 4,
                   CourseTitle = "JavaScript Mastery",
                   Question = "How do you create a function in JavaScript?",
                   Level = 1,
                   Option1 = "function = myFunction()",
                   Option2 = "function myFunction()",
                   Option3 = "function:myFunction()",
                   Option4 = "create function myFunction()",
                   CorrectAnswer = 2,
                   Explanation = "The correct way to define a function is: function myFunction()"
               },
               new QuizQuestion
               {
                   Id = 5,
                   CourseTitle = "Advanced React",
                   Question = "What hook is used to manage state in a functional component?",
                   Level = 1,
                   Option1 = "useEffect",
                   Option2 = "useState",
                   Option3 = "useContext",
                   Option4 = "useReducer",
                   CorrectAnswer = 2,
                   Explanation = "useState is the hook used to manage state."
               },
               new QuizQuestion
               {
                   Id = 6,
                   CourseTitle = "Advanced React",
                   Question = "What is the purpose of React's useEffect hook?",
                   Level = 2,
                   Option1 = "To perform side effects in components",
                   Option2 = "To create components",
                   Option3 = "To update state",
                   Option4 = "To handle events",
                   CorrectAnswer = 1,
                   Explanation = "useEffect is used to perform side effects such as data fetching or subscriptions."
               }
           );
            
            // Seed UserCourses
            modelBuilder.Entity<UserCourse>().HasData(
                new UserCourse { Id = 1, UserId = 1, CourseTitle = "HTML & CSS Basics" },
                new UserCourse { Id = 2, UserId = 1, CourseTitle = "JavaScript Mastery" }
            );


            // Seeding UserQuizAttempts
            modelBuilder.Entity<UserQuizAttempt>().HasData(
                new UserQuizAttempt
                {
                    Id = 1,
                    UserId = 1,
                    QuizId = 1,
                    SelectedOption = "2",
                    IsCorrect = true,
                    Score = 1
                },
                new UserQuizAttempt
                {
                    Id = 2,
                    UserId = 1,
                    QuizId = 2,
                    SelectedOption = "3",
                    IsCorrect = true,
                    Score = 1
                },
                new UserQuizAttempt
                {
                    Id = 3,
                    UserId = 2,
                    QuizId = 1,
                    SelectedOption = "1",
                    IsCorrect = false,
                    Score = 0
                }
            );

            // Seeding UserAssignmentSubmissions
            modelBuilder.Entity<UserAssignmentSubmission>().HasData(
                new UserAssignmentSubmission
                {
                    Id = 1,
                    UserId = 1,
                    CourseTitle = "HTML & CSS Basics",
                    ModuleTitle = "HTML Tags",
                    AssignmentId = "A1",
                    SubmittedFilePath = "/uploads/alice_assignment1.html",
                    SubmissionDate = "2025-05-18"
                },
                new UserAssignmentSubmission
                {
                    Id = 2,
                    UserId = 2,
                    CourseTitle = "Advanced React",
                    ModuleTitle = "React Hooks",
                    AssignmentId = "A2",
                    SubmittedFilePath = "/uploads/bob_assignment2.js",
                    SubmissionDate = "2025-05-17"
                }
            );


            modelBuilder.Entity<User>().HasData(
                new
                {
                    Id = 1,
                    FirstName = "Alice",
                    LastName = "Johnson",
                    Email = "alice@example.com",
                    Password = "password123",
                    ConfirmPassword = "password123",
                    AgreeTerms = true,
                    Role = "student"
                },
                new
                {
                    Id = 2,
                    FirstName = "Bob",
                    LastName = "Smith",
                    Email = "bob@example.com",
                    Password = "password456",
                    ConfirmPassword = "password456",
                    AgreeTerms = true,
                    Role = "student"
                },
                new
                {
                    Id = 3,
                    FirstName = "John",
                    LastName = "Doe",
                    Email = "jd@example.com",
                    Password = "johnDoe12",
                    ConfirmPassword = "johnDoe12",
                    AgreeTerms = true,
                    Role = "admin"
                }
            );

        }

    }
}
