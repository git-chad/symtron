import React from "react";
import { Cairo } from "next/font/google";
import { Overpass } from "next/font/google";
import Image from "next/image";

const cairo = Cairo({
    weight: ["variable"],
    subsets: ["latin"],
    });
const overpass = Overpass({
    weight: ["variable"],
    subsets: ["latin"],
    });

    const ServiceSection = () => {
      
        return (
          <main className="flex flex-col m-8">
            <h1 className={`${cairo.className} text-5xl font-extrabold mt-6`}>Industry-Specific Solutions</h1>
            <div className="flex mt-8">
              <section className="mr-4 ">
                <h2 className={`${cairo.className} text-3xl font-extralight mt-6`}>01</h2>
                <h3 className={`${cairo.className} text-3xl font-semibold mt-6`}>Sector Strategies</h3>
                <p className={`${overpass.className} mt-4 mb-4`}>Different markets demand creative solutions. At Symtron, we collaborate to craft innovative products tailored to our clients&apos; needs.</p>
                <div className="w-0 h-1/2">
                <Image src="/image3.png" fill alt="Picture of the author" />
                </div>
              </section>
              <section className="mr-4">
                <h2 className={`${cairo.className} text-3xl font-extralight mt-6`}>02</h2>
                <h3 className={`${cairo.className} text-3xl font-semibold mt-6`}>Banking Solutions</h3>
                <p className={`${overpass.className} mt-4 mb-4`}>In the fast-paced world of finance, Symtron delivers secure and intuitive technologies to keep financial entities at the forefront.</p>
                <Image src="/image4.png" width={320} height={500} alt="Picture of the author" />
              </section>
              <section className="mr-4 h-48">
                <h2 className={`${cairo.className} text-3xl font-extralight mt-6`}>03</h2>
                <h3 className={`${cairo.className} text-3xl font-semibold mt-6`}>Commerce Innovation</h3>
                <p className={`${overpass.className} mt-4 mb-4`}>Blending fun with functionality, Symtron brings the latest in entertainment technology, enhancing user experiences and audience engagement.</p>
                <Image src="/image5.png" width={320} height={500} alt="Picture of the author" />
              </section>
              <section className="">
                <h2 className={`${cairo.className} text-3xl font-extralight mt-6`}>04</h2>
                <h3 className={`${cairo.className} text-3xl font-semibold mt-6`}>Entertainment Tech</h3>
                <p className={`${overpass.className} mt-4 mb-4`}>Retail landscapes are ever-changing. Symtron&apos;s solutions adapt and evolve, ensuring retailers stay competitive and customer-focused.</p>
                <Image src="/image7.png" width={320} height={500} alt="Picture of the author" />
              </section>
            </div>
          </main>
        );




           
          
    };
        
        export default ServiceSection;

        
        
        
        
        
        