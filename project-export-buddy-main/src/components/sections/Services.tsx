import {
  Gavel,
  Heart,
  Briefcase,
  Home,
  Scale,
  FileText,
  Users,
  ShieldCheck,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  gavel: Gavel,
  heart: Heart,
  briefcase: Briefcase,
  home: Home,
  scale: Scale,
  file: FileText,
  users: Users,
  shield: ShieldCheck,
};

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="مجالات العمل"
          title="خدمات قانونية بتخصص دقيق"
          desc="كل مجال يتولاه محامٍ متخصص في نوعية القضية ودرجة التقاضي، لا مكتب يقبل كل شيء."
        />

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = icons[s.icon] ?? Scale;
            return (
              <article
                key={s.title}
                className="group relative flex flex-col justify-between bg-background p-8 transition-colors duration-300 hover:bg-surface"
              >
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 gold-line transition-transform duration-300 group-hover:scale-x-100" />
                <div>
                  <Icon
                    className="h-8 w-8 text-gold-deep transition-colors duration-300 group-hover:text-gold"
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/50">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug ?? "criminal" }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-gold transition-all duration-200 hover:text-gold-soft group-hover:translate-x-[-4px]"
                  >
                    <span>اعرف المزيد عن {s.title}</span>
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
