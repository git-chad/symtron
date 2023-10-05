import React, { useState, useEffect, useRef } from "react";
import "./navbar-component.scss";
import SideBar from "./side-bar";

const MenuComponent = ({showMobileMenu}) => {

  const [isActive, setIsActive] = useState(false);
  const sidebarRef = useRef(null);
  const linksRef = useRef([])

  useEffect(() => {
    if(!showMobileMenu && isActive) {
      setIsActive(false)
    }
  }, [showMobileMenu]);

  return (
    <>
      <a
        onClick={() => setIsActive(!isActive)}
        className={`mobile-menu z-50 fixed top-4 right-4 sm:top-12 sm:right-12 w-16 h-16 lg:w-32 lg:h-32 rounded-full text-white  flex items-center justify-center cursor-pointer ${
          showMobileMenu ? "scale-up-menu" : ""
        } ${isActive ? "color-swap" : "bg-[#1e2124]"}`}
      >
        <div className={`${isActive ? "menu-active" : ""} icon`}></div>
      </a>
       <SideBar sidebarRef={sidebarRef} linksRef={linksRef} isActive={isActive} />
    </>
  );
};

export default MenuComponent;
