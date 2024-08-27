import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/Products";
import Services from "./pages/services";

const App = () => {
  const [counter, UpdatedCounter] = useState(0);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/services" Component={Services}></Route>
            <Route path="/products" Component={Product}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
