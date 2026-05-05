using api.Dtos.Comment;

namespace api.DTOs.Stock
{
    public class StockDto
    {
        public int Id { get; set; }
        public string Symbol { get; set; }
        public string CompanyName { get; set; }
        public decimal Price { get; set; }
        public long MarketCap { get; set; }
        public List<CommentDto> Comments { get; set; }
    }
}