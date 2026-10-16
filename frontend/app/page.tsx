import Image from "next/image";

const tickerData = [
  { label: "UVA · BOP", price: "1,160–1,240", trend: "up" },
  { label: "NUWARA ELIYA · OP1", price: "2,450–2,900", trend: "up" },
  { label: "LOW GROWN · BOPF", price: "940–1,200", trend: "down" },
  { label: "MEDIUM · PEKOE", price: "1,300–2,050", trend: "up" },
  { label: "WESTERN · BOP1", price: "1,260–1,500", trend: "down" },
];

function TrendArrow({ trend }: { trend: string }) {
  const isUp = trend === "up";
  return (
    <span className={isUp ? "text-[#4A9D6E]" : "text-[#C4573B]"}>
      {isUp ? "up" : "down"}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-[#2A332C]">
        <Image src="/logo.png" alt="TeaIndex" width={64} height={64} className="object-contain" />
        <div className="flex gap-8 text-sm text-[#8C9189]">
          <a href="#" className="hover:text-[#EDE8DE] transition-colors">Auction Prices</a>
          <a href="#" className="hover:text-[#EDE8DE] transition-colors">About</a>
        </div>
      </nav>

      <section className="px-6 md:px-12 pt-20 pb-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl leading-[1.1] mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>
          The Colombo auction, decoded, grade by grade, week by week.
        </h1>
        <p className="text-[#8C9189] text-lg max-w-xl mb-10">
          Sri Lanka&apos;s open-access tea market data platform. Free for
          growers, exporters, brokers, and researchers, no sign-up required.
        </p>
        <a href="#" className="inline-block bg-[#5C8A3A] text-[#0F1611] px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#6FA347] transition-colors">
          View this week&apos;s prices
        </a>
      </section>

      <section className="border-y border-[#2A332C] bg-[#171F19] overflow-hidden py-4">
        <div className="flex gap-12 px-6 md:px-12 overflow-x-auto">
          {tickerData.map((item, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-xs text-[#8C9189] tracking-wide">{item.label}</span>
              <span className="text-sm tabular-nums">{item.price}</span>
              <TrendArrow trend={item.trend} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 max-w-4xl">
        <h2 className="text-2xl mb-8" style={{ fontFamily: "var(--font-fraunces)" }}>
          Built for every stakeholder in the industry
        </h2>
        <div className="space-y-6 text-[#8C9189]">
          <p><span className="text-[#EDE8DE]">Growers and smallholders</span> — see how the market is actually moving.</p>
          <p><span className="text-[#EDE8DE]">Exporters and brokers</span> — grade and region-level pricing at a glance.</p>
          <p><span className="text-[#EDE8DE]">Students and researchers</span> — clean data instead of another PDF to scrape.</p>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-[#2A332C] text-xs text-[#8C9189]">
        Auction data sourced weekly from Forbes and Walker Tea Brokers. TeaIndex
        parses, structures, and visualizes it, it does not alter the underlying figures.
      </footer>
    </main>
  );
}