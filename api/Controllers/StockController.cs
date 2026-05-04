using Microsoft.AspNetCore.Mvc;
using api.Data;
using api.DTOs.Stock;
using api.Mappers;
using Microsoft.EntityFrameworkCore;

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

        // CREATE
        [HttpPost]
        public IActionResult Create([FromBody] CreateStockRequest request)
        {
            var stock = request.ToStockFromCreateDto();

            _context.Stocks.Add(stock);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = stock.Id }, stock.ToStockDto());
        }

        // GET BY ID
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var stock = _context.Stocks.Find(id);

            if (stock == null)
                return NotFound();

            return Ok(stock.ToStockDto());
        }

        // GET ALL (extra - útil pra testar)
        [HttpGet]
        public IActionResult GetAll()
        {
            var stocks = _context.Stocks
                .Select(s => s.ToStockDto())
                .ToList();

            return Ok(stocks);
        }

        // UPDATE
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateStockRequest request)
        {
            var stock = await _context.Stocks.FindAsync(id);

            if (stock == null)
                return NotFound();

            stock.Symbol = request.Symbol;
            stock.CompanyName = request.CompanyName;
            stock.Price = request.Price;
            stock.MarketCap = request.MarketCap;

            await _context.SaveChangesAsync();

            return Ok(stock.ToStockDto());
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var stockModel = _context.Stocks.FirstOrDefault(x => x.Id == id);

            if (stockModel == null)
                return NotFound();

            _context.Stocks.Remove(stockModel);
            _context.SaveChanges();

            return NoContent();
        }
    }
}