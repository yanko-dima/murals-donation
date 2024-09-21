import React from "react";
import Link from "next/link";
import { routes } from "@/constants/routes";

const MainNav = () => {
  return (
    <nav
      className={
        "hidden lg:flex gap-2 flex-wrap justify-center items-center text-xl pl-4 pr-4 mb-8"
      }
      role="menu"
    >
      {routes.map((route) => (
        <div key={route.name}>
          <Link
            className={
              "uppercase font-medium hover:bg-secondary py-2 px-4 whitespace-nowrap"
            }
            href={route.path}
            target={route.isTargetBlank ? "_blank" : "_self"}
          >
            {route.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default MainNav;
