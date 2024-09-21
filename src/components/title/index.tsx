import React, { FC, ReactNode } from "react";
import { ITitleType } from "@/types/text";

const getTitle = (
  text: string,
  type: ITitleType,
  isDots: boolean,
): ReactNode => {
  const prefix = isDots ? ":" : "";

  switch (type) {
    case "h1":
      return (
        <h1 className={"text-4xl font-semibold mb-8 text-center"}>
          {text}
          {prefix}
        </h1>
      );
    case "h2":
      return (
        <h2 className={"text-xl font-semibold mb-4"}>
          {text}
          {prefix}
        </h2>
      );
    default:
      return <h6>{text}</h6>;
  }
};

interface Props {
  text: string;
  type: ITitleType;
  isDots?: boolean;
}

const Title: FC<Props> = ({ text, type = "h1", isDots = false }) => {
  return getTitle(text, type, isDots);
};

export default Title;
