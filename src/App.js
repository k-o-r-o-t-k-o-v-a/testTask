import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/homePage';
import NotFound from './pages/notFound';
import UserPage from './pages/userPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/bigdata/:id" element={<UserPage />} />
    </Routes>
  );
}

export default App;
