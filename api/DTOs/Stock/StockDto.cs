using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;

namespace api.DTOs.Stock;
{
    public class StockDto
    {
         public int Id { get; set; }

        public string Symbol { get; set; } = string.Empty;

        public string CompanyName { get; set; } = string.Empty;
        
        public decimal Price { get; set; }

        public long MarketCap { get; set; }
    }
}