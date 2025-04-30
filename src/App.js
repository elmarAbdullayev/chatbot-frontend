import React, { useState } from 'react';
import Form from './components/Form';
import Profil from './components/Profil';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [tempToken, setTempToken] = useState(localStorage.getItem('token'));

  const funk = (token) => {
    localStorage.setItem('token', token);
    setTempToken(token);  
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form funk={funk} />} />
        <Route exact path="/profil" element={<Profil token={tempToken} />} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
