"use client";

import Image from "next/image";
import Link from "next/link";
import { type MouseEvent } from "react";

const FOOTER_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
] as const;

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/recylo.id" },
] as const;

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleNavigate =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
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
    <footer className="bg-neutral-50 border-t border-neutral-200 section-padding-x">
      {/* Main Footer Content */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              onClick={handleNavigate("/")}
              className="inline-block text-2xl font-bold text-brand-primary transition-opacity"
            >
              <Image src="/recylo.png" alt="Recylo" width={150} height={50} />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 max-w-md">
              Recylo, rintisan hijau dari Makassar dan Gowa yang bantu kamu
              pilah, jemput, dan ubah sampah jadi manfaat. Saatnya bareng-bareng
              bikin Sulsel lebih bersih dan bernilai
            </p>

            {/* CTA Button */}
            <Link
              href="https://wa.me/62895330280864"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90 shadow-sm hover:shadow"
            >
              Chat Kami di WhatsApp
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleNavigate(link.href)}
                    className="text-sm text-neutral-600 hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4">
              Sosial Media
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4">
              Kontak
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-neutral-500 mb-1">Email</p>
                <Link
                  href="mailto:recylo.company@gmail.com"
                  className="text-sm text-neutral-600 hover:text-brand-primary transition-colors"
                >
                  recylo.company@gmail.com
                </Link>
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-1">Lokasi</p>
                <p className="text-sm text-neutral-600">
                  Makassar &amp; Gowa, Sulawesi Selatan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 bg-neutral-100/50">
        <div className="section-container py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-neutral-500">
              © {currentYear} Recylo. Semua hak dilindungi.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/kebijakan-privasi"
                className="text-xs text-neutral-500 hover:text-brand-primary transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/syarat-ketentuan"
                className="text-xs text-neutral-500 hover:text-brand-primary transition-colors"
              >
                Syarat &amp; Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
