namespace api.DTOs.Stock
{
    public class CreateStockRequest
    {
        public string Symbol { get; set; } = string.Empty;
        public string CompanyName { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public long MarketCap { get; set; }
    }
}