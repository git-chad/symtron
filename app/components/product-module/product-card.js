import React from 'react';
import RectangleButton from '../rectangle-button/rectangle-btn';

const ProductCard = ({ product, family }) => {
    return (
      <div className="border rounded p-4">
        <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover mb-4" />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.title}</p>
        <RectangleButton
          href="/products/[family]/[product]"
          as={`/products/${family.name}/${product.id}`}
          label={family.ctaLabel}
          magneticEffect={true}
        />
      </div>
    );
  };
  
  

export default ProductCard;