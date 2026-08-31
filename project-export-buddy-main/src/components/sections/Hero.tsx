import { ArrowLeft, Search } from "lucide-react";

import { site } from "@/data/site";

export function Hero() {
  return (
    <section
  id="home"
  className="relative overflow-hidden pt-[5.5rem] pb-16 lg:pt-28 lg:pb-24"
>
      {/* Subtle Diamond Grid Pattern Background */}
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main Content Column */}
          <div className="text-center lg:text-start">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs text-gold shadow-sm backdrop-blur">
              
              <span>مكتب المستشار ايهاب وحيد</span>
            </div>

            {/* Main Majestic Title */}
            <h1 className="mt-7 text-4xl font-bold leading-[1.3] text-foreground sm:text-5xl lg:text-6xl font-display">
              العدالة <span className="gold-text">بين يديك</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              نراجع الوقائع والمستندات، نحدد مركزك القانوني بوضوح، ونقدّم الترافع والاستشارات
              داخل منظومة متكاملة تحفظ المواعيد والتفاصيل حتى النهاية.
            </p>

            {/* Traditional Legal Slogan */}
            <p className="mt-4 text-sm font-bold text-gold/90 font-display tracking-wide">
              — والله خير وكيل —
            </p>

            {/* Action Buttons (Side-by-side on Mobile & Desktop, Compact & Elegant) */}
            <div className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 max-w-sm sm:max-w-none mx-auto lg:mx-0 w-full">
              <a
                href="#consult"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-gradient-to-r from-gold-deep via-gold to-gold-deep px-4 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold text-background shadow-md shadow-gold/15 transition-all duration-300 hover:brightness-110 active:scale-[0.98] whitespace-nowrap"
              >
                <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>طلب استشارة</span>
              </a>

              <a
                href={`tel:${site.phoneIntl}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg border border-gold/50 bg-surface/50 px-4 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold text-gold backdrop-blur transition-all duration-300 hover:bg-gold/10 hover:border-gold active:scale-[0.98] whitespace-nowrap"
              >
                <span>اتصل بالمكتب</span>
                <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              </a>
            </div>

            {/* Integrated Stats Bar */}
            <div className="mt-14 border-t border-border/60 pt-8 sm:mt-16 sm:pt-10">
              <div className="grid grid-cols-3 gap-3 text-center sm:grid-cols-4 sm:gap-6 lg:text-start">
                <div>
                  <div className="font-display text-2xl font-bold text-gold sm:text-3xl lg:text-4xl">
                    2015
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                    انطلاقتنا
                  </div>
                </div>

                <div>
                  <div className="font-display text-2xl font-bold text-gold sm:text-3xl lg:text-4xl">
                    %94
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                    أحكام لصالحنا
                  </div>
                </div>

                <div>
                  <div className="font-display text-2xl font-bold text-gold sm:text-3xl lg:text-4xl">
                    +500
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                    قضية منتهية
                  </div>
                </div>

                <div className="hidden sm:block">
                  <div className="font-display text-2xl font-bold text-gold sm:text-3xl lg:text-4xl">
                    24/7
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                    استقبال الطلبات
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-only Lawyer Image (under stats) */}
            <div className="mt-10 mx-auto max-w-sm sm:max-w-md lg:hidden">
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-2xl">
                <img
                  src="/hero.jpeg"
                  alt="المستشار ايهاب وحيد"
                  width={800}
                  height={1000}
                  className="h-[440px] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Desktop-only Lawyer Image (Side Column) */}
          <div className="hidden lg:block">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-2xl">
                <img
                  src="/hero.jpeg"
                  alt="المستشار أحمد الجندي"
                  width={800}
                  height={1000}
                  className="h-[560px] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
