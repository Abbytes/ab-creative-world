import { useEffect, useRef } from "react";
import { STORYBOARD_CHAPTERS } from "@/lib/hub-data";

/**
 * Epic cinematic chapter flow: ten full-bleed frames, each sticky-stacked
 * so the next scene slides over the last like a film cut. Chapter titles
 * rise in as each scene becomes active. Compositor-friendly (sticky +
 * transform/opacity only) so it stays smooth on iPhone.
 */
export function StoryboardFlow() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const sections = Array.from(stack.querySelectorAll<HTMLElement>("[data-chapter]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("chapter-active", entry.isIntersecting);
        }
      },
      { threshold: 0.55 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={stackRef} className="chapter-stack">
      {STORYBOARD_CHAPTERS.map((chapter, i) => (
        <section
          key={chapter.src}
          data-chapter
          aria-label={`Chapter ${chapter.numeral}: ${chapter.title}`}
          className="chapter sticky top-0 flex h-[100svh] items-stretch justify-stretch overflow-hidden bg-ink"
        >
          <img
            src={chapter.src}
            alt={`${chapter.title} — storyboard frame ${i + 1} of ${STORYBOARD_CHAPTERS.length}`}
            className="chapter-frame absolute inset-0 h-full w-full object-cover"
            loading={i < 2 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-ink/60" aria-hidden />

          {/* letterbox bars */}
          <div className="letterbox letterbox-top absolute inset-x-0 top-0 bg-black" aria-hidden />
          <div className="letterbox letterbox-bottom absolute inset-x-0 bottom-0 bg-black" aria-hidden />

          <div className="relative z-10 flex w-full flex-col justify-end px-6 pb-20 sm:px-12 sm:pb-24">
            <p className="chapter-kicker text-xs font-extrabold uppercase tracking-[0.35em] text-ember-hot sm:text-sm">
              Chapter {chapter.numeral}
              <span className="mx-3 text-cream/40">·</span>
              <span className="text-cream/60">
                {i + 1} / {STORYBOARD_CHAPTERS.length}
              </span>
            </p>
            <h3 className="chapter-title mt-4 font-serif text-5xl font-black uppercase leading-none text-cream sm:text-7xl">
              {chapter.title}
            </h3>
            <p className="chapter-copy mt-4 max-w-xl text-lg leading-relaxed text-cream-soft sm:text-xl">
              {chapter.copy}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
