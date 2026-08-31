import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { articles } from "@/data/site";

export function Articles() {
  return (
    <section id="articles" className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="الموسوعة القانونية"
          title="مقالات تشرح القانون بلغة مفهومة"
          desc="مختصرات عملية مبنية على أحكام محكمة النقض والتشريعات المصرية السارية."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col justify-between border border-border bg-background p-8 transition-all duration-300 hover:border-gold-deep hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="border border-gold-deep/60 px-3 py-1 text-gold font-medium">
                    {a.tag}
                  </span>
                  <span className="text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-relaxed text-foreground group-hover:text-gold transition-colors">
                  <Link
                    to="/articles/$slug"
                    params={{ slug: a.slug ?? "divorce-vs-khula" }}
                  >
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {a.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/40">
                <Link
                  to="/articles/$slug"
                  params={{ slug: a.slug ?? "divorce-vs-khula" }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors hover:text-gold-soft"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>اقرأ المقال بالكامل</span>
                  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
