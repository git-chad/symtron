'use client'
import React from 'react'
import productsData from '../../../public/data/Products.json'
import Link from 'next/link';  // Don't forget to import Link if you're using it
import RectangleButton from '@/app/components/rectangle-button/rectangle-btn';

const Page = ({params}) => {
  const { family: name } = params; 
  const family = productsData.families.find((fam) => fam.name === name);
  console.log(family)
  if (!family) {
    return <div>Family not found</div>;
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1>{family.name}</h1>
      <div>
        <h2>Products:</h2>
        <ul>
          {family.products.map((product, index) => (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>Title: {product.title}</p>
              <RectangleButton
                    href="/products/[family]/[product]"
                    as={`/products/${family.name}/${product.id}`}
                    label={family.ctaLabel}
                    magneticEffect={true}
                  />
              {/* You can add more fields here, like images, description, etc. */}
            </li>
          ))}
        </ul>
      </div>
    </div>  
  )
}

export default Page
