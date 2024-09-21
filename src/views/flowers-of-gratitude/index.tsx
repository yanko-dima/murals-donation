import React from "react";
import Title from "@/components/title";
import Container from "@/components/container";
import Banner from "@/components/banner";
import SectorConcept from "@/views/flowers-of-gratitude/components/sector-concept";
import SectorSymbolism from "@/views/flowers-of-gratitude/components/sector-symbolism";
import SectorHaderslev from "@/views/flowers-of-gratitude/components/sector-haderslev";
import { TITLES } from "@/constants/common";

const title = "Flowers of Gratitude";

const FlowersOfGratitudeView = () => {
  return (
    <>
      <Banner />
      <Container>
        <Title text={title} type={TITLES.H1} />
        <SectorConcept />
        <SectorSymbolism />
        <SectorHaderslev />
      </Container>
    </>
  );
};

export default FlowersOfGratitudeView;
