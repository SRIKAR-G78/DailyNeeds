import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
      </Link>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard 