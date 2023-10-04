import React from "react";
import { Cairo } from "next/font/google";
import { Overpass } from "next/font/google";
import ServiceItem from "./service-item"; 

const cairo = Cairo({
    weight: ["variable"],
    subsets: ["latin"],
    });
const overpass = Overpass({
    weight: ["variable"],
    subsets: ["latin"],
    });

    const ServiceSection = () => {
        const serviceData = [
          {
            number: "01",
            title: "Sector Strategies",
            description: "Different markets demand creative solutions. At Symtron, we collaborate to craft innovative products tailored to our clients' needs.",
            imageUrl: "url_to_image_1.jpg",
          },
          {
            number: "02",
            title: "Banking Solutions",
            description: "In the fast-paced world of finance, Symtron delivers secure and intuitive technologies to keep financial entities at the forefront.",
            imageUrl: "url_to_image_2.jpg",
          },
          {
            number: "03",
            title: "Commerce Innovation",
            description: "Blending fun with functionality, Symtron brings the latest in entertainment technology, enhancing user experiences and audience engagement.",
            imageUrl: "url_to_image_3.jpg",
          },
            {
                number: "04",
                title: "Entertainment Tech",
                description: "Retail landscapes are ever-changing. Symtron's solutions adapt and evolve, ensuring retailers stay competitive and customer-focused.",
                imageUrl: "url_to_image_4.jpg",
            },
        ];
      
        return (
            <div className="flex-col mx-8">
              <h2 className={`${cairo.className} text-5xl font-black`} >Industry-Specific Solution</h2>
              <div className="flex justify-around mt-4">
                {serviceData.map((item, index) => (
                  <ServiceItem key={index} {...item} />
                ))}
              </div>
            </div>
          );
        };
        
        export default ServiceSection;

        
        
        
        
        
        