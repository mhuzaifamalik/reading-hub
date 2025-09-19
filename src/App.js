import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Genres from './pages/Genres'
import Toprated from './pages/TopRated'
import ProfilePages from './pages/profilePages'
import About from './pages/about'
import BlogPage from './pages/BlogPage'
import Contact from './pages/contact'
import ProductPage from './pages/ProductPage'
import CheckOutn from './pages/Cart'
import ProductDec from './pages/Productdescription'
import ConfirmCheck from "./pages/ConfirmCheck";
import Cart from './pages/CheckOut'
import BloggerProfile from './pages/bloggerProfile';
import ProfileSuesscess from './pages/BloggerProfileSuccess'
import Thankyou from './pages/Thankyou';
import BloggerLogin from './pages/BloggerLogin'
import Dashboard from './pages/bloggerdashboard'
import Bloggingform from './pages/blogUpload'
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
        <Route path="/seller/login" element={<BloggerLogin />} />
        <Route path="/ProductPage" element={<ProductPage />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Bloggingform />} />
        <Route path="/successfull" element={<ProfileSuesscess />} />
        <Route path="/ProductDec" element={<ProductDec />} />
        <Route path="/CheckOutn" element={<CheckOutn />} />
        <Route path="/bloggerProfile" element={<BloggerProfile />} />
        <Route path="/CheckoutPage" element={<Cart />} />
        <Route path="/ConfirmCheck" element={<ConfirmCheck />} />
        <Route path="/Thankyou" element={<Thankyou />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;