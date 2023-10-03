"use client";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import LoadingComponent from "./components/loading-module/loading-component";
import HomeComponent from "./components/home-module/home-component";
import HomeStatistics from "./components/statistics-module/home-statistics";

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
    }, 35000000);
  }, []);

  return (
    <main>
      {/* {isLoading && <LoadingComponent timeline={timeline} />} */}
      <HomeComponent />
      <HomeStatistics/>
    </main>
  );
}
