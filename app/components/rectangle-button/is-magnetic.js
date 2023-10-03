'use client';
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
        if (!internalRef.current) return; // Exit if no ref

        const xTo = gsap.quickTo(internalRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(internalRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.4)" });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = internalRef.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        };

        const mouseLeave = (e) => {
            xTo(0);
            yTo(0);
        };

        internalRef.current.addEventListener("mousemove", mouseMove);
        internalRef.current.addEventListener("mouseleave", mouseLeave);

        return () => {
            internalRef.current.removeEventListener("mousemove", mouseMove);
            internalRef.current.removeEventListener("mouseleave", mouseLeave);
        };

    }, []);

    const childWithMergedRefs = React.cloneElement(children, {
        ref: mergeRefs([internalRef, children.ref])
    });

    return childWithMergedRefs;
}

export default IsMagnetic;
