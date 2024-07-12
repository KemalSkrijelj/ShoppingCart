import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Products from "./pages/Products/Products";
import Outlet from "./pages/Outlet/Outlet";
import Cart from "./pages/Cart/Cart";
import json from "./common/products.json";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {json.map((item, index) => Object.assign(item, { index }))}
        {json.map((item, stock) => Object.assign(item, { stock }))}
        <Footer />
      </div>
    </>
  );
}

export default App;
