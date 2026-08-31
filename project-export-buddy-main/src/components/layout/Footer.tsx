import { Scale } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { navLinks, services, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border border-gold-deep">
              <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
            </span>
            <div>
              <div className="text-sm font-bold text-foreground">{site.name}</div>
              <div className="text-[11px] tracking-widest text-muted-foreground">
                {site.tagline}
              </div>
            </div>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-8 text-muted-foreground">
            مكتب محاماة مصري يقدّم الترافُع والاستشارات القانونية بمنهج منظّم:
            مراجعة أولية، عرض أتعاب واضح، ثم متابعة موثقة لكل إجراء.
          </p>
        </div>

        <nav>
          <h3 className="text-sm font-bold text-gold">روابط سريعة</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href.startsWith("#") ? `/${l.href}` : l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold text-gold">أبرز الخدمات</h3>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug ?? "criminal" }}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-px w-full gold-line opacity-60" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} {site.name}. </span>
        
      </div>
    </footer>
  );
}
