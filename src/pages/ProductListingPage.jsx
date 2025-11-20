import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './ProductListingPage.css';

const ProductListingPage = ({ cart, addToCart, getTotalItems }) => {
  const categories = ['Air Purifying Plants', 'Aromatic Plants', 'Medicinal Plants', 'Low Maintenance Plants'];

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };

  return (
    <div className="product-listing-page">
      <Header totalItems={getTotalItems()} currentPage="products" />
      <div className="products-container">
        <h1 className="page-title">Our Plant Collection</h1>
        {categories.map(category => {
          const categoryProducts = getProductsByCategory(category);
          if (categoryProducts.length === 0) return null;
          
          return (
            <div key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="products-grid">
                {categoryProducts.map(product => {
  const isInCart = cart.some(item => item.id === product.id);
  return (
    <ProductCard 
      key={product.id}
      product={product}
      onAddToCart={addToCart}
      isInCart={isInCart}
    />
  );
})}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
