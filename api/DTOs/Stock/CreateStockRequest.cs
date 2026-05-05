namespace api.DTOs.Stock
{
    public class CreateStockRequest
    {
        [Required]
        [MaxLength(10, ErrorMessage = "Symbol cannot be over characters")]

        public string Symbol { get; set; }

         [Required]
        [MaxLength(10, ErrorMessage = "Company Name cannot be over characters")]

        public string CompanyName { get; set; }
        [Required]
        [Ranger(1, 10000)]

        public decimal Price { get; set; }
        [Required]
        [Range(0.001, 100)]
        
        public long MarketCap { get; set; }
    }
}