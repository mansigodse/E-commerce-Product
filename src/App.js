import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Contact from './components/Contact';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const clearCart = () => {
    setCart([]);
  };
  
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Router>
      <Navbar onSearch={setSearchQuery} cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Products searchQuery={searchQuery} addToCart={addToCart} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} getTotalPrice={getTotalPrice} removeFromCart={removeFromCart} clearCart={clearCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
