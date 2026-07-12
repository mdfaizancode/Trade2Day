import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter , Routes , Route}  from "react-router-dom";

import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/signup/SignUp';
import About from './landing_page/about/About';
import Product from './landing_page/product/Product';
import Pricing from './landing_page/pricing/Pricing';
import Support from './landing_page/support/Support';
import ErrorPage from './landing_page/ErrorPage';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import BrokeragePower from "./landing_page/pricing/BrokeragePower";
import BrokeragePricing from './landing_page/pricing/BrokeragePricing';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Navbar/>
  <Routes>

    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signUp" element={<SignUp/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/support" element={<Support/>}></Route>
    <Route path="/*" element={<ErrorPage/>}></Route>
     
    <Route path="/pricing/Brokerage/Power" element={<BrokeragePower/>}></Route>
    <Route path="/pricing/Brokerage/Pricing" element={<BrokeragePricing/>}></Route>
  
  </Routes>
  <Footer/>
  </BrowserRouter>
);
