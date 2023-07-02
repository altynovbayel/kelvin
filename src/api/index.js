import axios from "axios";

export const API = {
  getProducts: () => axios.get('/main/products/')
}