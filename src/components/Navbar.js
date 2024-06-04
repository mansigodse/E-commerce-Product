import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import './styles/Navbar.css';

const Navbar = ({ onSearch, cart }) => {
  const [query, setQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false); // Close the menu toggle on navigation
  }, [location]);

  const handleSearchChange = (newQuery) => {
    setQuery(newQuery);
    onSearch(newQuery);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="nav-center">
        <SearchBar query={query} onChange={handleSearchChange} />
      </div>
      <div className="nav-right">
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{getCartCount()}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
