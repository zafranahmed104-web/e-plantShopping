import React from 'react';
import './ProductCard.css';
const ProductCard = ({ product, onAddToCart, isInCart }) => {
 const handleAddToCart = () => {
  if (!isInCart) {
    onAddToCart(product);
  }
};

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
       <button 
  className="add-to-cart-btn" 
  onClick={handleAddToCart}
  disabled={isInCart}
>
  {isInCart ? 'Already in Cart' : 'Add to Cart'}
</button>
      </div>
    </div>
  );
};

export default ProductCard;
