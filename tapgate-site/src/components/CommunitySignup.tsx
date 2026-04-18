"use client";

import { useState, type FormEvent } from "react";

export default function CommunitySignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // In production, POST to Formspree or similar
    setSubmitted(true);
  }

  return (
    <section className="section bg-[var(--color-teal-muted)]">
      <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
        <p className="eyebrow mb-3">TapGate Community</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--color-charcoal)] mb-4">
          Free to join. First to know.
        </h2>
        <p className="text-[var(--color-warmgray)] mb-8 max-w-md mx-auto">
          Early access to new products, extended warranty, and engineer tips. No spam — ever.
        </p>

        {submitted ? (
          <div className="card max-w-sm mx-auto text-center">
            <p className="text-lg font-medium text-[var(--color-teal)]">You&apos;re in!</p>
            <p className="text-[var(--color-warmgray)] text-sm mt-1">
              Check your inbox for a confirmation email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              aria-label="Email address"
            />
            <label className="flex items-start gap-2 text-left text-sm text-[var(--color-warmgray)]">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 accent-[var(--color-teal)]"
              />
              <span>
                I agree to receive occasional product emails from TapGate. You can unsubscribe any time.{" "}
                <a href="/privacy" className="underline hover:text-[var(--color-teal)]">
                  Privacy policy
                </a>.
              </span>
            </label>
            <button type="submit" className="btn-primary w-full">
              Join the Community
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
