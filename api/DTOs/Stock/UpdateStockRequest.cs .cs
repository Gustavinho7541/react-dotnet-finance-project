namespace api.DTOs.Stock
{
    public class UpdateStockRequest
    {
        public string Symbol { get; set; }
        public string CompanyName { get; set; }
        public decimal Price { get; set; }
        public long MarketCap { get; set; }
    }
}