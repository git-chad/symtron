import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import useDimension from "./dimesion-hook";
import "./parallax-module.scss";
import SymtronCarousel from "./symtron-carousel";
import { Cairo } from "next/font/google";
import LineBreak from "../line-break";
import { animInfo } from "./parallax-anims";
import RectangleButton from "../rectangle-button/rectangle-btn";

const cairo = Cairo({
  weight: "variable",
  subsets: ["latin"],
});

// later on replace 0 1 2
const images = ["/kmm1.jpg", "/kmm2.jpg", "/kmm3.jpg", "/atria.png", "/design.jpg", "/gamma.png", "/module.jpg", "/soldering.jpg", "/production1.jpg", "/production2.jpg"];

const ParallaxDisplay = () => {
  const infoRef = useRef(null);
  const container = useRef(null);
  const stickyBtn = useRef(null);

  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    animInfo(infoRef.current);
  }, []);

  return (
    <main className="flex flex-col mt-36">
      {/* <div ref={container} className="wrapper h-screen">
        <Column images={[images[7], images[2], images[5]]} y={y} />
        <Column images={[images[0], images[8], images[3]]} y={y2} />
        <Column images={[images[6], images[1], images[9]]} y={y3} />
        <Column images={[images[4], images[2], images[5]]} y={y4} />

      </div> */}
      <div className="relative info-wrapper" ref={infoRef}>
        <SymtronCarousel />
        <div className="my-36 h-[50vh] flex flex-col justify-center items-center">
          <h1 className={`${cairo.className} w-[42vw] text-center`}>
            Innovative Design Meets Functional Excellence.
          </h1>
          <p className="mt-12 text-center sm:w-[40vw]">
            Discover Symtron&apos;s cutting-edge range of ATMs, kiosks, and more. Our
            products are a blend of innovation, functionality, and modern
            design.
          </p>
          <div className="my-[48px]">
            <RectangleButton
              href={"/products"}
              label={"Learn more"}
              magneticEffect={true}
            />
          </div>
          <LineBreak />
        </div>
      </div>
    </main>
  );
};

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className="column">
      {images.map((src, index) => {
        return (
          <div key={index}>
            <Image
              src={src}
              fill
              alt=""
              className="rounded-sm"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default ParallaxDisplay;
