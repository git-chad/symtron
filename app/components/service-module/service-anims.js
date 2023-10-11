import { gsap } from "gsap";

export const animateCards = (elements) => {

  gsap.to(elements, {
    opacity: 1,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
  });
};
