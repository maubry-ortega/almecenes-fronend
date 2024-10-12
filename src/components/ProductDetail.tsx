import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Text, Image, Button, Heading } from '@chakra-ui/react';
import { fetchProductsByStoreId } from '../services/api';

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  img: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar los productos del almacén seleccionado
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        if (id) {
          const data = await fetchProductsByStoreId(parseInt(id));
          setProducts(data);
        }
      } catch (error) {
        setError('Error al cargar los productos.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [id]);

  if (loading) {
    return <Text>Cargando productos...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (products.length === 0) {
    return <Text>No se encontraron productos para este almacén.</Text>;
  }

  return (
    <Box maxW="container.lg" mx="auto" p={4}>
      <Heading as="h2" mb={6}>Productos del almacén</Heading>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" p={4} shadow="md" _hover={{ shadow: 'lg' }} transition="all 0.3s">
            <Image src={product.img} alt={product.nombre} mb={4} />
            <Heading as="h3" size="md" mb={2}>{product.nombre}</Heading>
            <Text>{product.descripcion}</Text>
          </Box>
        ))}
      </Box>
      <Button as={Link} to="/" mt={6} colorScheme="teal">Volver a Almacenes</Button>
    </Box>
  );
};

export default ProductDetail;