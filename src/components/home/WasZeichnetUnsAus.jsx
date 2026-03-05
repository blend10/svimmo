// WasZeichnetUnsAus.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    id: 1,
    icon: "/images/icon4.svg",
    title: "Schnelle vertragsabwicklung",
    description:
      "Wir sind Ihr Partner, der Sie mühelos, schnell und sorgenfrei durch diese Phase begleitet – weil Ihr Erfolg unser Antrieb ist.",
  },
  {
    id: 2,
    icon: "/images/icon5.svg",
    title: "Unkomplizierte und kompetente beratung",
    description:
      "Zusammen mit unseren Partnern stellen wir sicher, dass Sie zeitnahe und kompetent beraten werden.",
  },
  {
    id: 3,
    icon: "/images/icon6.svg",
    title: "Immobilien schweizweit",
    description:
      "Dank unserer erfolgreich abgeschlossenen und laufenden Projekte sind wir schweizweit bestens vernetzt.",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function WasZeichnetUnsAus() {
  const [titleRef, titleInView] = useInView();

  return (
    <section className="w-full bg-white py-10 px-6 md:px-16">
      <div className="container mx-auto bg-[#E0F0F2] rounded-2xl py-34 px-10">
        {/* Title */}
        <h2
          ref={titleRef}
          className={`text-3xl font-semibold text-gray-900 text-center mb-12 transition-all duration-700 ease-out
            ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Was zeichnet uns aus?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center gap-4 
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon Circle with pulse ring on hover */}
      <div className="group relative w-16 h-16 flex items-center justify-center flex-shrink-0">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#03529B] opacity-0 scale-100 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 ease-out" />
        <div className="w-16 h-16 rounded-full bg-[#03529B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 w-[80%] leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
