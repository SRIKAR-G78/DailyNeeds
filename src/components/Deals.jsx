import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

const Deals = () => {
  const deals = [
    {
      id: 1,
      name: 'Fresh Milk',
      price: 3.99,
      originalPrice: 4.99,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500',
      category: 'Dairy',
      description: 'Fresh whole milk from local farms'
    },
    {
      id: 2,
      name: 'Whole Wheat Bread',
      price: 2.49,
      originalPrice: 3.99,
      discount: 38,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
      category: 'Bakery',
      description: 'Freshly baked whole wheat bread'
    },
    {
      id: 3,
      name: 'Fresh Eggs (12)',
      price: 4.99,
      originalPrice: 6.99,
      discount: 29,
      image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500',
      category: 'Dairy',
      description: 'Farm fresh eggs, pack of 12'
    },
    {
      id: 4,
      name: 'Organic Bananas',
      price: 1.99,
      originalPrice: 2.99,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500',
      category: 'Produce',
      description: 'Organic bananas, perfect for snacking'
    }
  ]

  const specialOffers = [
    {
      id: 1,
      title: 'First Order Discount',
      description: 'Get 20% off on your first order!',
      code: 'FIRST20',
      validUntil: '2024-12-31'
    },
    {
      id: 2,
      title: 'Bulk Purchase Offer',
      description: 'Buy 3 or more items and get 15% off',
      code: 'BULK15',
      validUntil: '2024-12-31'
    },
    {
      id: 3,
      title: 'Weekend Special',
      description: 'Weekend shoppers get 25% off on selected items',
      code: 'WEEKEND25',
      validUntil: '2024-12-31'
    }
  ]

  return (
    <div className="deals-section">
      {/* Special Offers */}
      <section className="special-offers">
        <h2>Special Offers</h2>
        <div className="offers-grid">
          {specialOffers.map(offer => (
            <div key={offer.id} className="offer-card">
              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offer-code">
                  <span>Use code: </span>
                  <code>{offer.code}</code>
                </div>
                <p className="valid-until">Valid until: {offer.validUntil}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deals Products */}
      <section className="deals-products">
        <h2>Hot Deals</h2>
        <div className="products-grid">
          {deals.map(product => (
            <div key={product.id} className="deal-product-card">
              <div className="discount-badge">-{product.discount}%</div>
              <ProductCard product={product} />
              <div className="original-price">
                <span>Original: </span>
                <span className="strikethrough">${product.originalPrice}</span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/deals" className="view-all-button">View All Deals</Link>
      </section>
    </div>
  )
}

export default Deals 