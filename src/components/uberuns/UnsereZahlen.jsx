import { MessagesSquare, Home, Megaphone, Handshake } from "lucide-react";

export default function UnsereZahlen() {
  const steps = [
    {
      number: "01",
      title: "Erstberatung",
      description:
        "Wir analysieren Ihre Immobilie und besprechen gemeinsam Ihre Ziele und Erwartungen.",
      icon: <MessagesSquare className="h-8 w-8 text-[#0d57a7]" />,
    },
    {
      number: "02",
      title: "Immobilienbewertung",
      description:
        "Unsere Experten ermitteln den realistischen Marktwert Ihrer Immobilie.",
      icon: <Home className="h-8 w-8 text-[#0d57a7]" />,
    },
    {
      number: "03",
      title: "Professionelle Vermarktung",
      description:
        "Wir erstellen hochwertige Exposés und vermarkten Ihre Immobilie gezielt.",
      icon: <Megaphone className="h-8 w-8 text-[#0d57a7]" />,
    },
    {
      number: "04",
      title: "Erfolgreicher Abschluss",
      description:
        "Wir begleiten Sie bis zum Notartermin und sorgen für einen sicheren Verkauf.",
      icon: <Handshake className="h-8 w-8 text-[#0d57a7]" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f5f5f5] to-white px-6 py-20 md:px-10 lg:px-12 lg:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#0d57a7]/5 blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-[#0d57a7]/5 blur-3xl mix-blend-multiply pointer-events-none"></div>

      <div className="mx-auto container relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
          <span className="text-[#0d57a7] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Unser Prozess
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            So funktioniert der
            <br className="hidden sm:block" />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d57a7] to-[#1e78d6]">
              Immobilienverkauf
            </span>{" "}
            mit uns
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex flex-col rounded-3xl bg-white p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100"
            >
              {/* Massive background number */}
              <div className="absolute top-6 right-6 text-7xl md:text-8xl font-medium leading-none  text-[#0d57a7]/20 select-none group-hover:text-[#0d57a7]/40 transition-colors duration-500 z-0">
                {step.number}
              </div>

              {/* Icon container */}
              <div className="mb-8 relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0d57a7]/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                  {step.icon}
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="mb-4 text-2xl font-bold text-slate-900 group-hover:text-[#0d57a7] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
