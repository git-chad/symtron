import React from "react";
import "./navbar-component.scss";

const SideBar = ({sidebarRef, linksRef, isActive}) => {
  return (
    <div ref={sidebarRef} className={`sidebar z-40 fixed top-0 right-0 w-[100%] md:w-[30%] h-full bg-[#1e2124] flex flex-col ${isActive ? "active-sidebar" : ""}`}>
        <ul className="w-full h-full flex flex-col justify-center text-white text-[48px] font-bold ml-12 space-y-8">
            <li className="cursor-pointer" ref={el => linksRef.current[0] = el}>
              <a>Products</a>
            </li>
            <li className="cursor-pointer" ref={el => linksRef.current[1] = el}>
              <a>Solutions</a>
            </li>
            <li className="cursor-pointer" ref={el => linksRef.current[2] = el}>
              <a>About us</a>
            </li>
            <li className="cursor-pointer" ref={el => linksRef.current[3] = el}>
              <a>Service</a>
            </li>
          </ul>
    </div>
  );
};

export default SideBar;
