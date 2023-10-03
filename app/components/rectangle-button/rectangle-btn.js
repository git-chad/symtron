import Link from "next/link";
import React from "react";
import IsMagnetic from "./is-magnetic";
import { forwardRef } from "react";

const RectangleButton = forwardRef((props, ref) => {
  const { href, label, onClick } = props;

  return (
    <IsMagnetic>
      <a ref={ref} href={href} className="rect-btn flex justify-between items-center" onClick={onClick}>
        <p className="font-bold">{label || "Learn more"}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          className="scale-75"
        >
          <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
        </svg>
      </a>
    </IsMagnetic>
  );
});

export default RectangleButton;
