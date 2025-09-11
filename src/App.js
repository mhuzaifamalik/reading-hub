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
import ProductPage from './pages/ProductPage'
import CheckOutn from './pages/Cart'
import ProductDec from './pages/Productdescription'
import ConfirmCheck from "./pages/ConfirmCheck";
import Cart from './pages/CheckOut'
import Thankyou from './pages/Thankyou';
import Footer from './components/footer'
import './index.css';



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
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/ProductDec" element={<ProductDec />} />
        <Route path="/CheckOutn" element={<CheckOutn />} />
        <Route path="/CheckoutPage" element={<Cart />} />
        <Route path="/ConfirmCheck" element={<ConfirmCheck />} />
        <Route path="/Thankyou" element={<Thankyou />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;