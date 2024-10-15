import axios from 'axios';
// Base URL para todas las peticiones
const API_BASE_URL = 'http://localhost:5000/api'; 

// Función para obtener todos los almacenes
export const fetchStores = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stores`);
    return response.data;
  } catch (error) {
    console.error('Error en fetchStores:', error);
    return [];
  }
};

// Función para obtener un almacén por ID
export const fetchProductsByStoreId = async (storeId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stores/${storeId}/products`);
    return response.data;
  } catch (error) {
    console.error('Error en fetchProductsByStoreId:', error);
    return null;
  }
};