import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
