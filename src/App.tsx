import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Stores from './components/store/Stores';
import Main from './components/store/Main';
import ProductDetail from './components/product/ProductDetail';
import NotFound from './components/common/NotFound';

const App: React.FC = () => {
  const [, setTitle] = useState('Almacenes');

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Stores setTitle={setTitle} />} />
        <Route path="/store/:id" element={<Main setTitle={setTitle} />} />
        <Route path="/product/:id" element={<ProductDetail setTitle={setTitle} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
