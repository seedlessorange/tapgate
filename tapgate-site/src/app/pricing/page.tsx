import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "TapGate pricing: Gateway at €249, Home Set at €349, optional Cloud at €5/month. No hidden fees, free EU shipping, 30-day returns, 2-year warranty.",
};

const pricingFAQ = [
  {
    q: "Is there a subscription required?",
    a: "No. The Gateway and Home Set are one-time purchases with no recurring fees. TapGate Cloud (€5/month) is entirely optional and can be cancelled any time. TapGate works perfectly without it.",
  },
  {
    q: "Can I upgrade from Gateway to Home Set later?",
    a: "Yes. Contact us and we will send you an upgrade kit (2 Fobs + Keypad) at a discounted price. You keep your existing Gateway and all your keys.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. 30-day returns, no questions asked. If TapGate does not work with your gate, send it back for a full refund including return shipping within the EU.",
  },
  {
    q: "Is there a discount for multiple gates?",
    a: "Each gate needs its own TapGate Gateway. Contact us for multi-gate pricing if you need 3 or more units. Existing volume customers typically save 10-15%.",
  },
];

const paymentMethods = [
  "Visa",
  "Mastercard",
  "PayPal",
  "Apple Pay",
  "Google Pay",
  "SEPA",
  "Carte Bancaire",
];

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative bg-[var(--color-offwhite)] pt-28 pb-16 lg:pt-36 lg:pb-20 text-center">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="eyebrow mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.08] mb-6">
            Simple pricing. No surprises.
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-xl mx-auto leading-relaxed">
            One-time hardware purchase, yours forever. Optional cloud subscription if you want remote management. That&apos;s the whole deal.
          </p>
        </div>
      </section>

      {/* ── Pricing cards ─────────────────────── */}
      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              name="TapGate Gateway"
              price="€249"
              description="The core unit. One payment, yours forever."
              features={[
                "TapGate smart controller",
                "20 digital keys included",
                "iOS & Android app (free)",
                "Apple Watch support",
                "Bluetooth 5.0 (30 m range)",
                "Works offline — no WiFi needed",
                "Free app updates forever",
                "2-year hardware warranty",
              ]}
              cta="Buy Gateway"
              ctaHref="/products/tapgate-gateway"
            />
            <PricingCard
              name="TapGate Home Set"
              price="€349"
              description="Gateway + 2 Fobs + Keypad. Everything for the whole household."
              features={[
                "Everything in Gateway",
                "2 x TapGate Fob (phone-free backup)",
                "1 x TapGate Keypad (code entry)",
                "3 ways to open: phone, fob, code",
                "Priority support",
                "Free EU shipping",
              ]}
              cta="Buy Home Set"
              ctaHref="/products/home-set"
              featured
              badge="Most Popular"
            />
            <PricingCard
              name="TapGate Cloud"
              price="€5"
              period="/month"
              description="Optional. Add remote management, logs, and notifications. Cancel any time."
              features={[
                "Real-time web dashboard",
                "Push notifications on every open",
                "Remote key management",
                "90-day activity logs",
                "Priority email support",
                "Works with Gateway or Home Set",
              ]}
              cta="Learn More"
              ctaHref="/support"
            />
          </div>
        </div>
      </section>

      {/* ── Included with every purchase ──────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            All purchases include
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "2-year warranty",
                desc: "Hardware guaranteed against defects.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Free EU shipping",
                desc: "No shipping fees anywhere in the EU.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                ),
              },
              {
                title: "30-day returns",
                desc: "Full refund, no questions asked.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                  </svg>
                ),
              },
              {
                title: "Free app updates",
                desc: "New features forever, at no extra cost.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <path d="M12 18h.01" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-muted)] flex items-center justify-center text-[var(--color-teal)] mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-charcoal)] mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-warmgray)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────── */}
      <FAQ items={pricingFAQ} />

      {/* ── Payment methods ───────────────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <p className="eyebrow mb-3">Payment methods</p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[var(--color-charcoal)] mb-8">
            Pay however you like
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="bg-[var(--color-offwhite)] border border-gray-200 rounded-lg px-5 py-3 text-sm font-medium text-[var(--color-charcoal)]"
              >
                {method}
              </span>
            ))}
          </div>
          <p className="text-xs text-[var(--color-warmgray)] mt-4">
            All transactions are secured with SSL encryption. Payments processed by Stripe.
          </p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────── */}
      <section className="section bg-[var(--color-charcoal)] text-white text-center">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Ready to ditch the remote?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            One payment, yours forever. Free EU shipping. 30-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products/home-set" className="btn-primary">
              Buy Home Set — &euro;349
            </Link>
            <Link href="/products/tapgate-gateway" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-charcoal)]">
              Buy Gateway — &euro;249
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
