using System.ComponentModel.DataAnnotations;

namespace LearningManagementSystem.Models
{
    public class Assignment
    {
        [Key]
        public string ModuleTitle { get; set; }

        public List<AssignmentQuestion> Assignments { get; set; }
    }
}
