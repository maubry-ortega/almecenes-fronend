import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Stack, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { fetchStores } from '../services/api';

interface Store {
  id: number;
  nombre: string;
}

const Stores: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const loadStores = async () => {
      const data = await fetchStores();
      setStores(data);
    };

    loadStores();
  }, []);

  return (
    <Box maxW="container.lg" mx="auto" p={4}>
      <Heading as="h1" mb={6}>Almacenes</Heading>
      <Stack spacing={4}>
        {stores.map(store => (
          <Box key={store.id} borderWidth="1px" borderRadius="lg" p={4} shadow="md" _hover={{ shadow: 'lg' }} transition="all 0.3s">
            <Heading as="h3" size="md">{store.nombre}</Heading>
            <Text mt={2}>
              <ChakraLink as={Link} to={`/store/${store.id}`} color="teal.500">Ver productos</ChakraLink>
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Stores;