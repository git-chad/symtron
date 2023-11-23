import React from "react";
import Link from "next/link";
import "./navbar-component.scss";
import linkedinIcon from "../../../public/Frame.svg";
import instagramIcon from "../../../public/Frame-1.svg";
import facebookIcon from "../../../public/icons8-facebook.svg";
import Image from "next/image";

const SideBar = ({ sidebarRef, linksRef, isActive, closeSidebar }) => {
  return (
    <div
      ref={sidebarRef}
      className={`sidebar z-40 fixed top-0 right-0 w-[100%] lg:w-[30vw] h-full bg-[#1e2124] flex flex-col ${
        isActive ? "active-sidebar" : ""
      }`}
    >
      <ul className="w-full h-full flex flex-col justify-center text-white text-[36px] font-bold ml-12 space-y-8">
        <li className="cursor-pointer" ref={(el) => (linksRef.current[0] = el)} onClick={closeSidebar}>
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer" ref={(el) => (linksRef.current[1] = el)} onClick={closeSidebar}>
          <Link href="/products">Products</Link>
        </li>
        <li className="cursor-pointer" ref={(el) => (linksRef.current[2] = el)} onClick={closeSidebar}>
          <Link href="/solutions">Solutions</Link>
        </li>
        <li className="cursor-pointer" ref={(el) => (linksRef.current[3] = el)} onClick={closeSidebar}>
          <Link href="/about">About us</Link>
        </li>
        <li className="cursor-pointer" ref={(el) => (linksRef.current[4] = el)} onClick={closeSidebar}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>


        <div className="icons flex mb-4 space-x-4 absolute bottom-12 left-12">
          <a href="https://www.instagram.com/symtron/" target="_blank"><Image src={instagramIcon} alt="instagram"></Image></a>
          <a href="https://www.linkedin.com/company/symtron/" target="_blank"><Image src={linkedinIcon} alt="linkedin"></Image></a>
          <a href="https://www.facebook.com/symtronargentina/" target="_blank"><Image src={facebookIcon} alt="facebook"></Image></a>
        </div>
      </div>

  );
};

export default SideBar;
