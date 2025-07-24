import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const ProductList = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [products] = useState([
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
    },
    {
      id: 5,
      name: 'Chicken Breast',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500',
      category: 'Meat',
      description: 'Fresh boneless chicken breast'
    },
    {
      id: 6,
      name: 'Brown Rice',
      price: 4.49,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500',
      category: 'Grains',
      description: 'Organic brown rice, 2lb bag'
    },
    {
      id: 7,
      name: 'USDA Choice Beef Ribeye',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500',
      category: 'Meat & Seafood',
      description: 'Premium ribeye steak, perfect for grilling.'
    },
    {
      id: 8,
      name: 'Fresh Salmon Fillet',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
      category: 'Meat & Seafood',
      description: 'Wild-caught salmon fillet, rich in omega-3.'
    },
    {
      id: 9,
      name: 'Shrimp (Raw, 1 lb)',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=500',
      category: 'Meat & Seafood',
      description: 'Raw, shell-on shrimp, perfect for seafood dishes.'
    },
    {
      id: 10,
      name: 'Chicken Thighs',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=500',
      category: 'Meat & Seafood',
      description: 'Juicy chicken thighs, great for roasting or grilling.'
    },
    {
      id: 11,
      name: 'Lobster Tail',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
      category: 'Meat & Seafood',
      description: 'Premium lobster tail, wild-caught and fresh.'
    },
    // Grains & Pasta
    {
      id: 12,
      name: 'Spaghetti Pasta',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
      category: 'Grains & Pasta',
      description: 'Classic Italian spaghetti pasta.'
    },
    {
      id: 13,
      name: 'Quinoa',
      price: 5.49,
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=500',
      category: 'Grains & Pasta',
      description: 'Organic white quinoa, 1lb bag.'
    },
    // Snacks
    {
      id: 14,
      name: 'Potato Chips',
      price: 3.29,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
      category: 'Snacks',
      description: 'Crispy salted potato chips.'
    },
    {
      id: 15,
      name: 'Chocolate Chip Cookies',
      price: 4.19,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
      category: 'Snacks',
      description: 'Freshly baked chocolate chip cookies.'
    },
    // Beverages
    {
      id: 16,
      name: 'Orange Juice',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500',
      category: 'Beverages',
      description: '100% pure orange juice.'
    },
    {
      id: 17,
      name: 'Green Tea',
      price: 2.49,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500',
      category: 'Beverages',
      description: 'Refreshing green tea bags.'
    },
    // Frozen Foods
    {
      id: 18,
      name: 'Frozen Pizza',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500',
      category: 'Frozen Foods',
      description: 'Cheese and tomato frozen pizza.'
    },
    {
      id: 19,
      name: 'Ice Cream',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500',
      category: 'Frozen Foods',
      description: 'Vanilla ice cream tub.'
    },
    // Dairy & Eggs
    {
      id: 20,
      name: 'Cheddar Cheese',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500',
      category: 'Dairy & Eggs',
      description: 'Sharp cheddar cheese block.'
    },
    {
      id: 21,
      name: 'Greek Yogurt',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500',
      category: 'Dairy & Eggs',
      description: 'Plain Greek yogurt, 32oz.'
    },
    // Bakery
    {
      id: 22,
      name: 'Croissants',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
      category: 'Bakery',
      description: 'Buttery French croissants.'
    },
    {
      id: 23,
      name: 'Blueberry Muffins',
      price: 4.29,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
      category: 'Bakery',
      description: 'Fresh blueberry muffins.'
    },
    // Produce
    {
      id: 24,
      name: 'Red Apples',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500',
      category: 'Produce',
      description: 'Crisp and sweet red apples.'
    },
    {
      id: 25,
      name: 'Broccoli',
      price: 1.89,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500',
      category: 'Produce',
      description: 'Fresh green broccoli crowns.'
    },
    // Household
    {
      id: 26,
      name: 'Paper Towels',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500',
      category: 'Household',
      description: 'Absorbent paper towels for cleaning.'
    },
    {
      id: 27,
      name: 'Laundry Detergent',
      price: 8.49,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500',
      category: 'Household',
      description: 'Liquid laundry detergent for fresh clothes.'
    },
    {
      id: 28,
      name: 'Dish Soap',
      price: 3.29,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500',
      category: 'Household',
      description: 'Gentle dish soap for sparkling clean dishes.'
    },
    {
      id: 29,
      name: 'All-Purpose Cleaner',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500',
      category: 'Household',
      description: 'Versatile cleaner for all surfaces.'
    }
  ])

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏪' },
    { id: 'dairy', name: 'Dairy & Eggs', icon: '🥛' },
    { id: 'bakery', name: 'Bakery', icon: '🍞' },
    { id: 'produce', name: 'Produce', icon: '🥬' },
    { id: 'meat', name: 'Meat & Seafood', icon: '🥩' },
    { id: 'grains', name: 'Grains & Pasta', icon: '🍚' },
    { id: 'snacks', name: 'Snacks', icon: '🍪' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
    { id: 'frozen', name: 'Frozen Foods', icon: '❄️' },
    { id: 'household', name: 'Household', icon: '🧹' }
  ]

  // Determine the effective category to filter by
  let effectiveCategory = selectedCategory;
  if (category) {
    const found = categories.find(cat => cat.id === category);
    effectiveCategory = found ? found.name : 'All Products';
  }

  const filteredProducts = effectiveCategory === 'All Products'
    ? products
    : products.filter(product => product.category.toLowerCase() === effectiveCategory.toLowerCase())

  return (
    <div className="products-page">
      <div className="filters">
        <h2>Categories</h2>
        <ul className="category-list">
          {categories.map(cat => (
            <li 
              key={cat.id}
              className={effectiveCategory === cat.name ? 'active' : ''}
              onClick={() => setSelectedCategory(cat.name)}
            >
              <span className="category-icon">{cat.icon}</span>
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList 