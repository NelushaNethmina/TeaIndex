const items = [
  { label: "UVA / BOP", price: "1,160-1,240", up: true },
  { label: "NUWARA ELIYA / OP1", price: "2,450-2,900", up: true },
  { label: "LOW GROWN / BOPF", price: "940-1,200", up: false },
  { label: "MEDIUM / PEKOE", price: "1,300-2,050", up: true },
  { label: "WESTERN / BOP1", price: "1,260-1,500", up: false },
  { label: "UDAPUSSELLAWA / FBOP", price: "1,380-1,500", up: true },
];

export default function Ticker() {
  const loop = [...items, ...items];
  return (
    <section
      aria-label="Sample auction price ticker"
      className="group flex items-stretch border-y border-line bg-surface"
    >
      <div className="z-10 flex shrink-0 items-center border-r border-line bg-surface px-4 text-[10px] tracking-widest text-gold md:px-6">
        SAMPLE
      </div>
      <div className="flex-1 overflow-hidden py-4">
        <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((item, i) => (
            <div
              key={i}
              aria-hidden={i >= items.length}
              className="flex items-center gap-3 whitespace-nowrap pr-12"
            >
              <span className="text-xs tracking-wide text-muted">{item.label}</span>
              <span className="text-sm tabular-nums">{item.price}</span>
              <span className={item.up ? "text-up" : "text-down"}>
                {item.up ? "\u25B2" : "\u25BC"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}