import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Función para obtener productos por almacén
export const fetchProductsByStoreId = async (storeId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stores/${storeId}/products`);
    return response.data;
  } catch (error) {
    console.error('Error en fetchProductsByStoreId:', error);
    return [];
  }
};