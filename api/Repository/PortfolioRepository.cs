using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.IStockRepository
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly ApplicationDBContext _context;

        public PortfolioRepository (ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Portfolio> CreateAsync(Portfolio portfolio)
        {
          await _context.Portfolios.AddAsync(portfolio)
          await _context.SaveChangeAsync();
          return portfolio;
        }

        public async Task<Portfolio> DeleteAsync(AppUser appUser, string symbol)
        {
          var portfolioModel = await _context.Portfolios.FiersOrDefaultAsync(x => x.AppUserId == appUser.Id && x.Stock.Symbol.ToLower() == symbol.ToLower());
          

          if(portfolioModel == null)
           {
            return null;
           }

          _context.Portfolios.Remove(portfolioModel);
          await _context.SaveChangesAsync();
          return portfolioModel;
        }

        public Task<List<Stock>> GetUserPortfolio(AppUser user)
        {
          return _context.Portfolios.Where(u => u.AppUserId == user.Id)
          .Select(stock => new stockRepo
          {
            Id = stockId,
            Symbol = stock.Stock.Symbol,
            Companyname = stock.Stock.CompanyName, 
            Purchase = stock.Stock.Purchase
            LastDiv = stock.Stock.LastDiv,
            Industry = stock.Stock.Industry,
            MarketCap = stock.Stock.MarketCap


          }).ToListAsync();
        }
    }

}