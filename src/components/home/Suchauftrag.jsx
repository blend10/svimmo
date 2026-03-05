// components/Suchauftrag.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    label: "Eigentumswohnung",
    icon: (
      <Image
        src="/images/icon1.svg"
        alt="Eigentumswohnung"
        width={70}
        height={70}
      />
    ),
  },
  {
    id: 2,
    label: "Einfamilienhus",
    icon: (
      <Image
        src="/images/icon2.svg"
        alt="Einfamilienhus"
        width={70}
        height={70}
      />
    ),
  },
  {
    id: 3,
    label: "Bauland",
    icon: (
      <Image src="/images/icon3.svg" alt="Bauland" width={70} height={70} />
    ),
  },
];

export default function Suchauftrag() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full bg-white py-10 px-4 md:px-16">
      <div className="container mx-auto bg-[#03529B] rounded-2xl px-6 py-12 md:px-20 md:py-40">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="w-full md:w-2/5 flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-white">Suchauftrag</h2>
            <p className="text-blue-200 text-sm mb-2 md:mb-10">
              Sie haben nicht gefunden was Sie suchen?
            </p>
            <p className="text-blue-100 text-sm leading-relaxed">
              Übermitteln Sie uns Ihre Kauf- oder Mietwünsche ganz
              unverbindlich. Wir erfassen diese in unserer Immobiliensoftware
              und informieren Sie umgehend, sobald ein passendes Objekt für Sie
              verfügbar ist.
            </p>
          </div>

          {/* Right: Category Cards */}
          <div className="w-full md:w-3/5 grid grid-cols-3 gap-3 md:gap-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className={`transition-colors duration-200 rounded-xl flex flex-col items-center justify-center gap-3 py-8 md:py-15 px-2 md:px-4 cursor-pointer group
                  ${
                    selected === cat.id
                      ? "bg-white shadow-lg"
                      : "bg-blue-50 hover:bg-white"
                  }`}
              >
                <div className="group-hover:scale-110 transition-transform duration-200 w-[50px] h-[50px] md:w-[70px] md:h-[70px] relative flex items-center justify-center">
                  {cat.icon}
                </div>
                <p className="text-[10px] md:text-sm font-semibold text-center text-gray-800">
                  {cat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
