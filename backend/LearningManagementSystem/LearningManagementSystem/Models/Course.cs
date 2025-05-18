using System.ComponentModel.DataAnnotations;

namespace LearningManagementSystem.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string CourseCategory { get; set; }
        [Key]
        public string Title { get; set; }
        public string Level { get; set; }
        public string Duration { get; set; }
        public double Rating { get; set; }
        public string Image { get; set; }
    }
}
