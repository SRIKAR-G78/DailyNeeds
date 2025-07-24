import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import Categories from './Categories'
import Deals from './Deals'

const Main = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Fresh Milk',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500',
      category: 'Dairy',
      description: 'Fresh whole milk from local farms'
    },
    {
      id: 2,
      name: 'Whole Wheat Bread',
      price: 2.49,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
      category: 'Bakery',
      description: 'Freshly baked whole wheat bread'
    },
    {
      id: 3,
      name: 'Fresh Eggs (12)',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500',
      category: 'Dairy',
      description: 'Farm fresh eggs, pack of 12'
    },
    {
      id: 4,
      name: 'Organic Bananas',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500',
      category: 'Produce',
      description: 'Organic bananas, perfect for snacking'
    }
  ]

  return (
    <div className="main">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to DailyNeeds</h1>
          <p>Your one-stop shop for daily essentials</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Categories Section */}
      <Categories />

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/products" className="view-all-button">View All Products</Link>
      </section>

      {/* Deals Section */}
      <Deals />

      {/* Why Choose Us */}
      <section className="features">
        <h2>Why Choose DailyNeeds?</h2>
        <div className="features-grid">
          <div className="feature">
            <span className="feature-icon">🚚</span>
            <h3>Fast Delivery</h3>
            <p>Same day delivery for local orders</p>
          </div>
          <div className="feature">
            <span className="feature-icon">✨</span>
            <h3>Quality Products</h3>
            <p>Fresh and high-quality items</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💰</span>
            <h3>Best Prices</h3>
            <p>Competitive prices and regular deals</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🛡️</span>
            <h3>Secure Shopping</h3>
            <p>Safe and secure payment options</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main 