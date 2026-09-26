import { EPISODES } from "@/lib/hub-data";

/**
 * Series episodes play through YouTube embeds — the proven iPhone-safe
 * route. No direct <video> MP4 tags anywhere on this page.
 */
export function SeriesSection() {
  return (
    <section id="series" aria-label="Series" className="scroll-mt-24 border-y border-line/60 bg-ink-raised/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-extrabold uppercase tracking-widest text-ember-hot">Watch</p>
        <h2 className="mt-3 font-serif text-4xl font-black uppercase sm:text-6xl">The Series</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Four episodes. The pit, the clash, the realms, the horizon — the AB Creative World movie cut.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {EPISODES.map((ep) => (
            <article
              key={ep.id}
              className="overflow-hidden rounded-3xl border border-line/70 bg-ink"
            >
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${ep.id}?rel=0`}
                  title={`AB Creative World — ${ep.episode}: ${ep.title}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-ember-hot">
                    {ep.episode} · {ep.runtime}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-black uppercase text-cream">{ep.title}</h3>
                  <p className="mt-2 leading-relaxed text-cream-soft">{ep.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
