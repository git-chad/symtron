import React from "react";
import { Cairo } from "next/font/google";
import { Overpass } from "next/font/google";

const cairo = Cairo({
    weight: ["variable"],
    subsets: ["latin"],
    });
const overpass = Overpass({
    weight: ["variable"],
    subsets: ["latin"],
    });

    const ServiceItem = ({ number, title, description, imageUrl }) => {
        return (
          <div className="flex-column justify-start  mt-8 mb-4">
            <div className="text-gray-400 text-4xl font-medium mb-6 ">
              {number}
            </div>
            <div className="mb-4">
              <h3 className={`${cairo.className} text-2xl font-semibold`}>{title}</h3>
            </div>
            <div className="mb-4" >
              <p className={`${overpass.className}`}>{description}</p>
              </div>
            <div className="mt-6 bg-slate-700 shadow-lg h-64 w-64">
              
            </div>
          </div>
        );
      };
      
      export default ServiceItem;