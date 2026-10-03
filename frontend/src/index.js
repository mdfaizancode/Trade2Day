import React from 'react'; // authentications 
import ReactDOM from 'react-dom/client';
import "./authentication/auth.css";
import './index.css';
import {GoogleOAuthProvider} from '@react-oauth/google';
import { useEffect, useState } from 'react';
import RefreshHandler from './authentication/RefreshHandler';
import Login from './authentication/Login';

import {BrowserRouter , Routes , Route}  from "react-router-dom";

import HomePage from './landing_page/home/HomePage';
import SignUpPage from './authentication/SignUp';
import About from './landing_page/about/About';
import Product from './landing_page/product/Product';
import Pricing from './landing_page/pricing/Pricing';
import Support from './landing_page/support/Support';
import ErrorPage from './landing_page/ErrorPage';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import BrokeragePower from "./landing_page/pricing/BrokeragePower";
import BrokeragePricing from './landing_page/pricing/BrokeragePricing';


const GoogleAuthWrapper = () => (
  <GoogleOAuthProvider clientId="196236797601-ids2nicgqu77ni97lhmt48nuo7hamjs0.apps.googleusercontent.com">
    <Login />
  </GoogleOAuthProvider>
)

const App = ()=>{

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('trade2day-theme') || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('trade2day-theme', theme);
  }, [theme]);

  return(

  <BrowserRouter>
  <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
  
  <Navbar
    isAuthenticated={isAuthenticated}
    setIsAuthenticated={setIsAuthenticated}
    theme={theme}
    setTheme={setTheme}
  />
  <Routes>

    <Route path="/login" element={<GoogleAuthWrapper/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/SignUp" element={<SignUpPage/>}/>

    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/pricing/Brokerage/Power" element={<BrokeragePower/>}></Route>
    <Route path="/pricing/Brokerage/Pricing" element={<BrokeragePricing/>}></Route>
    <Route path="/support" element={<Support/>}></Route>
    <Route path="*" element={<ErrorPage/>}></Route>
  
  </Routes>
  <Footer/>
  </BrowserRouter>

  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
