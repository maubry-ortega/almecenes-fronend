import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Stores from './components/Stores';
import ProductList from './components/ProductList';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Stores />} />
        <Route path="/store/:id" element={<ProductList />} />
      </Routes>
    </Layout>
  );
};

export default App;
