import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <Box textAlign="center" mt={20}>
    <Heading color="red.500">404</Heading>
    <Text mb={4}>Página no encontrada</Text>
    <Button as={Link} to="/" colorScheme="teal">
      Volver al Inicio
    </Button>
  </Box>
);

export default NotFound;