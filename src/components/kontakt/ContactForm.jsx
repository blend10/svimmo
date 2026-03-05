// components/ContactForm.jsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    console.log(formData);
    setSending(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = `
    border border-[#03529B]/40 rounded px-4 py-4 text-sm text-gray-700
    placeholder-gray-400 outline-none w-full bg-white
    transition-all duration-300
    focus:border-[#03529B] focus:shadow-[0_0_0_3px_rgba(3,82,155,0.1)]
    focus:bg-[#f5f9ff]
  `;

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Row 1: Vorname + Nachname */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="vorname"
              placeholder="Vorname*"
              required
              value={formData.vorname}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="text"
              name="nachname"
              placeholder="Nachname*"
              required
              value={formData.nachname}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Row 2: E-Mail + Telefon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="tel"
              name="telefon"
              placeholder="Telefonnummer*"
              required
              value={formData.telefon}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Row 3: Nachricht */}
          <textarea
            name="nachricht"
            placeholder="Nachricht*"
            required
            rows={6}
            value={formData.nachricht}
            onChange={handleChange}
            className={`${inputClass} h-[195px] resize-none`}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={sending || submitted}
            className={`w-full text-white font-medium text-sm py-4 rounded transition-all duration-300
              ${
                submitted
                  ? "bg-green-500 scale-[0.99]"
                  : sending
                    ? "bg-[#03529B]/70 cursor-not-allowed"
                    : "bg-[#03529B] hover:bg-[#024a8a] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
              }`}
          >
            <span className="flex items-center justify-center gap-2">
              {submitted ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Erfolgreich gesendet!
                </>
              ) : sending ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Wird gesendet...
                </>
              ) : (
                "Absenden"
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
