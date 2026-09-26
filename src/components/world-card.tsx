import type { WorldCard } from "@/lib/studio";

export function WorldCardView({ card }: { card: WorldCard }) {
  return (
    <a
      href={card.href}
      className={`project-card ${card.className} group relative block min-h-96 overflow-hidden rounded-3xl border border-line/80`}
    >
      <div className="project-card-art absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      <div className="relative z-10 flex h-full min-h-96 flex-col justify-end p-7">
        <p className="text-xs font-bold uppercase tracking-widest text-ember-hot">{card.eyebrow}</p>
        <h3 className="mt-2 font-serif text-3xl font-black uppercase leading-none text-cream">{card.title}</h3>
        <p className="mt-3 leading-relaxed text-cream-soft">{card.copy}</p>
        <span className="mt-6 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-widest text-ember-hot">
          {card.cta} →
        </span>
      </div>
    </a>
  );
}
