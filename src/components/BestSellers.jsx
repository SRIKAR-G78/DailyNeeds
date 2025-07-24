import React from 'react';

const bestSellers = [
  { name: 'Fresh Milk', price: 3.99, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500' },
  { name: 'Whole Wheat Bread', price: 2.49, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500' },
  { name: 'Potato Chips', price: 3.29, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500' }
];

const BestSellers = () => (
  <div>
    <h2>Best Sellers</h2>
    <ul>
      {bestSellers.map((item, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={item.image} alt={item.name} style={{ width: 60, height: 60, objectFit: 'cover', marginRight: 16, borderRadius: 8 }} />
          <div>
            <strong>{item.name}</strong> - ${item.price}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default BestSellers; 