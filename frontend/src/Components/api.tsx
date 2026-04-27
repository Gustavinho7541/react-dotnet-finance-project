import axios from "axios";


const API_KEY = "SUA_CHAVE_AQUI";

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


