// src/components/Stores.tsx
import React, { useEffect, useState } from 'react';
import { Box, Heading, Link as ChakraLink, Flex, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { fetchStores } from '../services/api';

interface Store {
  id: number;
  nombre: string;
}

interface StoresProps {
  setTitle: (title: string) => void;
}

const Stores: React.FC<StoresProps> = ({ setTitle }) => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStores = async () => {
      const data = await fetchStores();
      setStores(data);
      setTitle('Almacenes Disponibles');
      setLoading(false);
    };

    loadStores();
  }, [setTitle]);

  if (loading) return <Spinner size="xl" />;

  return (
    <Box maxW="container.lg" mx="auto" p={4}>
      <Heading as="h1" mb={6} textAlign="center" color="teal.600">
        Almacenes Disponibles
      </Heading>
      <Flex wrap="wrap" justifyContent="center" gap={6}>
        {stores.map((store) => (
          <Box
            key={store.id}
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            shadow="md"
            _hover={{ shadow: 'lg', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            width="300px"
            textAlign="center"
          >
            <Heading as="h3" size="md" mb={4} color="teal.700">
              {store.nombre}
            </Heading>
            <ChakraLink as={Link} to={`/store/${store.id}`} color="teal.500">
              Ver productos
            </ChakraLink>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Stores;