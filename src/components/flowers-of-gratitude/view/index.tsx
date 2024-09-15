import React from "react";
import PayPalButton from "@/components/pay-pal-button";
import Title from "@/components/title";
import Container from "@/components/container";
import Banner from "@/components/banner";
import { PROJECT_IDEA, TITLE } from "@/constants/common";

const title = "Stuw Rotterdamse creativiteit naar nieuwe hoogten!";

const FlowersOfGratitudeView = () => {
  return (
    <Container>
      <Banner />
      <Title text={title} type={TITLE.H1} />
      <div className={"flex gap-4"}>
        <div className={"grow min-w-80 min-h-80 w-1/2 bg-[#ffee04]"}></div>
        <div className={"w-1/2"}>
          <Title text={PROJECT_IDEA.TITLE} type={TITLE.H2} />
          <p className={"mb-4"}>{PROJECT_IDEA.DESCRIPTION}</p>
          <PayPalButton />
        </div>
      </div>
    </Container>
  );
};

export default FlowersOfGratitudeView;
