// components/Testimonials.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ── Count-up hook ──────────────────────────────────────────
function useCountUp(target, duration = 2000, externalRef = null) {
  const [count, setCount] = useState(0);
  const internalRef = useRef(null);
  const started = useRef(false);

  // Use the external ref if provided, otherwise use the internal one
  const ref = externalRef || internalRef;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * target);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, ref]);

  return { count, ref };
}
// ──────────────────────────────────────────────────────────

const reviews = [
  {
    name: "Jan Muster",
    role: "Marketing",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "„Die Zusammenarbeit war hervorragend! Schnelle Kommunikation, professionelle Umsetzung und ein Ergebnis, das unsere Erwartungen übertroffen hat. Absolut empfehlenswert!“",
  },
  {
    name: "Laura Schmidt",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "„Ein absolut professionelles Team! Die Website wurde genau nach unseren Vorstellungen umgesetzt – schnell, sauber und modern. Wir sind begeistert!“",
  },
  {
    name: "Markus Weber",
    role: "Projektmanager",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "„Sehr zuverlässige Arbeit mit großartigen Ergebnissen. Die Kommunikation war jederzeit klar und transparent. Gerne wieder!“",
  },
  {
    name: "Sofia Bauer",
    role: "Designerin",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "„Kreative Lösungen, pünktliche Lieferung und ein freundliches Team. Unsere neue Website sieht fantastisch aus!“",
  },
  {
    name: "Tom Fischer",
    role: "Vertrieb",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "„Ich bin wirklich beeindruckt von der Qualität und Schnelligkeit. Das Ergebnis hat alle unsere Erwartungen übertroffen. Sehr empfehlenswert!“",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [direction, setDirection] = useState("next");
  const timeoutRef = useRef(null);

  // Shared ref for both stat counters
  const statsRef = useRef(null);

  // Count-up for both stats — both observe the same DOM element
  const customers = useCountUp(10, 2000, statsRef); // 10K+
  const rating = useCountUp(4.5, 1500, statsRef); // 4.5

  const navigate = (dir) => {
    setDirection(dir);
    setVisible(false);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => {
        if (dir === "next") return prev === reviews.length - 1 ? 0 : prev + 1;
        return prev === 0 ? reviews.length - 1 : prev - 1;
      });
      setVisible(true);
    }, 250);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const review = reviews[current];

  const slideClass = visible
    ? "opacity-100 translate-y-0"
    : direction === "next"
      ? "opacity-0 translate-y-3"
      : "opacity-0 -translate-y-3";

  return (
    <section className="bg-[#03529B] text-white py-26 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            Was unsere Kunden <br /> über uns sagen
          </h2>
          <p className="text-blue-200 text-sm mb-8 leading-relaxed">
            Ihre Meinung ist uns wichtig! Mit Ihrem Feedback können wir unsere
            Dienstleistungen stetig verbessern und noch besser auf Ihre
            Bedürfnisse eingehen.
          </p>

          {/* Stats with count-up */}
          <div
            ref={statsRef}
            className="flex gap-12 justify-center md:justify-start"
          >
            <div>
              <p className="text-4xl font-bold">
                {Math.floor(customers.count)}K+
              </p>
              <p className="text-blue-200 text-sm mt-1">Zufriedene Kunden</p>
            </div>
            <div>
              <p className="text-4xl font-bold">{rating.count.toFixed(1)}</p>
              <p className="text-blue-200 text-sm mt-1">Gesamtbewertung</p>
            </div>
          </div>
        </div>

        {/* Right Side – Review Card — UNCHANGED */}
        <div className="md:w-1/2 p-8 relative flex flex-col justify-between min-h-[300px]">
          <div className="absolute top-1/2 right-3 select-none hidden md:block -translate-y-1/2 opacity-30">
            <Image
              src="/images/review.svg"
              alt="Review"
              width={58}
              height={48}
            />
          </div>

          <div
            className={`flex flex-row items-start justify-between flex-1 transition-all duration-250 ease-in-out ${slideClass}`}
          >
            <div className="w-[25%] md:w-[15%]">
              <Image
                src={review.image}
                alt={review.name}
                width={60}
                height={60}
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <div>
                <p className="font-semibold text-[30px]">{review.name}</p>
                <p className="text-blue-200 text-sm">{review.role}</p>
              </div>

              <div className="min-h-[120px]">
                <p className="text-[20px] w-[90%] text-blue-100 leading-relaxed">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => navigate("prev")}
                  className="w-9 h-9 rounded border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#1a56a0] transition-colors"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={() => navigate("next")}
                  className="w-9 h-9 rounded border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#1a56a0] transition-colors"
                  aria-label="Next"
                >
                  →
                </button>

                <div className="flex gap-2 ml-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > current ? "next" : "prev");
                        setVisible(false);
                        timeoutRef.current = setTimeout(() => {
                          setCurrent(i);
                          setVisible(true);
                        }, 250);
                      }}
                      className={`rounded-full transition-all duration-300 ${i === current ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
