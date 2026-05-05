using Microsoft.AspNetCore.Mvc;
using api.DTOs.Stock;
using api.Mappers;
using api.Interfaces;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly IStockRepository _stockRepo;

        public StockController(IStockRepository stockRepository)
        {
            _stockRepo = stockRepository;
        }

        // GET ALL
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stocks = await _stockRepo.GetAllAsync();
            var stockDto = stocks.Select(s => s.ToStockDto()).ToList();

            return Ok(stockDto);
        }

        // GET BY ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var stock = await _stockRepo.GetByIdAsync(id);

            if (stock == null)
                return NotFound();

            return Ok(stock.ToStockDto());
        }

        // CREATE
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequest request)
        {
            var stockModel = request.ToStockFromCreateDto();

            await _stockRepo.CreateAsync(stockModel);

            return CreatedAtAction(nameof(GetById), new { id = stockModel.Id }, stockModel.ToStockDto());
        }

        // UPDATE
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateStockRequest request)
{
    var stockModel = new Stock
    {
        Symbol = request.Symbol,
        CompanyName = request.CompanyName,
        Price = request.Price,
        MarketCap = request.MarketCap
    };

    var updatedStock = await _stockRepo.UpdateAsync(id, stockModel);

    if (updatedStock == null)
        return NotFound();

    return Ok(updatedStock.ToStockDto());
}
        // DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var stockModel = await _stockRepo.DeleteAsync(id);

            if (stockModel == null)
                return NotFound();

            return NoContent();
        }
    }
}