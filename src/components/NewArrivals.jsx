import React from 'react';

const newArrivals = [
  { name: 'Organic Avocado', price: 2.49, image: 'https://imgs.search.brave.com/_Cae26aHf5mYiotkcQw4OS9BUVzSNMFV7NdD7NAHzWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/emF2YXJhbmNoLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8xMC9QMTEzMDk2/My1zY2FsZWQtZTE2/NzQxNTU2ODg0MTAu/anBn' },
  { name: 'Almond Milk (New)', price: 3.99, image: 'https://imgs.search.brave.com/Ae_GB7RnnKpam2A_HRrBU3MDbsoQE6dILB3cMi2_jX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE0LzU2Lzk5/LzM2MF9GXzIxNDU2/OTk2OV9wTHM4ZWxH/NjZDZWlFaFoweURO/bTA5dDdkZ3FoZWlC/Sy5qcGc' },
  { name: 'Quinoa Chips', price: 2.99, image: 'https://imgs.search.brave.com/cACmLi0iHx_-uLm4sVOMMfnYSm7GbLNgrR7ZqvvhmR0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb25r/ZXlhbmRtZWtpdGNo/ZW5hZHZlbnR1cmVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wNS9RdWlu/b2EtWmFhdGFyLUNo/aXBzXzAzLmpwZw' }
];

const NewArrivals = () => (
  <div >
    <h2>New Arrivals</h2>
    <ul className='new-arrivals'>
      {newArrivals.map((item, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={item.image} alt={item.name} style={{ width: 200, height: 150, objectFit: 'cover', marginRight: 16, borderRadius: 8 }} />
          <div>
            <strong>{item.name}</strong> - ${item.price}
          </div>
        </li>
      ))}
      {newArrivals.map((item, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={item.image} alt={item.name} style={{ width: 200, height: 150, objectFit: 'cover', marginRight: 16, borderRadius: 8 }} />
          <div>
            <strong>{item.name}</strong> - ${item.price}
          </div>
        </li>
      ))}
      {newArrivals.map((item, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={item.image} alt={item.name} style={{ width: 200, height: 150, objectFit: 'cover', marginRight: 16, borderRadius: 8 }} />
          <div>
            <strong>{item.name}</strong> - ${item.price}
          </div>
        </li>
      ))}
      {newArrivals.map((item, idx) => (
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

export default NewArrivals; 