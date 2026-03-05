// components/Vision.jsx
import React from "react";

const items = [
  {
    title: "Vision",
    text: "SV IMMO AG ist eine schweizweit tätige Immobilienfirma mit Sitz in Wollerau SZ. Unser Fokus ist das nachhaltige Immobilienankaufen und -verkaufen. Mit Elan und Freude verbunden mit hohen Qualitätsansprüchen beraten wir unsere Kunden.",
  },
  {
    title: "Mission",
    text: "SV IMMO AG ist eine schweizweit tätige Immobilienfirma mit Sitz in Wollerau SZ. Unser Fokus ist das nachhaltige Immobilienankaufen und -verkaufen. Mit Elan und Freude verbunden mit hohen Qualitätsansprüchen beraten wir unsere Kunden.",
  },
];

const Vision = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-6 py-10 md:py-0 md:px-16 first:md:pl-0 last:md:pr-0 w-full"
          >
            {/* Accent line */}
            <div className="w-10 h-1 bg-[#03529B] rounded-full" />

            <h1 className="text-[#1A1A1A] text-[40px] font-semibold leading-tight">
              {item.title}
            </h1>

            <p className="text-[#1A1A1A] text-[20px] font-normal leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
