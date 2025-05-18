namespace LearningManagementSystem.Models
{
    public class QuizQuestion
    {
        public int Id { get; set; }
        public string CourseTitle { get; set; }
        public string Question { get; set; }
        public int Level { get; set; }
        public string Option1 { get; set; }
        public string Option2 { get; set; }
        public string Option3 { get; set; }
        public string Option4 { get; set; }
        public int CorrectAnswer { get; set; }
        public string Explanation { get; set; }
    }
}
