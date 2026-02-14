import axios from "axios";

export const API = axios.create({
  baseURL: "https://real-estate-website-backend-clem.onrender.com/api"
});
