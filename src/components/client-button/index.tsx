"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";

const ClientButton = () => {
  const router = useRouter();

  const onButtonClick = (): void => router.push(ROUTES.FLOWERS_OF_GRATITUDE);
  return (
    <Button variant={"secondary"} onClick={onButtonClick}>
      Flowers of gratitude
    </Button>
  );
};

export default ClientButton;
