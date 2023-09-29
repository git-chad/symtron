"use client";
import React, { useEffect, useRef, useState } from "react";
import { fadeLoadDiv, fadeWords } from "./loading-anims";
import WordsComponent from "./words-component";
import CurveSvg from "./curve-svg";

const LoadingComponent = ({ timeline }) => {
  const loadDivRef = useRef(null);
  const wordListRef = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(fadeWords(wordListRef.current))
        .add(fadeLoadDiv(loadDivRef.current));
  }, [timeline]);

  return (
    <div
      className="z-50 fixed w-screen h-screen flex flex-col justify-center items-center"
      ref={loadDivRef}
    >
      <div className="opacity-0 z-50" ref={wordListRef}>
        <WordsComponent />
      </div>
      <div className="w-full">
        <CurveSvg />
      </div>
    </div>
  );
};

export default LoadingComponent;
