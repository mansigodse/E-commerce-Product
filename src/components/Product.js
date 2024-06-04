import React, { useState } from 'react';
import './styles/Product.css';

const Product = ({ product, addToCart }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`product ${isExpanded ? 'expanded' : ''}`}>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-content">
        <h2 className="product-title">{product.title}</h2>
        <p className={`product-description ${isExpanded ? 'expanded' : ''}`}>
          {product.description}
        </p>
        {product.description.split(' ').length > 20 && (
          <span className="read-more" onClick={handleReadMore}>
            {isExpanded ? 'Show less' : 'Read more'}
          </span>
        )}
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
        <div className="product-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
