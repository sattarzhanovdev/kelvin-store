import axios from "axios";

export const API = {
  getProducts: () => axios.get('/main/products/'),
  getPromocodes: () => axios.get('/promocode/'),
  getSingleProduct: (id) => axios.get(`/main/products/${id}`),
  getCity: () => axios.get(`/main/address/`),
  getAddress: (street) => axios.get(`/main/street/?search=${street}`),
  getPolicy: () => axios.get('/setting'),
}

// export tMapApi = axios.get('https://api-developer.tech.yandex.net/projects/')