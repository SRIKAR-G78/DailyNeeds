import React from 'react';

const saleItems = [
  { name: 'Ice Cream (20% Off)', price: 3.99, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500' },
  { name: 'Chicken Thighs (10% Off)', price: 6.29, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=500' },
  { name: 'Orange Juice (15% Off)', price: 3.39, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500' }
];

const SaleItems = () => (
  <div>
    <h2>Sale Items</h2>
    <ul>
      {saleItems.map((item, idx) => (
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

export default SaleItems; 