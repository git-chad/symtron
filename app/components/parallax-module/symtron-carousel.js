import React, { useEffect, useState } from "react";
import gsap from "gsap";
import localFont from 'next/font/local'

const porscha = localFont({ src: '../../../public/911porschav3.ttf' })

const SymtronCarousel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      const carousels = document.querySelectorAll("p");

      carousels.forEach((carousel) => {
        const spanTag = carousel.querySelector("span");
        if (spanTag) {
          const spanWidth = spanTag.clientWidth;

        for (let i = 0; i < 30; i = i + 1) {
          carousel.appendChild(spanTag.cloneNode(true));
        }
      

        const tl = gsap.timeline({
          repeat: -1,
        });

        tl.set(carousel, { x: 0 }).to(carousel, {
          x: spanWidth * -1,
          duration: 6,
          ease: "linear",
        });
        }
      });
    }
  }, [loading]);

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="relative z-50 w-screen h-[128px] overflow-hidden opacity-30 pointer-events-none text-[#9c1b31]">
      <p className="flex first-line absolute top-16">
        <span className={`${porscha.className} inline-block w-[150px] flex-shrink-0 text-lg font-bold`}>
          symtron
        </span>
      </p>

      <p className="flex second-line absolute top-24">
        <span className="inline-block w-[250px] flex-shrink-0 text-lg font-light">
          interactive & innovative
        </span>
      </p>
    </div>
  );
};

export default SymtronCarousel;
