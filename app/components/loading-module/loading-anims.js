import gsap from "gsap";

gsap.defaults({
  ease: "expo.inOut",
});

export const fadeLoadDiv = (loadDivRef) => {
    const tl = gsap.timeline()
    tl.to(loadDivRef, {
        yPercent: -110,
        delay: 2,
        duration: 1.5
    })
}

export const fadeWords = (wordListRef) => {
    const tl = gsap.timeline()
    tl.to(wordListRef, {
        opacity: 1,
        duration: 0.25
    })
}
