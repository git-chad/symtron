
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Carousel from '../carousel';

const ProductComponent = () => {
    const [product, setProduct] = useState(null); // Inicializa product como null

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('/data/Products.json');
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  // Verifica si product existe antes de acceder a sus propiedades
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="">
      <div className="flex flex-row w-screen">
        <div className="flex flex-col">
          <h2>{product.families[0].products[0].images[0]}</h2>
        </div>
      </div>
    </main>
  );
};

export default ProductComponent;
