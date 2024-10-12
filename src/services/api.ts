const API_URL = 'http://localhost:5000/api/stores'; // URL del backend

// Función para obtener todos los almacenes
export const fetchStores = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los almacenes');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en fetchStores:', error);
    return [];
  }
};

// Función para obtener un almacén por su ID
export const fetchStoreById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener el almacén');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en fetchStoreById:', error);
    return null;
  }
};

export const fetchProductsByStoreId = async (storeId: number) => {
    try {
        const response = await fetch(`http://localhost:5000/api/products/${storeId}`);
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error en fetchProductsByStoreId:', error);
        return [];
    }
};

