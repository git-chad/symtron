'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const ref = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 0.6,
      ease: "elastic.out(1, 0.8)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 0.6,
      ease: "elastic.out(1, 0.8)",
    });

    // manages mouse movement
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
    };

    // Hover effects
    const mouseEnter = (e) => {
      if (e.target.tagName === "A") {
        gsap.to(ref.current, {
          scale: 3.5,
          duration: 0.3,
        });
      }
    };

    const mouseLeave = (e) => {
      if (e.target.tagName === "A") {
        gsap.to(ref.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", mouseEnter, true);
    document.addEventListener("mouseout", mouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", mouseEnter, true);
      document.removeEventListener("mouseout", mouseLeave, true);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="custom-cursor lg:block hidden fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none"
      style={{ zIndex: 200, transformOrigin: "center center" }} // Ensure the cursor scales from its center
    ></div>
  );
};

export default Cursor;
