using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace LearningManagementSystem.Services
{
    public class JWTTokenService
    {
        private readonly IConfiguration _config;
        public JWTTokenService(IConfiguration config)
        {
            _config = config;
        }

        public string GenerateJWTToken(string email, string role)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Email, email),
                new Claim(ClaimTypes.Role, role)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                signingCredentials: creds,
                claims: claims,
                audience: _config["Jwt:Audience"],
                expires: DateTime.Now.AddMinutes(60)
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
