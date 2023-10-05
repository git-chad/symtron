import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Cairo } from "next/font/google";
import "./home-module.scss";
import SvgBackground from "./svg-background";
import { animateTitle, animateSubtitle, animateP } from "./home-anims";
import LineBreak from "../line-break";

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

  return (
    <div className="alt-home w-screen h-full flex flex-col items-start">
      <div className="w-full mt-32 ml-64 flex items-center justify-start">
        <h1 className={`${cairo.className} font-black`}>Symtron & <span className="font-normal">Selfia</span></h1>
      </div>

      <p className="w-[700px] ml-64 mt-8">
        We offer a retail solution where self-service tech elevates customer
        service and boosts project productivity. Join us and power up your work.
      </p>
      <img className="m-auto w-[80%] h-[800px] object-cover mt-16 mb-16" src={"https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2731&q=80"}></img>
    </div>
  );
};

export default HomeComponentAlt;
