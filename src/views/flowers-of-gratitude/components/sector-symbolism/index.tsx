import React from "react";
import Title from "@/components/title";
import { FLOWERS_OF_GRATITUDE, TITLES } from "@/constants/common";
import Image from "next/image";
import symbolism from "@/images/flowers1.jpg";
import PayPalButton from "@/components/pay-pal-button";

const { SYMBOLISM, IMPLEMENTATION, SOCIAL_ASPECT, FEATURE_PLANS } =
  FLOWERS_OF_GRATITUDE;

const SectorSymbolism = () => {
  return (
    <div
      className={"flex flex-wrap gap-6 mb-8 lg:flex-nowrap lg:flex-row-reverse"}
    >
      <div className={"min-w-60 w-full lg:w-1/2"}>
        <Image src={symbolism} alt={"flowers symbolism"} />
      </div>

      <div className={"lg:w-1/2"}>
        <div className={"mb-4"}>
          <Title text={SYMBOLISM.TITLE} type={TITLES.H2} isDots />
          <p className={"mb-4"}>{SYMBOLISM.DESCRIPTION}</p>
        </div>
        <div className={"mb-4"}>
          <Title text={IMPLEMENTATION.TITLE} type={TITLES.H2} isDots />
          <p className={"mb-4"}>{IMPLEMENTATION.DESCRIPTION}</p>
        </div>
        <div className={"mb-4"}>
          <Title text={SOCIAL_ASPECT.TITLE} type={TITLES.H2} isDots />
          <p className={"mb-4"}>{SOCIAL_ASPECT.DESCRIPTION}</p>
        </div>
        <div className={"mb-4"}>
          <Title text={FEATURE_PLANS.TITLE} type={TITLES.H2} isDots />
          <p className={"mb-4"}>{FEATURE_PLANS.DESCRIPTION}</p>
        </div>
        <PayPalButton />
      </div>
    </div>
  );
};

export default SectorSymbolism;
