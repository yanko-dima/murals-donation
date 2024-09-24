"use client";

import React, { FC } from "react";
import { SiKofi } from "react-icons/si";
import { clsx } from "clsx";
import Link from "next/link";

const DEFAULT_TEXT = "donate";
const KO_FI_PATH = "https://ko-fi.com/yankoartist";

interface Props {
  text?: string;
  className?: string;
}

const KoFiButton: FC<Props> = ({ text = DEFAULT_TEXT, className }) => {
  return (
    <Link
      className={clsx(
        "inline-flex items-center gap-2 capitalize bg-primaryButton text-primary-foreground shadow hover:bg-primaryButton/90 justify-center whitespace-nowrap rounded-md px-6 py-2 text-2xl font-medium",
        className,
      )}
      href={KO_FI_PATH}
      target="_blank"
    >
      <SiKofi className=" h-6 w-6" /> {text}
    </Link>
  );
};

export default KoFiButton;
