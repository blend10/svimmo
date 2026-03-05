import React from "react";
import PageHero from "@/components/uberuns/PageHero";
import KontaktBanner from "@/components/home/KontaktBanner";
import WasZeichnetUnsAus from "@/components/home/WasZeichnetUnsAus";
import AusgewaehiteEigenschaften2 from "@/components/objekte/AusgewaehiteEigenschaften2";

const page = () => {
  return (
    <div>
      <PageHero
        title="Unsere Objekte"
        image="/images/startPageUnsereObjekte.jpg"
      />
      <AusgewaehiteEigenschaften2 />
      <WasZeichnetUnsAus />
      <KontaktBanner />
    </div>
  );
};

export default page;
