import React, { FC } from "react";
import { clsx } from "clsx";

interface Props {
  text: string;
  className?: string;
}

const TitleH3: FC<Props> = ({ text, className }) => {
  return (
    <h3 className={clsx("text-xl font-semibold mb-3", className)}>{text}</h3>
  );
};

export default TitleH3;
