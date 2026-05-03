using Microsoft.AspNetCore.Mvc;
using api.Data;
using api.DTOs.Stock;
using api.Mappers;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public StockController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateStockRequest request)
        {
            var stock = request.ToStockFromCreateDto(); // 🔥 AQUI

            _context.Stocks.Add(stock);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = stock.Id }, stock.ToStockDto());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var stock = _context.Stocks.Find(id);

            if (stock == null)
                return NotFound();

            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public IActionResult Uptade([FromBody] int id, [FromBody] UptadeStockRequest request)
        {
           var stockModel = _context.Stocks.FirstOrDefault(x => x.Id == id);

            if (stockModel == null)
             {
                return NotFound();
            }

            

            stockModel.Symbol = uptadeDto.Symbol;
            stockModel.CompanyName = uptadeDto.CompanyName;
            stockModel.Purchase = uptadeDto.Purchase;
            stockModel.MarketCap = uptadeDto.MarketCap;
        
            _context.SaveChanges();

            return Ok(stockModel.ToStockDto());
        }
    }
}