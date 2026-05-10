using api.Models; // 🔥 FALTAVA

namespace api.Interfaces
{
    public interface IFMPService
    {
        Task<Stock?> FindStockBySymbolAsync(string symbol); // 🔥 nullable
    }
}