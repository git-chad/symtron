import React from "react";
import Link from "next/link";
import "./navbar-component.scss";
import icon1 from "../../../public/Frame.svg";
import icon2 from "../../../public/Frame-1.svg";
import Image from "next/image";

const SideBar = ({ sidebarRef, linksRef, isActive, closeSidebar }) => {
  return (
    <div
      ref={sidebarRef}
      className={`sidebar z-40 fixed top-0 right-0 w-[100%] md:w-[30%] h-full bg-[#1e2124] flex flex-col ${
        isActive ? "active-sidebar" : ""
      }`}
    >
      <ul className="w-full h-full flex flex-col justify-center text-white text-[48px] font-bold ml-12 space-y-8">
        <li className="cursor-pointer" ref={(el) => (linksRef.current[0] = el)} onClick={closeSidebar}>
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer" ref={(el) => (linksRef.current[1] = el)} onClick={closeSidebar}>
          <Link href="/products">Products</Link>
        </li>
        <li className="cursor-pointer" ref={(el) => (linksRef.current[2] = el)} onClick={closeSidebar}>
          <Link href="/">Solutions</Link>
        </li>
        <li className="cursor-pointer" ref={(el) => (linksRef.current[3] = el)} onClick={closeSidebar}>
          <Link href="/">About us</Link>
        </li>
        <li className="cursor-pointer" ref={(el) => (linksRef.current[4] = el)} onClick={closeSidebar}>
          <Link href="/">Service</Link>
        </li>
      </ul>

      <div className="w-full h-[40%] text-white flex flex-col justify-between ml-12 relative text-sm sm:text-xl">
        <div className="phones">
          <h3>Phone</h3>
          <p className="mb-4">&#40;+54&#41; 11 5263 3232</p>
          <h3>Support</h3>
          <p className="mb-4">0810 220 3232</p>
          <h3>Email</h3>
          <a
            className="cursor-pointer hover:font-bold transition-all"
            href="mailto:symtron@latam.com"
          >
            symtron@latam.com
          </a>
        </div>
        <p>Pueyrredón 3831, Ciudadela, BA, AR</p>

        <div className="icons flex mb-4 space-x-4 w-full">
          <Image src={icon2}></Image>
          <Image src={icon1}></Image>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
