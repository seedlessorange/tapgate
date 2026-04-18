import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Support",
  description: "Installation guides, compatibility help, troubleshooting, and contact for TapGate.",
};

const categories = [
  {
    title: "Installation guides",
    desc: "Step-by-step instructions for every gate type.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    items: ["Swing gate installation", "Sliding gate installation", "Barrier installation", "Wire routing tips"],
  },
  {
    title: "App how-tos",
    desc: "Get the most out of the TapGate app.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    items: ["Pairing your TapGate", "Sharing keys by text", "Setting time-limited keys", "Revoking access"],
  },
  {
    title: "Compatibility",
    desc: "Find out if TapGate works with your gate.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    items: ["Supported brands list", "Compatibility quiz", "Download compatibility guide (PDF)"],
  },
  {
    title: "Troubleshooting",
    desc: "Something not working? Start here.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    items: ["Gate not responding", "Can\u2019t pair device", "Key sharing issues", "App connection problems"],
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--color-offwhite)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Support</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--color-charcoal)] mb-6 max-w-3xl">
            How can we help?
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-xl">
            Guides, troubleshooting, and answers. If you can&apos;t find what you need, we&apos;re an email away.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="card border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center shrink-0">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">{cat.title}</h3>
                    <p className="text-sm text-[var(--color-warmgray)]">{cat.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--color-teal)] hover:underline cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-white">
        <FAQ />
      </div>

      {/* Known limitations link */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Link href="/support/limitations" className="card border border-gray-200 flex items-start gap-4 hover:border-[var(--color-teal)]/30 transition-colors group block">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-teal)] transition-colors">What TapGate doesn&apos;t do (yet)</h3>
              <p className="text-sm text-[var(--color-warmgray)]">Honest list of current limitations so you know before you buy.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Support channels */}
      <section className="section bg-[var(--color-teal-muted)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Get help</p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[var(--color-charcoal)] mb-8">
            Multiple ways to reach us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* FAQ */}
            <div className="card border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center mx-auto mb-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              </div>
              <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">FAQ</h3>
              <p className="text-sm text-[var(--color-warmgray)] mb-3">Answers 70% of questions instantly.</p>
              <a href="#faq" className="text-sm text-[var(--color-teal)] font-medium">Read FAQ &darr;</a>
            </div>

            {/* Live chat */}
            <div className="card border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center mx-auto mb-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              </div>
              <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">Live chat</h3>
              <p className="text-sm text-[var(--color-warmgray)] mb-3">Mon–Fri, 9am–6pm CET. For install-day panic.</p>
              <span className="text-sm text-[var(--color-warmgray)] italic">Coming soon</span>
            </div>

            {/* Email */}
            <div className="card border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center mx-auto mb-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22 6 12 13 2 6" /></svg>
              </div>
              <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">Email support</h3>
              <p className="text-sm text-[var(--color-warmgray)] mb-3">1-business-day response, guaranteed.</p>
              <a href="mailto:hello@tapgate.com" className="text-sm text-[var(--color-teal)] font-medium">hello@tapgate.com</a>
            </div>

            {/* Video call */}
            <div className="card border-2 border-[var(--color-teal)] text-center relative">
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[var(--color-teal)] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full">Premium</span>
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center mx-auto mb-3 mt-1">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
              </div>
              <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">Video call install help</h3>
              <p className="text-sm text-[var(--color-warmgray)] mb-3">€15 for 15 min. A real person walks you through it live.</p>
              <Link href="/contact" className="text-sm text-[var(--color-teal)] font-medium">Book a call &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
