import Image from "next/image";
import React from "react";
import { Cairo } from "next/font/google";
import './home-module.scss';
import { Overpass } from "next/font/google";

const cairo = Cairo({
  weight: ['variable'],
  subsets: ["latin"]
});

const overpass = Overpass({
  weight: ['variable'],
  subsets: ["latin"]
})

const HomeComponent = () => {
  return (
    <div className="flex flex-row w-screen h-screen justify-center sm:justify-start items-center">
      <div className="flex flex-col justify-center items-center sm:items-start">
        <h1 className={`${cairo.className}`}>Symtron</h1>
        <h2 className={`${overpass.className}`}>
          A retail solution where self-service tech elevates customer services
          and boosts project project productivity.
        </h2>
      </div>
      <Image />
    </div>
  );
};

export default HomeComponent;
