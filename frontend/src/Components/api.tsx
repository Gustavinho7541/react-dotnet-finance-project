import axios from "axios";
import { CompanyIncomeStatement, CompanyKey } from "../company";

const API_KEY = "SUA_API_KEY_AQUI";
const BASE_URL = "https://api.twelvedata.com";

// 🔍 SEARCH
export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<{ data: CompanyKey[] }>(
      `${BASE_URL}/symbol_search?symbol=${query}&apikey=${API_KEY}`
    );

    return response.data.data || [];
  } catch (error) {
    console.log("Erro:", error);
    return [];
  }
};


// 📊 KEY METRICS
export const getKeyMetrics = async (ticker: string) => {
  try {
    const searchRes = await axios.get<{ data: CompanyKey[] }>(
      `${BASE_URL}/symbol_search?symbol=${ticker}&apikey=${API_KEY}`
    );

    const company = searchRes.data.data[0];

    const priceRes = await axios.get(
      `${BASE_URL}/price?symbol=${ticker}&apikey=${API_KEY}`
    );

    export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `${ticker}&apikey=${API_KEY}`
    );

    return data;
  } catch (error message: ", error.message);
    
    }
  };

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

// 📊 INCOME STATEMENT (MOCK)
export const getIncomeStatement = async (ticker: string) => {
  return [
    {
      date: "2024",
      revenue: 1000000,
      netIncome: 200000,
    },
    {
      date: "2023",
      revenue: 800000,
      netIncome: 150000,
    },
  ];
};