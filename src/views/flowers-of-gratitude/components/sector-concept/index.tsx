import React from "react";
import Image from "next/image";
import cars from "@/images/cars-irpen-1.jpg";
import Title from "@/components/title";
import KoFiButton from "@/components/ko-fi-button";
import { FLOWERS_OF_GRATITUDE, TITLES } from "@/constants/common";

const { GOAL, CONCEPT } = FLOWERS_OF_GRATITUDE;

const SectorConcept = () => {
  return (
    <div className={"flex flex-wrap gap-6 mb-8 lg:flex-nowrap"}>
      <div className={"min-w-60 w-full lg:w-1/2"}>
        <Image src={cars} alt={"flowers for hope"} />
      </div>
      <div className={"lg:w-1/2"}>
        <Title text={GOAL.TITLE} type={TITLES.H2} isDots />
        <p className={"mb-4"}>{GOAL.DESCRIPTION}</p>
        <Title text={CONCEPT.TITLE} type={TITLES.H2} isDots />
        <p className={"mb-6"}>{CONCEPT.DESCRIPTION}</p>

        <KoFiButton />
      </div>
    </div>
  );
};

export default SectorConcept;
