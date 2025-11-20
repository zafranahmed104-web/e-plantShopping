import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ totalItems, currentPage }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        <h2 className="header-logo" onClick={() => navigate('/')}>
          Paradise Nursery
        </h2>
        
        <nav className="header-nav">
          {currentPage !== 'products' && (
            <button className="nav-btn" onClick={() => navigate('/products')}>
              Products
            </button>
          )}
          
          {currentPage !== 'cart' && (
            <button className="cart-icon-btn" onClick={() => navigate('/cart')}>
              <div className="cart-icon-wrapper">
                <svg 
                  className="cart-icon" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span>
                )}
              </div>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
