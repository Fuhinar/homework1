import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <div className="product-category">{product.category}</div>
          <div className="product-title">{product.title}</div>
          <div className="product-price">{`$${product.price}`}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
