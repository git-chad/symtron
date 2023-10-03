"use client";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import LoadingComponent from "./components/loading-module/loading-component";
import HomeComponent from "./components/home-module/home-component";
import ParallaxDisplay from "./components/parallax-module/parallax-display";
import HomeStatistics from "./components/statistics-module/home-statistics";
import RectangleButton from "./components/rectangle-button/rectangle-btn";
import Cursor from "./components/custom-cursor/cursor";

export default function page() {
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
  }, []);

  return (
    <main className="overflow-hidden">
      {/* {isLoading && <LoadingComponent timeline={timeline} />}
      <HomeComponent /> 
      <ParallaxDisplay />
      <HomeStatistics /> */}
      <div className="absolute flex justify-center items-center top-96 left-96">
        <RectangleButton ref={stickyBtn} href={'/products'} label={'Learn more'}/>
      </div>

      <Cursor stickyBtn={stickyBtn}/>
    </main>
  );
}
 