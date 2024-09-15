import React from "react";
import { Button } from "@/components/ui/button";
import { FaPaypal } from "react-icons/fa";

const PayPalButton = () => {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="BCAEQ4WEN8Y7A" />
      <Button type={"submit"}>
        <FaPaypal className="mr-2 h-4 w-4" /> Donate
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
