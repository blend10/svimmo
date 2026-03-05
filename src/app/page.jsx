import Verkauf from "@/components/home/Verkauf";
import AusgewaehiteEigenschaften from "@/components/home/AusgewaehiteEigenschaften";
import Suchauftrag from "@/components/home/Suchauftrag";
import WarumMitUns from "@/components/home/WarumMitUns";
import WasZeichnetUnsAus from "@/components/home/WasZeichnetUnsAus";
import KontaktBanner from "@/components/home/KontaktBanner";
import HomePage from "@/components/home/HomePage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Verkauf />
      <AusgewaehiteEigenschaften />
      <Suchauftrag />
      <WarumMitUns />
      <WasZeichnetUnsAus />
      <KontaktBanner />
    </div>
  );
}
