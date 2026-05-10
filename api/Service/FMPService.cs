using System.Text.Json;
using api.Models;

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
            try
            {
                var apiKey = _config["TWELVE_API_KEY"];

                var response = await _httpClient.GetAsync(
                    $"https://api.twelvedata.com/quote?symbol={symbol}&apikey={apiKey}"
                );

                if (!response.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var tasks = JsonConvert.DeserializeObject<FMPStock[]>(content);
                    var stock = tasks[0];
                    if (stock == null)
                    {
                        return stock.ToStockFromFMP();
                    }
                    return null;
                }
                return null;
                   

                var content = await response.Content.ReadAsStringAsync();

                var data = JsonSerializer.Deserialize<TwelveDataResponse>(content);

                if (data == null)
                    return null;

                return new Stock
                {
                    Symbol = data.symbol,
                    CompanyName = data.name,
                    MarketCap = data.market_cap,
                    // adapta conforme seu model
                };
            }
            catch (Exception e)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }
    }

    // 🔥 DTO da resposta da Twelve Data
    public class TwelveDataResponse
    {
        public string symbol { get; set; }
        public string name { get; set; }
        public decimal market_cap { get; set; }
    }
}