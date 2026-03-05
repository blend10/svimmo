"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Startseite" },
    { href: "/unsereObjekte", label: "Unsere Objekte" },
    { href: "/uberuns", label: "Über Uns" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-0 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-row items-center gap-6 text-[#03529B] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#03529B] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 focus:outline-none z-[60]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 bg-[#03529B] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 bg-[#03529B] transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 bg-[#03529B] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col bg-white transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Top gradient accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#03529B] to-[#0a7fd4]" />

        {/* Nav Links */}
        <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between py-5 border-b border-gray-100
                transition-all duration-500 ease-out
                ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
              style={{ transitionDelay: isOpen ? `${i * 80 + 150}ms` : "0ms" }}
            >
              <span className="text-2xl font-semibold text-gray-800 group-hover:text-[#03529B] transition-colors duration-200">
                {link.label}
              </span>
              {/* Arrow */}
              <svg
                className="w-5 h-5 text-[#03529B] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Bottom branding */}
        <div
          className={`px-8 pb-10 transition-all duration-500 ease-out
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-4"}`}
          style={{ transitionDelay: isOpen ? "450ms" : "0ms" }}
        >
          <p className="text-xs text-gray-400 tracking-widest uppercase">
            svimmo-ag.ch
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
