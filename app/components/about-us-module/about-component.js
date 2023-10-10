import React, { useEffect, useRef } from "react";
import "./about-us-module.scss";
import { Cairo } from "next/font/google";
import Image from "next/image";
import LineBreak from "../line-break";
import { strokeAnimation } from "./about-anims";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const firstimg =
  "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80";

const secondimg =
  "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80";

const AboutComponent = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      strokeAnimation(pathRef);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full box-border flex flex-col p-4 sm:p-0 sm:mt-36 items-center justify-center relative">
      <h1 className="font-black text-center sm:text-start sm:ml-32 mt-36 sm:mt-0 sm:self-start self-center">
        About us
      </h1>
      <section className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-0 p-4 sm:p-16 items-start">
        <div className="paragraphs flex flex-col gap-4 sm:gap-16 p-4 sm:p-16 sm:w-full sm:sticky sm:top-0 text-justify leading-loose">
          <p>
            Symtron S.A. is an Argentine company, specialized in the
            manufacturing, marketing, and support of self-service solutions. We
            offer a wide range of products that meet the needs of the Financial
            Market and Retail.
          </p>
          <p>
            We have over 20 years of experience in the development of
            tailor-made solutions that protect our clients' investments, having
            become a strategic provider/developer in the market.
          </p>
        </div>

        <div className="images flex flex-col gap-4 sm:gap-16">
          <img src={firstimg} alt="ATM Prototype" className="w-full h-auto" />
          <span>Production of our first ATM prototype - 2013</span>
          <img
            src={secondimg}
            alt="Office Renovation"
            className="w-full h-auto"
          />
          <span>Current office space renovations</span>
        </div>
      </section>

      <LineBreak />

      <section className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-0 p-4 sm:p-16 items-start">
        <div className="images flex flex-col gap-4 sm:gap-16">
          <img src={firstimg} alt="ATM Prototype" className="w-full h-auto" />
          <span>Production of our first ATM prototype - 2013</span>
          <img
            src={secondimg}
            alt="Office Renovation"
            className="w-full h-auto"
          />
          <span>Current office space renovations</span>
        </div>

        <div className="paragraphs flex flex-col gap-4 sm:gap-16 p-4 sm:p-16 sm:w-full sm:sticky top-0 text-justify leading-loose">
          <p>
            We develop and manufacture "world-class" technological products. Our
            work philosophy is focused on technologically solving client
            problems and through team interaction, providing simple but reliable
            solutions. Always considering a "user-friendly" experience. We offer
            comprehensive "custom" solutions, which facilitate and contribute to
            the improvement of business efficiency. Ensuring continuity with our
            comprehensive technical service guaranteeing the time up of the
            installed park.
          </p>
          <p>
            Our Mission is to conceive, develop, integrate, and produce
            high-quality technological products for the National and
            International market, meeting specific needs with innovative
            Self-Service solutions that complement the omnichannel customer
            service.
          </p>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="793"
        height="1951"
        viewBox="0 0 793 1951"
        fill="none"
        className="absolute top-0 -left-10 w-full h-full -z-10"
        ref={svgRef}
      >
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#5d63fc", stopOpacity: 1 }} />

          <stop offset="50%" style={{ stopColor: "#c8e34f", stopOpacity: 1 }} />

          <stop
            offset="100%"
            style={{ stopColor: "#d63651", stopOpacity: 1 }}
          />
        </linearGradient>
        <path
          d="M4 47.5C112.5 17.6667 350.8 -19.7002 426 69.4998C501.2 158.7 387 321 320.5 391C231.167 480.333 76.2 684.3 171 785.5C289.5 912 408.5 616.5 618.5 605C828.5 593.5 389 1108.5 558 1221.5C727 1334.5 984 821 662.5 844.5C341 868 64 1550 285.5 1669C462.7 1764.2 851.167 1634.83 1018.5 1560.5"
          //   stroke="#9C1B31"
          stroke="url(#gradientStroke)"
          stroke-width="25"
          strokeLinecap=""
          ref={pathRef}
        />
      </svg>

    </main>
  );
};

export default AboutComponent;
