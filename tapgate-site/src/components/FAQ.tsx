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
    a: "Most people can — about 15 minutes with a screwdriver. The app walks you through it with photos for your specific gate. But if you're uncomfortable opening an electrical enclosure, or your gate operator is older or hard to access, we recommend professional installation (€89, coming soon). No shame in it — that's what it's for.",
  },
  {
    q: "What's the difference between TapGate and TapGate Cloud?",
    a: "TapGate works standalone over Bluetooth — free, no subscription, no internet required. TapGate Cloud is an optional add-on (€5/month) that adds remote management from anywhere, activity logs, and push notifications. You can add or cancel Cloud at any time.",
  },
  {
    q: "What's your return policy?",
    a: "30-day returns, no questions asked. If TapGate doesn't work with your gate, send it back for a full refund including return shipping. We ship free within the EU.",
  },
  {
    q: "My gate is a Somfy / Nice / CAME. They have their own smart module. Why choose TapGate?",
    a: "Fair question. If you're happy being locked into one manufacturer's ecosystem, their native module is a reasonable choice — often cheaper too. TapGate makes sense if: you share access with a lot of people (our sharing features are richer), you want one app that works if you ever change gate brands, you have multiple gates of different brands, or you want features like scheduled access, activity logs, and single-use guest keys. If none of those apply, honestly, their module might be a better fit.",
  },
  {
    q: "Does TapGate work with every gate?",
    a: "No. TapGate works with automated gates that have a dry-contact trigger input — that's most modern residential gate operators. It doesn't work with manual gates (no motor), garage door openers, or very old operators without accessible trigger terminals. If your gate was installed before about 2005, check with us first. We'd rather tell you upfront than have you find out after buying.",
  },
];

export default function FAQ({ items = defaultFAQ }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="eyebrow mb-4">FAQ</p>
        <h2 className="h2-section mb-12">
          The <em>questions</em> every homeowner asks.
        </h2>
        <div className="divide-y divide-[var(--color-hairline)]">
          {items.map((item, i) => {
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-4 group"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-lg md:text-xl font-medium text-[var(--color-charcoal)] group-hover:text-[var(--color-teal)] transition-colors">
                    {item.q}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-5 h-5 shrink-0 text-[var(--color-warmgray)] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-[var(--color-warmgray)] leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
