import React from "react";
import Image from "next/image";
import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <div className={"flex items-center justify-center p-1"}>
      <Image height={75} src={logo} alt={"logo"} />
    </div>
  );
};

export default Logo;
