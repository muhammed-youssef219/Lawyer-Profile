type Props = {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "start" | "center";
};

export function SectionHeading({ eyebrow, title, desc, align = "center" }: Props) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-start"
      }
    >
      <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-4 text-base leading-8 text-muted-foreground">{desc}</p>
      ) : null}
    </div>
  );
}
