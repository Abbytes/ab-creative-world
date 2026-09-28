import { Link } from "@tanstack/react-router";
import { NEW_TCG_URL, APEX_URL, MINER_URL, STUDIO } from "@/lib/studio";

const tabs = [
  { href: "/", label: "Home", internal: true },
  { href: "/work", label: "Work", internal: true },
  { href: `${STUDIO}/storyboard`, label: "Storyboard", internal: false },
  { href: `${STUDIO}/projects/spartas-revenge`, label: "Sparta’s Revenge", internal: false },
  { href: `${STUDIO}/live`, label: "Live", internal: false },
  { href: NEW_TCG_URL, label: "Sigilbound", internal: false },
  { href: APEX_URL, label: "APEX", internal: false },
  { href: MINER_URL, label: "Miner", internal: false },
  { href: `${STUDIO}/aether`, label: "Aether", internal: false },
  { href: `${STUDIO}/tip`, label: "Tip", internal: false },
];

function Tab({ href, label, internal }: { href: string; label: string; internal: boolean }) {
  const className =
    "whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-cream-soft/80 transition hover:bg-white/10 hover:text-cream sm:text-sm";
  if (internal) {
    return (
      <Link to={href} className={className} activeProps={{ className: "bg-ember/15 text-ember-hot" }}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink-raised/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="font-serif text-2xl font-black tracking-tight text-ember">AB</span>
          <span className="text-sm font-extrabold uppercase tracking-wide text-cream-soft">
            Creative World
          </span>
        </Link>
        <nav
          className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto"
          aria-label="Primary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.label} {...tab} />
          ))}
        </nav>
      </div>
    </header>
  );
}
