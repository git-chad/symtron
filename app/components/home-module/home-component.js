import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Cairo } from "next/font/google";
import "./home-module.scss";

import { animateTitle, animateSubtitle, animateP } from "./home-anims";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});

const HomeComponent = () => {
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
    <div className="home-module relative flex w-screen h-screen justify-center sm:justify-start items-center">
      <div className="flex flex-col justify-center w-[60vw] items-center sm:items-start overflow-hidden">
        <h1 className={`${cairo.className} sm:ml-12`} ref={titleRef}>
          Symtron
        </h1>
        <h2
          className={`${cairo.className} -mt-4 sm:-mt-12 sm:ml-12`}
          ref={subtitleRef}
        >
          & Selfia
        </h2>
        <p
          className="sm:w-[600px] sm:absolute sm:bottom-12 sm:left-12 mt-8 text-center sm:text-start"
          ref={pRef}
        >
          A retail solution where self-service tech elevates customer service
          and boosts project productivity.
        </p>
      </div>
    </div>
  );
};

export default HomeComponent;
