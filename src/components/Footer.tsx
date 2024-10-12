import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="teal.500" color="white" p={4} textAlign="center">
      <Text>© 2024 Tienda Virtual</Text>
    </Box>
  );
};

export default Footer;
