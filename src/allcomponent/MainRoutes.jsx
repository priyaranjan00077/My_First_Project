import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
    Outlet,
    useLocation,
    useNavigate,
  } from "react-router-dom";
import Home from './Home';

import AppNav from './AppNav';
import Footer from './Footer';
const MainRoutes = () => {
  return (
    <BrowserRouter>
    <AppNav/>
        <Routes>
            <Route path="/" element={<Home/>} /> 
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default MainRoutes