import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

//animations for info block below parallax scroll section
export const animInfo = (infoRef) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: infoRef,
            start: 'top center',
            toggleActions: 'play reverse play reverse'
        }
    });
  
    tl.set(infoRef, {
      scale: 0.98,
      opacity: 0
    })
    .to(infoRef, {
        scale: 1,
        opacity: 1,
        duration: 0.5
    })
  
    return 
  }