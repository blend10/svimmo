// KontaktBanner.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function KontaktBanner() {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-16">
      <div className="container mx-auto bg-[#03529B] rounded-2xl px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Text */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white mb-6">
            Kontaktieren Sie uns
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
            Wir sind mit Leidenschaft für Sie da – in der <br />{" "}
            Deutschschweizer Region!
          </p>
        </div>

        {/* Right: Button */}
        <Link href="/kontakt">
          <button className="flex items-center gap-2 bg-[#E0F0F2] hover:bg-gray-100 transition-colors duration-200 text-[#03529B] text-sm font-medium px-6 py-3 rounded-xl whitespace-nowrap">
            Anmelden oder ein Konto erstellen
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </section>
  );
}
