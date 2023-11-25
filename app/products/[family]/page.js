'use client'
import React from 'react'
import productsData from '../../../public/data/Products.json'
import ProductCard from '@/app/components/product-module/product-card';

const Page = ({params}) => {
  const { family: name } = params; 
  const family = productsData.families.find((fam) => fam.name === name);
  if (!family) {
    return <div>Family not found</div>;
  }

  return (
    <main className="flex flex-col mt-20 justify-items-center p-8">
      
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mt-6">{family.name} Series</h1>
          <p className="text-xl mt-6 max-w-2xl">{family.description}</p>
        </div>
      <div className="grid grid-cols-4 gap-6 mt-32 ">
        {family.products.map((product) => (
            <ProductCard key={product.id} product={product} family={family} />
          ))
        }
      </div>
    </main>
    );
  };

export default Page
