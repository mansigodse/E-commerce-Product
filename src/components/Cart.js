import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Cart.css';

const Cart = ({ cart, getTotalPrice, removeFromCart, clearCart }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handlePurchase = () => {
    setShowPopup(true);
  };

  const confirmPurchase = () => {
    setShowPopup(false);
    setOrderSuccess(true);
    clearCart();
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your Cart is empty</p>
          <Link to="/" className="shopping-now-button">
            <i className="fas fa-shopping-cart"></i> Shop Now
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">${item.price} x {item.quantity}</p>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <h3 className="total-price">Total Price: ${getTotalPrice()}</h3>
          <button className="purchase-button" onClick={handlePurchase}>
            <i className="fas fa-shopping-cart"></i> Purchase
          </button>
        </>
      )}
      
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Confirm Purchase</h3>
            <p>Are you sure you want to complete this purchase?</p>
            <button className="popup-button" onClick={confirmPurchase}>OK</button>
            <button className="popup-button" onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {orderSuccess && (
        <div className="success-message">
          <p>Order successfully placed!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
