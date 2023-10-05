"use client";
import React, { useEffect, useState, useRef } from "react";
import RectangleButton from "../rectangle-button/rectangle-btn";
import MenuComponent from "./button-component";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const distanceCheck = () => {
      if (window.scrollY > 600) {
        setShowMobileMenu(true);
        setHideNavbar(true);
        // console.log('passed 600 px');
      } else {
        setShowMobileMenu(false);
        setHideNavbar(false);
      }
    };

    window.addEventListener("scroll", distanceCheck);
    return () => {
      window.removeEventListener("scroll", distanceCheck);
    };
  }, []);

  return (
    <>
      <nav
        className={`z-30 md:flex hidden  justify-between items-center fixed top-0 left-0 w-screen h-[64px] bg-white shadow-md ${
          hideNavbar ? "translate-y-navbar" : ""
        }`}
      >
        <div className="logo ml-12">Symtron</div>
        <div className="nav-items flex">
          <ul className="flex items-center justify-center space-x-8 px-8">
            <li className="cursor-pointer">
              <a>Products</a>
            </li>
            <li className="cursor-pointer">
              <a>Solutions</a>
            </li>
            <li className="cursor-pointer">
              <a>About us</a>
            </li>
            <li className="cursor-pointer">
              <a>Service</a>
            </li>
          </ul>

          <div className="mr-12">
            <RectangleButton
              href="/"
              label="Get started"
              magneticEffect={false}
            />
          </div>
        </div>
      </nav>
      <MenuComponent showMobileMenu={showMobileMenu} />
    </>
  );
};

export default Navbar;
