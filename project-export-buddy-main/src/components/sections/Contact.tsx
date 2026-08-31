import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { site } from "@/data/site";

export function Contact() {
  const items = [
    { icon: MapPin, label: "مقر المكتب", value: site.address },
    { icon: Phone, label: "الهاتف", value: site.phone, href: `tel:${site.phoneIntl}` },
    { icon: Mail, label: "البريد الإلكتروني", value: site.email, href: `mailto:${site.email}` },
    
  ];

  return (
    <section id="contact" className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="المكتب مفتوح لاستقبال ملفك"
        />

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.label} className="bg-background p-8">
              <it.icon className="h-6 w-6 text-gold-deep" strokeWidth={1.25} />
              <div className="mt-5 text-xs tracking-widest text-muted-foreground">
                {it.label}
              </div>
              {it.href ? (
                <a
                  href={it.href}
                  dir="auto"
                  className="mt-2 block text-sm leading-7 text-foreground transition-colors hover:text-gold"
                >
                  {it.value}
                </a>
              ) : (
                <p className="mt-2 text-sm leading-7 text-foreground">{it.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
