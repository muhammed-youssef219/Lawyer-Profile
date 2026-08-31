import { useState, type FormEvent } from "react";
import { Send, ShieldCheck, Phone, MapPin, Clock } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { services, site } from "@/data/site";

const fieldClass =
  "w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground focus:border-gold";

export function Consultation() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      "طلب استشارة قانونية",
      `الاسم: ${data.get("name")}`,
      `الهاتف: ${data.get("phone")}`,
      `نوع القضية: ${data.get("topic")}`,
      `التفاصيل: ${data.get("details")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    setSent(true);
  };

  return (
    <section id="consult" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            align="start"
            eyebrow="طلب استشارة"
            title="ابدأ بملخص قصير لموقفك"
            desc="اكتب المشكلة في سطور مع رقم للتواصل. المراجعة الأولية مجانية والرد خلال 24 ساعة."
          />

         

          {/* Quick Contact Info Cards */}
          <div className="mt-6 space-y-3.5">
            {/* Phone Card */}
            <div className="flex items-start gap-4 border border-border bg-surface/60 p-4 transition-colors hover:border-gold/50">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                <Phone className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <span className="block text-xs font-bold tracking-wider text-muted-foreground">
                  الهاتف والاستفسار
                </span>
                <a
                  href={`tel:${site.phoneIntl}`}
                  dir="ltr"
                  className="mt-1 block text-sm font-bold text-foreground transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="flex items-start gap-4 border border-border bg-surface/60 p-4 transition-colors hover:border-gold/50">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                <MapPin className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <span className="block text-xs font-bold tracking-wider text-muted-foreground">
                  مقر المكتب
                </span>
                <p className="mt-1 text-xs sm:text-sm leading-6 text-foreground">
                  {site.address}
                </p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="flex items-start gap-4 border border-border bg-surface/60 p-4 transition-colors hover:border-gold/50">
             
              <div>
               <spam>خمات تواصل 24 ساعه</spam>
               
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 border border-border bg-surface p-8 sm:grid-cols-2"
        >
          <label className="block">
            <span className="mb-2 block text-xs font-bold text-muted-foreground">
              الاسم بالكامل
            </span>
            <input name="name" required placeholder="ادخل الاسم:  " className={fieldClass} />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-bold text-muted-foreground">
              رقم الهاتف
            </span>
            <input
              name="phone"
              required
              inputMode="tel"
              placeholder="01xxxxxxxxx"
              className={fieldClass}
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs font-bold text-muted-foreground">
              نوع القضية
            </span>
            <select name="topic" className={fieldClass} defaultValue={services[0]?.title}>
              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="أخرى">أخرى</option>
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs font-bold text-muted-foreground">
              تفاصيل الموقف
            </span>
            <textarea
              name="details"
              required
              rows={5}
              placeholder="اشرح الوقائع باختصار، وهل يوجد جلسة أو ميعاد قريب؟"
              className={`${fieldClass} resize-none`}
            />
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 bg-gold px-8 py-3.5 text-sm font-bold text-primary-foreground transition-colors duration-200 hover:bg-gold-soft sm:w-auto"
            >
              <Send className="h-4 w-4" strokeWidth={1.75} />
              إرسال الطلب
            </button>
            {sent ? (
              <p className="mt-4 text-sm text-gold">
                تم تجهيز طلبك وفتح محادثة واتساب — أرسل الرسالة ليصلنا الملف.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
