import Link from "next/link";
import React from "react";
import IsMagnetic from "./is-magnetic";

const RectangleButton = (props) => {
  const { href, label, onClick, magneticEffect } = props;

  if (!magneticEffect) {
    return (
      <Link
        href={href}
        className="rect-btn flex justify-between items-center magnetic-button"
        onClick={onClick}
      >
        <p className="font-bold pointer-events-none">{label || "Learn more"}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          className="scale-75 pointer-events-none"
        >
          <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
        </svg>
      </Link>
    );
  }

  return (
    <IsMagnetic>
      <Link
        href={href}
        className="rect-btn flex justify-between items-center magnetic-button"
        onClick={onClick}
      >
        <p className="font-bold pointer-events-none">{label || "Learn more"}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          className="scale-75 pointer-events-none"
        >
          <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
        </svg>
      </Link>
    </IsMagnetic>
  );
};

export default RectangleButton;
