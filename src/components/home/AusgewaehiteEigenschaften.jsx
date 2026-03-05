"use client";

import React from "react";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "7 Wohnungen Wollerau",
    year: 2021,
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "EFH Obstalden EK",
    year: 2021,
    image: "/images/project2.jpg",
  },
  { id: 3, title: "Geroldswill", year: 2021, image: "/images/project3.jpg" },
  { id: 4, title: "MFH Galgenen", year: 2021, image: "/images/project4.jpg" },
  { id: 5, title: "MFH Oberumen", year: 2021, image: "/images/project5.jpg" },
  { id: 6, title: "Mitlodi MFH", year: 2021, image: "/images/project6.jpg" },
  {
    id: 7,
    title: "Moschee Netstal",
    year: 2021,
    image: "/images/project7.jpg",
  },
  {
    id: 8,
    title: "Oberdorfstrasse 7 Oberumen",
    year: 2021,
    image: "/images/project8.jpg",
  },
  { id: 9, title: "Oberkulm", year: 2021, image: "/images/project9.png" },
  {
    id: 10,
    title: "Siedlung Weid Netstal",
    year: 2021,
    image: "/images/project10.jpg",
  },
  { id: 11, title: "Thalwil", year: 2021, image: "/images/project11.jpg" },
  {
    id: 12,
    title: "Villa Wollerau",
    year: 2021,
    image: "/images/project12.jpg",
  },
  {
    id: 13,
    title: "Uberbaung Seebach 33Wohnungen",
    year: 2021,
    image: "/images/project13.jpg",
  },
  {
    id: 14,
    title: "Wohnungen Reichenburg",
    year: 2021,
    image: "/images/project14.jpg",
  },
  {
    id: 15,
    title: "Villa Wollerau 2",
    year: 2021,
    image: "/images/project15.jpg",
  },
  {
    id: 16,
    title: "Wolelrau Alterswohnungen",
    year: 2021,
    image: "/images/project16.jpg",
  },
];

const INITIAL_COUNT = 6;

export default function AusgewaehiteEigenschaften() {
  const visible = properties.slice(0, INITIAL_COUNT);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-3xl text-gray-900 mb-10">
          Ausgewählte Eigenschaften
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-72 overflow-hidden rounded-lg p-2">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                    {property.title}
                  </h3>
                  <p className="text-sm font-medium text-[#03529B] whitespace-nowrap">
                    {property.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        {properties.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <Link
              href="/unsereObjekte"
              className="px-8 py-2.5 border border-[#03529B] text-[#03529B] text-sm font-medium rounded-full hover:bg-[#03529B] hover:text-white transition-all duration-200"
            >
              Mehr anzeigen
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
