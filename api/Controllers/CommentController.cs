using Microsoft.AspNetCore.Mvc;
using api.Interfaces;
using api.Mappers;
using api.Dtos.Comment;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using api.Models;
using api.Extensions;


namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepo;
        private readonly IStockRepository _stockRepo;
        private readonly UserManager<AppUser> _userManager;
        private readonly IFMPService _fmpService;

        public CommentController(
            ICommentRepository commentRepo,
            IStockRepository stockRepo,
            UserManager<AppUser> userManager,
            IFMPService fmpService)
        {
            _commentRepo = commentRepo;
            _stockRepo = stockRepo;
            _userManager = userManager;
            _fmpService = fmpService;
        }

        [HttpPost("{symbol}")]
        [Authorize]
        public async Task<IActionResult> Create(string symbol, CreateCommentDto dto)
    {
         var stock = await _stockRepo.GetBySymbolAsync(symbol);

         if (stock == null)
        {
         stock = await _fmpService.FindStockBySymbolAsync(symbol);

         if (stock == null)
            return NotFound("Stock not found");

        await _stockRepo.CreateAsync(stock);
    }

         var username = User.GetUsername();
         var appUser = await _userManager.FindByNameAsync(username);

         var comment = dto.ToCommentFromCreate(stock.Id);
         comment.AppUserId = appUser.Id;

          await _commentRepo.CreateAsync(comment);

         return Ok(comment.ToCommentDto());
   }
  }
}