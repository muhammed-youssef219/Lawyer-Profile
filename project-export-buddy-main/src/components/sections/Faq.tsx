import { useState } from "react";
import { Plus } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/data/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="أسئلة شائعة" title="إجابات قبل أن تسأل" />

        <div className="mt-12 border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-start"
                >
                  <span
                    className={`text-base font-bold transition-colors duration-200 ${
                      isOpen ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {f.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden text-sm leading-8 text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
