import React from "react";
import Image from "next/image";
import banner from "@/images/header-banner.jpg";

const Banner = () => {
  return (
    <div className={" mb-8"}>
      <Image src={banner} alt={"header banner"} />
    </div>
  );
};

export default Banner;
