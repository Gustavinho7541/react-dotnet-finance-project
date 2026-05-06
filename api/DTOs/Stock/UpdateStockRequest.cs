using System.ComponentModel.DataAnnotations;

namespace api.DTOs.Stock
{
    public class UpdateStockRequest
    {
        [Required]
        [MaxLength(10)]
        public string Symbol { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string CompanyName { get; set; } = string.Empty;

        [Required]
        [Range(1, double.MaxValue)]
        public decimal Price { get; set; }

        [Required]
        [Range(1, long.MaxValue)]
        public long MarketCap { get; set; }
    }
}