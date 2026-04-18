"use client";

import { useState } from "react";
import Link from "next/link";

/* ── SEO metadata (exported from client component via generateMetadata would
     require a separate layout; instead we use a <head> workaround or keep it
     simple with a title/description directly.) ─────────────────────────────── */

// NOTE: Because this file uses "use client", we export metadata from a
// co-located layout.tsx or rely on the parent layout. We set <title> via
// useEffect or a companion file. For now the parent template provides the
// site name, and we add a document title in-component.

/* ── Constants ──────────────────────────────────────────────────────────────── */

const GATE_TYPES = ["Swing", "Sliding", "Barrier", "Garage", "Other"] as const;
type GateType = (typeof GATE_TYPES)[number];

const BRANDS = [
  "CAME",
  "FAAC",
  "Nice",
  "BFT",
  "Sommer",
  "Hormann",
  "Marantec",
  "Ditec",
  "ROGER Technology",
  "LiftMaster",
  "Other / Unknown",
] as const;
type Brand = (typeof BRANDS)[number];

const REMOTE_OPTIONS = ["Yes", "No", "Not sure"] as const;
type RemoteAnswer = (typeof REMOTE_OPTIONS)[number];

const KNOWN_BRANDS = BRANDS.filter((b) => b !== "Other / Unknown");

/* ── Result logic ───────────────────────────────────────────────────────────── */

type ResultKind = "compatible" | "likely" | "unsupported" | null;

function getResult(
  gate: GateType | null,
  brand: Brand | null,
  remote: RemoteAnswer | null
): ResultKind {
  if (!gate || !brand || !remote) return null;

  const isKnownBrand = brand !== "Other / Unknown";
  const isDirectGate = gate === "Swing" || gate === "Sliding";

  if (gate === "Garage" || remote === "No") return "unsupported";
  if (isDirectGate && isKnownBrand && remote === "Yes") return "compatible";
  return "likely";
}

/* ── Page Component ─────────────────────────────────────────────────────────── */

export default function CompatibilityPage() {
  /* Quiz state */
  const [step, setStep] = useState(1);
  const [gateType, setGateType] = useState<GateType | null>(null);
  const [brand, setBrand] = useState<Brand | null>(null);
  const [remote, setRemote] = useState<RemoteAnswer | null>(null);

  /* Guide download form */
  const [guideEmail, setGuideEmail] = useState("");
  const [guideGdpr, setGuideGdpr] = useState(false);
  const [guideSubmitted, setGuideSubmitted] = useState(false);

  const result = step > 3 ? getResult(gateType, brand, remote) : null;

  function reset() {
    setStep(1);
    setGateType(null);
    setBrand(null);
    setRemote(null);
  }

  function handleGuideSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production this would POST to an API / email service
    setGuideSubmitted(true);
  }

  return (
    <>
      {/* Document title (client-side) */}
      <title>Compatibility Checker | TapGate</title>
      <meta
        name="description"
        content="Check if TapGate works with your gate. Answer three quick questions and get a definitive answer. Compatible with CAME, FAAC, Nice, BFT, Sommer, Hormann, and more."
      />

      {/* ── 1. Hero ──────────────────────────────── */}
      <section className="relative bg-[var(--color-offwhite)] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <p className="eyebrow mb-4">Compatibility</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--color-charcoal)] leading-[1.08] mb-5">
            Will TapGate work on your gate?
          </h1>
          <p className="text-lg text-[var(--color-warmgray)] max-w-xl mx-auto leading-relaxed">
            Answer three questions. Get a definitive answer.
          </p>
        </div>
      </section>

      {/* ── 2. Quiz ──────────────────────────────── */}
      <section className="section bg-white" id="quiz">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-colors ${
                    step > s
                      ? "bg-[var(--color-success)] text-white"
                      : step === s
                        ? "bg-[var(--color-teal)] text-white"
                        : "bg-gray-200 text-[var(--color-warmgray)]"
                  }`}
                >
                  {step > s ? (
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    s
                  )}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-0.5 rounded transition-colors ${
                      step > s ? "bg-[var(--color-success)]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── Step 1: Gate type ─── */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-2">
                What type of gate do you have?
              </h2>
              <p className="text-[var(--color-warmgray)] mb-6">
                Pick the option that best describes your gate.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {GATE_TYPES.map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      setGateType(g);
                      setStep(2);
                    }}
                    className={`card border-2 text-center py-5 cursor-pointer transition-all hover:border-[var(--color-teal)] ${
                      gateType === g
                        ? "border-[var(--color-teal)] bg-[var(--color-teal-dim)]"
                        : "border-gray-200"
                    }`}
                  >
                    <span className="text-2xl mb-2 block" aria-hidden="true">
                      {g === "Swing"
                        ? "\uD83D\uDEAA"
                        : g === "Sliding"
                          ? "\u2194\uFE0F"
                          : g === "Barrier"
                            ? "\uD83D\uDEA7"
                            : g === "Garage"
                              ? "\uD83C\uDFE0"
                              : "\u2753"}
                    </span>
                    <span className="font-medium text-[var(--color-charcoal)]">{g}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 2: Brand ─── */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-2">
                What brand is your gate operator?
              </h2>
              <p className="text-[var(--color-warmgray)] mb-6">
                Check the label on the motor unit or the existing remote control.
              </p>
              <select
                value={brand ?? ""}
                onChange={(e) => {
                  setBrand(e.target.value as Brand);
                  setStep(3);
                }}
                className="mb-4"
                aria-label="Gate operator brand"
              >
                <option value="" disabled>
                  Select a brand...
                </option>
                {BRANDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setStep(1)}
                className="text-sm text-[var(--color-teal)] hover:underline mt-2 block"
              >
                &larr; Back
              </button>
            </div>
          )}

          {/* ── Step 3: Remote button ─── */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-2">
                Does your remote have a button that opens the gate?
              </h2>
              <p className="text-[var(--color-warmgray)] mb-6">
                We mean a physical remote (key fob) with a button you press to open or close the gate.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {REMOTE_OPTIONS.map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRemote(r);
                      setStep(4);
                    }}
                    className={`card border-2 flex-1 text-center py-5 cursor-pointer transition-all hover:border-[var(--color-teal)] ${
                      remote === r
                        ? "border-[var(--color-teal)] bg-[var(--color-teal-dim)]"
                        : "border-gray-200"
                    }`}
                  >
                    <span className="font-medium text-[var(--color-charcoal)]">{r}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="text-sm text-[var(--color-teal)] hover:underline mt-4 block"
              >
                &larr; Back
              </button>
            </div>
          )}

          {/* ── Result ─── */}
          {step > 3 && result && (
            <div>
              {/* Compatible */}
              {result === "compatible" && (
                <div className="card border-2 border-[var(--color-success)] bg-green-50 text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-success)] text-white flex items-center justify-center mx-auto mb-5">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-2">
                    TapGate is compatible with your gate.
                  </h2>
                  <p className="text-[var(--color-warmgray)] mb-2">
                    Your <strong>{gateType?.toLowerCase()}</strong> gate with a{" "}
                    <strong>{brand}</strong> operator is fully supported.
                  </p>
                  <p className="text-sm text-[var(--color-warmgray)] mb-8">
                    Installation takes about 10 minutes. No electrician needed.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/pricing" className="btn-primary">
                      Buy TapGate &mdash; &euro;249
                    </Link>
                    <button onClick={reset} className="btn-secondary">
                      Check another gate
                    </button>
                  </div>
                </div>
              )}

              {/* Likely compatible */}
              {result === "likely" && (
                <div className="card border-2 border-amber-400 bg-amber-50 text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-amber-400 text-white flex items-center justify-center mx-auto mb-5 text-3xl font-bold">
                    !
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-2">
                    Likely compatible &mdash; let&rsquo;s confirm.
                  </h2>
                  <p className="text-[var(--color-warmgray)] mb-2">
                    Your setup ({gateType?.toLowerCase()}, {brand}) looks
                    promising, but we want to double-check before you buy.
                  </p>
                  <p className="text-sm text-[var(--color-warmgray)] mb-8">
                    Send us a photo of your gate operator and we&rsquo;ll
                    confirm within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" className="btn-primary">
                      Send us a photo
                    </a>
                    <button onClick={reset} className="btn-secondary">
                      Check another gate
                    </button>
                  </div>
                </div>
              )}

              {/* Not supported */}
              {result === "unsupported" && (
                <div className="card border-2 border-red-300 bg-red-50 text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-red-400 text-white flex items-center justify-center mx-auto mb-5">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-2">
                    Not directly supported &mdash; yet.
                  </h2>
                  <p className="text-[var(--color-warmgray)] mb-2">
                    {gateType === "Garage"
                      ? "Garage door openers use a different triggering mechanism that TapGate doesn\u2019t support at this time."
                      : "Without a remote button, TapGate can\u2019t interface with the gate operator."}
                  </p>
                  <p className="text-sm text-[var(--color-warmgray)] mb-8">
                    Get in touch &mdash; we may still be able to help with a
                    custom solution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" className="btn-primary">
                      Contact us
                    </a>
                    <button onClick={reset} className="btn-secondary">
                      Check another gate
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── 3. Supported brand grid ──────────────── */}
      <section className="section" id="brands">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="eyebrow mb-3">Supported Brands</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
            Works with every major gate operator.
          </h2>
          <p className="text-[var(--color-warmgray)] mb-10 max-w-2xl leading-relaxed">
            TapGate connects to the trigger terminals inside your gate
            operator &mdash; the same connection your remote uses. If your
            remote can open the gate, TapGate almost certainly can too.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {KNOWN_BRANDS.map((b) => (
              <div
                key={b}
                className="card border border-gray-100 text-center py-5 flex items-center justify-center"
              >
                <span className="font-medium text-[var(--color-charcoal)]">
                  {b}
                </span>
              </div>
            ))}
            <div className="card border border-dashed border-gray-300 text-center py-5 flex flex-col items-center justify-center gap-1">
              <span className="text-sm text-[var(--color-warmgray)]">
                Don&rsquo;t see yours?
              </span>
              <a
                href="#contact"
                className="text-sm font-medium text-[var(--color-teal)] hover:underline"
              >
                Ask us &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. "Not sure? Send us a photo" ───────── */}
      <section className="section bg-white" id="contact">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="eyebrow mb-3">Not sure?</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
                Send us a photo of your gate operator.
              </h2>
              <p className="text-[var(--color-warmgray)] leading-relaxed mb-6">
                Snap a photo of the motor unit (usually a box near the gate
                hinge) and the label showing the brand and model. We&rsquo;ll
                tell you within 24 hours whether TapGate fits.
              </p>
              <div className="bg-[var(--color-teal-muted)] rounded-xl p-5 mb-6">
                <p className="text-sm text-[var(--color-charcoal)] font-medium mb-2">
                  What to photograph:
                </p>
                <ul className="text-sm text-[var(--color-warmgray)] space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-teal)] mt-0.5">1.</span>
                    The gate operator box (closed, so we can see the brand)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-teal)] mt-0.5">2.</span>
                    The label / sticker with model number
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-teal)] mt-0.5">3.</span>
                    Your existing remote control (front and back)
                  </li>
                </ul>
              </div>
              <a
                href="mailto:hello@tapgate.com?subject=Compatibility%20check%20%E2%80%94%20photo%20attached&body=Hi%20TapGate%2C%0A%0APlease%20find%20attached%20photos%20of%20my%20gate%20operator.%0A%0AGate%20type%3A%20%0ABrand%2Fmodel%3A%20%0A%0AThanks!"
                className="btn-secondary text-sm"
              >
                Email us at hello@tapgate.com &rarr;
              </a>
            </div>

            <div className="card border border-gray-100">
              <h3 className="font-semibold text-[var(--color-charcoal)] mb-4">
                Quick contact form
              </h3>
              <form
                action="mailto:hello@tapgate.com"
                method="POST"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-gate" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                    Gate brand / model (if known)
                  </label>
                  <input
                    type="text"
                    id="contact-gate"
                    name="gate"
                    placeholder="e.g. CAME BX-78"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Describe your setup or ask a question..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Downloadable compatibility guide ──── */}
      <section className="section" id="guide">
        <div className="mx-auto max-w-xl px-5 md:px-8 text-center">
          <p className="eyebrow mb-3">Free Guide</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
            Download the full compatibility guide
          </h2>
          <p className="text-[var(--color-warmgray)] mb-8 leading-relaxed">
            A detailed PDF covering every supported brand, wiring diagrams,
            and troubleshooting tips. Enter your email and we&rsquo;ll send
            it straight to your inbox.
          </p>

          {guideSubmitted ? (
            <div className="card border-2 border-[var(--color-success)] bg-green-50 py-8">
              <div className="w-12 h-12 rounded-full bg-[var(--color-success)] text-white flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="font-semibold text-[var(--color-charcoal)] mb-1">
                Check your inbox!
              </p>
              <p className="text-sm text-[var(--color-warmgray)]">
                We&rsquo;ve sent the compatibility guide to{" "}
                <strong>{guideEmail}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleGuideSubmit} className="card border border-gray-100 text-left">
              <div className="mb-4">
                <label htmlFor="guide-email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="guide-email"
                  required
                  value={guideEmail}
                  onChange={(e) => setGuideEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={guideGdpr}
                    onChange={(e) => setGuideGdpr(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[var(--color-teal)]"
                  />
                  <span className="text-sm text-[var(--color-warmgray)]">
                    I agree to receive the compatibility guide and occasional
                    product updates from TapGate. You can unsubscribe at any
                    time. See our{" "}
                    <Link
                      href="/privacy"
                      className="text-[var(--color-teal)] underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send me the guide
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
