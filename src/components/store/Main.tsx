import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Spinner } from '@chakra-ui/react';
import { fetchProductsByStoreId } from '../../services/api/productsApi'; // Nueva ruta de importación

interface MainProps {
  setTitle: (title: string) => void;
}

const Main: React.FC<MainProps> = ({ setTitle }) => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Nuevo estado para errores

  useEffect(() => {
    const loadProducts = async () => {
      if (id) {
        try {
          const data = await fetchProductsByStoreId(parseInt(id, 10));

          if (Array.isArray(data)) {
            setProducts(data);
          } else {
            setProducts([]);
            setError('No se encontraron productos.');
          }

          setTitle(`Almacén ${id}`);
        } catch (err) {
          setError('Error al cargar productos.');
        }
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

  if (error) {
    return <Text textAlign="center" mt={10} color="red.500">{error}</Text>;
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