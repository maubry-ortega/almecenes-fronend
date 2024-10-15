import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box as="main" flex="1" p={4}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;