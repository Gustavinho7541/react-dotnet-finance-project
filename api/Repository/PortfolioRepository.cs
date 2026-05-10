using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly ApplicationDBContext _context;

        public PortfolioRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Portfolio> CreateAsync(Portfolio portfolio)
        {
            await _context.Portfolios.AddAsync(portfolio);
            await _context.SaveChangesAsync();
            return portfolio;
        }

        public async Task<Portfolio?> DeleteAsync(AppUser appUser, string symbol)
        {
            var portfolioModel = await _context.Portfolios
                .Include(p => p.Stock)
                .FirstOrDefaultAsync(x =>
                    x.AppUserId == appUser.Id &&
                    x.Stock.Symbol.ToLower() == symbol.ToLower());

            if (portfolioModel == null)
                return null;

            _context.Portfolios.Remove(portfolioModel);
            await _context.SaveChangesAsync();

            return portfolioModel;
        }

        public async Task<List<Stock>> GetUserPortfolio(AppUser user)
        {
            return await _context.Portfolios
                .Where(p => p.AppUserId == user.Id)
                .Select(p => p.Stock)
                .ToListAsync();
        }
    }
}