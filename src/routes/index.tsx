import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { WorldCardView } from "@/components/world-card";
import { worlds } from "@/lib/studio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <section className="relative isolate flex min-h-[760px] items-center border-b border-line pt-24">
        <div className="hero-scene absolute inset-0 -z-20" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-ember-hot">Film · Games · Worlds</p>
            <h1 className="mt-5 font-serif text-5xl font-black uppercase leading-none text-cream sm:text-7xl lg:text-8xl">
              Worlds built
              <span className="block text-ember">from stories,</span>
              games & imagination
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-soft">
              Step inside AB Creative World — original films, interactive projects, and the creative journey
              behind every idea.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#worlds" className="studio-button studio-button-secondary">
                Explore the worlds
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="worlds" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-widest text-ember-hot">Enter the universe</p>
          <h2 className="mt-3 font-serif text-4xl font-black uppercase sm:text-6xl">Explore the worlds</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {worlds.map((card) => (
              <WorldCardView key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
