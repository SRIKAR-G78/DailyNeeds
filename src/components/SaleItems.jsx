import React from 'react';
import './SaleItems.css'; // Add this line

const saleItems = [
  { name: 'Ice Cream (20% Off)', price: 3.99, image: 'https://imgs.search.brave.com/tr-M__7cTiFcIL2T_-dVTI2yoIOg4aklbwUNNrtvhE8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aWNlLWNyZWFtLWNv/bmUuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA' },
  { name: 'Chicken Thighs (10% Off)', price: 6.29, image: 'https://imgs.search.brave.com/PrDBFOoneo45joGTIV9xGKK5d2etsJneNwAfI_sKXdc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/ODE3Mzc4MS9waG90/by9yb2FzdGVkLWNo/aWNrZW4tdGhpZ2hz/LXNlYXNvbmVkLXdp/dGgtZ2FybGljLWFu/ZC1oZXJicy1pbi1h/LWJha2luZy1kaXNo/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1wbGZfbFJza2Q4/azRwQkRsWXhGYUdo/WmVaTGVjdmFfR3dH/LUJEVkYxaVBJPQ' },
  { name: 'Orange Juice (15% Off)', price: 3.39, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500' }
];

const SaleItems = () => (
  <div>
    <h2>Sale Items</h2>
    <ul className='new-arrivals'>
      {saleItems.map((item, idx) => (
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

export default SaleItems;