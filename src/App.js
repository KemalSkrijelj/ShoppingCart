import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Products from "./pages/Products/Products";
import Outlet from "./pages/Outlet/Outlet";
import Cart from "./pages/Cart/Cart";
import "@mantine/notifications/styles.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <main className="main-app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/outlet" element={<Outlet />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
