import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import CartCount from "./CartCount";

function App() {
  
  <CartCount />
  return (
    <>
  <CartCount />
    <Routes>
      <Route path="/shoppingreact" element={<Landing />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
    </>
  );
}

export default App;
