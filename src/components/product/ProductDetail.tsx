import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Text, Image, Button, Spinner } from '@chakra-ui/react';
import { fetchProductsByStoreId } from '../../services/api/productsApi';

interface ProductDetailProps {
  setTitle: (title: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ setTitle }) => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      if (id) {
        const data = await fetchProductsByStoreId(parseInt(id, 10));
        setProducts(data || []);
        setTitle(`Almacén ${id}`);
        setLoading(false);
      }
    };

    loadProducts();
  }, [id, setTitle]);

  if (loading) return <Spinner size="xl" />;

  if (products.length === 0) return <Text>No se encontraron productos.</Text>;

  return (
    <Box maxW="lg" mx="auto" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Text fontWeight="bold" fontSize="2xl">Almacén {id}</Text>
      <Text mt={4}>Productos:</Text>
      {products.map((producto) => (
        <Box key={producto.id} mt={4}>
          <Image src={producto.img} alt={producto.nombre} />
          <Text fontWeight="bold">{producto.nombre}</Text>
          <Text>{producto.descripcion}</Text>
          <Text>{producto.id_tienda}</Text>
        </Box>
      ))}
      <Button as={Link} to="/" colorScheme="teal" mt={6}>
        Volver a los almacenes
      </Button>
    </Box>
  );
};

export default ProductDetail;