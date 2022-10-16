using AdminSite.Framework;
using AdminSite.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AdminSite.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IJWTManagerRepository _jWTManager;

        public AccountController(IJWTManagerRepository jWTManager)
        {
            _jWTManager = jWTManager;
        }
        [HttpPost]
        public IActionResult Login(Login login)
        {
            if(login.Email == "admin@admin.com" && login.Password == "admin")
            {
                var user = new User
                {
                    Id = 1,
                    Email = login.Email,
                    Password = login.Password,
                    Firstname = "Admin",
                    Lastname = "Admin",
                    Username = "Admin",
                    UserRoleId = 1
                };

                var token = _jWTManager.Authenticate(user);

                user.Token = token.Token;
               
                return Ok(new { status = StatusCodes.Status200OK, obj = user });
            }
            return Ok(new { status = StatusCodes.Status401Unauthorized, obj = "Email or Password is not correct." });
        }

        private string GenerateJwtToken(User user)
        {
            // generate token that is valid for 2 hours
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("APPApiKeyForTokenGeneration2099");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString())
                        , new Claim("firstname", user.Firstname)
                        , new Claim("lastname", user.Lastname)
                        , new Claim("email", user.Email)
                        , new Claim("isActive", "true")
                        , new Claim("userRoleId", user.UserRoleId.ToString())
                        , new Claim("userRole", "Admin")
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
