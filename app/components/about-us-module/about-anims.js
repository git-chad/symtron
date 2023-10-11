import gsap from "gsap";

export const strokeAnimation = (pathRef) => {
    const path = pathRef.current;

    if (!path || path.tagName.toLowerCase() !== 'path') {
      console.error('Invalid pathRef provided');
      return;
    }

    const pathLength = path.getTotalLength();
    const distance = window.scrollY;
    const totalDistance = document.body.clientHeight - window.innerHeight;
    const perc = distance / totalDistance;

    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength * (1 - perc)}`;
};
