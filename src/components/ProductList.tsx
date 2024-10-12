import React, { useEffect, useState } from 'react';
import { Box, Text, Image, Stack } from '@chakra-ui/react';
import { fetchProductsByStoreId } from '../services/api';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  img: string;
}

const ProductList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProductsByStoreId(parseInt(id as string, 10));
      setProducts(data);
    };

    loadProducts();
  }, [id]);

  if (products.length === 0) {
    return <Text>No se encontraron productos</Text>;
  }

  return (
    <Stack spacing={4}>
      {products.map(product => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Image src={product.img} alt={product.nombre} />
          <Box p="6">
            <Text fontWeight="bold" fontSize="2xl">{product.nombre}</Text>
            <Text mt={4}>{product.descripcion}</Text>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default ProductList;
