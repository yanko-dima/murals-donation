import React from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const Logo = () => {
  return (
    <div className={"flex items-center justify-center p-2"}>
      <Link href={ROUTES.HOME}>
        <Image height={75} src={logo} alt={"logo"} />
      </Link>
    </div>
  );
};

export default Logo;
