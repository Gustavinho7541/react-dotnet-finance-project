using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


namespace api.Controllers
{
    [Route("api/portfolio")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IStockRepository _stockRepo;
        private readonly IPortfolioRepository _portfolioRepo;

        public PortfolioController (UserManager<AppUser> userManager, 
        IStockRepository stockRepo, IPortfolioRepository portfolioRepo)
        {
             _userManager = userManager;
             _stockRepo = stockRepo;
             _portfolioRepo = portfolioRepo;
        }   

        [HttpGet]
        [Authorize]

        public async Task<IActionResult> GetUserPortfolio()
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            var userPortfolio = await _portfolioRepo.GetUserPortfolio (appUser);
            return ok(userPortfolio);
        }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> AddPortfolio(string symbol)
    {
        var username = User.GetUsername();
        var appUser = await _userManager.FindByNameAsync(username);
        var userPortfolio = await _portfolioRepo.GetUserPortfolio(symbol);

        var filteredStock = await userPortfolio.Where(s => s.Symbol.ToLower() == symbol.ToLower()).ToListAsync();

        if(filteredStock.Count() == 1) 
        {
            await _portfolioRepo.DeletePortfolio(appUser, Symbol);
        }

        else 
        {
            return BadRequest("Stock not found in portfolio");
        }

        return Ok();
    

    }
}