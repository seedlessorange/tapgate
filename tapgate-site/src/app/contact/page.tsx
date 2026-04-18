import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with TapGate — we respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[var(--color-offwhite)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--color-charcoal)] mb-6">
            Let&apos;s talk
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-light text-[var(--color-charcoal)] mb-6">Send us a message</h2>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="space-y-1.5">
                  <span className="text-sm font-medium text-[var(--color-charcoal)]">Name</span>
                  <input type="text" name="name" required autoComplete="name" />
                </label>
                <label className="space-y-1.5">
                  <span className="text-sm font-medium text-[var(--color-charcoal)]">Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
              </div>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-[var(--color-charcoal)]">Phone (optional)</span>
                <input type="tel" name="phone" autoComplete="tel" />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-[var(--color-charcoal)]">Gate operator brand / model</span>
                <input type="text" name="gate_model" placeholder="e.g. CAME BXV, FAAC 415, Nice RD400..." />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-[var(--color-charcoal)]">Message</span>
                <textarea name="message" rows={5} placeholder="Tell us how we can help..." required />
              </label>
              <label className="flex items-start gap-2 text-sm text-[var(--color-warmgray)]">
                <input type="checkbox" required className="mt-1 accent-[var(--color-teal)]" />
                <span>
                  I agree to the{" "}
                  <a href="/privacy" className="underline hover:text-[var(--color-teal)]">privacy policy</a>.
                </span>
              </label>
              <input type="hidden" name="_subject" value="TapGate website inquiry" />
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-3">Email</h3>
              <a href="mailto:hello@tapgate.com" className="text-[var(--color-teal)] hover:underline">
                hello@tapgate.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-3">Response time</h3>
              <p className="text-[var(--color-warmgray)]">
                We respond to every message within one business day. Usually faster.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-3">Office</h3>
              <p className="text-[var(--color-warmgray)]">
                ISN Security Networks<br />
                [Address placeholder]<br />
                France
              </p>
            </div>
            <div className="bg-[var(--color-teal-muted)] rounded-xl p-5 border border-[var(--color-teal)]/20">
              <p className="text-sm text-[var(--color-charcoal)]">
                <strong>Compatibility question?</strong> Try our{" "}
                <a href="/compatibility" className="text-[var(--color-teal)] underline">compatibility quiz</a> for an instant answer, or send us a photo of your gate operator panel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
