import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ cartCount, isAuthenticated, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">DailyNeeds</Link>
        <button className="mobile-menu-btn" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          ☰
        </button>
        <div className={`nav-links ${showMobileMenu ? 'show' : ''}`}>
          <div className="nav-item">
            <Link to="/products">Products</Link>
            <div className="dropdown">
              <Link to="/products/dairy">Dairy & Eggs</Link>
              <Link to="/products/bakery">Bakery</Link>
              <Link to="/products/produce">Produce</Link>
              <Link to="/products/meat">Meat & Seafood</Link>
              <Link to="/products/grains">Grains & Pasta</Link>
            </div>
          </div>
          <div className="nav-item">
            <Link to="/categories">Categories</Link>
            <div className="dropdown">
              <Link to="/categories/new">New Arrivals</Link>
              <Link to="/categories/bestsellers">Best Sellers</Link>
              <Link to="/categories/sale">Sale Items</Link>
            </div>
          </div>
          <Link to="/deals">Deals</Link>
          {isAuthenticated && <Link to="/orders">My Orders</Link>}
        </div>
      </div>

      <div className="nav-right">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button>🔍</button>
        </div>
        <div className="nav-icons">
          {isAuthenticated ? (
            <div className="nav-item">
              <button className="user-btn" onClick={() => setShowDropdown(!showDropdown)}>
                👤
              </button>
              <div className={`dropdown ${showDropdown ? 'show' : ''}`}>
                <Link to="/profile">My Profile</Link>
                <Link to="/orders">My Orders</Link>
                <Link to="/wishlist">Wishlist</Link>
                <button onClick={onLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="auth-btn">Login</Link>
          )}
          <Link to="/wishlist" className="icon-btn">❤️</Link>
          <Link to="/cart" className="cart-icon">
            🛒 <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 