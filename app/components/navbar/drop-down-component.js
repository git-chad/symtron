import Link from "next/link";
import React from "react";
import "./navbar-component.scss"

const Dropdown = ({ families, isActive }) => {
  return (
    <div className={`dropdown-content bg-white absolute flex space-x-16 text-black shadow-md p-8 top-6 ${isActive ? 'active' : ''}`}>
      {families.map((family) => (
        <div key={family.name} className="family-container mt-8 w-[90px] ">
          <Link href={`/products/${family.name}`} className="font-bold text-2xl">
            {family.name}
          </Link>
          <ul className="space-y-2 mt-4">
            {family.products.map((product) => (
              <li key={product} className="hover:underline underline-offset-2">
                <Link href={`/products/${family.name}/${product}`}>             
                  {product}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
