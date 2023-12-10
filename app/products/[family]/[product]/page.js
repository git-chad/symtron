"use client";
import React from "react";
import productsData from "../../../../public/data/Products.json";
import "./product-page.scss";
import localFont from "next/font/local";
import Image from "next/image";

const porscha = localFont({ src: "../../../../public/911porschav3.ttf" });

const Page = ({ params }) => {
  const { product: idProduct, family: idFamily } = params;

  const family = productsData.families.find((fam) => fam.name === idFamily);
  const product = family?.products.find((prod) => prod.id === idProduct);

  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h1>Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="product-typo w-screen min-h-screen flex flex-col">
      <div className="flex flex-col sm:flex-row mt-12 w-full justify-center ">
        <div className="flex flex-col sm:w-1/2 p-16 h-64 ">
          
          <h1 className={`${porscha.className} text-4xl font-bold self-center sm:self-start`}>{product.name}</h1>
          <p className="mt-4">{product.description}</p>
        </div>
        <div className="sm:w-1/2 w-full p-2 sm:p-4 sm:-mt-0  ">
          <img className="h-[700px]" src={product.images[0]}  alt={product.name} />
        </div>
      </div>

      <div className="flex flex-col p-16">
        <h2 className="">Informacion</h2>
        <div className="flex sm:flex-row flex-col space-x-4 mt-6 -ml-2">
          <img src={product.cuadro} alt="Cuadro" width={800} />

          <img
            src={product.dimensiones}
            alt={product.dimensiones}
            width={900}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
