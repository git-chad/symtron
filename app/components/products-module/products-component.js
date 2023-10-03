"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VerticalSection from "./vertical-section";

gsap.registerPlugin(ScrollTrigger);

const ProductsComponent = () => {
  const horizontalContainerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.to(
      horizontalContainerRef.current,
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=100% top",
          scrub: true,
          pin: true,
          markers: true
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-section-outer">
      <div ref={triggerRef}>
        <div
          ref={horizontalContainerRef}
          className="scroll-section-inner flex w-[400vw] h-screen relative"
        >
          <section className="w-screen h-screen bg-red-400 flex justify-center items-center">
            <h1 className="text-9xl">1</h1>
          </section>
          <section className="w-screen h-screen bg-cyan-400 flex justify-center items-center">
            <h1 className="text-9xl">2</h1>
          </section>
          <section className="w-screen h-screen bg-yellow-400 flex justify-center items-center">
            <h1 className="text-9xl">3</h1>
          </section>
          <section className="w-screen h-screen bg-pink-400 flex justify-center items-center">
            <h1 className="text-9xl">4</h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
