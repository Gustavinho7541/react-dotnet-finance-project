using api.Models;
using api.DTOs.Stock;

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
                Comments = stockModel.Comments.Select(c => c.ToCommentDto()).ToList()
            };
        }

        public static Stock ToStockFromCreateDto(this CreateStockRequest request)
        {
            return new Stock
            {
                Symbol = request.Symbol,
                CompanyName = request.CompanyName,
                Price = request.Price,
                MarketCap = request.MarketCap
            };
        }
    }
}