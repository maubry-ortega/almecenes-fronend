import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Stores from './components/Stores';
import Main from './components/Main';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  const [title, setTitle] = useState('Almacenes');

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
