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