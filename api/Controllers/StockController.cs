using Microsoft.AspNetCore.Mvc;
using api.DTOs.Stock;
using api.Mappers;
using api.Interfaces;
using api.Models;
using api.Helpers;
using Microsoft.AspNetCore.Authorization;

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
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query)
        {
            var stocks = await _stockRepo.GetAllAsync(query);
            return Ok(stocks.Select(s => s.ToStockDto()));
        }

        // GET BY SYMBOL
        [HttpGet("{symbol}")]
        public async Task<IActionResult> GetBySymbol(string symbol)
        {
            var stock = await _stockRepo.GetBySymbolAsync(symbol);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock.ToStockDto());
        }

        // CREATE
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = request.ToStockFromCreateDto();

            await _stockRepo.CreateAsync(stockModel);

            return CreatedAtAction(nameof(GetBySymbol), new { symbol = stockModel.Symbol }, stockModel.ToStockDto());
        }

        // UPDATE
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateStockRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

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
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = await _stockRepo.DeleteAsync(id);

            if (stockModel == null)
                return NotFound();

            return NoContent();
        }
    }
}