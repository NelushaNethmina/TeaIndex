"use client";

import { useState } from "react";

const audiences = [
  {
    id: "growers",
    label: "Growers",
    headline: "Know which way the market is moving",
    points: [
      "Weekly price direction by grade and region",
      "Seasonal patterns from years of history",
      "Light pages that work on mobile data",
    ],
  },
  {
    id: "exporters",
    label: "Exporters and brokers",
    headline: "Benchmark every sale",
    points: [
      "Compare grades and regions side by side",
      "Track the Orthodox and CTC price gap",
      "Export volume and currency context",
    ],
  },
  {
    id: "researchers",
    label: "Researchers and students",
    headline: "Clean data, not another PDF",
    points: [
      "Structured weekly auction data",
      "CSV downloads and a public API",
      "Open methodology and named sources",
    ],
  },
];

export default function AudienceTabs() {
  const [active, setActive] = useState(audiences[0].id);
  const current = audiences.find((a) => a.id === active) ?? audiences[0];

  return (
    <div>
      <div role="tablist" className="mb-6 flex gap-2 overflow-x-auto">
        {audiences.map((a) => (
          <button
            key={a.id}
            role="tab"
            aria-selected={a.id === active}
            onClick={() => setActive(a.id)}
            className={
              "whitespace-nowrap border px-4 py-2 text-sm transition-colors " +
              (a.id === active
                ? "border-leaf bg-leaf text-canvas"
                : "border-line text-muted hover:text-ink")
            }
          >
            {a.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="border border-line bg-surface p-6 md:p-10">
        <h3 className="font-display mb-5 text-xl md:text-2xl">{current.headline}</h3>
        <ul className="space-y-3 text-muted">
          {current.points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-leaf" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}