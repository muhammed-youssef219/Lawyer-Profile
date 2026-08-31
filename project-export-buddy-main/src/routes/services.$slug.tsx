import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Gavel,
  Heart,
  Briefcase,
  Home,
  Scale,
  FileText,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  ChevronDown,
  Clock,
  Shield,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { servicesDetails } from "@/data/servicesDetails";
import { services, site } from "@/data/site";

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

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const detail = servicesDetails[params.slug];
    if (!detail) {
      throw notFound();
    }
    return { detail };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.detail
      ? `${loaderData.detail.title} | ${site.short}`
      : `مجالات العمل | ${site.short}`;
    const description = loaderData?.detail
      ? loaderData.detail.headline
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
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { detail } = Route.useLoaderData();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const IconComponent = icons[detail.icon] ?? Scale;
  const otherServices = services.filter((s) => s.slug !== detail.slug);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24">
        {/* Top Breadcrumb & Hero */}
        <section className="relative border-b border-border/70 bg-surface/40 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-gold">
                الرئيسية
              </Link>
              <span>/</span>
              <a href="/#services" className="transition-colors hover:text-gold">
                مجالات العمل
              </a>
              <span>/</span>
              <span className="text-gold font-medium">{detail.title}</span>
            </div>

            <div className="mt-8 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 border border-gold-deep/40 bg-surface px-4 py-1.5 text-xs font-bold text-gold">
                  <IconComponent className="h-4 w-4 text-gold" />
                  <span>تخصص قانوني دقيق</span>
                </div>
                <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-5xl lg:leading-tight">
                  {detail.title}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-gold-soft/90 font-medium">
                  {detail.headline}
                </p>
              </div>

              {/* Action Box */}
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `مرحبًا، أود استشارة قانونية بخصوص: ${detail.title}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gold bg-gold px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-gold-soft hover:border-gold-soft"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>استشارة فورية عبر واتساب</span>
                </a>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="inline-flex items-center justify-center gap-2 border border-border bg-background px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Phone className="h-4 w-4" />
                  <span>اتصال هاتفي مباشر</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr]">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold">
                  <span className="h-px w-6 bg-gold-deep" />
                  <span>نظرة عامة وشاملة</span>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                  عن قسم {detail.title} بمكتبنا
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  {detail.description.map((p, idx) => (
                    <p key={idx} className="text-justify">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Sub Services */}
                <div className="mt-14">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold">
                    <span className="h-px w-6 bg-gold-deep" />
                    <span>نطاق الخدمات والتخصصات</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">
                    الخدمات والمسائل التي نغطيها
                  </h3>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {detail.subServices.map((sub, i) => (
                      <div
                        key={i}
                        className="group relative border border-border/80 bg-surface/50 p-6 transition-all duration-300 hover:border-gold/60 hover:bg-surface"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                            {i + 1}
                          </span>
                          <div>
                            <h4 className="text-base font-bold text-foreground group-hover:text-gold transition-colors">
                              {sub.title}
                            </h4>
                            <p className="mt-2 text-xs leading-6 text-muted-foreground">
                              {sub.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Steps */}
                <div className="mt-16">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold">
                    <span className="h-px w-6 bg-gold-deep" />
                    <span>منهجية ومراحل العمل</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">
                    كيف نتولى قضيتك أو ملفك من البداية للنهاية؟
                  </h3>

                  <div className="mt-8 space-y-4">
                    {detail.steps.map((st) => (
                      <div
                        key={st.step}
                        className="flex flex-col sm:flex-row items-start gap-4 border border-border bg-background p-6"
                      >
                        <span className="font-display text-2xl font-bold text-gold sm:text-3xl">
                          {st.step}
                        </span>
                        <div>
                          <h4 className="text-base font-bold text-foreground">
                            {st.title}
                          </h4>
                          <p className="mt-1 text-sm leading-7 text-muted-foreground">
                            {st.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Why Specialist Box */}
                <div className="border border-gold-deep/50 bg-surface/70 p-7">
                  <div className="flex items-center gap-2 text-gold">
                    <Shield className="h-5 w-5" />
                    <h3 className="text-lg font-bold">لماذا تحتاج محاميًا متخصصًا؟</h3>
                  </div>
                  <div className="mt-5 space-y-4 text-xs leading-6 text-muted-foreground">
                    {detail.whySpecialist.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Cases Box */}
                <div className="border border-border bg-background p-7">
                  <h3 className="text-base font-bold text-foreground">
                    أبرز القضايا التي نتعامل معها
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-xs leading-6 text-muted-foreground">
                    {detail.commonCases.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Office Contact Info Card */}
                <div className="border border-border bg-surface/40 p-7">
                  <h3 className="text-base font-bold text-gold">مواعيد الاستقبال</h3>
                  <div className="mt-4 space-y-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold-deep" />
                      <span>{site.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gold-deep" />
                      <span dir="ltr">{site.phone}</span>
                    </div>
                  </div>

                  <a
                    href="#consultation-box"
                    className="mt-6 block w-full border border-gold bg-transparent py-2.5 text-center text-xs font-bold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                  >
                    حجز موعد استشارة
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="border-t border-border bg-surface/30 py-16">
          <div className="mx-auto max-w-4xl px-5">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold">
                <HelpCircle className="h-4 w-4" />
                <span>إجابات قانونية مباشرة</span>
              </span>
              <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                الأسئلة الشائعة حول {detail.title}
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {detail.faqs.map((faq, idx) => {
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
        </section>

        {/* CTA Consultation Section */}
        <section id="consultation-box" className="border-t border-border py-20 bg-background">
          <div className="mx-auto max-w-5xl px-5 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold-deep" />
              <span>ابدأ الآن</span>
              <span className="h-px w-8 bg-gold-deep" />
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              هل لديك استفسار أو قضية في {detail.title}؟
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">
              لا تترك موقفك القانوني للصدفة. تواصل معنا اليوم للحصول على مراجعة أولية مجانية
              ودراسة دقيقة لمركزك القانوني قبل اتخاذ أي إجراء.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  `مرحبًا، أود حجز استشارة في: ${detail.title}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-gold-soft"
              >
                <MessageCircle className="h-4 w-4" />
                <span>تواصل عبر واتساب</span>
              </a>
              <a
                href={`tel:${site.phoneIntl}`}
                className="inline-flex items-center gap-2 border border-border px-8 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                <span>اتصال مباشر: {site.phone}</span>
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-border/70 px-8 py-3.5 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowRight className="h-4 w-4" />
                <span>العودة للرئيسية</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Other practice areas */}
        <section className="border-t border-border bg-surface/20 py-16">
          <div className="mx-auto max-w-7xl px-5">
            <h3 className="text-center text-lg font-bold text-foreground">
              استكشف باقي مجالات عمل المكتب
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.slice(0, 4).map((os) => {
                const OIcon = icons[os.icon] ?? Scale;
                return (
                  <Link
                    key={os.slug}
                    to="/services/$slug"
                    params={{ slug: os.slug ?? "criminal" }}
                    className="group border border-border bg-background p-5 transition-all hover:border-gold/60 hover:bg-surface"
                  >
                    <OIcon className="h-6 w-6 text-gold-deep group-hover:text-gold transition-colors" />
                    <h4 className="mt-3 text-sm font-bold text-foreground group-hover:text-gold transition-colors">
                      {os.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {os.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

