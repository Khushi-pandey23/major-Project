using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace LearningManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "CourseDetails",
                columns: table => new
                {
                    Title = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CourseId = table.Column<int>(type: "int", nullable: false),
                    CourseCategory = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumOfModules = table.Column<int>(type: "int", nullable: false),
                    ModulesTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VideoTutorials = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseDetails", x => x.Title);
                });

            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CourseCategory = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Level = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Duration = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<double>(type: "float", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => new { x.Id, x.Title });
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConfirmPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AgreeTerms = table.Column<bool>(type: "bit", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Subcategories",
                columns: table => new
                {
                    SubcategoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SubcategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CoursesCount = table.Column<int>(type: "int", nullable: false),
                    Link = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Icon = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryName = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subcategories", x => x.SubcategoryId);
                    table.ForeignKey(
                        name: "FK_Subcategories_Categories_CategoryName",
                        column: x => x.CategoryName,
                        principalTable: "Categories",
                        principalColumn: "Name");
                });

            migrationBuilder.CreateTable(
                name: "Assignments",
                columns: table => new
                {
                    ModuleTitle = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CourseDetailsTitle = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Assignments", x => x.ModuleTitle);
                    table.ForeignKey(
                        name: "FK_Assignments_CourseDetails_CourseDetailsTitle",
                        column: x => x.CourseDetailsTitle,
                        principalTable: "CourseDetails",
                        principalColumn: "Title");
                });

            migrationBuilder.CreateTable(
                name: "QuizQuestions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Question = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Level = table.Column<int>(type: "int", nullable: false),
                    Option1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Option2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Option3 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Option4 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CorrectAnswer = table.Column<int>(type: "int", nullable: false),
                    Explanation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseDetailsTitle = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuizQuestions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_QuizQuestions_CourseDetails_CourseDetailsTitle",
                        column: x => x.CourseDetailsTitle,
                        principalTable: "CourseDetails",
                        principalColumn: "Title");
                });

            migrationBuilder.CreateTable(
                name: "UserAssignmentSubmissions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    CourseTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ModuleTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AssignmentId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SubmittedFilePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SubmissionDate = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserAssignmentSubmissions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserAssignmentSubmissions_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserCourse",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserCourse", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserCourse_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AssignmentQuestions",
                columns: table => new
                {
                    AssignmentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Question = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AssignmentModuleTitle = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AssignmentQuestions", x => x.AssignmentId);
                    table.ForeignKey(
                        name: "FK_AssignmentQuestions_Assignments_AssignmentModuleTitle",
                        column: x => x.AssignmentModuleTitle,
                        principalTable: "Assignments",
                        principalColumn: "ModuleTitle");
                });

            migrationBuilder.CreateTable(
                name: "UserQuizAttempts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QuizId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    SelectedOption = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsCorrect = table.Column<bool>(type: "bit", nullable: false),
                    Score = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserQuizAttempts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserQuizAttempts_QuizQuestions_QuizId",
                        column: x => x.QuizId,
                        principalTable: "QuizQuestions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserQuizAttempts_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "CourseDetails",
                columns: new[] { "Title", "CourseCategory", "CourseId", "ModulesTitle", "NumOfModules", "VideoTutorials" },
                values: new object[,]
                {
                    { "Advanced React", "web-development", 3, "[\"React Hooks\",\"State Management\",\"Performance Optimization\",\"Testing React Apps\",\"Advanced Patterns\"]", 5, "[\"https://youtu.be/w7ejDZ8SWv8?si=LVGzFoA-IITk0gBP\",\"https://youtu.be/4UZrsTqkcW4?si=Vp5lYUCjPGBPQF34\",\"https://youtu.be/bMknfKXIFA8?si=2Y9ZnQQkLQ1wT8Gj\",\"https://youtu.be/a_7Z7C_JCyo?si=vGOdFF-aEpCl-G9X\",\"https://youtu.be/Ke90Tje7VS0?si=ZAiLKmPaXQx2_e7n\"]" },
                    { "HTML & CSS Basics", "web-development", 1, "[\"HTML Tags\",\"CSS Selectors\",\"CSS Media Queries\"]", 3, "[\"https://youtu.be/K_EVuLegRZ0?si=FcUzrP3WTwv4BhZV\",\"https://youtu.be/l1mER1bV0N0?si=VaFAy7EqdX0B5lXv\",\"https://youtu.be/n9yI6fjkrfE?si=eLHobSG25-N-i3rD\"]" },
                    { "JavaScript Mastery", "web-development", 2, "[\"JavaScript Fundamentals\",\"DOM Manipulation\",\"Asynchronous JavaScript\",\"Modern JS Features\"]", 4, "[\"https://youtu.be/hdI2bqOjy3c?si=QdN82-7HZIXu9ILP\",\"https://youtu.be/W6NZfCO5SIk?si=_qH7BHQrTwCjSbKA\",\"https://youtu.be/PkZNo7MFNFg?si=UeOQkG3MqnUAFxfJ\",\"https://youtu.be/Qqx_wzMmFeA?si=sDKWM-MmjS8MHpBp\"]" }
                });

            migrationBuilder.InsertData(
                table: "Courses",
                columns: new[] { "Id", "Title", "CourseCategory", "Duration", "Image", "Level", "Rating" },
                values: new object[,]
                {
                    { 1, "Basic Nutrition Guide", "nutrition", "4 Weeks", "nutrition/guide.png", "Beginner", 4.2000000000000002 },
                    { 1, "Basic Photography Techniques", "photography", "4 Weeks", "photography/basic.png", "Beginner", 4.2000000000000002 },
                    { 1, "Creative Writing Basics", "creative-writing", "4 Weeks", "creative-writing/basics.png", "Beginner", 4.2999999999999998 },
                    { 1, "Digital Marketing Fundamentals", "marketing", "4 Weeks", "marketing/54-1.png", "Beginner", 4.2000000000000002 },
                    { 1, "Fitness Fundamentals", "fitness", "4 Weeks", "fitness/fundamentals.png", "Beginner", 4.2999999999999998 },
                    { 1, "HTML & CSS Basics", "web-development", "4 Weeks", "web-development/1681327776406.png", "Beginner", 4.0 },
                    { 1, "Intro to Machine Learning", "ai-ml", "5 Weeks", "ai-ml/Blog-What-is-NLP.jpg", "Beginner", 4.2000000000000002 },
                    { 1, "Photoshop Essentials", "graphic-design", "4 Weeks", "graphic-design/22qHomepageFeatureBox-PS-ES-ARP18.jpg", "Beginner", 4.2999999999999998 },
                    { 1, "React Native for Beginners", "mobile-development", "6 Weeks", "mobile-development/cover-cold-dive-into-react-native-a-beginners-tutorial.png", "Beginner", 4.0 },
                    { 2, "Advanced Android Development", "mobile-development", "12 Weeks", "mobile-development/717429608c93_.png", "Advanced", 4.7000000000000002 },
                    { 2, "Advanced Diet Planning", "nutrition", "8 Weeks", "nutrition/diet.png", "Advanced", 4.7000000000000002 },
                    { 2, "Advanced Illustrator", "graphic-design", "8 Weeks", "graphic-design/maxresdefault.jpg", "Advanced", 4.5999999999999996 },
                    { 2, "Advanced Portrait Photography", "photography", "8 Weeks", "photography/portrait.png", "Advanced", 4.7000000000000002 },
                    { 2, "Advanced Storytelling", "creative-writing", "8 Weeks", "creative-writing/storytelling.png", "Advanced", 4.7999999999999998 },
                    { 2, "Deep Learning with TensorFlow", "ai-ml", "10 Weeks", "ai-ml/maxresdefault.jpg", "Advanced", 4.7999999999999998 },
                    { 2, "JavaScript Mastery", "web-development", "8 Weeks", "web-development/cover.jpg", "Intermediate", 4.5 },
                    { 2, "SEO Mastery", "marketing", "6 Weeks", "marketing/SEO-Career-in-Chandigarh.webp", "Intermediate", 4.5999999999999996 },
                    { 2, "Strength Training", "fitness", "8 Weeks", "fitness/strength.png", "Advanced", 4.7000000000000002 },
                    { 3, "Advanced Content Marketing", "marketing", "8 Weeks", "marketing/advanced-content-marketing.jpg", "Advanced", 4.7999999999999998 },
                    { 3, "Advanced React", "web-development", "10 Weeks", "web-development/eba1c4863eb1a6576514ccf2b138f6f5b53871e9.png", "Advanced", 4.7000000000000002 },
                    { 3, "Cardio Workouts", "fitness", "6 Weeks", "fitness/cardio.png", "Intermediate", 4.4000000000000004 },
                    { 3, "Healthy Cooking", "nutrition", "6 Weeks", "nutrition/cooking.png", "Intermediate", 4.4000000000000004 },
                    { 3, "iOS App Development", "mobile-development", "8 Weeks", "mobile-development/65f85396b33db_ios.app.development.1920.1080.png", "Intermediate", 4.2999999999999998 },
                    { 3, "Natural Language Processing", "ai-ml", "7 Weeks", "ai-ml/Blog-What-is-NLP.jpg", "Intermediate", 4.5 },
                    { 3, "Photo Editing Mastery", "photography", "6 Weeks", "photography/editing.png", "Intermediate", 4.4000000000000004 },
                    { 3, "Poetry Writing Mastery", "creative-writing", "6 Weeks", "creative-writing/poetry.png", "Intermediate", 4.5 },
                    { 3, "UI/UX Design Basics", "graphic-design", "6 Weeks", "graphic-design/effective_ways_to_learn_ui_ux_design.webp", "Intermediate", 4.5 }
                });

            migrationBuilder.InsertData(
                table: "QuizQuestions",
                columns: new[] { "Id", "CorrectAnswer", "CourseDetailsTitle", "CourseTitle", "Explanation", "Level", "Option1", "Option2", "Option3", "Option4", "Question" },
                values: new object[,]
                {
                    { 1, 1, null, "HTML & CSS Basics", "HTML stands for Hyper Text Markup Language.", 1, "Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of the above", "What does HTML stand for?" },
                    { 2, 2, null, "HTML & CSS Basics", "The 'color' property in CSS is used to change the text color.", 1, "font-style", "color", "text-color", "background-color", "Which CSS property is used to change the text color?" },
                    { 3, 4, null, "JavaScript Mastery", "JavaScript does not have a 'Character' data type.", 1, "Undefined", "Number", "Boolean", "Character", "Which of the following is NOT a JavaScript data type?" },
                    { 4, 2, null, "JavaScript Mastery", "The correct way to define a function is: function myFunction()", 1, "function = myFunction()", "function myFunction()", "function:myFunction()", "create function myFunction()", "How do you create a function in JavaScript?" },
                    { 5, 2, null, "Advanced React", "useState is the hook used to manage state.", 1, "useEffect", "useState", "useContext", "useReducer", "What hook is used to manage state in a functional component?" },
                    { 6, 1, null, "Advanced React", "useEffect is used to perform side effects such as data fetching or subscriptions.", 2, "To perform side effects in components", "To create components", "To update state", "To handle events", "What is the purpose of React's useEffect hook?" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AgreeTerms", "ConfirmPassword", "Email", "FirstName", "LastName", "Password", "Role" },
                values: new object[,]
                {
                    { 1, true, "password123", "alice@example.com", "Alice", "Johnson", "password123", "student" },
                    { 2, true, "password456", "bob@example.com", "Bob", "Smith", "password456", "student" },
                    { 3, true, "johnDoe12", "jd@example.com", "John", "Doe", "johnDoe12", "admin" }
                });

            migrationBuilder.InsertData(
                table: "UserAssignmentSubmissions",
                columns: new[] { "Id", "AssignmentId", "CourseTitle", "ModuleTitle", "SubmissionDate", "SubmittedFilePath", "UserId" },
                values: new object[,]
                {
                    { 1, "A1", "HTML & CSS Basics", "HTML Tags", "2025-05-18", "/uploads/alice_assignment1.html", 1 },
                    { 2, "A2", "Advanced React", "React Hooks", "2025-05-17", "/uploads/bob_assignment2.js", 2 }
                });

            migrationBuilder.InsertData(
                table: "UserCourse",
                columns: new[] { "Id", "CourseTitle", "UserId" },
                values: new object[,]
                {
                    { 1, "HTML & CSS Basics", 1 },
                    { 2, "JavaScript Mastery", 1 }
                });

            migrationBuilder.InsertData(
                table: "UserQuizAttempts",
                columns: new[] { "Id", "IsCorrect", "QuizId", "Score", "SelectedOption", "UserId" },
                values: new object[,]
                {
                    { 1, true, 1, 1, "2", 1 },
                    { 2, true, 2, 1, "3", 1 },
                    { 3, false, 1, 0, "1", 2 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AssignmentQuestions_AssignmentModuleTitle",
                table: "AssignmentQuestions",
                column: "AssignmentModuleTitle");

            migrationBuilder.CreateIndex(
                name: "IX_Assignments_CourseDetailsTitle",
                table: "Assignments",
                column: "CourseDetailsTitle");

            migrationBuilder.CreateIndex(
                name: "IX_QuizQuestions_CourseDetailsTitle",
                table: "QuizQuestions",
                column: "CourseDetailsTitle");

            migrationBuilder.CreateIndex(
                name: "IX_Subcategories_CategoryName",
                table: "Subcategories",
                column: "CategoryName");

            migrationBuilder.CreateIndex(
                name: "IX_UserAssignmentSubmissions_UserId",
                table: "UserAssignmentSubmissions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserCourse_UserId",
                table: "UserCourse",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserQuizAttempts_QuizId",
                table: "UserQuizAttempts",
                column: "QuizId");

            migrationBuilder.CreateIndex(
                name: "IX_UserQuizAttempts_UserId",
                table: "UserQuizAttempts",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AssignmentQuestions");

            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Subcategories");

            migrationBuilder.DropTable(
                name: "UserAssignmentSubmissions");

            migrationBuilder.DropTable(
                name: "UserCourse");

            migrationBuilder.DropTable(
                name: "UserQuizAttempts");

            migrationBuilder.DropTable(
                name: "Assignments");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "QuizQuestions");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "CourseDetails");
        }
    }
}
