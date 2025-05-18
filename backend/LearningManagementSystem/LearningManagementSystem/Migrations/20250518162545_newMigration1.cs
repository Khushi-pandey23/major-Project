using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace LearningManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class newMigration1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Courses",
                table: "Courses");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 1, "Basic Nutrition Guide" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 1, "Basic Photography Techniques" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 1, "Creative Writing Basics" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 1, "Digital Marketing Fundamentals" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 1, "Fitness Fundamentals" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 1, "HTML & CSS Basics" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 1, "Intro to Machine Learning" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 1, "Photoshop Essentials" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 1, "React Native for Beginners" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 2, "Advanced Android Development" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 2, "Advanced Diet Planning" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 2, "Advanced Illustrator" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 2, "Advanced Portrait Photography" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 2, "Advanced Storytelling" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 2, "Deep Learning with TensorFlow" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 2, "JavaScript Mastery" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 2, "SEO Mastery" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 2, "Strength Training" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 3, "Advanced Content Marketing" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 3, "Advanced React" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 3, "Cardio Workouts" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 3, "Healthy Cooking" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 3, "iOS App Development" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 3, "Natural Language Processing" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 3, "Photo Editing Mastery" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 3, "Poetry Writing Mastery" });

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumns: new[] { "Id", "Title" },
                keyValues: new object[] { 3, "UI/UX Design Basics" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Courses",
                table: "Courses",
                column: "Title");

            migrationBuilder.InsertData(
                table: "Courses",
                columns: new[] { "Title", "CourseCategory", "Duration", "Id", "Image", "Level", "Rating" },
                values: new object[,]
                {
                    { "Advanced Android Development", "mobile-development", "12 Weeks", 2, "mobile-development/717429608c93_.png", "Advanced", 4.7000000000000002 },
                    { "Advanced Content Marketing", "marketing", "8 Weeks", 3, "marketing/advanced-content-marketing.jpg", "Advanced", 4.7999999999999998 },
                    { "Advanced Diet Planning", "nutrition", "8 Weeks", 2, "nutrition/diet.png", "Advanced", 4.7000000000000002 },
                    { "Advanced Illustrator", "graphic-design", "8 Weeks", 2, "graphic-design/maxresdefault.jpg", "Advanced", 4.5999999999999996 },
                    { "Advanced Portrait Photography", "photography", "8 Weeks", 2, "photography/portrait.png", "Advanced", 4.7000000000000002 },
                    { "Advanced React", "web-development", "10 Weeks", 3, "web-development/eba1c4863eb1a6576514ccf2b138f6f5b53871e9.png", "Advanced", 4.7000000000000002 },
                    { "Advanced Storytelling", "creative-writing", "8 Weeks", 2, "creative-writing/storytelling.png", "Advanced", 4.7999999999999998 },
                    { "Basic Nutrition Guide", "nutrition", "4 Weeks", 1, "nutrition/guide.png", "Beginner", 4.2000000000000002 },
                    { "Basic Photography Techniques", "photography", "4 Weeks", 1, "photography/basic.png", "Beginner", 4.2000000000000002 },
                    { "Cardio Workouts", "fitness", "6 Weeks", 3, "fitness/cardio.png", "Intermediate", 4.4000000000000004 },
                    { "Creative Writing Basics", "creative-writing", "4 Weeks", 1, "creative-writing/basics.png", "Beginner", 4.2999999999999998 },
                    { "Deep Learning with TensorFlow", "ai-ml", "10 Weeks", 2, "ai-ml/maxresdefault.jpg", "Advanced", 4.7999999999999998 },
                    { "Digital Marketing Fundamentals", "marketing", "4 Weeks", 1, "marketing/54-1.png", "Beginner", 4.2000000000000002 },
                    { "Fitness Fundamentals", "fitness", "4 Weeks", 1, "fitness/fundamentals.png", "Beginner", 4.2999999999999998 },
                    { "Healthy Cooking", "nutrition", "6 Weeks", 3, "nutrition/cooking.png", "Intermediate", 4.4000000000000004 },
                    { "HTML & CSS Basics", "web-development", "4 Weeks", 1, "web-development/1681327776406.png", "Beginner", 4.0 },
                    { "Intro to Machine Learning", "ai-ml", "5 Weeks", 1, "ai-ml/Blog-What-is-NLP.jpg", "Beginner", 4.2000000000000002 },
                    { "iOS App Development", "mobile-development", "8 Weeks", 3, "mobile-development/65f85396b33db_ios.app.development.1920.1080.png", "Intermediate", 4.2999999999999998 },
                    { "JavaScript Mastery", "web-development", "8 Weeks", 2, "web-development/cover.jpg", "Intermediate", 4.5 },
                    { "Natural Language Processing", "ai-ml", "7 Weeks", 3, "ai-ml/Blog-What-is-NLP.jpg", "Intermediate", 4.5 },
                    { "Photo Editing Mastery", "photography", "6 Weeks", 3, "photography/editing.png", "Intermediate", 4.4000000000000004 },
                    { "Photoshop Essentials", "graphic-design", "4 Weeks", 1, "graphic-design/22qHomepageFeatureBox-PS-ES-ARP18.jpg", "Beginner", 4.2999999999999998 },
                    { "Poetry Writing Mastery", "creative-writing", "6 Weeks", 3, "creative-writing/poetry.png", "Intermediate", 4.5 },
                    { "React Native for Beginners", "mobile-development", "6 Weeks", 1, "mobile-development/cover-cold-dive-into-react-native-a-beginners-tutorial.png", "Beginner", 4.0 },
                    { "SEO Mastery", "marketing", "6 Weeks", 2, "marketing/SEO-Career-in-Chandigarh.webp", "Intermediate", 4.5999999999999996 },
                    { "Strength Training", "fitness", "8 Weeks", 2, "fitness/strength.png", "Advanced", 4.7000000000000002 },
                    { "UI/UX Design Basics", "graphic-design", "6 Weeks", 3, "graphic-design/effective_ways_to_learn_ui_ux_design.webp", "Intermediate", 4.5 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Courses",
                table: "Courses");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Advanced Android Development");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Advanced Content Marketing");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Advanced Diet Planning");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Advanced Illustrator");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Advanced Portrait Photography");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Advanced React");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Advanced Storytelling");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Basic Nutrition Guide");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Basic Photography Techniques");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Cardio Workouts");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Creative Writing Basics");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Deep Learning with TensorFlow");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Digital Marketing Fundamentals");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Fitness Fundamentals");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Healthy Cooking");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "HTML & CSS Basics");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Intro to Machine Learning");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "iOS App Development");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "JavaScript Mastery");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Natural Language Processing");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Photo Editing Mastery");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Photoshop Essentials");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Poetry Writing Mastery");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "React Native for Beginners");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "SEO Mastery");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "Strength Training");

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Title",
                keyValue: "UI/UX Design Basics");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Courses",
                table: "Courses",
                columns: new[] { "Id", "Title" });

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
        }
    }
}
