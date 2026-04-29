import axios from "axios";

const API_KEY = "SUA_API_KEY_AQUI";

// 🔍 SEARCH
export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.twelvedata.com/symbol_search?symbol=${query}&apikey=${API_KEY}`
    );

    return response.data?.data || [];
  } catch (error) {
    console.log("Erro:", error);
    return [];
  }
};

// 📊 PROFILE SIMULADO (usando dados disponíveis)
export const getCompanyProfile = async (ticker: string) => {
  try {
    // 🔎 pega info básica
    const searchRes = await axios.get(
      `https://api.twelvedata.com/symbol_search?symbol=${ticker}&apikey=${API_KEY}`
    );

    const company = searchRes.data?.data[0];

    // 💰 pega preço
    const priceRes = await axios.get(
      `https://api.twelvedata.com/price?symbol=${ticker}&apikey=${API_KEY}`
    );

    return {
      symbol: company?.symbol,
      name: company?.instrument_name,
      exchange: company?.exchange,
      price: priceRes.data?.price,
      // não existe no plano grátis:
      industry: "N/A",
      website: "N/A",
    };
  } catch (error: any) {
    console.log("Erro na API:", error.message);
    return null;
  }
};