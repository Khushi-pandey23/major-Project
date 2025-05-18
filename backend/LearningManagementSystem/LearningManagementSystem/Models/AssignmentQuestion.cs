using System.ComponentModel.DataAnnotations;

namespace LearningManagementSystem.Models
{
    public class AssignmentQuestion
    {
        [Key]
        public int AssignmentId { get; set; }
        public string Question { get; set; }
    }
}
