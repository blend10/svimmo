import KontaktBanner from "@/components/home/KontaktBanner";
import MapSection from "@/components/kontakt/MapSection";
import ContactCards from "@/components/kontakt/ContactCards";
import ContactForm from "@/components/kontakt/ContactForm";

const page = () => {
  return (
    <div>
      <MapSection />
      <ContactCards />
      <ContactForm />
      <KontaktBanner />
    </div>
  );
};

export default page;
