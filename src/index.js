import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Navbar_Item from "./components/Navbar/Navbar_Item";
import Singlepage from "./pages/singlePage/Singlepage";

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
  </React.StrictMode>
);
