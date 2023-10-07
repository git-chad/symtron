import React, { useState, useEffect, useRef } from "react";
import { Cairo } from "next/font/google";
import { Overpass } from "next/font/google";
import "./home-statistics.scss";

const cairo = Cairo({
  weight: ["variable"],
  subsets: ["latin"],
});
const overpass = Overpass({
  weight: ["variable"],
  subsets: ["latin"],
});
const StatisticItem = ({ finalValue, text }) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const animationDuration = 750;
  const intersectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startAnimation) {
      let startTime;
      let animationFrameId;

      const animateNumber = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const elapsedTime = timestamp - startTime;
        const progress = Math.min(1, elapsedTime / animationDuration);
        const newNumber = Math.round(progress * finalValue);

        setAnimatedNumber(newNumber);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateNumber);
        }
      };
      animationFrameId = requestAnimationFrame(animateNumber);
      
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [finalValue, startAnimation]);

  return (
    <div className="p-4 flex flex-col sm:w-[400px] sm:h-[200px]" ref={intersectionRef}>
      <h3 className={`${cairo.className} text-4xl sm:text-6xl font-black`}>
        {Math.round(animatedNumber)}<span className="font-light text-2xl sm:text-4xl">+</span>
      </h3>
      <span className={`${overpass.className} mt-2 paragraph-with-line-breaks`}>
        {text}
      </span>
    </div>
  );
};

export default StatisticItem;