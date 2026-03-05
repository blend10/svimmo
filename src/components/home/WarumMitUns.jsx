// WarumMitUns.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    id: 1,
    title: "Nachhaltiger Ansatz:",
    description:
      "Wir legen Wert auf verantwortungsbewusstes Handeln beim Ankauf und Verkauf von Immobilien.",
  },
  {
    id: 2,
    title: "Fundierte Marktkenntnisse:",
    description:
      "Unsere schweizweite Expertise gewährleistet optimale Lösungen für Ihre Immobilienbedürfnisse.",
  },
  {
    id: 3,
    title: "Persönliche Beratung:",
    description:
      "Ihre Wünsche stehen bei uns im Mittelpunkt – individuell, flexibel und zielgerichtet.",
  },
  {
    id: 4,
    title: "Höchste Qualitätsstandards:",
    description:
      "Wir setzen auf Professionalität und Präzision in jedem Schritt der Zusammenarbeit.",
  },
];

export default function WarumMitUns() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Warum sollten Sie mit uns arbeiten
          </h2>

          {/* Reasons List */}
          <div className="flex flex-col gap-5">
            {reasons.map((reason) => (
              <div key={reason.id}>
                <p className="text-sm font-semibold text-gray-900 mb-5">
                  {reason.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/uberuns">
            <button className="mt-2 flex items-center gap-2 bg-[#0068CA] hover:bg-blue-700 transition-colors duration-200 text-white text-sm font-medium px-5 py-2.5 rounded-md w-fit">
              Mehr erfahren
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-[40%] h-[660px] overflow-hidden rounded-xl shadow-md">
          <img
            src="/images/rightPhoto.png"
            alt="Immobilien Balkon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
