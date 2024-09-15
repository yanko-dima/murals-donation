import Title from "@/components/title";
import { TITLE } from "@/constants/common";
import ClientButton from "@/components/client-button";

export default function Home() {
  const title = "Hello I`m Helen";

  return (
    <>
      <Title text={title} type={TITLE.H2} />
      <ClientButton />
    </>
  );
}
