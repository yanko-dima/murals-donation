import React from "react";
import Image from "next/image";
import haderslev from "@/images/haderslev.jpg";
import Title from "@/components/title";
import PayPalButton from "@/components/pay-pal-button";
import { DENMARK_MURALS, TITLES } from "@/constants/common";

const { HADERSLEV } = DENMARK_MURALS;

const SectorHaderslev = () => {
  return (
    <div className={"flex flex-wrap gap-6 mb-8 lg:flex-nowrap"}>
      <div className={"min-w-60 w-full lg:w-1/2"}>
        <Image src={haderslev} alt={"haderslev"} />
      </div>
      <div className={"lg:w-1/2"}>
        <Title text={HADERSLEV.TITLE} type={TITLES.H2} isDots={false} />
        {HADERSLEV.DESCRIPTIONS.map((item, index) => (
          <p key={index} className={"mb-4"}>
            {item}
          </p>
        ))}
        <PayPalButton />
      </div>
    </div>
  );
};

export default SectorHaderslev;
