using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LearningManagementSystem.Models;
using Microsoft.AspNetCore.Authorization;

namespace LearningManagementSystem.Controllers
{
    [Route("api/courses")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly LearningManagementContext _context;

        public CoursesController(LearningManagementContext context)
        {
            _context = context;
        }

        // GET: api/Courses
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            return await _context.Courses.ToListAsync();
        }

        
    }
}
