import { NEW_TCG_URL, APEX_URL, MINER_URL, STUDIO } from "./studio";

/* ------------------------------------------------------------------ */
/*  AB Creative Studio Hub — central content model                      */
/*                                                                     */
/*  Episode ID mapping confirmed from the artifact build (2026-09-26).  */
/* ------------------------------------------------------------------ */

export type Episode = {
  id: string; // youtube video id
  episode: string;
  title: string;
  copy: string;
  runtime: string;
};

export const EPISODES: Episode[] = [
  {
    id: "_F2Xzc_-51o",
    episode: "Episode 1",
    title: "The Pit",
    copy: "The pit. The first spark.",
    runtime: "25 sec",
  },
  {
    id: "vXghLNPmlLs",
    episode: "Episode 2",
    title: "The Clash",
    copy: "The faceoff. The collision. The finish.",
    runtime: "20 sec",
  },
  {
    id: "90S8bk4Wz9E",
    episode: "Episode 3",
    title: "The Realms",
    copy: "The four elemental realms. A colossal creature takes wing.",
    runtime: "20 sec",
  },
  {
    id: "038BpsBmDuk",
    episode: "Episode 4",
    title: "The Horizon",
    copy: "The creator's forge. The walk toward the light.",
    runtime: "20 sec",
  },
];

export type Chapter = {
  numeral: string;
  title: string;
  copy: string;
  src: string;
};

export const STORYBOARD_CHAPTERS: Chapter[] = [
  { numeral: "I", title: "The Pit", copy: "Beneath the world, the arena waits.", src: "/hub/panels/01-the-pit.jpg" },
  { numeral: "II", title: "Vanguard", copy: "A soldier walks out of the dark.", src: "/hub/panels/02-vanguard.jpg" },
  { numeral: "III", title: "Eve", copy: "She emerges from shadow.", src: "/hub/panels/03-eve.jpg" },
  { numeral: "IV", title: "The Faceoff", copy: "Two fighters. One circle of fire.", src: "/hub/panels/04-faceoff.jpg" },
  { numeral: "V", title: "The Clash", copy: "Steel meets steel.", src: "/hub/panels/05-clash.jpg" },
  { numeral: "VI", title: "Finish Him", copy: "The crowd holds its breath.", src: "/hub/panels/06-finish-him.jpg" },
  { numeral: "VII", title: "The Realms", copy: "Elemental worlds collide.", src: "/hub/panels/07-realms.jpg" },
  { numeral: "VIII", title: "The Creature", copy: "Something colossal wakes.", src: "/hub/panels/08-creature.jpg" },
  { numeral: "IX", title: "The Forge", copy: "Where legends are made.", src: "/hub/panels/09-forge.jpg" },
  { numeral: "X", title: "The Horizon", copy: "Every legend starts here.", src: "/hub/panels/10-horizon.jpg" },
];

export type CardArt = { name: string; src: string };

const CARD_FILES = [
  "ashen-phoenix",
  "magmahorn-behemoth",
  "cinderpelt-foxfire",
  "pyrestep-salamander",
  "tempest-roc",
  "skycoil-wyvern",
  "thunderquill-raven",
  "thunderclaw-lynx",
  "frostfin-leviathan",
  "pearlscale-siren",
  "saltglass-dragon",
  "mistveil-kelpie",
  "rootbound-colossus",
  "verdant-sentinel",
  "briarhide-treant",
  "thornscale-viper",
];

const pretty = (slug: string) =>
  slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

export const CARD_ART: CardArt[] = CARD_FILES.map((slug) => ({
  name: pretty(slug),
  src: `/hub/cards/${slug}.jpg`,
}));

export type Social = { label: string; href: string; handle: string };

export const SOCIALS: Social[] = [
  { label: "Facebook", href: "https://facebook.com/Ab.creative.worlds", handle: "Ab.creative.worlds" },
  { label: "Instagram", href: "https://instagram.com/ab.creative.world", handle: "@ab.creative.world" },
  { label: "TikTok", href: "https://www.tiktok.com/@ab.creative.world", handle: "@ab.creative.world" },
  { label: "YouTube", href: "https://www.youtube.com/@abcreativeworlds", handle: "@abcreativeworlds" },
  { label: "Twitch", href: "https://www.twitch.tv/spartaadamo", handle: "spartaadamo" },
  { label: "Discord", href: "https://discord.gg/wSHzbmzHvp", handle: "Join the server" },
];

export type GameEntry = {
  title: string;
  eyebrow: string;
  copy: string;
  href: string;
  cta: string;
};

export const GAMES: GameEntry[] = [
  {
    title: "New TCG",
    eyebrow: "Flagship card game",
    copy: "40 creatures across two 20-card decks — Elemental Convergence and Wildcrest Accord. Every card has its own attack cinematic.",
    href: NEW_TCG_URL,
    cta: "Play New TCG",
  },
  {
    title: "APEX",
    eyebrow: "Interactive card game",
    copy: "Four tribes. One hunt. Build your deck and enter the arena.",
    href: APEX_URL,
    cta: "Play APEX",
  },
  {
    title: "Adamobytes",
    eyebrow: "Interactive miner",
    copy: "Idle mining floor. Hash AB Bytes.",
    href: MINER_URL,
    cta: "Play Adamobytes",
  },
  {
    title: "Aether",
    eyebrow: "Interactive experience",
    copy: "Shape a living field of light, color, and motion.",
    href: `${STUDIO}/aether`,
    cta: "Enter Aether",
  },
  {
    title: "Dragonwilds",
    eyebrow: "Studio story",
    copy: "Four frames. A wrong turn, an awakening, the hunt, the test.",
    href: `${STUDIO}/projects/dragonwilds`,
    cta: "Read the story",
  },
  {
    title: "Live",
    eyebrow: "From the studio",
    copy: "See what is playing, building, and coming next.",
    href: `${STUDIO}/live`,
    cta: "Watch live",
  },
];
