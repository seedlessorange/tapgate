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

      {/* Contact bar */}
      <section className="section bg-[var(--color-teal-muted)]">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <h2 className="text-2xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
            Still stuck?
          </h2>
          <p className="text-[var(--color-warmgray)] mb-6">
            Send us a message and we&apos;ll get back to you within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <a href="mailto:hello@tapgate.com" className="btn-secondary">
              hello@tapgate.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
