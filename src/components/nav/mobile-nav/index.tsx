"use client";

import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { clsx } from "clsx";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute left-0 top-10 z-10 lg:hidden">
        {!isOpen && (
          <Button variant={"ghost"} onClick={toggleMenu}>
            <IoMenu size={32} />
          </Button>
        )}
      </div>
      <div
        className={clsx(
          "fixed top-0 left-0 z-10 w-full h-screen bg-white pt-10 pb-6 transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <Button className="mb-6" variant={"ghost"} onClick={toggleMenu}>
          <IoMdClose size={32} />
        </Button>
        <nav className="flex flex-col gap-4" role="menu">
          {routes.map((route) => (
            <div key={route.name}>
              <Link
                className="uppercase font-medium hover:bg-secondary py-2 px-4 ml-2 whitespace-nowrap"
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
    </>
  );
};

export default MobileNav;
