"use client";
import React from "react";
import productsData from "../../../../public/data/Products.json";
import Carousel from "../../../components/carousel";

const Page = ({ params }) => {
  const { product: idProduct, family: idFamily } = params;

  const family = productsData.families.find((fam) => fam.name === idFamily);
  const product = family?.products.find((prod) => prod.id === idProduct);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-row space-x-8 mt-24 w-3/5">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <div className="w-2/3">
          <Carousel images={product.images} alt={product.name + " image"} />
        </div>
      </div>

      <div className="flex flex-col w-2/5">
        <h2 className="items-center justify-center text-2xl font-bold mt-4">
          Información
        </h2>
        <img src={product.cuadro} alt="Cuadro" />
        <div className="flex flex-row space-x-4">
          {product.dimensiones.map((foto, i) => (
            <img src={foto} alt={`Dimensiones ${i}`} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
