import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { fetchStoreById } from '../services/api';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = React.useState<any | null>(null);

  if (!id) {
    return <Text>Error: ID de producto no válido</Text>;
  }

  useEffect(() => {
    const loadProduct = async () => {
      const productId = parseInt(id, 10); // Convertir ID a número
      const data = await fetchStoreById(productId); // Pasar número a fetchStoreById
      setProduct(data);
    };

    loadProduct();
  }, [id]);

  if (!product) {
    return <Text>Producto no encontrado</Text>;
  }

  return (
    <Box maxW="lg" mx="auto" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={product.img} alt={product.nombre} />
      <Box p="6">
        <Text fontWeight="bold" fontSize="2xl">{product.nombre}</Text>
        <Text mt={4}>{product.descripcion}</Text>
        <Button as={Link} to="/" colorScheme="teal" mt={6}>
          Volver a la tienda
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;
