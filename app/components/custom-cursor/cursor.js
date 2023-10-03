"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = ({ stickyBtn }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.8)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.8)",
    });

    // manages mouse movement
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
    };

    // manages mouse when hovering over magnetic buttons
    const mouseOver = () => {
      setIsHovered(true);
      gsap.to(ref.current, { scale: 5, duration: 0.3, ease: "power2.out" }); 

      if(isHovered) {
        gsap.to(ref.current, {
            borderRadius: '0px',
        })
      }
    };

    // manages the out anim of the mouse hover over magnetic buttons
    const mouseOverLeave = () => {
      setIsHovered(false);
      gsap.to(ref.current, { scale: 1, duration: 0.3, ease: "power2.out" }); 
    };

    window.addEventListener("mousemove", mouseMove);
    if (stickyBtn.current) {
      stickyBtn.current.addEventListener("mouseover", mouseOver);
      stickyBtn.current.addEventListener("mouseleave", mouseOverLeave);
    }

    return () => {
        window.removeEventListener("mousemove", mouseMove);
        if (stickyBtn.current) {
            stickyBtn.current.removeEventListener("mouseover", mouseOver);
            stickyBtn.current.removeEventListener("mouseleave", mouseOverLeave);
        }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="custom-cursor absolute top-0 left-0 w-[20px] h-[20px] rounded-full pointer-events-none"
      style={{ zIndex: 200, transformOrigin: "center center" }} // Ensure the cursor scales from its center
    ></div>
  );
};

export default Cursor;
