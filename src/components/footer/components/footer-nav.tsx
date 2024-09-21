import React from "react";
import { routes } from "@/constants/routes";
import Link from "next/link";
import TitleH3 from "@/components/title/title-h3";

const FooterNav = () => {
  return (
    <div className="hidden lg:flex flex-col gap-2">
      <TitleH3 text="Menu:" />
      <nav role="menu" className="flex flex-col text-lg gap-2">
        {routes.map((route) => (
          <div key={route.name}>
            <Link
              href={route.path}
              target={route.isTargetBlank ? "_blank" : "_self"}
            >
              {route.name}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default FooterNav;
