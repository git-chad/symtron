"use client";
import Link from "next/link";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RectangleButton from "../rectangle-button/rectangle-btn";
import "./products-module.scss";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  weight: ["900", "700", "400"],
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

const familyData = [
  {
    name: "KMM",
    description: "Modular, Adaptable, Expansive, Business-Ready.",
    par1: "Developed on a flexible hardware and software architecture, the KMM Indus allows for the expansion of functions using the foundation of its original configuration.",
    par2: "Thanks to its simple and modular design, integration of a wide range of devices is made easy. It adapts to the required presentation, allowing for various re-configurations to expand your business possibilities.",
    ctaLabel: "See KMMs",
    image: "https://drive.google.com/uc?id=1fsh0hG8gc6CjqLo9s9_kUZR_Z-k_TGj_",
  },
  {
    name: "GMG",
    description: "Maximum performance, flawless gaming experience.",
    par1: "Built on a flexible hardware and software architecture, it enables the expansion of its functions using the original configuration with an ergonomic design and a variety of colors.",
    par2: "Its simple and modular design makes it easy to integrate into venues or gaming rooms with applications for sports betting, video lottery, casinos, and bingo.",
    ctaLabel: "See GMGs",
    image: "/path/to/kmm-image.jpg",
  },
  {
    name: "ATM",
    description: "Optimal design, easy usage.",
    par1: "Our ATM family ensures the best cost-effective investment to meet the needs for these types of solutions in any environment, with the highest level of performance.",
    par2: "Developed on a flexible hardware and software architecture, it allows for the expansion of functions using the base of its original configuration.",
    ctaLabel: "See ATMs",
    image: "https://drive.google.com/uc?id=13PQuLB5KAjb3G33GICu_Tio534oBOZK0",
  },
  {
    name: "TAS",
    description: "Your retail solution, embodied efficiency.",
    par1: "We introduce an innovative solution for retail, where self-service technology replicates service quality for customers and enhances project productivity.",
    par2: "Our line of kiosks is 100% customizable and designed to adapt to all types of usage, increasing efficiency, ensuring user satisfaction, and creating a unique interactive experience that, thanks to its attractiveness and simplicity, boosts demand.",
    ctaLabel: "See TAS",
    image: "https://drive.google.com/uc?id=1zQVCcyDonsHnlDTYCqQaoPLerkOZKt7f",
  },
];

const ProductsComponent = () => {
  const componentRef = useRef(null);
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    if (window.innerWidth <= 768) {
      return;
    }

    window.scrollTo(0, 0);

    let context = gsap.context(() => {
      let sections = gsap.utils.toArray(".section-family");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          end: () => "+=" + sliderRef.current.offsetWidth,
          markers: false,
        },
      });
    }, componentRef);

    return () => context.revert();
  });

  return (
    <div
      className="scroll-section-outer overflow-auto sm:overflow-x-hidden"
      ref={componentRef}
    >
      <div
        className="scroll-section-inner flex flex-wrap w-full sm:w-[400vw] h-screen relative"
        ref={sliderRef}
      >
        {familyData.map((family, index) => (
          <section
            key={index}
            className="kmm section-family w-full sm:w-screen flex sm:flex-row items-center justify-center sm:items-start flex-col p-8 mt-8 sm:mt-0 sm:p-0"
          >
            <div className="info-half flex sm:flex-col sm:justify-center sm:self-center w-full sm:w-[60%]">
              <div className="w-full sm:w-[80%] flex flex-col sm:items-center sm:justify-center sm:self-center">
                <h1
                  className={`${cairo.className} sm:self-start self-center font-bold sm:ml-8`}
                >
                  {family.name + " Series"}
                </h1>
                <h2 className="sm:ml-8 sm:self-start self-center text-center sm:text-start mt-2">
                  {family.description}
                </h2>

                <div className="paragraphs sm:flex 2xl:flex-col 2xl:w-[80%] sm:mt-8 text-center sm:text-start my-8">
                  <div className="w-full 2xl:sm:w-3/4 2xl:self-start">
                    <p className="sm:p-8">{family.par1}</p>
                  </div>
                  <div className="w-full 2xl:sm:w-3/4 2xl:self-en sm:p-8 mt-8 sm:mt-0">
                    <p className="">{family.par2}</p>
                  </div>
                </div>
                <div className="self-center sm:p-0 mb-16">
                  <RectangleButton
                    href="/products/[family]"
                    as={`/products/${family.name}`}
                    label={family.ctaLabel}
                    magneticEffect={true}
                  />
                </div>
              </div>
            </div>

            <div className="pic-half w-full sm:w-[40%] h-[50vh] sm:h-full flex justify-center items-center">
              <figure className="text-2xl p-8">
                <img alt={`${family.name} sample picture`} src={family.image} />
              </figure>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
