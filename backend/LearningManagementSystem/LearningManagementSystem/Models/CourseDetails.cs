using System.ComponentModel.DataAnnotations;

namespace LearningManagementSystem.Models
{
    public class CourseDetails
    {
        [Key]
        public string Title { get; set; }
        public int CourseId { get; set; }
        public string CourseCategory { get; set; }
        public int NumOfModules { get; set; }
        public List<string> ModulesTitle { get; set; }
        public List<string> VideoTutorials { get; set; }
        public List<Assignment> Assignments { get; set; }
        public List<QuizQuestion> Quiz {  get; set; }
    }
}
