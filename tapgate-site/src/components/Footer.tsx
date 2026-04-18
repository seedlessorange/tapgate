import Link from "next/link";
import Image from "next/image";

const cols = [
  {
    title: "Products",
    links: [
      { label: "TapGate Gateway", href: "/products/tapgate-gateway" },
      { label: "TapGate Home Set", href: "/products/home-set" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Homeowners", href: "/solutions/homeowners" },
      { label: "Rental hosts", href: "/solutions/rentals" },
      { label: "Small buildings", href: "/solutions/small-buildings" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Compatibility", href: "/compatibility" },
      { label: "Is TapGate for you?", href: "/is-tapgate-for-you" },
      { label: "Support", href: "/support" },
      { label: "Known limitations", href: "/support/limitations" },
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join TapGate Community", href: "/community" },
    ],
  },
];

const paymentMethods = ["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay", "SEPA"];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="TapGate" width={32} height={32} />
              <span className="text-lg font-semibold tracking-tight">TapGate</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your phone is your gate remote. Designed by a family of access-control engineers.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="border-t border-white/10 pt-8 pb-6 flex flex-wrap items-center gap-4">
          <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">We accept</span>
          {paymentMethods.map((m) => (
            <span
              key={m}
              className="text-xs text-gray-400 bg-white/5 rounded px-2.5 py-1"
            >
              {m}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} TapGate. All rights reserved. A product by ISN Security Networks.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
