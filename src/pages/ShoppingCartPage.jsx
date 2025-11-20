import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import './ShoppingCartPage.css';

const ShoppingCartPage = ({ cart, updateQuantity, removeFromCart, getTotalItems, getTotalCost }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be implemented.');
  };

  return (
    <div className="shopping-cart-page">
      <Header totalItems={getTotalItems()} currentPage="cart" />
      <div className="cart-container">
        <h1 className="page-title">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="continue-shopping-btn" onClick={() => navigate('/products')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p className="total-items">Total Items: <strong>{getTotalItems()}</strong></p>
              <p className="total-cost">Total Cost: <strong>${getTotalCost().toFixed(2)}</strong></p>
            </div>

            <div className="cart-items">
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            <div className="cart-actions">
              <button className="continue-shopping-btn" onClick={() => navigate('/products')}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
