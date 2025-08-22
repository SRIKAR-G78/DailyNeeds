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
      image: 'https://imgs.search.brave.com/DbPpJniMEelrccwY4l3-W7jlW6o7XXjKafcZcc0MtxI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzEv/Njk3LzQ3MS9zbWFs/bC9nbGFzcy1waXRj/aGVyLXdpdGgtZnJl/c2gtbWlsay1vbi1h/LXdvb2Rlbi10YWJs/ZS1haS1nZW5lcmF0/ZWQtZnJlZS1waG90/by5qcGc',
      category: 'Dairy',
      description: 'Fresh whole milk from local farms'
    },
    {
      id: 2,
      name: 'Whole Wheat Bread',
      price: 2.49,
      image: 'https://imgs.search.brave.com/50FTzgPtlLJtIM2KaZry2RhU7SZ4qQNSgit4SMPidYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzI0LzE2Lzc3/LzM2MF9GXzE1MjQx/Njc3MjRfaGNycUlD/ODJDeXE1WlhmWlJK/VGVqWnUzMXNQeUs2/dUguanBn',
      category: 'Bakery',
      description: 'Freshly baked whole wheat bread'
    },
    {
      id: 3,
      name: 'Fresh Eggs (12)',
      price: 4.99,
      image: 'https://imgs.search.brave.com/6CAdMu5h-kbLdGT-Xbj4NQvxlPMGpdHmTExXe9uoh4Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mcmVl/LXJhbmdlLWhlbnMt/ZWdncy1iYXNrZXQt/ZnJlc2gtYnJvd24t/d2lyZS01NzAwMDY5/OS5qcGc',
      category: 'Dairy',
      description: 'Farm fresh eggs, pack of 12'
    },
    {
      id: 4,
      name: 'Organic Bananas',
      price: 1.99,
      image: 'https://imgs.search.brave.com/OaOc9RpdLyO3KRNsnOUWGxoKQ-YtUguxvzhOGFCy17o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE0ZUFzRENieEwu/anBn',
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