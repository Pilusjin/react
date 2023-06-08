import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CheckoutSuccessPage } from './pages/CheckoutSuccessPage';
import { ProductPage } from './pages/ProductPage';


function App() {
    const [shoppingCart, setShoppingCart] = useState([])

    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage shoppingCart={shoppingCart} />} />
          <Route path="/product/:id" element={<ProductPage shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>} />
          <Route path="/checkout" element={<CheckoutPage shoppingCart={shoppingCart}/>} />
          <Route path="/checkout/success" element={<CheckoutSuccessPage shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>} />
          <Route path="/contact" element={<ContactPage shoppingCart={shoppingCart} />} />
        </Routes>
      </Router>
    );
  }
  
export default App;
