export const NEW_TCG_URL = "https://muse.ai/s/new-tcg-jxa63shzxpxa77";
export const APEX_URL = "https://royal-rose-daisy-daisy.grok.me";
export const MINER_URL = "https://bloom-cobalt-pearl-mint.grok.me";
export const MYTHIC_URL = "https://mythic-realms.grok.me";
export const STUDIO = "https://ab-creative-world.grok.me";

export type WorldCard = {
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  cta: string;
  external: boolean;
  className: string;
};

export const worlds: WorldCard[] = [
  {
    eyebrow: "Epic card battle",
    title: "Mythic Realms",
    copy: "Five armies. Forty-card decks. Every fighter has their own attack move.",
    href: MYTHIC_URL,
    cta: "Play Mythic Realms",
    external: true,
    className: "project-card-mythic",
  },
  {
    eyebrow: "New drop",
    title: "Sigilbound",
    copy: "Forty creatures. Cinematic battles. Every card has its own attack movie.",
    href: NEW_TCG_URL,
    cta: "Play Sigilbound",
    external: true,
    className: "project-card-newtcg",
  },
  {
    eyebrow: "Studio story",
    title: "Dragonwilds",
    copy: "Four frames. A wrong turn, an awakening, the hunt, the test.",
    href: `${STUDIO}/projects/dragonwilds`,
    cta: "Read the story",
    external: true,
    className: "project-card-dragonwilds",
  },
  {
    eyebrow: "Interactive card game",
    title: "APEX",
    copy: "Four tribes. One hunt. Build your deck and enter the arena.",
    href: APEX_URL,
    cta: "Play APEX",
    external: true,
    className: "project-card-apex",
  },
  {
    eyebrow: "Interactive miner",
    title: "Adamobytes",
    copy: "Idle mining floor. Hash AB Bytes.",
    href: MINER_URL,
    cta: "Play Adamobytes",
    external: true,
    className: "project-card-adamobytes",
  },
  {
    eyebrow: "Interactive experience",
    title: "Aether",
    copy: "Shape a living field of light, color, and motion.",
    href: `${STUDIO}/aether`,
    cta: "Enter Aether",
    external: true,
    className: "project-card-aether",
  },
  {
    eyebrow: "From the studio",
    title: "Live",
    copy: "See what is playing, building, and coming next.",
    href: `${STUDIO}/live`,
    cta: "Watch live",
    external: true,
    className: "project-card-live",
  },
];
