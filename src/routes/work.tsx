import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { EmblemBadge } from "@/components/emblem-badge";
import { GAMES } from "@/lib/hub-data";
import { STUDIO } from "@/lib/studio";

export const Route = createFileRoute("/work")({ component: Work });

const EXTRA_WORK = [
  {
    title: "Sparta's Revenge",
    eyebrow: "Scored trailer",
    copy: "The trailer that started it all.",
    href: `${STUDIO}/projects/spartas-revenge`,
    cta: "Watch the trailer",
  },
];

function WorkCard({ entry }: { entry: { title: string; eyebrow: string; copy: string; href: string; cta: string } }) {
  return (
    <a
      href={entry.href}
      className="rounded-2xl border border-line bg-ink-raised p-5 transition hover:border-ember"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-ember-hot">{entry.eyebrow}</p>
      <h2 className="mt-2 font-serif text-2xl font-black uppercase">{entry.title}</h2>
      <p className="mt-2 leading-relaxed text-muted">{entry.copy}</p>
      <span className="mt-4 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-widest text-ember">
        {entry.cta} →
      </span>
    </a>
  );
}

function Work() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <EmblemBadge />
      <main className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-ember-hot">Selected work</p>
        <h1 className="mt-3 font-serif text-5xl font-black uppercase">Work</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Trailers, stories, games, and direct play links from the studio.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((game) => (
            <WorkCard key={game.title} entry={game} />
          ))}
          {EXTRA_WORK.map((entry) => (
            <WorkCard key={entry.title} entry={entry} />
          ))}
        </div>
        <Link to="/" className="mt-10 inline-flex min-h-11 items-center text-sm text-ember-hot">
          ← Studio Hub
        </Link>
      </main>
    </div>
  );
}
