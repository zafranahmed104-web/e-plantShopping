import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, where green meets serenity! We are passionate about bringing
            nature closer to you. Our extensive collection of houseplants is carefully curated to
            enhance your living spaces with beauty, freshness, and tranquility. Whether you're a
            seasoned plant enthusiast or just beginning your green journey, we have the perfect
            plants for every corner of your home. Explore our wide variety of aromatic, medicinal,
            air-purifying, and decorative plants that not only beautify your space but also promote
            a healthier and more peaceful lifestyle.
          </p>
          <button className="get-started-btn" onClick={() => navigate('/products')}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
