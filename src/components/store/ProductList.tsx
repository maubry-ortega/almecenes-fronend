import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { fetchProductsByStoreId } from '../../services/api/productsApi';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<any | null>(null);

  useEffect(() => {
    const loadStore = async () => {
      if (id) {
        const storeData = await fetchProductsByStoreId(parseInt(id, 10));
        setStore(storeData);
      }
    };

    loadStore();
  }, [id]);

  if (!store) {
    return <Text>Almacén no encontrado</Text>;
  }

  return (
    <Box maxW="lg" mx="auto" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Text fontWeight="bold" fontSize="2xl">{store.nombre}</Text>
      <Text mt={4}>Productos:</Text>
      {store.productos.map((producto: any) => (
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