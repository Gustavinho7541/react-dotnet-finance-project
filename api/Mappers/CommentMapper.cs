using System;
using System.Collections.Generic;
using System.Linq;
using System.Thereading.Tasks;
using api.Dtos.Comment;

namespace api.Mappers
{
    public static class CommentMapper
    {
        public static CommentDto(this Comment commentModel)
        {
            return new CommentDto
            {
              Id = commentModel.Id,
              Title = commentModel.Title,
              Content = commentModel.Context,
              CreatedOn = commentModel.CreatedOn,
              StockId = commentModel.StockId
            };
        }
    }
}