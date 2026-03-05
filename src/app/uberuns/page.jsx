import React from "react";
import PageHero from "@/components/uberuns/PageHero";
import Vision from "@/components/uberuns/Vision";
import DragSlider from "@/components/uberuns/DragSlider";
import UnsereZahlen from "@/components/uberuns/UnsereZahlen";
import Testimonials from "@/components/uberuns/Testimonials";
import WasZeichnetUnsAus from "@/components/home/WasZeichnetUnsAus";
import KontaktBanner from "@/components/home/KontaktBanner";

const page = () => {
  return (
    <div>
      <PageHero title="Über Uns" image="/images/startPageUberUns.png" />
      <Vision />
      <DragSlider />
      <UnsereZahlen />
      <Testimonials />
      <WasZeichnetUnsAus />
      <KontaktBanner />
    </div>
  );
};

export default page;
