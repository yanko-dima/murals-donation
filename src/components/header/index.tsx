import React from "react";
import Logo from "@/components/logo";
import DesktopNav from "@/components/nav/desctop-nav";
import MobileNav from "@/components/nav/mobile-nav";

const Header = () => {
  return (
    <header className={"relative w-full"}>
      <Logo />
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
