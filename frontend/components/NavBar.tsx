"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavLink = { label: string; href: string; soon?: boolean };

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Auction Prices", href: "/auction-prices" },
  { label: "Forecast", href: "", soon: true },
  { label: "Roadmap", href: "/#roadmap" },
];

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="TeaIndex home">
      <span className="relative block h-[38px] w-[44px] shrink-0 overflow-hidden">
        <Image
          src="/logo.png"
          alt=""
          width={86}
          height={86}
          style={{ position: "absolute", left: -25, top: -11, maxWidth: "none" }}
        />
      </span>
      <span className="font-display text-xl tracking-tight">TeaIndex</span>
    </Link>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const renderLink = (l: NavLink, mobile = false) => {
    const base = mobile ? "py-3 text-base" : "px-4 py-2";
    if (l.soon) {
      return (
        <span
          key={l.label}
          className={base + " cursor-not-allowed text-faint"}
          title="Coming soon"
        >
          {l.label}
          <span className="ml-2 border border-line px-1.5 py-0.5 text-[10px] tracking-widest">
            SOON
          </span>
        </span>
      );
    }
    const active = pathname === l.href;
    return (
      <Link
        key={l.label}
        href={l.href}
        onClick={() => setOpen(false)}
        className={
          base +
          " transition-colors " +
          (active ? "border-b border-leaf text-ink" : "text-muted hover:text-ink")
        }
      >
        {l.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <Brand />
        <div className="hidden items-center gap-1 text-sm md:flex">
          {links.map((l) => renderLink(l))}
        </div>
        <button
          className="p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="flex flex-col border-t border-line px-6 py-2 md:hidden">
          {links.map((l) => renderLink(l, true))}
        </div>
      )}
    </header>
  );
}