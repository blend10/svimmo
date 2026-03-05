// PageHero.jsx
import React from "react";
import Image from "next/image";

export default function PageHero({ title, image }) {
  return (
    <div className="pt-20">
      <section className="relative w-full  container mx-auto h-[60vh] ">
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-blue-400/30 to-white/10" />

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center px-5 md:px-0">
          <h1 className="text-white text-5xl font-semibold tracking-widest uppercase">
            {title}
          </h1>
        </div>
      </section>
    </div>
  );
}
