import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Main from './components/Main'
import NewArrivals from './components/NewArrivals'
import BestSellers from './components/BestSellers'
import SaleItems from './components/SaleItems'
import Deals from './components/Deals'
import './App.css'

// Pages
const Home = () => (
  <div className="home-page">
    <h1>Welcome to DailyNeeds</h1>
    <p>Your one-stop shop for daily essentials</p>
  </div>
)

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500" alt="Product" />
      </div>
      <div className="product-info">
        <h1>Fresh Milk</h1>
        <p className="price">$3.99</p>
        <p className="description">Fresh whole milk from local farms. Rich in calcium and essential nutrients.</p>
        <div className="quantity">
          <button>-</button>
          <input type="number" value="1" min="1" />
          <button>+</button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  )
}

const Cart = () => {
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {/* Cart items would be mapped here */}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>$0.00</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>$0.00</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>$0.00</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  )
}

const Checkout = () => {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-form">
        <div className="form-section">
          <h2>Shipping Information</h2>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postal Code" />
        </div>
        <div className="form-section">
          <h2>Payment Information</h2>
          <input type="text" placeholder="Card Number" />
          <div className="card-details">
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVC" />
          </div>
        </div>
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  )
}

const Orders = () => {
  return (
    <div className="orders-page">
      <h1>Order History</h1>
      <div className="orders-list">
        {/* Orders would be mapped here */}
      </div>
    </div>
  )
}

const Login = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h1>Login</h1>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  )
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <Navbar 
          cartCount={cartCount} 
          isAuthenticated={isAuthenticated}
          onLogout={() => setIsAuthenticated(false)}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories/new" element={<NewArrivals />} />
            <Route path="/categories/bestsellers" element={<BestSellers />} />
            <Route path="/categories/sale" element={<SaleItems />} />
            <Route path="/deals" element={<Deals />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
