import React, { useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import useDimension from "./parallax-anims";
import "./parallax-module.scss";
import SymtronCarousel from "./symtron-carousel";
import { Cairo } from "next/font/google";
import LineBreak from "../line-break";

const cairo = Cairo({
  weight: "variable",
  subsets: ["latin"],
});

const images = ["/kmm1.jpg", "/kmm2.jpg", "/kmm3.jpg"];

const ParallaxDisplay = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <main className="flex flex-col">
      {/* <div className="spacer"></div> */}
      <div ref={container} className="wrapper h-screen">
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[1], images[2], images[0]]} y={y2} />
        <Column images={[images[2], images[0], images[1]]} y={y3} />
        <Column images={[images[2], images[1], images[0]]} y={y4} />
      </div>
      {/* <div className="spacer"></div> */}
      <div className="info-wrapper">
        <SymtronCarousel />
        <div className=" h-[48vh] flex flex-col justify-center items-center">
          <h1 className={`${cairo.className} w-[42vw] sm:text-center text-start`}>
            Innovative Design Meets Functional Excellence.
          </h1>
          <h3 className="mt-[48px] sm:text-center text-start">
            Discover Symtron's cutting-edge range of ATMs, kiosks, and more. Our
            products are a blend of innovation, functionality, and modern
            design.
          </h3>

          <button className="mt-[64px] underline">
            PRODUCTS PAGE BTN
          </button>
          <LineBreak/>
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
              alt="deus ex machina"
              className="rounded-sm"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default ParallaxDisplay;
