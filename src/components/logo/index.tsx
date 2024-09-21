import React, { FC } from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { clsx } from "clsx";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <Link href={ROUTES.HOME}>
        <Image height={75} src={logo} alt={"logo"} />
      </Link>
    </div>
  );
};

export default Logo;
