"use client";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import LoadingComponent from "./components/loading-module/loading-component";
import HomeComponentAlt from "./components/home-module/home-component-alt";
import ParallaxDisplay from "./components/parallax-module/parallax-display";
import HomeStatistics from "./components/statistics-module/home-statistics";
import Cursor from "./components/custom-cursor/cursor";
import ServiceSection from "./components/service-module/home-service";
import { strokeAnimation } from "./components/about-us-module/about-anims";

export default function Page() {
  const router = useRouter();
  const [timeline, setTimeline] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const stickyBtn = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        paused: false,
      });
      setTimeline(tl);
    });
    return () => context.revert();
  }, []);

  useEffect(() => {

    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (!hasLoaded) {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 3500);
    } else {
      setIsLoading(false);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    // lenis-smooth scroll, re-use in every page!
    const lenis = new Lenis();

    // smooth scroll function
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      strokeAnimation(pathRef);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="overflow-hidden relative">
      {isLoading && <LoadingComponent timeline={timeline} />}

      <HomeComponentAlt />
      <ParallaxDisplay />
      <HomeStatistics />
      <ServiceSection />
      <Cursor stickyBtn={stickyBtn} />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="793"
        height="1951"
        viewBox="0 0 793 1951"
        fill="none"
        className="absolute top-0 -left-10 w-full h-full -z-10 blur-xl opacity-30"
        ref={svgRef}
      >
        <linearGradient
          id="gradientStroke"
          x1="0%"
          y1="0%"
          x2="50%"
          y2="50%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" style={{ stopColor: "#c8e34f", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#5d63fc", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#d63651", stopOpacity: 1 }}
          />
        </linearGradient>
        <path
          d="M4 47.5C112.5 17.6667 350.8 -19.7002 426 69.4998C501.2 158.7 387 321 320.5 391C231.167 480.333 76.2 684.3 171 785.5C289.5 912 408.5 616.5 618.5 605C828.5 593.5 389 1108.5 558 1221.5C727 1334.5 984 821 662.5 844.5C341 868 64 1550 285.5 1669C462.7 1764.2 851.167 1634.83 1018.5 1560.5"
          //   stroke="#9C1B31"
          stroke="url(#gradientStroke)"
          stroke-width="25"
          strokeLinecap=""
          ref={pathRef}
          className="color-path"
        />
      </svg>
    </main>
  );
}

