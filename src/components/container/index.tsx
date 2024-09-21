import React, { FC, ReactNode } from "react";
import { clsx } from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return <div className={clsx("pl-4 pr-4", className)}>{children}</div>;
};

export default Container;
