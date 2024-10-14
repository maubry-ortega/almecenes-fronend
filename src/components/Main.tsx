import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Heading, Text, Spinner } from '@chakra-ui/react';

interface MainProps {
  setTitle: (title: string) => void;
}

const Main: React.FC<MainProps> = ({ setTitle }) => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStore = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://localhost:5000/api/products/${id}`);
          setStore(response.data);
          setTitle(response.data.store_id);
        } catch (error) {
          console.error('Error al obtener productos:', error);
        }
      }
      setLoading(false);
    };

    loadStore();
  }, [id, setTitle]);

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" color="teal.500" />
        <Text mt={4}>Cargando detalles del almacén...</Text>
      </Box>
    );
  }

  if (!store) {
    return <Text textAlign="center" mt={10}>Almacén no encontrado.</Text>;
  }

  return (
    <Box maxW="container.md" mx="auto" p={4}>
      <Heading as="h2" mb={4} color="teal.600">
        {store.nombre}
      </Heading>
      <Text>Productos disponibles en este almacén:</Text>
  
      {store && Array.isArray(store) && store.length > 0 ? (
        store.map((producto: any) => (
          <Box key={producto.id} borderWidth="1px" borderRadius="lg" p={4} mt={4} shadow="md">
            <Heading as="h4" size="md">{producto.nombre}</Heading>
            <Text>{producto.descripcion}</Text>
          </Box>
        ))
      ) : (
        <Text mt={4}>No hay productos disponibles en este almacén.</Text>
      )}
    </Box>
  );
};

export default Main;