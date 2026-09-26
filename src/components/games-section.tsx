import { GAMES, CARD_ART } from "@/lib/hub-data";

function GameCard({ game, index }: { game: (typeof GAMES)[number]; index: number }) {
  return (
    <a
      href={game.href}
      className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl border border-line/80 bg-ink-raised p-7 transition hover:border-ember"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition group-hover:opacity-90"
        style={{
          background: `radial-gradient(circle at ${20 + index * 13}% 18%, #ff9f4526 0, transparent 55%), linear-gradient(160deg, #1a0d07 0%, #0b0705 60%, #241208 100%)`,
        }}
        aria-hidden
      />
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-widest text-ember-hot">{game.eyebrow}</p>
        <h3 className="mt-2 font-serif text-3xl font-black uppercase leading-none text-cream">{game.title}</h3>
        <p className="mt-3 leading-relaxed text-cream-soft">{game.copy}</p>
        <span className="mt-6 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-widest text-ember-hot">
          {game.cta} →
        </span>
      </div>
    </a>
  );
}

export function GamesSection() {
  return (
    <section id="games" aria-label="Games" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-extrabold uppercase tracking-widest text-ember-hot">Play</p>
        <h2 className="mt-3 font-serif text-4xl font-black uppercase sm:text-6xl">Games</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Every playable world from the studio — card battlers, idle miners, and living experiences.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {GAMES.map((game, i) => (
            <GameCard key={game.title} game={game} index={i} />
          ))}
        </div>

        <div className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-serif text-2xl font-black uppercase sm:text-3xl">New TCG — Card Art</h3>
            <p className="text-sm uppercase tracking-widest text-muted">Swipe →</p>
          </div>
          <div
            className="card-rail -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8"
            role="list"
            aria-label="New TCG card art gallery"
          >
            {CARD_ART.map((card) => (
              <figure
                key={card.src}
                role="listitem"
                className="w-44 shrink-0 snap-start overflow-hidden rounded-2xl border border-line/70 bg-ink-raised sm:w-52"
              >
                <img
                  src={card.src}
                  alt={`${card.name} — New TCG card art`}
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <figcaption className="px-3 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-cream-soft">
                  {card.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
