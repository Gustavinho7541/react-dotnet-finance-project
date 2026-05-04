using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interfaces IStockRepository
    {
      Task<List<Stock>> GetAllAsync();
      Task<Stock?> GetByIDAsync(int id);
      Task<Stock> CreateAsync(Stock stockModel);
      Task<Stock?> UptadeAsync(int id, UptadeStockRequestDto stockDto)
      Task<Stock?> DeleteAsync(int id);
    }
}