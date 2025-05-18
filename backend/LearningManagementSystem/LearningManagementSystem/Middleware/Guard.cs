using System.IdentityModel.Tokens.Jwt;

namespace LearningManagementSystem.Middleware
{
    public class ClaimsToBodyMiddleware
    {
        public readonly RequestDelegate _next;
        private readonly IConfiguration _config;
        public ClaimsToBodyMiddleware(IConfiguration config, RequestDelegate request)
        {
            _config = config;
            _next = request;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            if (context.Request.Headers.ContainsKey("Authorization"))
            {
                var auth = context.Request.Headers["Authorization"].ToString();
                if(auth.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase))
                {
                    var token = auth.Substring("Bearer ".Length).Trim();
                    var handler = new JwtSecurityTokenHandler();

                    if (handler.CanReadToken(token))
                    {
                        var authToken = handler.ReadJwtToken(token);
                        var obj = authToken.Claims.ToDictionary(c => c.Type, c => c.Value);

                        if (obj.ContainsKey("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"))
                        {
                            var result = obj["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
                            context.Response.Headers.Add("email", result);
                        }

                        if (obj.ContainsKey("http://schemas.microsoft.com/ws/2008/06/identity/claims/role"))
                        {
                            var result = obj["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                            context.Response.Headers.Add("role", result);
                        }

                    }

                }

            }
            await _next(context);
        }

    }
}
