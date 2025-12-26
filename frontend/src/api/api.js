import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-shop-7vh7.onrender.com/api",
});