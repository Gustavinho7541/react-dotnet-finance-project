

using api.Models;

public interface ICommentRepository
{
    Task<List<Comment>> GetAllAsync();
    Task<Comment?> GetByIdAsync(int id);
    Task<Comment> CreateAsync(Comment comment); // ← AQUI
    Task<Comment?> UpdateAsync(int id, Comment comment);
    Task<Comment?> DeleteAsync(int id);
}