import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const biodataAPI = {
  getBiodata: () => api.get('/biodata'),
  getKeahlian: () => api.get('/keahlian'),
  getOrganisasi: () => api.get('/organisasi'),
  getHobi: () => api.get('/hobi'),
  getGenerations: () => api.get('/generations'),
  getEvolution: () => api.get('/evolution'),
};

export default api;