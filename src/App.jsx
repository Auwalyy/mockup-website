// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Bookings from './pages/Bookings';
import Landing from './pages/landing';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16"> 
        <Routes>
          <Route path="/" element={<Landing />} />
      
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;