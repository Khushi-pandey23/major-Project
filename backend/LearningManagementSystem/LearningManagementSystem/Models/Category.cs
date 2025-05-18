using System.ComponentModel.DataAnnotations;

namespace LearningManagementSystem.Models
{
    public class Category
    {
        [Key]
        public string Name { get; set; }

        public List<Subcategory> Subcategories { get; set; }
    }
}
