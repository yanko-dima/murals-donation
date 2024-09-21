import React from "react";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Project Flowers of Gratitude",
    path: "/flowers-of-gratitude",
  },
];

const MainNav = () => {
  return (
    <nav className={"flex flex-wrap items-center mb-8 text-xl"}>
      {routes.map((route) => (
        <div key={route.name}>
          <Link
            className={
              "uppercase font-medium hover:bg-secondary py-2 px-4 whitespace-nowrap"
            }
            href={route.path}
          >
            {route.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default MainNav;
