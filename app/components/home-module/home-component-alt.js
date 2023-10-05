import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Cairo } from "next/font/google";
import "./home-module.scss";
import { animateTitle, animateSubtitle, animateP } from "./home-anims";
import redglobe from "../../../public/red-globe.png"
import gbglobe from "../../../public/gb-globe.png"

const heroimg =
  "https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2731&q=80";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const HomeComponentAlt = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const pRef = useRef(null);
  // imageRef = useRef(null);

  useEffect(() => {
    animateTitle(titleRef.current);
    animateSubtitle(subtitleRef.current);
    animateP(pRef.current);
  }, []);
  // bg-[#1e1415] text-white
  return (
    <div className="alt-home w-screen h-screen flex flex-col items-center justify-center">
      <div className="sm:w-[70%] sm:mt-36 flex items-center sm:justify-start justify-center z-10">
        <h1 className={`${cairo.className} font-medium`}>
          Symtron<span className="font-light"> & Selfia</span>
        </h1>
      </div>

      <p className="z-10 mt-8 sm:w-[70%] sm:justify-start text-center sm:text-end">
        We offer a retail solution where self-service tech elevates customer
        service and boosts project productivity.{" "}
        <b className="underline">Join us and power up your work.</b>
      </p>
      <div className="sm:w-[70%] w-full sm:h-[50vw] h-[40%] relative mt-12 z-10">
        <Image fill objectFit="cover" src={heroimg} />
      </div>
        <Image src={gbglobe} width={0} className="absolute opacity-30 saturate-100 -left-60 scale-110"/>
    </div>
  );
};

export default HomeComponentAlt;
