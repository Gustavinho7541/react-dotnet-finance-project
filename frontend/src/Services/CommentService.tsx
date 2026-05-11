import axios from "axios";

export const commentGetAPI = (symbol: string) => {
  return axios.get(`/api/comments/${symbol}`);
};

export const commentPostAPI = (
  title: string,
  content: string,
  symbol: string
) => {
  return axios.post(`/api/comments`, {
    title,
    content,
    symbol,
  });
};