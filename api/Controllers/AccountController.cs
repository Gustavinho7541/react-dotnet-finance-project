using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
       private readonly UserManager<AppUser> _userManager
       private readonly ITokenService _tokenService;
       private readonly SignInManager<AppUser>_signinManager;
       public AccountController(UserManager<AppUser> userManager, ITokenService tokenService, SignInManager<AppUser>)
       {
         _userManager = userManager;
         _tokenService = tokenService;
       }

       [HttpPost("login")]
       public async Task<IActionResult> Login(LoginDto LoginDto)
       {
         if(!ModelState.IsValid)
            return BadRequest(ModelState);
         var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());

         if (user === null) return Unauthorized("Invalid Username!");

         var result = await _signinManager.CheckPasswordsSignInAsync(user, loginDto.Password, false);

         if(!result.Succeeded) return Unauthorized("Username and/or password not found");

         return Ok(
            new NewUserDto
            {
                UserName = user.UserName
                Email = user.Email,
                Token = _tokenService.CreateToken
            }
         )
       }

       [HttpPost("register")]
       public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
       {
         try 
         {
           if (!ModelState.IsValid)
           return BadRequest(ModelState);

           var Appuser = new AppUser
           {
             UserName = registerDto.Username,
             Email = registerDto.Email
           };

           var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);

           if (createdUser.Succeeded)
           {
             var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
             if (roleResult.Succeeded)
             {
                return Ok(
                    new NewUserDto
                    {
                        Username = appUser.UserName,
                        Email = appUser.Email,
                        Token = _tokenService.CreateToken(user)
                    }
                );
             } 
             else
             {
                return StatusCode(500, roleResult.Errors);
             } 
           }
           else
           {
              return StatusCode(500, createdUser.Errors);
           }
         } 
         catch (Exception e)
         {
           return StatusCode(500, e);
         }
       }
    }
}


// dotnet ef migrations addSeedRole