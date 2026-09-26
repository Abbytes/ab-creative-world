import { Link } from "@tanstack/react-router";
import { NEW_TCG_URL, APEX_URL, MINER_URL, STUDIO } from "@/lib/studio";

const tabs = [
  { href: "/#top", label: "Home" },
  { href: "/#games", label: "Games" },
  { href: "/#series", label: "Series" },
  { href: "/#storyboard", label: "Storyboard" },
  { href: "/#hub", label: "Hub" },
  { href: "/work", label: "Work", internal: true },
  { href: NEW_TCG_URL, label: "New TCG" },
  { href: APEX_URL, label: "APEX" },
  { href: MINER_URL, label: "Miner" },
  { href: `${STUDIO}/aether`, label: "Aether" },
  { href: `${STUDIO}/live`, label: "Live" },
];

type Tab = { href: string; label: string; internal?: boolean };

function Tab({ href, label, internal }: Tab) {
  const className =
    "whitespace-nowrap rounded-full px-4 py-3 text-xs font-medium text-cream-soft/80 transition hover:bg-white/10 hover:text-cream sm:text-sm";
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
        <a href="/#top" className="flex shrink-0 items-center gap-2.5" aria-label="AB Creative Studio Hub — home">
          <img
            src="/hub/emblem.png"
            alt=""
            aria-hidden
            className="h-9 w-9 rounded-full object-cover"
            width={36}
            height={36}
          />
          <span className="hidden text-sm font-extrabold uppercase tracking-wide text-cream-soft min-[420px]:block">
            Studio Hub
          </span>
        </a>
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
