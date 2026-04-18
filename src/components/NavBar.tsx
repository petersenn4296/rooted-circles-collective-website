import { useState } from "react";

const linksLeft = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/retreats", label: "Retreats" },
];

const linksRight = [
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" },
];

const allLinks = [...linksLeft, ...linksRight];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-sand border-b border-evergreen/10 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden h-20 grid-cols-[1fr_auto_1fr] items-center md:grid">
          <div className="flex justify-end gap-6 lg:gap-8">
            {linksLeft.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-garamond text-base transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/"
            className="px-8 text-center font-wavy text-2xl whitespace-nowrap"
          >
            Rooted Circles
          </a>

          <div className="flex justify-start gap-6 lg:gap-8">
            {linksRight.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-garamond text-base transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile top bar */}
        <div className="flex h-20 items-center justify-between md:hidden">
          <a href="/" className="font-wavy text-2xl">
            Rooted Circles
          </a>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-evergreen/15 text-evergreen"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>

            {open ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6 18 18" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`absolute left-0 right-0 top-full md:hidden border-t border-black/10 bg-white/95 backdrop-blur shadow-sm transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="flex flex-col gap-5">
            {allLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-garamond text-lg transition-opacity hover:opacity-70"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
