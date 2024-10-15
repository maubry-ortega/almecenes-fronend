// src/components/Main.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Spinner } from '@chakra-ui/react';
import { fetchProductsByStoreId } from '../services/api'; // Importar función correcta

interface MainProps {
  setTitle: (title: string) => void;
}

const Main: React.FC<MainProps> = ({ setTitle }) => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      if (id) {
        const data = await fetchProductsByStoreId(parseInt(id, 10));

        if (Array.isArray(data)){
          setProducts(data);
        } else {
          setProducts([]);
        }

        setTitle(`Almacén ${id}`);
      }
      setLoading(false);
    };

    loadProducts();
  }, [id, setTitle]);

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" color="teal.500" />
        <Text mt={4}>Cargando productos...</Text>
      </Box>
    );
  }

  if (products.length === 0) {
    return <Text textAlign="center" mt={10}>No se encontraron productos.</Text>;
  }

  return (
    <Box maxW="container.md" mx="auto" p={4}>
      <Heading as="h2" mb={4} color="teal.600">
        Productos del Almacén {id}
      </Heading>
      {products.map((producto) => (
        <Box key={producto.id} borderWidth="1px" borderRadius="lg" p={4} mt={4} shadow="md">
          <Heading as="h4" size="md">{producto.nombre}</Heading>
          <Text>{producto.descripcion}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Main;