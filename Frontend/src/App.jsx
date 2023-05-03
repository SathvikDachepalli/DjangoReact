import LoginPage from './Homepage/LoginPage'
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Homepage/LandingPage'
import ReactDom from 'react-dom/client'




function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/form" element={<LoginPage />}/>  
        <Route path="/" element={<LandingPage />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;


