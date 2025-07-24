import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const categories = [
    { 
      id: 1, 
      name: 'Dairy & Eggs', 
      icon: '🥛', 
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500',
      description: 'Fresh dairy products and farm eggs'
    },
    { 
      id: 2, 
      name: 'Bakery', 
      icon: '🍞', 
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
      description: 'Freshly baked bread and pastries'
    },
    { 
      id: 3, 
      name: 'Produce', 
      icon: '🥬', 
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500',
      description: 'Fresh fruits and vegetables'
    },
    { 
      id: 4, 
      name: 'Meat & Seafood', 
      icon: '🥩', 
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500',
      description: 'Quality meat and fresh seafood'
    },
    { 
      id: 5, 
      name: 'Snacks', 
      icon: '🍪', 
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500',
      description: 'Delicious snacks and treats'
    },
    { 
      id: 6, 
      name: 'Beverages', 
      icon: '🥤', 
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500',
      description: 'Refreshing drinks and juices'
    },
    { 
      id: 7, 
      name: 'Frozen Foods', 
      icon: '❄️', 
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500',
      description: 'Frozen meals and desserts'
    },
    { 
      id: 8, 
      name: 'Household', 
      icon: '🧹', 
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500',
      description: 'Home essentials and cleaning supplies'
    }
  ]

  return (
    <div className="categories-section">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map(category => (
          <Link to={`/products/${category.name.toLowerCase()}`} key={category.id} className="category-card">
            <div className="category-image">
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories 