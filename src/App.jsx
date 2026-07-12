import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fire from './pages/Fire';
import Register from './pages/Register';
import Stay from './pages/Stay';

function App() {
  return (
    <Router>
      {/* Custom Global Preloader */}
      <Loader />
      
      {/* Header / Top Navigation */}
      <Navbar />
      
      {/* Route Views */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Fire />} />
        <Route path="/register-offline" element={<Register />} />
        <Route path="/closed" element={<Stay />} />
      </Routes>
      
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
