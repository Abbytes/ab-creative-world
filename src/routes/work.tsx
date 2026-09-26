import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { worlds } from "@/lib/studio";

export const Route = createFileRoute("/work")({ component: Work });

function Work() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-ember-hot">Selected work</p>
        <h1 className="mt-3 font-serif text-5xl font-black uppercase">Work</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">Trailers, storyboards, and direct play links.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {worlds.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="rounded-2xl border border-line bg-ink-raised p-5 transition hover:border-ember"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-ember-hot">{card.eyebrow}</p>
              <h2 className="mt-2 font-serif text-2xl font-black uppercase">{card.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{card.copy}</p>
              <span className="mt-4 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-widest text-ember">
                {card.cta} →
              </span>
            </a>
          ))}
        </div>
        <Link to="/" className="mt-10 inline-flex min-h-11 items-center text-sm text-ember-hot">
          ← Home
        </Link>
      </main>
    </div>
  );
}
