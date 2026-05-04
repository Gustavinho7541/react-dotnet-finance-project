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
        private readonly IStockRepository _stockRepo;
        public StockController(ApplicationDBContext context, IStockRepository stockRepository)
        {
            _stockRepo = stockRepo;
            _context = context;
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
            {

                return NotFound();
            }

            return Ok(stock.ToStockDto());
        }

        // CREATE
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequest request)
        {
            var stockModel = request.ToStockFromCreateDto();

            await _stockRepo.CreateAsync(stockModel);
            return CreatedAtAction(nameof(GetById), new { id = stock.Id }, stock.ToStockDto());
        }

        // UPDATE
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateStockRequest request)
        {
            var stock = await _stockRepo.UpdateAsync(id, updateDto);

            if (stockModel == null) 
            {
                return NotFound();
            }
            

            return Ok(stock.ToStockDto());
        }

        // DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var stockModel = await _stocksRepo.DeleteAsync(id);

            if (stockModel == null)
            {
                return NotFound();
            }        

            return NoContent();
        }
    }
}