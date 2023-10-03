// IsMagnetic.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function mergeRefs(refs) {
    return (inst) => {
        for (let ref of refs) {
            if (typeof ref === "function") {
                ref(inst);
            } else if (ref) {
                ref.current = inst;
            }
        }
    };
}

const IsMagnetic = ({ children }) => {
    const internalRef = useRef(null);

    useEffect(() => {
        const element = internalRef.current;
        if (!element) return; // Exit if no ref

        const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.4)" });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = element.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        element.addEventListener("mousemove", mouseMove);
        element.addEventListener("mouseleave", mouseLeave);

        return () => {
            element.removeEventListener("mousemove", mouseMove);
            element.removeEventListener("mouseleave", mouseLeave);
        };

    }, []);

    return React.cloneElement(children, {
        ref: mergeRefs([internalRef, children.ref])
    });
}

export default IsMagnetic;
