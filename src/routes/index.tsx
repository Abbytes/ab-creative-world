import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { EmblemBadge } from "@/components/emblem-badge";
import { GamesSection } from "@/components/games-section";
import { SeriesSection } from "@/components/series-section";
import { StoryboardFlow } from "@/components/storyboard-flow";
import { HubSocialSection } from "@/components/hub-social-section";

export const Route = createFileRoute("/")({ component: StudioHub });

function StudioHub() {
  return (
    <div id="top" className="min-h-screen bg-ink text-cream">
      <SiteHeader />
      <EmblemBadge />

      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        <img
          src="/hub/panels/10-horizon.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-ember-hot">
              AB Creative World
            </p>
            <h1 className="mt-5 font-serif text-5xl font-black uppercase leading-none text-cream sm:text-7xl lg:text-8xl">
              AB Creative
              <span className="block text-ember">Studio Hub</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-soft">
              One home for everything Adam builds — playable games, the movie series, the cinematic
              storyboard, and the worlds still to come.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#games" className="studio-button studio-button-primary">
                Play the games
              </a>
              <a href="#series" className="studio-button studio-button-secondary">
                Watch the series
              </a>
              <a href="#storyboard" className="studio-button studio-button-secondary">
                Enter the storyboard
              </a>
            </div>
          </div>
        </div>
      </section>

      <GamesSection />

      <SeriesSection />

      {/* STORYBOARD */}
      <section id="storyboard" aria-label="Storyboard" className="scroll-mt-16">
        <div className="px-5 pb-10 pt-20 text-center sm:px-8 sm:pt-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-ember-hot">
            A film in ten frames
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl font-serif text-4xl font-black uppercase sm:text-6xl">
            The Storyboard
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Scroll slow. Each frame is a scene — the pit, the fighters, the realms, the forge.
          </p>
          <p className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold uppercase tracking-widest text-ember-hot">
            <span aria-hidden className="scroll-cue inline-block">↓</span> Scroll to play the film
          </p>
        </div>
        <StoryboardFlow />
        <div className="px-5 py-14 text-center sm:px-8">
          <p className="font-serif text-2xl font-black uppercase tracking-wide text-ember sm:text-3xl">
            Every legend starts here.
          </p>
          <a href="#hub" className="studio-button studio-button-secondary mt-8">
            Join the hub
          </a>
        </div>
      </section>

      <HubSocialSection />

      <footer className="border-t border-line/60 px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img src="/hub/emblem.png" alt="AB Creative World emblem" className="h-10 w-10 rounded-full object-cover" width={40} height={40} />
            <p className="text-sm font-extrabold uppercase tracking-wide text-cream-soft">
              AB Creative World
            </p>
          </div>
          <p className="text-sm text-muted">Built by Adam. Worlds from stories, games & imagination.</p>
        </div>
      </footer>
    </div>
  );
}
