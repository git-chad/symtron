import React from "react";
import productsData from "../../../../public/data/Products.json";
import { Cairo } from "next/font/google";
// Consider importing animations here if needed

const cairo = Cairo({
  weight: ["900", "700", "400"],
  subsets: ["latin"],
});

const Page = ({ params }) => {
  const idProduct = params.product;
  const idFamily = params.family;
  const family = productsData.families.find((fam) => fam.name === idFamily);
  const product = family.products.find((prod) => prod.id === idProduct);

  // Consider adding useEffect here to apply animations

  return (
    <div className="w-full h-screen flex justify-center items-center p-10">
      <div className="flex flex-col sm:flex-row w-full">
        <div className="info-half flex flex-col justify-center w-full sm:w-1/2">
          <h1
            className={`${cairo.className} font-bold sm:self-start self-center text-center sm:text-start sm:ml-8`}
          >
            {product.name}
          </h1>
          <h2 className="sm:ml-8 sm:self-start self-center text-center sm:text-start mt-2">
            {family.description}
          </h2>
          <p className="sm:p-8 mt-8">{product.description}</p>
          {/* You can add a button or other elements here */}
        </div>
        
        <div className="pic-half w-full sm:w-1/2 h-[50vh] flex justify-center items-center bg-gray-100">
          {/* Add image or visual content here */}
        </div>
      </div>
    </div>
  );
};

export default Page;
