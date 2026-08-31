import { useEffect, useState } from "react";
import { Menu, X, Scale, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/80 bg-background/95 backdrop-blur-md shadow-md"
            : "border-b border-transparent bg-background/40 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 group"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-gold/40 bg-surface/80 shadow-sm transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
              <Scale
                className="h-5 w-5 text-gold"
                strokeWidth={1.5}
              />
            </span>

            <span className="leading-tight text-right">
              <span className="block text-base font-bold text-foreground font-display">
                {site.short}
              </span>

              <span className="block text-[9px] tracking-[0.2em] text-gold-deep uppercase mt-0.5 font-medium">
                Ehab Waheed
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href.startsWith("#") ? `/${l.href}` : l.href}
                className="relative text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="تواصل عبر واتساب"
              title="تواصل عبر واتساب"
              className="grid h-8.5 w-8.5 place-items-center rounded-md bg-[#25D366] text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-[#20ba59] active:scale-95"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href={`tel:${site.phoneIntl}`}
              aria-label="اتصال هاتفي"
              title="اتصال هاتفي مباشر"
              className="grid h-8.5 w-8.5 place-items-center rounded-md bg-gold text-background shadow-sm transition-all duration-200 hover:scale-105 hover:bg-gold-soft active:scale-95"
            >
              <Phone
                className="h-4 w-4"
                strokeWidth={2}
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-[70] grid h-9 w-9 place-items-center rounded-md border border-border/80 bg-surface/60 text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 active:scale-95 lg:hidden"
            >
              <span
                className={`absolute transition-all duration-300 ${
                  open
                    ? "rotate-45 opacity-0"
                    : "rotate-0 opacity-100"
                }`}
              >
                <Menu className="h-5 w-5" />
              </span>

              <span
                className={`absolute transition-all duration-300 ${
                  open
                    ? "rotate-0 opacity-100"
                    : "-rotate-45 opacity-0"
                }`}
              >
                <X className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* ================= MOBILE SIDE DRAWER ================= */}
      <aside
  dir="rtl"
  className={`fixed left-0 top-0 z-[60] flex h-dvh w-[82%] max-w-[360px] flex-col border-r border-gold/20 bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
    open ? "translate-x-0" : "-translate-x-full"
  }`}
>

        {/* Drawer Header */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-border/70 px-5">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-gold/40 bg-surface">
              <Scale
                className="h-5 w-5 text-gold"
                strokeWidth={1.5}
              />
            </span>

            <span className="leading-tight">
              <span className="block text-sm font-bold text-foreground font-display">
                {site.short}
              </span>

              <span className="block text-[8px] tracking-[0.2em] text-gold uppercase mt-1">
                Ehab Waheed
              </span>
            </span>
          </Link>

          {/* Close */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="إغلاق القائمة"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-all duration-200 hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex flex-1 flex-col overflow-y-auto px-5 py-7">

          {/* Small Label */}
          <div className="mb-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
              القائمة الرئيسية
            </span>

            <div className="mt-2 h-px w-12 bg-gold/50" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col">
            {navLinks.map((l, index) => (
            <a
  key={l.href}
  href={l.href.startsWith("#") ? `/${l.href}` : l.href}
  onClick={() => setOpen(false)}
  className="border-b border-border/50 py-4 text-sm font-medium text-foreground transition-all duration-200 hover:px-2 hover:text-gold"
>
  {l.label}
</a>
            ))}
          </nav>

          {/* Contact Section */}
          <div className="mt-8">

            <div className="mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                تواصل معنا
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-xs font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20ba59] active:scale-95"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>

                <span>واتساب</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${site.phoneIntl}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-xs font-bold text-background shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-soft active:scale-95"
              >
                <Phone className="h-4 w-4" />

                <span>اتصال</span>
              </a>

            </div>
          </div>

          {/* Bottom Brand */}
          <div className="mt-auto pt-10 text-center">
            <div className="mx-auto mb-3 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <p className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              Ehab Waheed
            </p>

            <p className="mt-1 text-[8px] text-muted-foreground/60">
              للمحاماة والاستشارات القانونية
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}