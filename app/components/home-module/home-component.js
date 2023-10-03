import Image from "next/image";
import React from "react";
import kiosk01 from "/public/kiosk-1.png";
import { Cairo } from "next/font/google";
import "./home-module.scss";
import SvgBackground from "./svg-background";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const HomeComponent = () => {
  return (
    <div className="relative flex w-screen h-screen justify-center sm:justify-start items-center">
      <div className="flex flex-col justify-center w-[60vw] items-end sm:items-start">
        <h1 className={`${cairo.className} sm:ml-12`}>Symtron</h1>
        <h2 className={`${cairo.className} -mt-4 sm:-mt-12 sm:ml-12`}>
          & Selfia
        </h2>
        <p className="sm:w-[600px] sm:absolute sm:bottom-12 sm:left-12 mt-4 text-start">
          A retail solution where self-service tech elevates customer service
          and boosts project productivity.
        </p>
      </div>
      {/* <div className="absolute -z-10 bg-red-50 w-screen bottom-0 flex flex-row items-center justify-center overflow-hidden">
        <SvgBackground />
      </div> */}
    </div>
  );
};

export default HomeComponent;
