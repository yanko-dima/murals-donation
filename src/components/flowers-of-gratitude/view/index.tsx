import React from "react";
import PayPalButton from "@/components/pay-pal-button";
import Title from "@/components/title";
import Container from "@/components/container";
import Banner from "@/components/banner";
import { FLOWERS_OF_GRATITUDE, TITLE } from "@/constants/common";

const title = "Flowers of Gratitude";

const FlowersOfGratitudeView = () => {
  const {
    GOAL,
    CONCEPT,
    SYMBOLISM,
    IMPLEMENTATION,
    SOCIAL_ASPECT,
    FEATURE_PLANS,
  } = FLOWERS_OF_GRATITUDE;
  return (
    <Container>
      <Banner />
      <Title text={title} type={TITLE.H1} />
      <div className={"flex gap-4 mb-4"}>
        <div className={"grow min-w-80 min-h-80 w-1/2 bg-[#ffee04]"}></div>
        <div className={"w-1/2"}>
          <Title text={GOAL.TITLE} type={TITLE.H2} />
          <p className={"mb-4"}>{GOAL.DESCRIPTION}</p>
          <Title text={CONCEPT.TITLE} type={TITLE.H2} />
          <p className={"mb-4"}>{CONCEPT.DESCRIPTION}</p>
          <PayPalButton />
        </div>
      </div>
      <div className={"mb-4"}>
        <Title text={SYMBOLISM.TITLE} type={TITLE.H2} />
        <p className={"mb-4"}>{SYMBOLISM.DESCRIPTION}</p>
      </div>
      <div className={"mb-4"}>
        <Title text={IMPLEMENTATION.TITLE} type={TITLE.H2} />
        <p className={"mb-4"}>{IMPLEMENTATION.DESCRIPTION}</p>
      </div>
      <div className={"mb-4"}>
        <Title text={SOCIAL_ASPECT.TITLE} type={TITLE.H2} />
        <p className={"mb-4"}>{SOCIAL_ASPECT.DESCRIPTION}</p>
      </div>
      <div className={"mb-4"}>
        <Title text={FEATURE_PLANS.TITLE} type={TITLE.H2} />
        <p className={"mb-4"}>{FEATURE_PLANS.DESCRIPTION}</p>
      </div>
    </Container>
  );
};

export default FlowersOfGratitudeView;
