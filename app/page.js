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

export default function Page() {
  const router = useRouter();
  const [timeline, setTimeline] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const stickyBtn = useRef(null);

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

  return (
    <main className="overflow-hidden">
      {/* {isLoading && <LoadingComponent timeline={timeline} />} */}

      <HomeComponentAlt/>
      <ParallaxDisplay />
      <HomeStatistics />
      <ServiceSection/>
      <Cursor stickyBtn={stickyBtn} />
    </main>
  );
}

