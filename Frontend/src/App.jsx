import LoginPage from './Homepage/LoginPage'
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Homepage/LandingPage'
import ReactDom from 'react-dom/client'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>  
        <Route path="/form" element={<LandingPage />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;


