import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ IMPORT THESE
import Header from './components/header';
import Home from './pages/home';
import Genres from './pages/Genres'
import Toprated from './pages/TopRated'
import ProfilePages from './pages/profilePages' // ✅ IMPORT THESE;
import About from './pages/about'
import BlogPage from './pages/BlogPage'
import Contact from './pages/contact'
import Footer from './components/footer'



import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Genres" element={<Genres />} />
        <Route path="/Toprated" element={<Toprated />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<ProfilePages />} />
         <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;