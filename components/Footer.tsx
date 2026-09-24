import Link from "next/link";

const footerLinks = [
  [
    "Shop",
    [
      ["Catalogue", "/#catalogue"],
      ["Categories", "/#catalogue"],
      ["Track order", "/portal"],
    ],
  ],
  [
    "Business",
    [
      ["B2B buying", "/#b2b"],
      ["Operations", "/operations"],
      ["Request a quote", "/portal"],
    ],
  ],
  [
    "Support",
    [
      ["Help centre", "/support"],
      ["Contact team", "mailto:hello@techverse.demo"],
      ["Delivery info", "/support"],
    ],
  ],
];

export function Footer() {
  return (
    <footer className="commerce-footer">
      <div className="section-shell footer-inner">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span className="brand-mark">TV</span>
            <span>
              tech<span>verse</span>
              <small>Commerce & Distribution</small>
            </span>
          </Link>
          <p>
            Products that move businesses forward. From one store to an entire
            distribution network.
          </p>
          <span className="footer-note">Fictional demo experience · 2026</span>
        </div>
        {footerLinks.map(([title, links]) => (
          <div key={title as string} className="footer-links">
            <strong>{title}</strong>
            {(links as string[][]).map(([label, href]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
        <div className="footer-connect">
          <strong>Stay in the loop</strong>
          <p>New arrivals, better deals and supply insights.</p>
          <div className="footer-input">
            <input
              placeholder="Your email address"
              aria-label="Email address"
            />
            <button aria-label="Subscribe">→</button>
          </div>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© 2026 TechVerse Commerce</span>
        <span>Made for retailers, wholesalers and distributors</span>
      </div>
    </footer>
  );
}
