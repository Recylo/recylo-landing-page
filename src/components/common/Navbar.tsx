"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
] as const;

/**
 * Navbar Component
 * Responsive navigation dengan hamburger menu
 * Mobile: Hamburger menu dengan animasi X
 * Desktop: Horizontal navigation
 */
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const handleNavLinkClick =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      closeMenu();

      const { pathname, search } = window.location;
      const basePath = `${pathname}${search}`;

      if (href === "/") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", basePath);
        return;
      }

      if (href.startsWith("#")) {
        event.preventDefault();
        const section = document.querySelector(href);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `${basePath}${href}`);
      }
    };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="section-container section-padding-x">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-xl font-bold text-brand-primary sm:text-2xl"
            onClick={closeMenu}
          >
            <Image src="/recylo.jpg" alt="Recylo" width={100} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleNavLinkClick(link.href)}
                    className="text-sm font-medium text-neutral-600 transition hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="https://app.recylo.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-accent transition hover:bg-brand-primary/90"
            >
              Mulai Sekarang
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">
              {isMenuOpen ? "Tutup menu" : "Buka menu"}
            </span>

            {/* Hamburger Lines dengan animasi jadi X */}
            <span
              className={`absolute h-0.5 w-6 bg-brand-primary transition-all duration-300 ${
                isMenuOpen ? "rotate-45 transform" : "-translate-y-2 transform"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-brand-primary transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-brand-primary transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 transform" : "translate-y-2 transform"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border-soft pb-4 pt-4">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleNavLinkClick(link.href)}
                    className="block text-base font-medium text-neutral-600 transition hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="https://app.recylo.id"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-brand-primary px-6 py-3 text-base font-semibold text-brand-accent transition hover:bg-brand-primary/90"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
