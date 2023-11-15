// import React, { useState, useEffect, useRef } from "react";

// const CurveSvg = () => {
//   const isMobile = window.innerWidth <= 926;
//   const initialCurveValue = isMobile ? 400 : 500;

//   const [dimension, setDimension] = useState({ width: 0, height: 0 });
//   const [curve, setCurve] = useState(initialCurveValue);
//   const [isVisible, setIsVisible] = useState(true);
//   const svgRef = useRef(null);

//   useEffect(() => {
//     setDimension({ width: window.innerWidth, height: window.innerHeight });
//   }, []);

//   const lerp = (v0, v1, t) => {
//     return v0 * (1 - t) + v1 * t;
//   };

//   useEffect(() => {
//     let animationId;

//     const checkPos = () => {
//       if (!svgRef.current) return;
//       const rect = svgRef.current.getBoundingClientRect();
//       const power = isMobile ? 6 : 10;
//       const t = Math.min(1, Math.max(0, (rect.top + 1440) / 1440));
//       const accentuatedT = Math.pow(t, power);

//       const startCurve = isMobile ? 300 : 500;
//       const newCurve = lerp(startCurve, 0, accentuatedT);

//       console.log("rect.top" + rect.top);
//       console.log("w height" + window.innerHeight);
//       setCurve(newCurve);

//       const mobileAdjustment = isMobile ? 50 : 300;
//       if (rect.top > window.innerHeight + mobileAdjustment) {
//         setIsVisible(false);
//         return;
//       }

//       animationId = requestAnimationFrame(checkPos);
//     };
//     checkPos();
//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//   const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
//     dimension.height
//   } Q${dimension.width / 2} ${dimension.height + curve * 0.5} 0 ${
//     dimension.height
//   }  L0 0`;

//   return (
//     isVisible && (
//       <svg
//         ref={svgRef}
//         className="absolute top-0 w-full pointer-events-none"
//         style={{ height: "calc(100% + 300px)" }}
//       >
//         <path fill="#1e2124" d={initialPath} />
//       </svg>
//     )
//   );
// };

// export default CurveSvg;

import React, { useState, useEffect } from "react";

const CurveSvg = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const simplePath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} L0 ${dimension.height} L0 0`;

  return (
    isVisible && (
      <svg
        className="absolute top-0 w-full pointer-events-none"
        style={{ height: "calc(100% + 300px)" }}
      >
        <path fill="#1e2124" d={simplePath} />
      </svg>
    )
  );
};

export default CurveSvg;
