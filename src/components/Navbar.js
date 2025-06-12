import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/showcase",  label: "Showcase" },
  { href: "/docs",      label: "Docs" },
  { href: "/blog",      label: "Blog" },
  { href: "/analytics", label: "Analytics" },
  { href: "/templates", label: "Templates" },
  { href: "/enterprise",label: "Enterprise" },
];

const SearchInput = ({ placeholder, className = "" }) => (
  <input
    type="search"
    placeholder={placeholder}
    aria-label="Search"
    className={`rounded bg-gray-100 px-3 py-1.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white shadow text-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-semibold text-blue-600 hover:text-blue-700"
        >
          AEON
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-700 hover:text-blue-600"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-4 hidden md:block">
          <SearchInput placeholder="Search documentation…" />
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 bg-white px-4 pb-4 shadow md:hidden">
          <div className="pb-2">
            <SearchInput placeholder="Search…" className="w-full" />
          </div>

          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}