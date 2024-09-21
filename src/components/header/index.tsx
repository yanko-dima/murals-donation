import React from "react";
import Logo from "@/components/logo";
import DesktopNav from "@/components/nav/desctop-nav";
import MobileNav from "@/components/nav/mobile-nav";
import Container from "@/components/container";

const Header = () => {
  return (
    <header className="flex justify-center w-full">
      <Container className="relative w-full max-w-screen-xl pt-6">
        <Logo className="flex justify-center mb-6" />
        <DesktopNav />
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
