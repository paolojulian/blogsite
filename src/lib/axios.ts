import apiSauce from 'apisauce';

const apiClient = apiSauce.create({
  baseURL: process.env.API_URL || 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiClient;
