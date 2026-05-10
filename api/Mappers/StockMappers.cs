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

        public static Stock ToStockFromFMP(this FMPStock fmpStock)
        {
            return new Stock
            {
                Symbol = fmpStock.symbol,
                CompanyName = fmpStock.companyName,
                purchase = (decimal)fmpStock.price,
                LastDiv = (decimal)fmpStock.lastDiv,
                Industry = fmpStock.industry,
                MarketCap = fmpStock.mktCap
            };
        }
    }
}