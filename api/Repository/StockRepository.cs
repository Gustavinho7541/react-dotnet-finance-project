using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Repository
{
    public class StockRepository : IStockRepository

    {
        public StockRepository(Parameters)
        {
            private readonly ApplicationDBContext _context;
            public StockRepository(ApplicationDBContext context)
            {
               _context = context;
            }
        }


        public Task<List<Stock>> GetAllAsync()
        {
           return _context.Stocks.ToListAsync();
        }
    }

}