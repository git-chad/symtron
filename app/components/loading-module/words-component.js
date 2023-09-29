import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const WordsComponent = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);
  const wordList = ["interactive", "&", "innovative", "symtron"];

  useEffect(() => {
    const tl = gsap.timeline();

    if (index == wordList.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 800 : 300
    );

    tl.to(textRef.current, {
      translateY: 0,
      duration: 1,
    }).to(textRef.current, {
      fontWeight: 900,
      fontSize: 100,
      delay: 0.125,
      duration: 1,
    });
  }, [index]);

  return (
    <div ref={containerRef} className="overflow-hidden relative">
      <h1
        className="text-[10vw] font-light tracking-tighter word overflow-hidden translate-y-[100%] text-white"
        ref={textRef}
      >
        {wordList[index]}
      </h1>
    </div>
  );
};

export default WordsComponent;
