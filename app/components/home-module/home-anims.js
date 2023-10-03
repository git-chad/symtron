import gsap from "gsap";

export const animateTitle = (titleRef) => {
    const tl = gsap.timeline();

    tl
    .set(titleRef, {
        opacity: 0,
        y: 300
    })
    .to(titleRef, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'Power3.easeInOut'
    })

    return 
}

export const animateSubtitle = (subtitleRef) => {
    const tl = gsap.timeline();
    
    tl
    .set(subtitleRef, {
        opacity: 0,
        y: 200
    })
    .to(subtitleRef, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'Power3.easeInOut'
    })

    return 
}

export const animateP = (pRef) => {
    const tl = gsap.timeline();
    
    tl
    .set(pRef, {
        opacity: 0,
    })
    .to(pRef, {
        opacity: 1,
        duration: 1.5,
        ease: 'Power3.easeInOut'
    })

    return 
}