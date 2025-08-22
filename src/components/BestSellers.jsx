import React from 'react';

const bestSellers = [
  { name: 'Fresh Milk', price: 3.99, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500' },
  { name: 'Whole Wheat Bread', price: 2.49, image: 'https://imgs.search.brave.com/50FTzgPtlLJtIM2KaZry2RhU7SZ4qQNSgit4SMPidYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzI0LzE2Lzc3/LzM2MF9GXzE1MjQx/Njc3MjRfaGNycUlD/ODJDeXE1WlhmWlJK/VGVqWnUzMXNQeUs2/dUguanBn' },
  { name: 'Potato Chips', price: 3.29, image: 'https://imgs.search.brave.com/041AGMh0UyenoMRq7EPF8aSpxMZlNue8yx-tLf4Vp4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wb3Rh/dG8tY2hpcHMtMzYy/NzQyMC5qcGc' }
];

const BestSellers = () => (
  <div>
    <h2>Best Sellers</h2>
    <ul className='new-arrivals'>
      {bestSellers.map((item, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={item.image} alt={item.name} style={{ width: 200, height: 150, objectFit: 'cover', marginRight: 16, borderRadius: 8 }} />
          <div>
            <strong>{item.name}</strong> - ${item.price}
          </div>
        </li>
      ))}
      {bestSellers.map((item, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={item.image} alt={item.name} style={{ width: 200, height: 150, objectFit: 'cover', marginRight: 16, borderRadius: 8 }} />
          <div>
            <strong>{item.name}</strong> - ${item.price}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default BestSellers; 