import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="آراء الموكلين"
          title="ثقة بُنيت على نتائج موثقة"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative border border-border bg-surface p-8"
            >
              <Quote className="h-8 w-8 text-gold-deep" strokeWidth={1.25} />
              <blockquote className="mt-5 text-sm leading-8 text-muted-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="text-sm font-bold text-gold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
