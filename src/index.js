import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Navbar_Item from "./components/Navbar/Navbar_Item";
import Singlepage from "./pages/singlePage/Singlepage";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/single/:id" element={<Singlepage />} />
      </Routes>
    </BrowserRouter>
    <App />
  </BrowserRouter>
   
  </React.StrictMode >
);
