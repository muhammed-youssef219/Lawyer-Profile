import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-10 text-center">
            <div className="text-3xl font-bold text-gold sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
