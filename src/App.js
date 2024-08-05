import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entrega from './pages/Entrega';
import Confirmacao from './pages/Confirmacao';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Entrega />} />
      <Route path="/confirmacao" element={<Confirmacao />} />
    </Routes>
  </Router>
);

export default App;
