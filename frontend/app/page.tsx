import AudienceTabs from "@/components/AudienceTabs";
import ButtonLink from "@/components/ButtonLink";
import HeroSnapshot from "@/components/HeroSnapshot";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";

const features = [
  { title: "Grade and region explorer", body: "Pick any grade and region and see its weekly price history.", status: "Preview" },
  { title: "Trend tools", body: "Time ranges, moving average, week-over-week change, period highs and lows.", status: "Preview" },
  { title: "Compare side by side", body: "Put two grades or regions on one chart.", status: "Planned" },
  { title: "Price forecast", body: "Trend-based projections, with historical accuracy shown openly.", status: "Planned" },
  { title: "Price alerts", body: "Get an email when a grade crosses your price. No account needed.", status: "Planned" },
  { title: "Open data", body: "Download CSV files and use a public API.", status: "Planned" },
];

const roadmap = [
  { phase: "Phase 1", title: "Auction prices", body: "Weekly Colombo auction prices by grade and region, with trend tools and forecasting.", current: true },
  { phase: "Phase 2", title: "Production and exports", body: "National production by elevation and method, export volumes and destination countries.", current: false },
  { phase: "Phase 3", title: "Global comparison", body: "Sri Lanka against Kenya, India and other tea producers.", current: false },
  { phase: "Phase 4", title: "Estates and factories", body: "Factory map and top producing factories.", current: false },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-40 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-240 max-w-full -translate-x-1/2 rounded-full bg-leaf/15 blur-3xl"
          />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-14 pt-12 md:px-12 md:pb-24 md:pt-24 lg:grid-cols-[1.15fr_1fr]">
            <Reveal>
              <p className="mb-5 text-xs tracking-widest text-leaf-light">
                OPEN ACCESS TEA MARKET DATA
              </p>
              <h1 className="font-display mb-6 text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                The Colombo auction, decoded, grade by grade, week by week.
              </h1>
              <p className="mb-8 max-w-xl text-base text-muted md:text-lg">
                Sri Lanka&apos;s open-access tea market data platform. Free for
                growers, exporters, brokers and researchers, no sign-up required.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/auction-prices">Explore prices</ButtonLink>
                <ButtonLink href="/#roadmap" variant="ghost">
                  See the roadmap
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <HeroSnapshot />
            </Reveal>
          </div>
        </section>

        <Ticker />

        <section id="audience" className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
          <Reveal>
            <h2 className="font-display mb-3 text-balance text-2xl md:text-3xl">
              Built for every stakeholder in the industry
            </h2>
            <p className="mb-10 max-w-xl text-muted">
              Choose who you are. Some items ship phase by phase, see the roadmap below.
            </p>
            <AudienceTabs />
          </Reveal>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
            <Reveal>
              <h2 className="font-display mb-10 text-2xl md:text-3xl">
                What TeaIndex is building
              </h2>
              <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="bg-canvas p-6 transition-colors hover:bg-surface md:p-8"
                  >
                    <span
                      className={
                        "mb-4 inline-block border px-2 py-0.5 text-[10px] tracking-widest " +
                        (f.status === "Preview"
                          ? "border-leaf text-leaf-light"
                          : "border-line text-muted")
                      }
                    >
                      {f.status.toUpperCase()}
                    </span>
                    <h3 className="font-display mb-2 text-lg">{f.title}</h3>
                    <p className="text-sm text-muted">{f.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="roadmap" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
            <Reveal>
              <h2 className="font-display mb-3 text-2xl md:text-3xl">Built phase by phase</h2>
              <p className="mb-10 max-w-xl text-muted">
                Each phase ships only after it has been checked against real data.
              </p>
              <ol className="grid gap-8 md:grid-cols-4">
                {roadmap.map((r) => (
                  <li
                    key={r.title}
                    className={"border-t pt-5 " + (r.current ? "border-leaf" : "border-line")}
                  >
                    <p
                      className={
                        "mb-3 text-xs tracking-widest " +
                        (r.current ? "text-leaf-light" : "text-muted")
                      }
                    >
                      {r.phase.toUpperCase()}
                      {r.current ? " - IN PROGRESS" : ""}
                    </p>
                    <h3 className="font-display mb-2 text-lg">{r.title}</h3>
                    <p className="text-sm text-muted">{r.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">Start exploring the market</h2>
              <p className="mt-2 text-muted">Free, no sign-up, built for mobile.</p>
            </div>
            <ButtonLink href="/auction-prices">Open auction prices</ButtonLink>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-muted md:grid-cols-[1.4fr_1fr] md:px-12">
          <div className="space-y-3 text-xs leading-relaxed">
            <p className="font-display text-base text-ink">TeaIndex</p>
            <p>
              Auction data is sourced from Forbes and Walker Tea Brokers weekly market
              reports. TeaIndex structures and visualizes it and does not alter the figures.
            </p>
            <p>
              Forecasts are trend indicators, not guaranteed predictions. Sample data is
              shown until the live data pipeline is connected.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm md:items-end">
            <a href="/auction-prices" className="transition-colors hover:text-ink">
              Auction Prices
            </a>
            <a href="/#roadmap" className="transition-colors hover:text-ink">
              Roadmap
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}