using api.Interfaces;
using api.Models;
using api.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

namespace api.Controllers
{
    [Route("api/portfolio")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly IPortfolioRepository _portfolioRepository;
        private readonly UserManager<AppUser> _userManager;

        public PortfolioController(IPortfolioRepository portfolioRepository, UserManager<AppUser> userManager)
        {
            _portfolioRepository = portfolioRepository;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserPortfolio()
        {
            var username = User.GetUsername();
            var user = await _userManager.FindByNameAsync(username);

            var portfolio = await _portfolioRepository.GetUserPortfolio(user);

            return Ok(portfolio);
        }

        [HttpDelete("{symbol}")]
        public async Task<IActionResult> Delete(string symbol)
        {
            var username = User.GetUsername();
            var user = await _userManager.FindByNameAsync(username);

            var result = await _portfolioRepository.DeleteAsync(user, symbol);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}