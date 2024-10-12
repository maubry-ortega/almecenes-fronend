const API_BASE_URL = 'http://localhost:5000/api';

export const fetchStores = async () => {
   const response = await fetch(`${API_BASE_URL}/stores`);
   return await response.json();
};

export const fetchProductsByStoreId = async (storeId: number) => {
   const response = await fetch(`${API_BASE_URL}/products/${storeId}`);
   return await response.json();
};
