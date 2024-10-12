import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Stores from '../components/Stores';
import ProductDetail from '../components/ProductDetail';
import Main from '../components/Main';

interface AppRoutesProps {
  setTitle: (title: string) => void; // Definimos el tipo del prop
}

const AppRoutes: React.FC<AppRoutesProps> = ({ setTitle }) => {
  return (
    <Routes>
      <Route path="/" element={<Stores setTitle={setTitle} />} /> {/* Pasamos setTitle a Stores */}
      <Route path="/almacen/:id" element={<Main setTitle={setTitle} />} /> {/* Pasamos setTitle a Main */}
      <Route path="/producto/:id" element={<ProductDetail setTitle={setTitle} />} /> {/* Pasamos setTitle a ProductDetail */}
    </Routes>
  );
};

export default AppRoutes;
