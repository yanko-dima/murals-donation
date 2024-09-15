import React, { FC, ReactNode } from "react";
import { ITitleType } from "@/types/text";

interface Props {
  text: string;
  type: ITitleType;
}

const getTitle = (text: string, type: ITitleType): ReactNode => {
  switch (type) {
    case "h1":
      return <h1 className={"text-3xl font-semibold mb-8"}>{text}</h1>;
    case "h2":
      return <h2 className={"text-xl font-semibold mb-4"}>{text}:</h2>;
    default:
      return <p>{text}</p>;
  }
};

const Title: FC<Props> = ({ text, type = "h1" }) => {
  return getTitle(text, type);
};

export default Title;
