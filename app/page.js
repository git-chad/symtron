"use client";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import LoadingComponent from "./components/loading-module/loading-component";
import HomeComponent from "./components/home-module/home-component";
<<<<<<< HEAD
import HomeStatistics from "./components/statistics-module/home-statistics";
=======
import ParallaxDisplay from "./components/parallax-module/parallax-display";
>>>>>>> 857b3a033bc4bce1d23637f38b14e6ff3476eefb

export default function page() {
  const router = useRouter();
  const [timeline, setTimeline] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      {/* {isLoading && <LoadingComponent timeline={timeline} />} */}
<<<<<<< HEAD
      <HomeComponent />
      <HomeStatistics/>
=======

      {/* <HomeComponent /> */}
      <ParallaxDisplay/>
>>>>>>> 857b3a033bc4bce1d23637f38b14e6ff3476eefb
    </main>
  );
}
