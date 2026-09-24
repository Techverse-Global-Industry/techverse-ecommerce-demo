"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Shop", "#catalogue"],
  ["Categories", "#catalogue"],
  ["For business", "#b2b"],
  ["Track order", "/portal"],
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <div className="section-shell nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">TV</span>
          <span>
            tech<span>verse</span>
            <small>Commerce & Distribution</small>
          </span>
        </Link>
        <nav className="desktop-nav">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={path === href ? "nav-link active" : "nav-link"}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="/support" className="nav-help">
            Help centre
          </Link>
          <Link href="/portal" className="account-link">
            <span>◎</span> Account
          </Link>
          <Link href="#catalogue" className="nav-cart">
            Cart <span>2</span>
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/portal" onClick={() => setOpen(false)}>
            Account
          </Link>
        </nav>
      )}
    </header>
  );
}
