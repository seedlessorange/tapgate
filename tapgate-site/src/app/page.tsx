import Link from "next/link";
import HeroGateAnimation from "@/components/HeroGateAnimation";
import BenefitTriplet from "@/components/BenefitTriplet";
import StatsBar from "@/components/StatsBar";
import FAQ from "@/components/FAQ";
import CommunitySignup from "@/components/CommunitySignup";
import CTASection from "@/components/CTASection";
import PricingCard from "@/components/PricingCard";
import ScrambleText from "@/components/ScrambleText";
import Marquee from "@/components/Marquee";
import KeyShareAnimation from "@/components/KeyShareAnimation";
import OfflinePulse from "@/components/OfflinePulse";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Background grid hairlines for editorial feel */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-hairline) 1px, transparent 1px)",
            backgroundSize: "80px 100%",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <span className="eyebrow">Tap · Gate · Go</span>
              <span
                aria-hidden
                className="hidden md:inline-block h-px w-16 bg-[var(--color-hairline)]"
              />
              <span
                aria-hidden
                className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-warmgray)]"
              >
                v1 · EU launch
              </span>
            </div>

            <ScrambleText
              as="h1"
              className="h1-hero mb-6"
              text="Your phone is your gate remote."
              emphasis="remote"
              delay={350}
              duration={1400}
            />

            <p className="text-lg md:text-xl text-[var(--color-warmgray)] max-w-xl mb-10 leading-relaxed">
              One tap opens your gate from up to 30 metres away. Works with the gate you already own. Installs in about ten minutes. No WiFi needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/pricing" className="btn-primary">
                Buy TapGate — €249
              </Link>
              <Link href="/compatibility" className="btn-ghost">
                Check if it fits your gate
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="flex items-center gap-3 text-sm text-[var(--color-warmgray)]">
              <span
                aria-hidden
                className="w-6 h-px bg-[var(--color-teal)]"
              />
              <span>
                Designed by a family of access-control engineers. <em className="font-serif-italic text-[var(--color-charcoal)]">Twenty-five years in the industry.</em>
              </span>
            </div>
          </div>

          {/* Animation column */}
          <div className="relative lg:-mr-8">
            <HeroGateAnimation />
            {/* Vertical eyebrow on the right edge of the animation */}
            <span
              aria-hidden
              className="eyebrow-vertical hidden xl:block absolute -right-10 top-1/2 -translate-y-1/2 text-[var(--color-warmgray-light)]"
            >
              Interactive — tap to toggle
            </span>
          </div>
        </div>
      </section>

      <Marquee />

      <BenefitTriplet />

      <section className="section bg-white" id="how-it-works">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_auto] items-end gap-8 mb-14">
              <div>
                <p className="eyebrow mb-4">Installation</p>
                <h2 className="h2-section max-w-2xl">
                  From box to <em>open gate</em> in about ten minutes.
                </h2>
              </div>
              <p className="text-[var(--color-warmgray)] max-w-sm leading-relaxed">
                Most people handle it themselves. If opening an electrical enclosure isn&apos;t your thing, we have you covered.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* DIY path */}
            <Reveal>
              <div className="card card-hover border-2 border-[var(--color-teal)]/60 relative h-full">
                <span className="absolute -top-3 left-6 bg-[var(--color-teal)] text-white text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full">
                  Most popular
                </span>
                <div className="flex items-center gap-3 mb-5 mt-2">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-charcoal)] leading-tight">
                      Do it <em className="font-serif-italic text-[var(--color-teal)]">yourself</em>
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-warmgray)]">
                      ~15 min · 2 wires
                    </p>
                  </div>
                </div>
                <p className="text-[var(--color-warmgray)] leading-relaxed mb-5">
                  A screwdriver and two wires. The app walks you through it for your specific gate operator — photos, step-by-step, live chat if you get stuck.
                </p>

                <div className="grid grid-cols-4 gap-3 mt-auto pt-5 border-t border-[var(--color-hairline)]">
                  {[
                    { step: "1", label: "Unbox" },
                    { step: "2", label: "Open panel" },
                    { step: "3", label: "Plug in" },
                    { step: "4", label: "Tap & go" },
                  ].map((s) => (
                    <div key={s.step} className="text-center">
                      <div className="w-9 h-9 rounded-full bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center mx-auto mb-2 font-mono text-xs font-semibold">
                        {s.step}
                      </div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-warmgray)]">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Pro path */}
            <Reveal delay={120}>
              <div className="card card-hover border border-[var(--color-hairline)] h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-teal-muted)] text-[var(--color-teal)] flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-charcoal)] leading-tight">
                      Have a pro install it
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-warmgray)]">
                      €89 · coming soon
                    </p>
                  </div>
                </div>
                <p className="text-[var(--color-warmgray)] leading-relaxed mb-5">
                  A certified installer comes to your home, handles everything, shows you the app. Usually within 3–5 days of booking. No shame in it — that&apos;s what it&apos;s for.
                </p>
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--color-charcoal)] mb-3">
                  Best for
                </p>
                <ul className="text-sm text-[var(--color-warmgray)] space-y-1.5 mb-6">
                  <li>· Older or sealed gate operators</li>
                  <li>· Homeowners who prefer hands-off</li>
                  <li>· Anyone unsure about wiring</li>
                </ul>
                <Link
                  href="/contact"
                  className="btn-secondary text-sm w-full text-center"
                >
                  Join the install waitlist
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-[var(--color-teal-muted)] rounded-2xl p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-[var(--color-charcoal)] leading-relaxed">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-teal)] block mb-1">
                  Compatible with
                </span>
                CAME · FAAC · Nice · BFT · Sommer · Hörmann — and most others.
              </p>
              <Link
                href="/compatibility"
                className="btn-ghost shrink-0 text-sm"
              >
                See full list
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div>
              <p className="eyebrow mb-4">Access sharing</p>
              <h2 className="h2-section mb-6">
                Hand out keys like <em>candy.</em>
              </h2>
              <p className="text-lg text-[var(--color-warmgray)] mb-8 leading-relaxed max-w-lg">
                Punch in a number, choose access type, hit send. They install the app and tap. They&apos;re in.
              </p>
              <ul className="space-y-4">
                {[
                  ["Permanent keys", "for family"],
                  ["Time-limited keys", "for guests and rentals"],
                  ["Single-use keys", "for deliveries"],
                  ["Instant revocation", "any time, from your pocket"],
                ].map(([head, tail]) => (
                  <li
                    key={head}
                    className="flex items-start gap-3 text-[var(--color-charcoal)]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 w-6 h-px bg-[var(--color-teal)]"
                    />
                    <span>
                      <span className="font-medium">{head}</span>
                      <span className="text-[var(--color-warmgray)]"> — {tail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <KeyShareAnimation />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <Reveal>
            <div className="bg-[var(--color-charcoal)] rounded-3xl h-[360px] overflow-hidden relative">
              <OfflinePulse />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="eyebrow mb-4">Works offline</p>
              <h2 className="h2-section mb-6">
                Your internet could be down for a <em>week.</em>
                <br />
                TapGate wouldn&apos;t notice.
              </h2>
              <p className="text-lg text-[var(--color-warmgray)] mb-8 leading-relaxed max-w-lg">
                Bluetooth, not WiFi. That&apos;s the whole trick. Your gate keeps working even when your router doesn&apos;t.
              </p>
              <div className="rounded-2xl p-6 border border-[var(--color-teal)]/30 bg-white">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-teal)] mb-2">
                  Optional upgrade
                </p>
                <p className="text-[var(--color-charcoal)] leading-relaxed">
                  Want remote management? Add <strong>TapGate Cloud</strong> for €5/month — manage keys from anywhere, activity logs, push notifications. Skip it and TapGate still works perfectly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBar />

      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mb-14 max-w-3xl">
              <p className="eyebrow mb-4">Built for how you live</p>
              <h2 className="h2-section">
                Who <em>TapGate</em> is for.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Homeowners",
                desc: "No more remote rummaging. Tap as you pull into the driveway. Share keys with the cleaner, the gardener, the in-laws.",
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
            ].map((t, i) => (
              <Reveal key={t.title} delay={i * 120}>
                <Link
                  href={t.href}
                  className="card card-hover border border-[var(--color-hairline)] block group h-full"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-warmgray)] mb-4">
                    0{i + 1}
                  </p>
                  <h3 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-teal)] transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-[var(--color-warmgray)] leading-relaxed mb-5">
                    {t.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-teal)] group-hover:gap-2 transition-all">
                    Read more <span aria-hidden>→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mb-14 max-w-3xl">
              <p className="eyebrow mb-4">Testimonials</p>
              <h2 className="h2-section">
                What <em>homeowners</em> say.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marie L.",
                location: "Lyon, France",
                text: "I was sceptical a 10-minute install could be real. It took me eight. Now the whole family uses their phones.",
              },
              {
                name: "Thomas B.",
                location: "Provence, France",
                text: "We rent out our villa. Sending guests a digital key instead of hiding a remote under a flower pot changed everything.",
              },
              {
                name: "Anna K.",
                location: "Barcelona, Spain",
                text: "My parents couldn\u2019t find their gate remote half the time. Now they tap their phone. \u2018Why didn\u2019t this exist sooner?\u2019 \u2014 my mum.",
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="card border border-[var(--color-hairline)] h-full relative">
                  <span
                    aria-hidden
                    className="absolute top-6 right-8 font-serif-italic text-6xl text-[var(--color-teal)]/30 leading-none"
                  >
                    &ldquo;
                  </span>
                  <p className="text-[var(--color-charcoal)] leading-relaxed mb-6 pr-8 text-lg">
                    {t.text}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-hairline)]">
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-charcoal)]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[var(--color-warmgray)]">
                        {t.location}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-warmgray)]"
                    >
                      Placeholder
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-paper)]" id="pricing-preview">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mb-16 max-w-3xl">
              <p className="eyebrow mb-4">Products</p>
              <h2 className="h2-section">
                Choose your <em>setup.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 md:items-start mb-12">
            <Reveal>
              <PricingCard
                name="TapGate Gateway"
                accent="Gateway"
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
            </Reveal>
            <Reveal delay={80}>
              <PricingCard
                name="TapGate Home Set"
                accent="Home Set"
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
            </Reveal>
            <Reveal delay={160}>
              <PricingCard
                name="TapGate Cloud"
                accent="Cloud"
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
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-2xl p-6 flex flex-wrap items-center gap-4 bg-white border border-[var(--color-hairline)]">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-warmgray)]">
                Coming soon
              </span>
              {["Range Extender", "Door Sensor", "Indoor Button"].map((p) => (
                <span
                  key={p}
                  className="bg-[var(--color-paper)] rounded-full px-3 py-1.5 text-xs text-[var(--color-charcoal)] border border-[var(--color-hairline)]"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div>
              <p className="eyebrow mb-4">Our story</p>
              <h2 className="h2-section mb-6">
                Twenty-five years of access control.
                <br />
                <em>One family.</em>
              </h2>
              <p className="text-lg text-[var(--color-warmgray)] leading-relaxed mb-8 max-w-lg">
                TapGate started in a family business that&apos;s been building access-control systems since 2000. We didn&apos;t invent smart locks or reinvent the gate. We just noticed that every homeowner we met was carrying a phone and fumbling for a remote.
              </p>
              <Link href="/about" className="btn-ghost">
                Read our story <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-teal-muted)] to-[var(--color-paper)] h-[360px] flex items-center justify-center">
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, rgba(14,109,107,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(14,109,107,0.2) 0%, transparent 50%)",
                }}
              />
              <div className="relative flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[var(--color-teal)] ml-1"
                    fill="currentColor"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-teal)]">
                  60-second founder intro · placeholder
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ />

      <CommunitySignup />

      <CTASection />
    </>
  );
}
