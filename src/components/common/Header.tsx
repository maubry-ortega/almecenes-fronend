import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  const location = useLocation();

  // Cambiar el título dinámico según la ruta
  const getTitle = () => {
    if (location.pathname === '/') return 'Almacenes';
    if (location.pathname.includes('/stores')) return 'Detalle del Almacén';
    if (location.pathname.includes('/product')) return 'Detalle del Producto';
    return 'Almacenes';
  };

  return (
    <Box as="header" bg="teal.500" color="white" p={4} display="flex" justifyContent="space-between" alignItems="center">
      <Text fontSize="2xl">{getTitle()}</Text>
      <FaUser size="24" />
    </Box>
  );
};

export default Header;