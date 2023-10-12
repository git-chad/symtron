import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Cairo } from "next/font/google";
import "./home-module.scss";
import { animateTitle, animateSubtitle, animateP } from "./home-anims";

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
    <div className="alt-home relative w-screen h-screen flex flex-col items-center justify-center">
      <div className="relative sm:w-[70%] sm:mt-36 flex flex-col z-10">
        <h1
          className={`${cairo.className} font-medium text-center sm:text-start leading-tight`}
        >
          Symtron<span className="font-light"> & Selfia</span>
        </h1>

        <p className="z-10 mt-8 2xl:w-[80%] w-full self-end text-center sm:text-start 2xl:text-end">
          We offer a retail solution where self-service tech elevates customer
          service and boosts project productivity.{" "}
          <b className="underline">Join us and power up your work.</b>
        </p>

        {/* <div className="shape-01 absolute top-24 -left-4 w-[660px] h-[660px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 lg:opacity-50 animate-blob"></div>
        <div className="shape-02 absolute top-48 left-64 w-[660px] h-[660px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 lg:opacity-50 animate-blob animation-delay-2000"></div>
        <div className="shape-03 absolute top-56 left-16 w-[660px] h-[660px] bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 lg:opacity-50 animate-blob animation-delay-4000"></div> */}
      </div>
      <div className="sm:w-[70%] w-full sm:h-[75vw] h-[40%] relative mt-12 z-10">
        <Image fill objectFit="cover" src={heroimg} />
      </div>
    </div>
  );
};

export default HomeComponentAlt;
