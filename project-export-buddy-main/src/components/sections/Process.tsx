import { SectionHeading } from "@/components/shared/SectionHeading";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="relative border-y border-border bg-surface py-24">
      <div className="absolute inset-0 pattern-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="آلية العمل"
          title="مسار واضح من أول رسالة حتى الحكم"
          desc="لا تدفع شيئًا قبل أن تعرف بالضبط ما سيتم عمله، وكم سيستغرق، وبكم."
        />

        <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <li key={s.step} className="bg-background p-8">
              <span className="font-display text-4xl font-bold text-gold-deep">
                {s.step}
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
