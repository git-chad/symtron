import React from 'react'
import productsData from '../../../../public/data/Products.json'

const Page = ({ params }) => {
  const idProduct = params.product; 
  const idFamily = params.family;

  const family = productsData.families.find((fam) => fam.name === idFamily);
  const product = family.products.find((prod) => prod.id === idProduct)

  console.log(product);

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <h1>{product.name}</h1>
    </div>
  )
}

export default Page