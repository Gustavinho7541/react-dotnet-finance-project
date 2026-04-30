import axios from "axios";
import { CompanyKey } from "../company"; // 👈 IMPORTANTE

const API_KEY = "SUA_API_KEY_AQUI";

// 🔍 SEARCH
export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<{ data: CompanyKey[] }>(
      `https://api.twelvedata.com/symbol_search?symbol=${query}&apikey=${API_KEY}`
    );

    return response.data.data || [];
  } catch (error) {
    console.log("Erro:", error);
    return [];
  }
};

// 📊 KEY METRICS (adaptado)
export const getKeyMetrics = async (ticker: string) => {
  try {
    const searchRes = await axios.get<{ data: CompanyKey[] }>(
      `https://api.twelvedata.com/symbol_search?symbol=${ticker}&apikey=${API_KEY}`
    );

    const company = searchRes.data.data[0];

    const priceRes = await axios.get(
      `https://api.twelvedata.com/price?symbol=${ticker}&apikey=${API_KEY}`
    );

    return {
      symbol: company?.symbol,
      name: company?.instrument_name,
      exchange: company?.exchange,
      price: priceRes.data?.price,
      industry: "N/A",
      website: "N/A",
    };
  } catch (error: any) {
    console.log("Erro na API:", error.message);
    return null;
  }
};