"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const defaultFAQ: FAQItem[] = [
  {
    q: "Will TapGate work with my gate?",
    a: "TapGate works with any automated gate that has a trigger (dry-contact) input — that covers CAME, FAAC, Nice, BFT, Sommer, Hörmann, and most other residential operators. Use our compatibility checker for a quick answer, or send us a photo of your gate box.",
  },
  {
    q: "What if my phone is dead?",
    a: "Your existing remote, keypad, or intercom still works. TapGate adds a new way to open your gate — it doesn't replace the old ones. If you want a backup that doesn't need a phone, add a TapGate Fob.",
  },
  {
    q: "How secure is TapGate?",
    a: "TapGate uses encrypted Bluetooth and unique digital keys per user. Keys can be time-limited or revoked instantly. There's no cloud connection unless you opt into TapGate Cloud, so there's no remote attack surface by default.",
  },
  {
    q: "Can I install it myself?",
    a: "Yes. If you can use a screwdriver, you can install TapGate. Open your gate operator, find the two trigger terminals, connect TapGate's wires. Most people finish in under 10 minutes. We include a step-by-step guide.",
  },
  {
    q: "What's the difference between TapGate and TapGate Cloud?",
    a: "TapGate works standalone over Bluetooth — free, no subscription, no internet required. TapGate Cloud is an optional add-on (€5/month) that adds remote management from anywhere, activity logs, and push notifications. You can add or cancel Cloud at any time.",
  },
  {
    q: "What's your return policy?",
    a: "30-day returns, no questions asked. If TapGate doesn't work with your gate, send it back for a full refund including return shipping. We ship free within the EU.",
  },
];

export default function FAQ({ items = defaultFAQ }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="eyebrow mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
          Common questions
        </h2>
        <div className="divide-y divide-gray-200">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                aria-expanded={openIndex === i}
              >
                <span className="text-lg font-medium text-[var(--color-charcoal)]">{item.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  className={`w-5 h-5 shrink-0 text-[var(--color-warmgray)] transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[var(--color-warmgray)] leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
