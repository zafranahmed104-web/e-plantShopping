import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    onUpdateQuantity(item.id, item.quantity - 1);
  };

  const handleDelete = () => {
    onRemove(item.id);
  };

  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item-quantity">
        <button className="quantity-btn" onClick={handleDecrease}>-</button>
        <span className="quantity-display">{item.quantity}</span>
        <button className="quantity-btn" onClick={handleIncrease}>+</button>
      </div>

      <div className="cart-item-subtotal">
        <p>Subtotal: ${subtotal}</p>
      </div>

      <button className="delete-btn" onClick={handleDelete}>
        <svg 
          width="20" 
          height="20" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
            clipRule="evenodd" 
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
