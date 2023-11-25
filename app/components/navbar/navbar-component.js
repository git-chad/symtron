"use client";
import React, { useEffect, useState, useRef } from "react";
import RectangleButton from "../rectangle-button/rectangle-btn";
import MenuComponent from "./button-component";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/s-logo.svg";
import Dropdown from "./drop-down-component";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const productFamilies = [
    {
      name: 'KMM',
      products: ['ALTAIR', 'ATRIA', 'INDUS',  'PYXIS']
    },
    {
      name: 'GMG',
      products: ['BARTOP', 'LYRA', 'S-LITE']
    },
    {
      name: 'ATM',
      products: ['ALPHA', 'OCTANS' , 'POLARIS']
    },
    {
      name: 'TAS',
      products: ['AXIS', 'GAMMA', 'VEGA', 'VOLANS']
    },
  ]

  useEffect(() => {
    const distanceCheck = () => {
      if (window.innerWidth <= 768) {
        setShowMobileMenu(true);
        return;
      }

      if (window.scrollY > 300) {
        setShowMobileMenu(true);
        setHideNavbar(true);
      } else {
        setShowMobileMenu(false);
        setHideNavbar(false);
      }
    };

    window.addEventListener("scroll", distanceCheck);
    window.addEventListener("resize", distanceCheck);
    return () => {
      window.removeEventListener("scroll", distanceCheck);
      window.removeEventListener("resize", distanceCheck);
    };
  }, []);

  return (
    <>
      <nav
        className={`z-30 lg:flex hidden justify-between items-center fixed top-0 left-0 w-screen h-[64px] bg-opacity-[0.1] backdrop-blur-md ${
          hideNavbar ? "translate-y-navbar" : ""
        }`}
      >
        <Link href="/" className="logo ml-12">
          <Image width={32} height={0} src={logo}></Image>
        </Link>
        <div className="nav-items flex">
          <ul className="flex items-center justify-center space-x-8 px-8">
            <li 
            className="cursor-pointer relative"
            onMouseEnter={() => {setShowDropdown(true)}}
            onMouseLeave={() => {setShowDropdown(false)}}
            >
              <Link href="/products">Products</Link>
              {showDropdown && <Dropdown families={productFamilies} isActive={showDropdown}/>}
            </li>
            <li className="cursor-pointer">
              <Link href="/solutions">Solutions</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/about">About us</Link>
            </li>
          </ul>

          <div className="mr-12">
            <RectangleButton
              href="/contact"
              label="Contact"
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
