import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Text, Image, Button, Spinner } from '@chakra-ui/react';
import { fetchStoreById } from '../services/api';

interface ProductDetailProps {
  setTitle: (title: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ setTitle }) => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStore = async () => {
      if (id) {
        const storeData = await fetchStoreById(parseInt(id, 10));
        setStore(storeData);
        setTitle(storeData ? storeData.nombre : 'Almacén no encontrado');
        setLoading(false);
      }
    };

    loadStore();
  }, [id, setTitle]);

  if (loading) return <Spinner size="xl" />;

  if (!store) return <Text>Almacén no encontrado</Text>;

  return (
    <Box maxW="lg" mx="auto" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Text fontWeight="bold" fontSize="2xl">{store.nombre}</Text>
      <Text mt={4}>Productos:</Text>
      {store.productos.map((producto: any) => (
        <Box key={producto.id} mt={4}>
          <Image src={producto.img} alt={producto.nombre} />
          <Text fontWeight="bold">{producto.nombre}</Text>
          <Text>{producto.descripcion}</Text>
        </Box>
      ))}
      <Button as={Link} to="/" colorScheme="teal" mt={6}>
        Volver a los almacenes
      </Button>
    </Box>
  );
};

export default ProductDetail;