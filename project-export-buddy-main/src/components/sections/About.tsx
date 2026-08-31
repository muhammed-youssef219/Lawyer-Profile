import { BadgeCheck } from "lucide-react";

import portrait from "@/assets/lawyer-portrait.jpg";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { credentials } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-3 border border-gold-deep/40" />
          <img
            src="/about.jpeg"
            alt="المستشار ايهاب وحيد "
            loading="lazy"
            width={1008}
            height={1264}
            className="relative h-full w-full object-cover"
          />
        </div>

        <div>
          <SectionHeading
            align="start"
            eyebrow="عن المكتب"
            title="خبرة ترافُع حقيقية أمام كل درجات التقاضي"
          />
          <p className="mt-6 text-base leading-9 text-muted-foreground">
            تأسس المكتب على قاعدة بسيطة: الموكل يستحق أن يفهم موقفه القانوني
            كاملًا قبل أن يدفع جنيهًا واحدًا. نبدأ بقراءة المستندات وتحديد نقاط
            القوة والضعف بصراحة، ثم نضع خطة ترافُع مكتوبة بمواعيد واضحة.
          </p>
          <p className="mt-4 text-base leading-9 text-muted-foreground">
            نتولى القضايا الجنائية والأسرية والتجارية والعقارية، ونقدّم استشارات
            دائمة لشركات في السوق المصري، مع متابعة إلكترونية لكل ملف.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <BadgeCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                <span className="text-sm leading-7 text-foreground">{c}</span>
              </li>
            ))}
          </ul>

          
        </div>
      </div>
    </section>
  );
}
