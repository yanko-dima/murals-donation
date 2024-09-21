import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { FaPaypal } from "react-icons/fa";
import { clsx } from "clsx";

const DEFAULT_TEXT = "donate us";

interface Props {
  text?: string;
  className?: string;
}

const PayPalButton: FC<Props> = ({ text = DEFAULT_TEXT, className }) => {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="BCAEQ4WEN8Y7A" />
      <Button
        type={"submit"}
        className={clsx("flex items-center gap-2 capitalize", className)}
      >
        <FaPaypal className=" h-6 w-6" /> {text}
      </Button>
      {/*<input*/}
      {/*  type="image"*/}
      {/*  src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"*/}
      {/*  border="0"*/}
      {/*  name="submit"*/}
      {/*  title="PayPal - The safer, easier way to pay online!"*/}
      {/*  alt="Donate with PayPal button"*/}
      {/*/>*/}
      {/*<img*/}
      {/*  alt=""*/}
      {/*  border="0"*/}
      {/*  src="https://www.paypal.com/en_UA/i/scr/pixel.gif"*/}
      {/*  width="1"*/}
      {/*  height="1"*/}
      {/*/>*/}
    </form>
  );
};

export default PayPalButton;
