import axios from "axios";

export const API = {
  getProducts: () => axios.get('/main/products/'),
  getPromocodes: () => axios.get('/promocode/'),
  getSingleProduct: (id) => axios.get(`/main/products/${id}`)
}