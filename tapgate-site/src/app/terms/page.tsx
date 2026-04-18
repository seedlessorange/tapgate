import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "TapGate terms of sale and service for EU customers.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[var(--color-charcoal)] mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-[var(--color-warmgray)] uppercase tracking-wider mb-12">Last updated: April 2026</p>

        <div className="space-y-8 text-[var(--color-charcoal)]">
          <div>
            <h2 className="text-xl font-semibold mb-3">1. Who these terms are between</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              These terms cover purchases and use of TapGate, a product of ISN Security Networks (&quot;TapGate,&quot; &quot;we&quot;). By placing an order or using the TapGate app, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">2. Ordering and payment</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              Orders are placed through our website and paid at checkout. Prices are in EUR and include VAT where applicable. Shipping within the EU is free unless noted otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">3. Shipping and delivery</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              Hardware ships within 3&ndash;5 business days of payment. Delivery risk passes to you on handover to the carrier. If your order arrives damaged, email{" "}
              <a href="mailto:hello@tapgate.com" className="text-[var(--color-teal)] underline">hello@tapgate.com</a> within 14 days for a free replacement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">4. Right of withdrawal (EU)</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              Under EU consumer law, you have 14 days from receipt to withdraw from the purchase for any reason. To exercise this right, email us before the deadline. We&apos;ll provide a return label and issue a full refund within 14 days of receiving the returned item.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">5. 30-day satisfaction guarantee</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              Beyond the statutory 14-day withdrawal, we offer a 30-day satisfaction guarantee. If TapGate doesn&apos;t work with your gate, send it back for a full refund including return shipping. All components must be present and undamaged.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">6. Warranty</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              TapGate hardware carries a 2-year warranty against manufacturing defects (3 years for TapGate Community members). The warranty does not cover damage from improper installation, water exposure beyond the IP54 rating, or unauthorised modifications. We&apos;ll replace defective units at no charge.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">7. Installation and use</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              TapGate is designed for use with standard low-voltage gate control inputs. You are responsible for safe installation and for complying with local electrical codes. If you&apos;re unsure, hire a licensed electrician or gate installer. We are not liable for damage resulting from improper installation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">8. Digital keys and shared access</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              Digital keys you share with other users grant them the ability to open your gate until you revoke them. You are responsible for keys you share. We recommend time-limited keys for temporary visitors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">9. TapGate Cloud subscription</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              TapGate Cloud is an optional €5/month subscription. You can cancel at any time; service continues through the end of the current billing period. Cancelling does not affect core TapGate functionality — the device keeps working without it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">10. Limitation of liability</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              TapGate&apos;s liability for any claim is limited to the amount you paid for the hardware. We are not liable for indirect or consequential damages beyond that amount, except where prohibited by applicable EU consumer protection law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">11. Governing law</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              These terms are governed by the laws of France. If you are a consumer in the EU, you also benefit from any mandatory provisions of the law of the country where you reside.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">12. Changes</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              We may update these terms. Material changes will be posted here with an updated date and, for active customers, notified by email.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">13. Contact</h2>
            <p className="text-[var(--color-warmgray)] leading-relaxed">
              Questions? Write us at{" "}
              <a href="mailto:hello@tapgate.com" className="text-[var(--color-teal)] underline">hello@tapgate.com</a>.
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
