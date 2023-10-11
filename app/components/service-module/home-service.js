import React, { useEffect, useRef } from "react";
import { Cairo } from "next/font/google";
import "./service-module.scss";
import Image from "next/image";
import LineBreak from "../line-break";
import { animateCards } from "./service-anims";

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
  const boundingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(cardsRef.current.children);
            animateCards(cards);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.25,
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="service-component flex flex-col justify-center">
        <h1 className={`${cairo.className} md:ml-8 text-center sm:text-start`}>
          Industry-Specific Solutions
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 p-8 [perspective:2000px]"
          ref={cardsRef}
        >
          {services.map((service, index) => (
            <section
              style={{opacity: 0}}
              key={index}
              onMouseEnter={(event) => {
                boundingRef.current =
                  event.currentTarget.getBoundingClientRect();
              }}
              onMouseLeave={() => {
                boundingRef.current = null;
              }}
              onMouseMove={(event) => {
                if (!boundingRef.current) return;
                const x = event.clientX - boundingRef.current.left;
                const y = event.clientY - boundingRef.current.top;
                const xPer = x / boundingRef.current.width;
                const yPer = y / boundingRef.current.height;
                const xRot = (xPer - 0.25) * 2;
                const yRot = (0.25 - yPer) * 2;

                event.currentTarget.style.setProperty(
                  "--x-rotation",
                  `${yRot}deg`
                );
                event.currentTarget.style.setProperty(
                  "--y-rotation",
                  `${xRot}deg`
                );
              }}
              className={`relative flex flex-col items-center justify-start mb-4 shadow-sm [transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]`}
            >
              <div className="flex flex-col w-full max-w-[500px] mx-auto">
                <h2 className="font-extralight mt-4">{service.number}</h2>
                <h3
                  className={`${cairo.className} font-bold mt-8 leading-[95%]`}
                >
                  {service.title}
                </h3>
                <p className="text-start my-8">{service.description}</p>
                <div className="image-wrapper self-end mb-16">
                  <Image
                    src={`/${service.image}`}
                    width={9999}
                    height={0}
                    className=""
                  />
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
