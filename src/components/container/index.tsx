import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className={"pl-4 pr-4"}>{children}</div>;
};

export default Container;
