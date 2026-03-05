// components/Verkauf.jsx
"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { count, ref };
}

export default function Verkauf() {
  const { count, ref } = useCountUp(14000);

  const formatCount = (n) => {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "K";
    return n.toString();
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-40">
        {/* Left: Images + Stat Card */}
        <div
          ref={ref}
          className="relative flex-shrink-0 w-full md:w-1/2 h-[420px] md:h-[620px]"
        >
          {/* Top-left image */}
          <div className="absolute top-0 left-0 w-[48%] h-[55%] overflow-hidden rounded-sm shadow-md">
            <img
              src="/images/house1.png"
              alt="Haus 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-right image */}
          <div className="absolute bottom-0 right-0 w-[50%] h-[80%] overflow-hidden rounded-sm shadow-md">
            <img
              src="/images/house2.png"
              alt="Haus 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stat Card */}
          <div className="absolute bottom-0 left-[30%] md:left-52 bg-[#E0F0F2] rounded-md shadow-md p-4 w-fit flex flex-col items-start justify-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-600" />
            <p className="text-xs text-gray-500">Immobilien zum Verkauf</p>
            <p className="text-2xl font-bold text-gray-800">
              {formatCount(count)}
            </p>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h2 className="text-3xl font-medium text-gray-900 tracking-wide uppercase">
            Über Uns
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Die SV IMMO AG ist eine schweizweit agierende Immobilienfirma mit
            Sitz in Wollerau SZ. Unser Schwerpunkt liegt auf dem nachhaltigen
            Kauf und Verkauf von Immobilien. Mit Begeisterung, Innovationskraft
            und höchsten Qualitätsstandards begleiten wir unsere Kunden auf
            ihrem Weg zum Erfolg.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Wir entwickeln massgeschneiderte Projekte und bringen tiefgreifendes
            Fachwissen aus der Bau- und Immobilienbranche ein. Als dynamisches
            Unternehmen in der Deutschschweiz profitieren wir von einem starken
            und breit gefächerten Netzwerk an zuverlässigen Partnern.
          </p>
        </div>
      </div>
    </section>
  );
}
