using api.Models;

namespace api.Interfaces
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetAllAsync();
        Task<Comment?> GetByIdAsync(int id);

        // 🔥 FALTAVAM ESSES MÉTODOS
        Task<Comment> CreateAsync(Comment comment);
        Task<Comment?> UpdateAsync(int id, Comment comment);
        Task<Comment?> DeleteAsync(int id);
    }
}