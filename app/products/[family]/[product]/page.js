"use client";
import React from "react";
import productsData from "../../../../public/data/Products.json";
import Carousel from "../../../components/carousel";
import "./product-page.scss";
import RectangleButton from "@/app/components/rectangle-button/rectangle-btn";
import localFont from 'next/font/local'
import Image from "next/image";

const porscha = localFont({ src: '../../../../public/911porschav3.ttf' })

const Page = ({ params }) => {
  const { product: idProduct, family: idFamily } = params;

  const family = productsData.families.find((fam) => fam.name === idFamily);
  const product = family?.products.find((prod) => prod.id === idProduct);

  if (!product) {
    return <div className="w-full min-h-screen flex items-center justify-center"><h1>Producto no encontrado</h1></div>;
  }

  return (
    <div className="product-typo w-screen min-h-screen flex flex-col">
      <div className="flex flex-col sm:flex-row mt-24 w-full justify-center">
        <div className="flex flex-col sm:w-1/2 p-16">
          <h1 className={`${porscha.className} text-4xl font-bold self-center sm:self-start`}>{product.name}</h1>
          <p className="mt-4">{product.description}</p>
          <div className="sm:w-1/5 mt-8 sm:mt-16 self-center">
            
          </div>
        </div>
        <div className="sm:w-1/2 w-full p-2 sm:p-4 -mt-48 sm:-mt-0">
          <Image src={product.images[0]} width={1000} height={0}/>
        </div>
      </div>

      <div className="flex flex-col p-16">
        <h2 className="items-center justify-center text-2xl font-bold mt-4">
          Información
        </h2>
        <img src={product.cuadro} alt="Cuadro" />
        <div className="flex flex-row space-x-4">
          {product.dimensiones.map((img, i) => (
            <img src={img} alt={`Dimensiones ${i}`} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
