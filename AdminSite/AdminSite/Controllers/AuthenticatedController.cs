using AdminSite.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AdminSite.Controllers
{
    [Authorize]
    [ApiController]
    public class AuthenticatedController : ControllerBase
    {

    }
}
