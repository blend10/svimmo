// UnsereZahlen.jsx
import React from "react";

const stats = [
  {
    id: 1,
    value: "10.5 M",
    title: "Einnahmen aus Immobilientransaktionen",
    description: "Owned from properties transactions",
  },
  {
    id: 2,
    value: "10.5 M",
    title: "Owned from properties transactions",
    description: "Owned from properties transactions",
  },
  {
    id: 3,
    value: "10.5 M",
    title: "Owned from properties transactions",
    description: "Owned from properties transactions",
  },
  {
    id: 4,
    value: "10.5 M",
    title: "Owned from properties transactions",
    description: "Owned from properties transactions",
  },
];

export default function UnsereZahlen() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="container  mx-auto flex flex-col gap-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center leading-snug">
          Werfen Sie einen Blick <br /> auf unsere Zahlen
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#E0F0F2] aspect-square  p-6 flex flex-col gap-3 justify-center"
            >
              {/* Value */}
              <p className="text-3xl font-bold text-[#03529B]">{stat.value}</p>

              {/* Title */}
              <p className="w-[80%] font-semibold text-black leading-snug">
                {stat.title}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-blue-100 my-1" />

              {/* Description */}
              <p className="text-[14px] text-[#606968] w-[60%] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
