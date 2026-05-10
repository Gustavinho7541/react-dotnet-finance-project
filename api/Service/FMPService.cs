using System.Text.Json;
using api.Models;
using api.Interfaces;

namespace api.Service
{
    public class FMPService : IFMPService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _config;

        public FMPService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }

        public async Task<Stock?> FindStockBySymbolAsync(string symbol)
        {
            var apiKey = _config["TWELVE_API_KEY"];

            var response = await _httpClient.GetAsync(
                $"https://api.twelvedata.com/quote?symbol={symbol}&apikey={apiKey}"
            );

            if (!response.IsSuccessStatusCode)
                return null;

            var content = await response.Content.ReadAsStringAsync();

            var data = JsonSerializer.Deserialize<TwelveDataResponse>(content);

            if (data == null)
                return null;

            return new Stock
            {
                Symbol = data.symbol,
                CompanyName = data.name,
                MarketCap = (long)data.market_cap
            };
        }
    }

    public class TwelveDataResponse
    {
        public string symbol { get; set; }
        public string name { get; set; }
        public decimal market_cap { get; set; }
    }
}