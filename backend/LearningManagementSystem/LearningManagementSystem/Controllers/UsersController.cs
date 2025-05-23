﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LearningManagementSystem.Models;
using Microsoft.AspNetCore.Authorization;
using LearningManagementSystem.DTO;
using LearningManagementSystem.Services;

namespace LearningManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly LearningManagementContext _context;
        private readonly JWTTokenService _jwtService;

        public UsersController(LearningManagementContext context, JWTTokenService service)
        {
            _context = context;
            _jwtService = service;
        }

        // GET: api/Users
        //[Authorize(Roles = "admin")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("register")]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            if (!ModelState.IsValid || user.Password != user.ConfirmPassword)
            {
                return BadRequest(); 
            }
            if(_context.Users.Where(u => u.Email == user.Email).Any())
            {
                return Conflict("User with this email already exists");
            }
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDTO login)
        {
            if (ModelState.IsValid)
            {
                var obj = _context.Users.Where(user => (user.Email == login.Email) && (user.Password == login.Password)).FirstOrDefault();
                if (obj != default(User))
                {
                    var jwt = _jwtService.GenerateJWTToken(login.Email, obj.Role);
                    var responseObj = new
                    {
                        message = "User Logged In Successfully!!",
                        data = jwt
                    };
                    return Ok(responseObj);
                }
                return Unauthorized("Invalid credentials");
            }
            return BadRequest();
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
