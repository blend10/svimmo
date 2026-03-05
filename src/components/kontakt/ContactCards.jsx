// components/ContactCards.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const cards = [
  {
    icon: <FaPhone size={22} className="text-white" />,
    title: "Telefonnummer",
    lines: ["+383 44 222 24 52"],
    link: "tel:+38344222452",
    linkText: "Rufen Sie uns an",
  },
  {
    icon: <FaEnvelope size={22} className="text-white" />,
    title: "E-Mail",
    lines: ["info@svimmo-ag.ch", "www.svimmo.ch"],
    link: "mailto:info@svimmo-ag.ch",
    linkText: "Schreiben Sie uns",
  },
  {
    icon: <FaMapMarkerAlt size={22} className="text-white" />,
    title: "Adresse",
    lines: ["Säntisweg 4", "8832 Willen bei Wallerau"],
    link: "https://www.google.com/maps/place/E-K+Bauunternehmung+GmbH/@47.1927261,8.7270816,17z",
    linkText: "Route anzeigen",
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

function ContactCard({ card, index }) {
  const [ref, inView] = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`group bg-[#E0F0F2] px-6 py-20 flex flex-col items-center text-center gap-4
        transition-all duration-700 ease-out cursor-default
        hover:-translate-y-2 hover:shadow-xl
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 bg-[#03529B] flex items-center justify-center shadow
        transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
      >
        {card.icon}
      </div>

      {/* Title */}
      <p className="font-semibold text-gray-800 text-base">{card.title}</p>

      {/* Info Lines */}
      <div className="text-black text-sm leading-relaxed">
        {card.lines.map((line, j) => (
          <p key={j}>{line}</p>
        ))}
      </div>

      {/* Link */}
      <a
        href={card.link}
        target={card.link.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="text-[#03529B] text-sm font-medium mt-auto relative
          after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0
          after:bg-[#03529B] after:transition-all after:duration-300
          hover:after:w-full"
      >
        {card.linkText}
      </a>
    </div>
  );
}

export default function ContactCards() {
  return (
    <div className="container mx-auto px-4 relative z-10 translate-y-10 md:-translate-y-[40%]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <ContactCard key={i} card={card} index={i} />
        ))}
      </div>
    </div>
  );
}
