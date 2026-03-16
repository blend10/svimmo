import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Startseite" },
  { href: "/unsereObjekte", label: "Unsere Objekte" },
  { href: "/uberuns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

const socialLinks = [
  // { href: "#", icon: Facebook, label: "Facebook" },
  {
    href: "https://www.instagram.com/svimmoag/",
    icon: Instagram,
    label: "Instagram",
  },
  // { href: "#", icon: Twitter, label: "Twitter/X" },
  {
    href: "https://www.linkedin.com/company/sv-immo-ag/about/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand / About */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="SV IMMO AG"
                width={120}
                height={40}
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Ihr Partner für Immobilien An- und Verkauf. SV IMMO AG ist eine
              schweizweit tätige Immobilienfirma mit Sitz in Wollerau SZ.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-[#03529B]/20 text-[#03529B] flex items-center justify-center
                    hover:bg-[#03529B] hover:text-white transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-5 tracking-wide">
              Schnelle Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-[#03529B] transition-colors duration-200
                      relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0
                      after:bg-[#03529B] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-semibold text-base mb-5 tracking-wide">
                Kontakt
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@svimmo-ag.ch"
                    className="text-blue-400 text-sm hover:text-[#03529B] transition-colors duration-200"
                  >
                    info@svimmo-ag.ch
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+38344222452"
                    className="text-gray-500 text-sm hover:text-[#03529B] transition-colors duration-200"
                  >
                    +383 44 222 24 52
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3 tracking-wide">
                Adresse
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                SV IMMO AG
                <br />
                Säntisweg 4<br />
                8832 Wilen bei Wollerau
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-xs">
          <p>
            © {new Date().getFullYear()} SV IMMO AG. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              href="/kontakt"
              className="hover:text-[#03529B] transition-colors duration-200"
            >
              Impressum
            </Link>
            <Link
              href="/kontakt"
              className="hover:text-white transition-colors duration-200"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
