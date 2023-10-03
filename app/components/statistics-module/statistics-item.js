import React, { useState, useEffect } from "react";
import { Cairo } from "next/font/google";
import { Overpass } from "next/font/google";

const cairo = Cairo({
    weight: ['variable'],
    subsets: ["latin"]
  });
const overpass = Overpass({
  weight: ['variable'],
  subsets: ["latin"]
});


const StatisticItem = ({ finalValue, text }) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const animationDuration = 750; // Duración total de la animación en milisegundos

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

      // Iniciar la animación cuando startAnimation sea true
      animationFrameId = requestAnimationFrame(animateNumber);

      // Limpiar la animación cuando el componente se desmonte
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [finalValue, startAnimation]);

  // Iniciar la animación cuando el componente se monte
  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div className="w-1/2 p-4">
      <h3 className={`${cairo.className} text-6xl font-black`}>{Math.round(animatedNumber)}</h3>
      <p className={`${overpass.className} mt-2 paragraph-with-line-breaks`}>{text}</p>
    </div>
  );
};

export default StatisticItem;