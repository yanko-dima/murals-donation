import React from "react";
import Image from "next/image";
import helen from "@/images/helen.jpg";
import Title from "@/components/title";
import { ABOUT, TITLES } from "@/constants/common";
import ClientButton from "@/components/client-button";

const { TITLE, DESCRIPTIONS } = ABOUT;

const aboutH2 = "About the Artist";
const projectsH2 = "Projects";

const SectorAbout = () => {
  return (
    <div className={"mb-8"}>
      <div className={"hidden opacity-0"}>
        <Title text={TITLE} type={TITLES.H1} />
      </div>

      <div className={"flex flex-wrap gap-6 mb-12 lg:flex-nowrap"}>
        <div className={"min-w-60 w-full lg:w-1/2 ml-auto mr-auto"}>
          <Image
            src={helen}
            alt={"Olena Yanko Artist"}
            className={"ml-auto mr-auto"}
          />
        </div>
        <div className={"lg:w-1/2"}>
          <Title text={aboutH2} type={TITLES.H2} />
          {DESCRIPTIONS.map((item, index) => (
            <p key={index} className={"mb-4"}>
              {item}
            </p>
          ))}
          <Title text={projectsH2} type={TITLES.H2} isDots />
          <ClientButton />
        </div>
      </div>
    </div>
  );
};

export default SectorAbout;
