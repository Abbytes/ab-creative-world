export function EmblemBadge() {
  return (
    <a
      href="/#top"
      aria-label="Back to top — AB Creative World"
      className="emblem-badge fixed bottom-5 right-5 z-[60] block h-16 w-16 overflow-hidden rounded-full"
    >
      <img
        src="/hub/emblem-holo.png"
        alt="AB Creative World emblem"
        className="h-full w-full object-cover"
        width={64}
        height={64}
      />
    </a>
  );
}
