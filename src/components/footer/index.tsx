import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={"flex w-full p-6 bg-[rgb(237,235,224)] mt-auto"}>
      <div className={"flex flex-col gap-2"}>
        <h3>Contacts:</h3>
        <div className={"flex flex-col align-center gap-2"}>
          <div className={"flex items-center gap-2"}>
            <FaInstagram />
            <a href={"https://www.instagram.com/olenayanko"} target={"_blank"}>
              Instagram
            </a>
          </div>
          <div className={"flex items-center gap-2"}>
            <FaWhatsapp />{" "}
            <a href={"https://wa.me/+380633580607"} target={"_blank"}>
              Whatsapp
            </a>
          </div>
          <div className={"flex items-center gap-2"}>
            <MdOutlineAlternateEmail />
            <a href={"mailto:yankoartist@gmail.com"} target={"_blank"}>
              yankoartist@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
