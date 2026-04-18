import Link from "next/link";
import HeroGateAnimation from "@/components/HeroGateAnimation";
import BenefitTriplet from "@/components/BenefitTriplet";
import StatsBar from "@/components/StatsBar";
import FAQ from "@/components/FAQ";
import CommunitySignup from "@/components/CommunitySignup";
import CTASection from "@/components/CTASection";
import PricingCard from "@/components/PricingCard";

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center bg-[var(--color-offwhite)] overflow-hidden pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">TAP &middot; GATE &middot; GO</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.05] mb-6">
              Your phone is your gate remote.
            </h1>
            <p className="text-lg text-[var(--color-warmgray)] max-w-lg mb-8 leading-relaxed">
              One tap opens your gate from up to 30 metres away. Works with any automated gate. Installs in about 10 minutes. No WiFi needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/pricing" className="btn-primary">Buy TapGate — €249</Link>
              <Link href="/compatibility" className="btn-secondary">
                Check if it fits your gate &rarr;
              </Link>
            </div>
            <p className="text-sm text-[var(--color-warmgray)] italic">
              Designed by a family of access-control engineers. 25 years in the industry.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <HeroGateAnimation />
          </div>
        </div>
      </section>

      {/* ── 2. Benefit triplet ───────────────────── */}
      <BenefitTriplet />

      {/* ── 3. Install story ─────────────────────── */}
      <section className="section" id="how-it-works">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Installation</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
            From box to open gate in about 10 minutes.
          </h2>
          <p className="text-[var(--color-warmgray)] max-w-2xl mb-12 leading-relaxed">
            Pop open your gate operator, find the trigger terminals, plug in TapGate. No drilling, no electrician.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { step: "1", title: "Unbox TapGate", desc: "Everything you need is in the box." },
              { step: "2", title: "Open your gate operator", desc: "Find the control panel — usually a plastic box near the motor." },
              { step: "3", title: "Plug in two wires", desc: "Connect TapGate to the trigger terminals. Same ones your remote uses." },
              { step: "4", title: "Tap to open", desc: "Open the app, tap the button, and your gate moves." },
            ].map((s) => (
              <div key={s.step} className="card border border-gray-100 text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-teal)] text-white flex items-center justify-center mx-auto mb-4 font-semibold">
                  {s.step}
                </div>
                <h3 className="font-semibold text-[var(--color-charcoal)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--color-warmgray)]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-teal-muted)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-[var(--color-charcoal)]">
              <strong>Compatible with:</strong> CAME, FAAC, Nice, BFT, Sommer, Hörmann, and most others.
            </p>
            <Link href="/compatibility" className="btn-secondary shrink-0 text-sm">
              See full compatibility list &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Share story ───────────────────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-3">Access Sharing</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
              Hand out keys by text message.
            </h2>
            <p className="text-[var(--color-warmgray)] mb-8 leading-relaxed">
              Punch in a number, choose access type, hit send. They install the app and tap. They&apos;re in.
            </p>
            <ul className="space-y-3">
              {["Permanent keys for family", "Time-limited keys for guests", "Single-use keys for deliveries", "Instant revocation at any time"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[var(--color-charcoal)]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--color-teal-muted)] rounded-2xl h-80 flex items-center justify-center text-[var(--color-warmgray)] text-sm">
            [Key sharing animation placeholder]
          </div>
        </div>
      </section>

      {/* ── 5. No-WiFi story ─────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[var(--color-charcoal)] rounded-2xl h-72 flex items-center justify-center order-2 lg:order-1">
            <div className="text-center text-white">
              <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-4 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-3.24M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
              </svg>
              <p className="text-sm text-gray-400">WiFi not required</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">Works Offline</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
              Your internet could be down for a week. TapGate wouldn&apos;t notice.
            </h2>
            <p className="text-[var(--color-warmgray)] mb-6 leading-relaxed">
              Bluetooth, not WiFi. That&apos;s the whole trick. Your gate keeps working even when your router doesn&apos;t.
            </p>
            <div className="bg-[var(--color-teal-muted)] rounded-xl p-5 border border-[var(--color-teal)]/20">
              <p className="text-sm text-[var(--color-charcoal)]">
                <strong>Want remote management?</strong> Add TapGate Cloud for €5/month — manage keys from anywhere, get activity logs and push notifications. Skip it and TapGate works perfectly without it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Stats bar ─────────────────────────── */}
      <StatsBar />

      {/* ── 7. Who it's for ──────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Built for how you live</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Who TapGate is for
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Homeowners",
                desc: "No more remote rummaging. Tap your phone as you pull into the driveway. Share keys with the cleaner, the gardener, the in-laws.",
                href: "/solutions/homeowners",
              },
              {
                title: "Rental hosts",
                desc: "Text guests a time-limited key before they arrive. No lockbox, no gate code, no check-in friction. Revoke when they leave.",
                href: "/solutions/rentals",
              },
              {
                title: "Small buildings",
                desc: "Manage gate access for 2\u201310 units from your phone. Add residents, revoke move-outs, see who came and went.",
                href: "/solutions/small-buildings",
              },
            ].map((t) => (
              <Link href={t.href} key={t.title} className="card border border-gray-100 hover:border-[var(--color-teal)]/30 transition-colors group">
                <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-teal)] transition-colors">
                  {t.title}
                </h3>
                <p className="text-[var(--color-warmgray)] leading-relaxed mb-4">{t.desc}</p>
                <span className="text-sm font-medium text-[var(--color-teal)]">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Testimonials ──────────────────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            What homeowners say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Marie L.", location: "Lyon, France", text: "I was sceptical a 10-minute install could be real. It took me eight. Now the whole family uses their phones." },
              { name: "Thomas B.", location: "Provence, France", text: "We rent out our villa. Sending guests a digital key instead of hiding a remote under a flower pot changed everything." },
              { name: "Anna K.", location: "Barcelona, Spain", text: "My parents couldn\u2019t find their gate remote half the time. Now they tap their phone. \u2018Why didn\u2019t this exist sooner?\u2019 \u2014 my mum." },
            ].map((t) => (
              <div key={t.name} className="card border border-gray-100">
                <p className="text-[var(--color-charcoal)] leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-[var(--color-charcoal)]">{t.name}</p>
                <p className="text-xs text-[var(--color-warmgray)]">{t.location}</p>
                <p className="text-[10px] text-[var(--color-warmgray)] mt-3 uppercase tracking-wider">[Placeholder testimonial]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Product family preview ────────────── */}
      <section className="section" id="pricing-preview">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Products</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-10">
            Choose your setup
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <PricingCard
              name="TapGate Gateway"
              price="€249"
              description="The core unit. One payment, yours forever."
              features={[
                "TapGate smart controller",
                "20 digital keys included",
                "iOS & Android app (free)",
                "Apple Watch support",
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
                "2 \u00d7 TapGate Fob (phone-free backup)",
                "1 \u00d7 TapGate Keypad (code entry)",
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
                "Push notifications",
                "Remote key management",
                "90-day activity logs",
                "Priority email support",
              ]}
              cta="Learn More"
              ctaHref="/pricing"
            />
          </div>

          {/* Coming soon strip */}
          <div className="bg-[var(--color-teal-muted)] rounded-xl p-5 flex flex-wrap items-center gap-4 text-sm">
            <span className="font-semibold text-[var(--color-charcoal)]">Coming soon:</span>
            {["Range Extender", "Door Sensor", "Indoor Button"].map((p) => (
              <span key={p} className="bg-white rounded-full px-3 py-1 text-xs text-[var(--color-warmgray)] border border-gray-200">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Founder story teaser ─────────────── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
              25 years of access control. One family.
            </h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed mb-6">
              TapGate started in a family business that&apos;s been building access-control systems since 2000. We didn&apos;t invent smart locks or reinvent the gate. We just noticed that every homeowner we met was carrying a phone and fumbling for a remote.
            </p>
            <Link href="/about" className="btn-secondary text-sm">
              Read our story &rarr;
            </Link>
          </div>
          <div className="bg-gray-100 rounded-2xl h-72 flex items-center justify-center text-[var(--color-warmgray)] text-sm">
            [Founder video — 60-90 sec intro]
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ──────────────────────────────── */}
      <FAQ />

      {/* ── 12. Community signup ──────────────────── */}
      <CommunitySignup />

      {/* ── 13. Final CTA ────────────────────────── */}
      <CTASection />
    </>
  );
}
