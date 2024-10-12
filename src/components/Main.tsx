import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Stores from './Stores';
import ProductDetail from './ProductDetail';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Main: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box as="main" flex="1">
        <Routes>
          <Route path="/stores" element={<Stores />} />
          <Route path="/store/:id" element={<ProductDetail />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default Main;
