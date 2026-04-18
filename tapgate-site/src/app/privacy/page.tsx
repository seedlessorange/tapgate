import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TapGate privacy policy — what we collect, how we use it, and your rights under GDPR.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[var(--color-charcoal)] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[var(--color-warmgray)] uppercase tracking-wider mb-12">Last updated: April 2026</p>

        <div className="prose-tapgate space-y-8 text-[var(--color-charcoal)]">
          <div>
            <h2 className="text-xl font-semibold mb-3">Who we are</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              TapGate is a product of ISN Security Networks (&quot;TapGate,&quot; &quot;we,&quot; &quot;us&quot;). You can reach us at{" "}
              <a href="mailto:privacy@tapgate.com" className="text-[var(--color-teal)] underline">privacy@tapgate.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">What we collect</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed mb-3">
              When you order a TapGate or contact us, we collect your name, email, shipping address, and any details you share about your gate. When you use the TapGate app, the device communicates with your phone over Bluetooth — by default, nothing about your gate activity leaves your phone.
            </p>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              If you opt into <strong className="text-[var(--color-charcoal)]">TapGate Cloud</strong>, we additionally store access logs (who opened the gate, and when) on our servers for up to 90 days so you can review them in the web dashboard.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">How we use it</h2>
            <ul className="list-disc pl-5 space-y-1 text-[var(--color-warmgray)] leading-relaxed">
              <li>To fulfil orders and ship the hardware.</li>
              <li>To provide customer support and warranty service.</li>
              <li>To send occasional product updates — you can unsubscribe from any email.</li>
              <li>To operate TapGate Cloud features if you subscribe.</li>
            </ul>
            <p className="text-[var(--color-warmgray)] leading-relaxed mt-3">
              We do not sell your data. We do not share it with advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Legal basis (GDPR)</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              We process personal data under: (a) contract performance for order fulfilment, (b) legitimate interest for product improvement and customer support, and (c) consent for marketing emails and TapGate Community membership. You can withdraw consent at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Your rights</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              Under GDPR, you have the right to access, correct, delete, port, or restrict processing of your personal data. Email{" "}
              <a href="mailto:privacy@tapgate.com" className="text-[var(--color-teal)] underline">privacy@tapgate.com</a> and we&apos;ll respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Data storage</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              All data is stored on servers within the European Union. We do not transfer personal data outside the EU/EEA without adequate safeguards.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Cookies</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              This website uses only essential cookies needed to serve pages. We do not use advertising or tracking cookies. We use privacy-friendly analytics (no cookies, no personal data collection).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Changes to this policy</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              If we make material changes, we&apos;ll update the date above and notify registered customers by email.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-sm text-[var(--color-teal)] hover:underline">&larr; Back to TapGate</Link>
        </div>
      </div>
    </section>
  );
}
