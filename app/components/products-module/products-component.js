"use client";
import React, { useRef, useLayoutEffect} from "react";
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

const ProductsComponent = () => {
  const componentRef = useRef(null);
  const sliderRef = useRef(null);

  // for testing
  const sectionsToRender = [1, 2, 3, 4];

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
          snap: 1 / (sections.length - 1),
          end: () => "+=" + sliderRef.current.offsetWidth,
          markers: true,
        },
      });
    }, componentRef);

    return () => context.revert();
  });

  return (
    <div className="scroll-section-outer overflow-auto sm:overflow-x-hidden" ref={componentRef}>
      <div
        className="scroll-section-inner flex flex-wrap w-[400vw] h-screen relative"
        ref={sliderRef}
      >
        {sectionsToRender.map((secNum) => (
          <section
            key={secNum}
            className="kmm section-family w-screen flex sm:flex-row items-center justify-center sm:items-start flex-col p-8 mt-8 sm:mt-0 sm:p-0"
          >
            <div className="info-half flex sm:flex-col sm:justify-center sm:self-center sm:w-[60%]">

              <div className="sm:w-[80%] flex flex-col sm:items-center sm:justify-center sm:self-center">
                <h1
                  className={`${cairo.className} sm:self-start self-center font-bold sm:ml-8`}
                >
                  KMM Family
                </h1>
                <h2 className=" sm:ml-8 sm:self-start self-center text-center sm:text-start">
                  Modular, Adaptable, Expansive,
                  <br /> Business-Ready.
                </h2>

                <div className="paragraphs sm:flex sm:flex-col sm:w-[80%] sm:mt-8 text-center sm:text-start mt-16">
                  <div className="sm:w-1/2 sm:self-start">
                    <p className="sm:p-8 sm:text-justify">
                      Developed on a flexible hardware and software
                      architecture, the KMM Indus allows for the expansion of
                      functions using the foundation of its original
                      configuration.
                    </p>
                  </div>
                  <div className="sm:w-1/2 sm:self-end sm:text-justify sm:p-8 mt-8 sm:mt-0">
                    <p className="">
                      Thanks to its simple and modular design, integration of a
                      wide range of devices is made easy. It adapts to the
                      required presentation, allowing for various
                      re-configurations to expand your business possibilities.
                    </p>
                  </div>
                  <div className="sm:self-center sm:mt-8 mt-8 p-16 sm:p-0">
                    <RectangleButton
                      href={"/"}
                      label={"See all"}
                      magneticEffect={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pic-half sm:w-[40%] h-full flex justify-center items-center bg-gray-100 opacity-30">
              <figure className="text-2xl">
                <img></img>
                <figcaption>Product image right here</figcaption>
              </figure>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
