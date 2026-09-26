import { SOCIALS } from "@/lib/hub-data";

export function HubSocialSection() {
  return (
    <section id="hub" aria-label="Hub" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-extrabold uppercase tracking-widest text-ember-hot">Connect</p>
        <h2 className="mt-3 font-serif text-4xl font-black uppercase sm:text-6xl">The Hub</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Follow the studio everywhere — new drops, card reveals, and behind-the-scenes.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[76px] items-center justify-between gap-4 rounded-2xl border border-line/70 bg-ink-raised px-6 transition hover:border-ember"
            >
              <span>
                <span className="block font-serif text-xl font-black uppercase text-cream">{s.label}</span>
                <span className="mt-1 block text-sm text-muted">{s.handle}</span>
              </span>
              <span aria-hidden className="text-2xl text-ember-hot">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
