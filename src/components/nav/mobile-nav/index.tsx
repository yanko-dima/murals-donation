"use client";

import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routes } from "@/constants/routes";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={"absolute left-0 top-6 z-10 lg:hidden"}>
        {!isOpen && (
          <Button variant={"ghost"} onClick={toggleMenu}>
            <IoMenu />
          </Button>
        )}
        {isOpen && (
          <Button variant={"ghost"} onClick={toggleMenu}>
            <IoMdClose />
          </Button>
        )}
      </div>
      {isOpen && (
        <div
          className={
            "absolute flex bg-white pt-[70px] pb-12 left-0 top-0 z-9 w-full h-screen lg:hidden"
          }
        >
          <nav className={"flex flex-col gap-4"} role="menu">
            {routes.map((route) => (
              <div key={route.name}>
                <Link
                  className={
                    "uppercase font-medium hover:bg-secondary py-2 px-4 ml-2 whitespace-nowrap"
                  }
                  href={route.path}
                  target={route.isTargetBlank ? "_blank" : "_self"}
                  onClick={toggleMenu}
                >
                  {route.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
