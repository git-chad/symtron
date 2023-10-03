import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

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
        duration: 1
    })
  
    return 
  }