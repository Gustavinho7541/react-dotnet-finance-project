import axios from "axios";
import { CompanyKey } from "./company";

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

// 📊 BALANCE SHEET (MOCK)
export const getBalanceSheet = async (ticker: string) => {
  return [
    {
      date: "2024",
      totalAssets: 5000000,
      totalLiabilities: 2000000,
      totalEquity: 3000000,
    },
    {
      date: "2023",
      totalAssets: 4500000,
      totalLiabilities: 1800000,
      totalEquity: 2700000,
    },
  ];
};

export const getCashflow = async (ticker: string) => {
  return [
    {
      date: "2024",
      operatingCashFlow: 500000,
      netCashUsedForInvestingActivites: -200000,
      netCashUsedProvidedByFinancingActivities: 100000,
      cashAtEndOfPeriod: 300000,
      capitalExpenditure: -150000,
      commonStockIssued: 50000,
      freeCashFlow: 350000,
    },
    {
      date: "2023",
      operatingCashFlow: 400000,
      netCashUsedForInvestingActivites: -150000,
      netCashUsedProvidedByFinancingActivities: 80000,
      cashAtEndOfPeriod: 250000,
      capitalExpenditure: -120000,
      commonStockIssued: 30000,
      freeCashFlow: 280000,
    },
    
  ];
};

// 📊 COMPANY COMPLETE DATA (PROFILE + EXTRA INFO)
export const getCompData = async (ticker: string) => {
  try {
    const searchRes = await axios.get<{ data: CompanyKey[] }>(
      `${BASE_URL}/symbol_search?symbol=${ticker}&apikey=${API_KEY}`
    );

    const company = searchRes.data.data[0];

    return {
      symbol: company?.symbol || "-",
      name: company?.instrument_name || "-",
      description: "No description available",
      sector: "N/A",
      industry: "N/A",
      website: "N/A",
      peersList: ["AAPL", "MSFT", "GOOGL"], // ✅ MOCK
    };
  } catch (error: any) {
    console.log("Erro getCompData:", error.message);
    return null;
  }
};

// 📄 10-K (MOCK - SEC Filing)
export const getTenK = async (ticker: string) => {
  try {
    // 🔥 MOCK (igual você fez nos outros)
    return [
      {
        symbol: ticker,
        fillingDate: "2024-01-01",
        finalLink: "https://www.sec.gov",
      },
      {
        symbol: ticker,
        fillingDate: "2023-01-01",
        finalLink: "https://www.sec.gov",
      },
    ];
  } catch (error: any) {
    console.log("Erro getTenK:", error.message);
    return [];
  }
};