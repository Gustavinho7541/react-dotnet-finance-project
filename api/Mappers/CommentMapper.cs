using api.Dtos.Comment;
using api.Models;

namespace api.Mappers
{
    public static class CommentMapper
    {
        public static CommentDto ToCommentDto(this Comment commentModel)
        {
            return new CommentDto
            {
                Id = commentModel.Id,
                Content = commentModel.Content
            };
        }

        public static Comment ToCommentFromCreate(this CreateCommentDto dto, int stockId)
        {
            return new Comment
            {
                Title = dto.Title,
                Content = dto.Content,
                StockId = stockId
            };
        }

        // 🔥 ESSE MÉTODO QUE ESTAVA FALTANDO
        public static Comment ToCommentFromUpdate(this UpdateCommentDto dto, int id)
        {
            return new Comment
            {
                Id = id,
                Title = dto.Title,
                Content = dto.Content
            };
        }
    }
}