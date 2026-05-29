import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPageWrapper from './pages/ServicesPageWrapper';
import IndustriesPageWrapper from './pages/IndustriesPageWrapper';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import ApplyPage from './pages/ApplyPage';
import ScrollToTop from './components/ScrollToTop';
import QuickConnect from './components/QuickConnect';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPageWrapper />} />
          <Route path="/industries" element={<IndustriesPageWrapper />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
        <Footer />
        <QuickConnect />
      </div>
    </Router>
  );
}

export default App;
