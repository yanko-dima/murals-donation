import React from "react";
import SocialIcons from "@/components/footer/components/social-icons";
import Copyright from "@/components/footer/components/copyright";
import Container from "@/components/container";
import FooterNav from "@/components/footer/components/footer-nav";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <footer className="flex justify-center w-full p-6 bg-gray-bg mt-auto text-gray-accent">
      <Container className="w-full max-w-screen-xl">
        <div className="flex lg:justify-between mb-8">
          <Logo className="hidden lg:block" />
          <div className="flex gap-12 ">
            <SocialIcons />
            <FooterNav />
          </div>
        </div>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
