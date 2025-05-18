using System.ComponentModel.DataAnnotations;

namespace LearningManagementSystem.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "FirstName is required")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "LastName is required")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        public string Password { get; set; }
        public string ConfirmPassword { get; set; }

        public bool AgreeTerms { get; set; }

        public ICollection<UserCourse> EnrolledCourses { get; set; }

        public List<UserQuizAttempt> QuizAttempts { get; set; }

        public List<UserAssignmentSubmission> UploadedAssignments { get; set; }
        [Required(ErrorMessage = "Role is required.")]
        public string Role { get; set; }
    }

    public class UserQuizAttempt
    {
        public int Id { get; set; }
        public int QuizId { get; set; }
        public int UserId { get; set; }

        public string SelectedOption { get; set; }

        public bool IsCorrect { get; set; }
        public int Score { get; set; }

        public User User { get; set; }
        public QuizQuestion Quiz { get; set; }
    }

    public class UserAssignmentSubmission
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public string CourseTitle { get; set; }
        public string ModuleTitle { get; set; }
        public string AssignmentId { get; set; }

        public string SubmittedFilePath { get; set; }

        public string SubmissionDate { get; set; }

        public User User { get; set; }
    }

    public class UserCourse
    {
        public int Id { get; set; }
        public string CourseTitle { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }


}
