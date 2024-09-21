import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import React, { ReactNode } from "react";
import Link from "next/link";
import TitleH3 from "@/components/title/title-h3";

interface ISocialIconData {
  icon: ReactNode;
  href: string;
  label: string;
  target?: "_blank" | "_self";
}

const SocialIcons = () => {
  const iconsData: ISocialIconData[] = [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/olenayanko",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/+380633580607",
      label: "Whatsapp",
      target: "_blank",
    },
    {
      icon: <MdOutlineAlternateEmail />,
      href: "mailto:yankoartist@gmail.com",
      label: "yankoartist@gmail.com",
      target: "_blank",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <TitleH3 text="Contacts:" />
      <div className="flex flex-col align-center gap-2 text-lg">
        {iconsData.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 [&>svg]:fill-gray-accent [&>svg]:size-6"
          >
            {item.icon}
            <Link href={item.href} target={item.target}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
