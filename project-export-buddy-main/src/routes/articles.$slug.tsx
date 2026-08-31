import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Share2,
  CheckCircle2,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Scale,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { articlesDetails } from "@/data/articlesDetails";
import { articles, site } from "@/data/site";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = articlesDetails[params.slug];
    if (!article) {
      throw notFound();
    }
    return { article };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.article
      ? `${loaderData.article.title} | ${site.short}`
      : `الموسوعة القانونية | ${site.short}`;
    const description = loaderData?.article
      ? loaderData.article.excerpt
      : site.tagline;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticleDetailPage,
});

function ArticleDetailPage() {
  const { article } = Route.useLoaderData();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const otherArticles = articles.filter((a) => a.slug !== article.slug);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24">
        {/* Article Header & Breadcrumbs */}
        <section className="border-b border-border/70 bg-surface/30 py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-gold">
                الرئيسية
              </Link>
              <span>/</span>
              <a href="/#articles" className="transition-colors hover:text-gold">
                الموسوعة القانونية
              </a>
              <span>/</span>
              <span className="text-gold font-medium truncate max-w-[200px] sm:max-w-none">
                {article.title}
              </span>
            </div>

            {/* Article Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
              <span className="border border-gold bg-gold/10 px-3 py-1 font-bold text-gold">
                {article.tag}
              </span>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-gold-deep" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-gold-deep" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <User className="h-3.5 w-3.5 text-gold-deep" />
                <span>{article.author}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mt-6 text-2xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[40px]">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 border-r-2 border-gold bg-surface p-4 text-base leading-8 text-gold-soft/90">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Article Body Content */}
        <section className="py-14">
          <div className="mx-auto max-w-4xl px-5">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="space-y-5 text-base leading-8 text-muted-foreground">
                {article.introduction.map((para, i) => (
                  <p key={i} className="text-justify">
                    {para}
                  </p>
                ))}
              </div>

              {/* Sections */}
              {article.sections.map((sec, idx) => (
                <div key={idx} className="border-t border-border/60 pt-10">
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                    {sec.heading}
                  </h2>

                  <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-justify">
                        {p}
                      </p>
                    ))}
                  </div>

                  {sec.bulletPoints && sec.bulletPoints.length > 0 ? (
                    <div className="mt-6 space-y-3 rounded-sm border border-border bg-surface/40 p-6">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-1" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              {/* Key Takeaways */}
              <div className="border border-gold-deep/60 bg-surface/70 p-8">
                <div className="flex items-center gap-2 text-gold">
                  <ShieldCheck className="h-6 w-6" />
                  <h3 className="text-xl font-bold">خلاصة وأهم النقاط القانونية</h3>
                </div>
                <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                  {article.keyTakeaways.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Article FAQs if present */}
              {article.faqs && article.faqs.length > 0 ? (
                <div className="border-t border-border pt-10">
                  <div className="flex items-center gap-2 text-gold">
                    <HelpCircle className="h-5 w-5" />
                    <h3 className="text-xl font-bold">أسئلة شائعة حول الموضوع</h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {article.faqs.map((faq, idx) => {
                      const isOpen = openFaq === idx;
                      return (
                        <div
                          key={idx}
                          className="border border-border bg-background transition-colors"
                        >
                          <button
                            type="button"
                            onClick={() => toggleFaq(idx)}
                            className="flex w-full items-center justify-between p-5 text-start text-sm font-bold text-foreground transition-colors hover:text-gold"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown
                              className={`h-4 w-4 shrink-0 text-gold transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isOpen ? (
                            <div className="border-t border-border/60 px-5 pb-5 pt-3 text-xs leading-7 text-muted-foreground">
                              {faq.a}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {/* Share & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border py-6">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 border border-border bg-surface px-5 py-2.5 text-xs font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Share2 className="h-4 w-4" />
                  <span>{copied ? "تم نسخ الرابط بنجاح!" : "مشاركة المقال"}</span>
                </button>

                <div className="flex items-center gap-3">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground transition-colors hover:text-gold"
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span>العودة للموسوعة القانونية</span>
                  </Link>
                </div>
              </div>

              {/* Author Bio Card */}
              <div className="flex flex-col sm:flex-row items-start gap-5 border border-border bg-surface/30 p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center border border-gold-deep bg-background">
                  <Scale className="h-7 w-7 text-gold" strokeWidth={1.5} />
                </span>
                <div>
                  <h4 className="text-base font-bold text-foreground">{article.author}</h4>
                  <p className="text-xs text-gold">محامٍ ومستشار قانوني بالنقض والدستورية العليا</p>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    خبرة تمتد لأكثر من 18 عامًا في الترافع أمام المحاكم المصرية وصياغة العقود وتأسيس الشركات وفض المنازعات التجارية والأسرية.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-center text-xs text-muted-foreground/70">
                تنويه قانوني: المعلومات الواردة في هذا المقال هي لأغراض التثقيف القانوني العام ولا تعد استشارة قانونية مخصصة بذاتها.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="border-t border-border bg-surface/60 py-16">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              هل تواجه موقفًا قانونيًا مشابهًا وترغب في استشارة مباشرة؟
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              فريقنا القانوني جاهز لمراجعة قضيتك أو عقودك وتقديم الرأي القانوني الأمثل لحماية حقوقك.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  `مرحبًا، قرأت مقال (${article.title}) وأرغب في استشارة قانونية.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gold px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-gold-soft"
              >
                <MessageCircle className="h-4 w-4" />
                <span>استشارة عبر واتساب</span>
              </a>
              <a
                href={`tel:${site.phoneIntl}`}
                className="inline-flex items-center gap-2 border border-border bg-background px-8 py-3 text-sm font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                <span>اتصال هاتفي</span>
              </a>
            </div>
          </div>
        </section>

        {/* Other Articles */}
        {otherArticles.length > 0 ? (
          <section className="border-t border-border py-16">
            <div className="mx-auto max-w-7xl px-5">
              <h3 className="text-center text-lg font-bold text-foreground">
                مقالات أخرى قد تهمك
              </h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
                {otherArticles.map((oa) => (
                  <article
                    key={oa.slug}
                    className="group flex flex-col justify-between border border-border bg-background p-6 transition-all hover:border-gold-deep"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="border border-gold-deep/60 px-2.5 py-0.5 text-gold text-[11px]">
                          {oa.tag}
                        </span>
                        <span className="text-muted-foreground">{oa.date}</span>
                      </div>
                      <h4 className="mt-4 text-base font-bold text-foreground group-hover:text-gold transition-colors">
                        <Link
                          to="/articles/$slug"
                          params={{ slug: oa.slug ?? "divorce-vs-khula" }}
                        >
                          {oa.title}
                        </Link>
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-muted-foreground line-clamp-2">
                        {oa.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/40">
                      <Link
                        to="/articles/$slug"
                        params={{ slug: oa.slug ?? "divorce-vs-khula" }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-gold-soft"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>قراءة المقال</span>
                        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}

