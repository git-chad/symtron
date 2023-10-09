import React from "react";
import { Cairo } from "next/font/google";
import "./service-module.scss";
import Image from "next/image";
import LineBreak from "../line-break";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const services = [
  {
    number: "01",
    title: "Sector Strategies",
    description:
      "Different markets demand creative solutions. At Symtron, we collaborate to craft innovative products tailored to our clients&apos; needs.",
    image: "image3.png",
  },
  {
    number: "02",
    title: "Banking Solutions",
    description:
      "In the fast-paced world of finance, Symtron delivers secure and intuitive technologies to keep financial entities at the forefront.",
    image: "image4.png",
  },
  {
    number: "03",
    title: "Commerce Innovation",
    description:
      "Blending fun with functionality, Symtron brings the latest in entertainment technology, enhancing user experiences and audience engagement.",
    image: "image5.png",
  },
  {
    number: "04",
    title: "Entertainment Techs",
    description:
      "Retail landscapes are ever-changing. Symtron&apos; solutions adapt and evolve, ensuring retailers stay competitive and customer-focused.",
    image: "image7.png",
  },
];

const ServiceSection = () => {
  return (
    <>
      <main className="service-component flex flex-col justify-center">
        <h1 className={`${cairo.className} md:ml-8 text-center sm:text-start`}>
          Industry-Specific Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 p-8 items-center">
          {services.map((service, index) => (
            <section
              key={index}
              className="relative flex flex-col items-center justify-start mb-4"
            >
              <div className="flex flex-col w-full max-w-[500px] mx-auto">
                <h2 className="font-extralight mt-4">{service.number}</h2>
                <h3
                  className={`${cairo.className} font-bold mt-8 leading-[95%]`}
                >
                  {service.title}
                </h3>
                <p className="text-start my-8">{service.description}</p>
                <div className="image-wrapper self-end">
                  <Image src={`/${service.image}`} width={9999} height={0} />
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <div className="flex justify-center items-center">
        <LineBreak />
      </div>
    </>
  );
};

export default ServiceSection;
