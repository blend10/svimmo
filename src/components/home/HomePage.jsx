// components/Hero.jsx
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/hero1.png", alt: "Wohnhaus Aussenansicht" },
  { src: "/images/hero2.jpg", alt: "Modernes Gebäude" },
  { src: "/images/hero3.jpg", alt: "Wohnanlage" },
  { src: "/images/hero4.jpg", alt: "Küche Innenansicht" },
];

const avatars = [
  { src: "https://randomuser.me/api/portraits/men/32.jpg", alt: "Agent 1" },
  { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Agent 2" },
  { src: "https://randomuser.me/api/portraits/men/55.jpg", alt: "Agent 3" },
];

export default function HomePage() {
  return (
    <section className="w-full min-h-screen bg-[#daeef7] px-6 md:px-20 py-10 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side – Text */}
        <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <p className="text-[#03529B] text-[30px] tracking-wide uppercase">
            SV IMMO AG
          </p>
          <h1 className="text-[38px] md:text-[50px] font-bold text-[#03529B] uppercase leading-tight">
            Ihr Partner für Immobilien{" "}
            <span className="hidden md:inline">
              <br />
            </span>
            An- und Verkauf.
          </h1>

          {/* Mobile-only CTA button */}
          <Link href="/kontakt">
            <div className="flex md:hidden justify-center mt-2">
              <button className="bg-[#03529B] text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-[#024a8a] transition-colors">
                Jetzt kontaktieren
              </button>
            </div>
          </Link>
        </div>

        {/* Right Side – Photo Grid */}
        <div className="md:w-1/2 w-full relative">
          {/* Mobile: simple 2x2 equal grid */}
          <div className="grid grid-cols-2 gap-2 md:hidden">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-[180px] rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop: original asymmetric grid */}
          <div className="hidden md:grid grid-cols-2 gap-2">
            <div className="flex flex-col items-center h-full gap-2">
              <div className="relative w-full h-[460px]">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[280px]">
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center h-full gap-2">
              <div className="relative w-full h-[280px]">
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[460px]">
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating Agents Badge */}
          {/* <div className="absolute -bottom-15 right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex flex-col items-center gap-3">
            <div className="flex flex-row items-center justify-between">
              {avatars.map((avatar, i) => (
                <Image
                  key={i}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={36}
                  height={36}
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="flex flex-row gap-4">
              <p className="text-sm font-bold text-gray-800">1000K+</p>
              <p className="text-xs text-gray-400">Exclusive Agents</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
