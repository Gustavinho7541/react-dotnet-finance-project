using api.Models;
using api.DTOs;

namespace api.Mappers
{
    public static class StockMappers
    {
        public static StockDto ToStockDto(this Stock stock)
        {
            return new StockDto
            {
                Id = stock.Id,
                Symbol = stock.Symbol,
                CompanyName = stock.CompanyName,
                Price = stock.Price,
                MarketCap = stock.MarketCap
            };
        }
    }
}