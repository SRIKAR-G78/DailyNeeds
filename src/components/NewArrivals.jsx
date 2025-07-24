import React from 'react';

const newArrivals = [
  { name: 'Organic Avocado', price: 2.49, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=500' },
  { name: 'Almond Milk (New)', price: 3.99, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=500' },
  { name: 'Quinoa Chips', price: 2.99, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500' }
];

const NewArrivals = () => (
  <div>
    <h2>New Arrivals</h2>
    <ul>
      {newArrivals.map((item, idx) => (
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

export default NewArrivals; 