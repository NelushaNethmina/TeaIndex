"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { gradeFactor, seriesFor } from "@/lib/mockData";

const grades = Object.keys(gradeFactor);

export default function HeroSnapshot() {
  const [grade, setGrade] = useState("BOP");

  const data = seriesFor(grade).slice(-12);
  const latest = data[data.length - 1];
  const prev = data[data.length - 2];
  const change = ((latest.price - prev.price) / prev.price) * 100;
  const up = change >= 0;
  const color = up ? "var(--color-up)" : "var(--color-down)";

  return (
    <div className="w-full border border-line bg-surface p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs tracking-widest text-muted">MARKET SNAPSHOT</p>
        <span className="text-[10px] tracking-widest text-gold">SAMPLE DATA</span>
      </div>

      <div
        role="tablist"
        aria-label="Select grade"
        className="mb-5 flex gap-2 overflow-x-auto pb-1"
      >
        {grades.map((g) => (
          <button
            key={g}
            role="tab"
            aria-selected={g === grade}
            onClick={() => setGrade(g)}
            className={
              "whitespace-nowrap border px-3 py-1.5 text-xs tracking-wide transition-colors " +
              (g === grade
                ? "border-leaf bg-leaf text-canvas"
                : "border-line text-muted hover:text-ink")
            }
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mb-2 flex items-end justify-between">
        <div>
          <p className="font-display text-3xl tabular-nums md:text-4xl">
            {latest.price.toLocaleString()}
          </p>
          <p className="text-xs text-muted">Rs/kg, weekly average</p>
        </div>
        <p className="text-sm tabular-nums" style={{ color }}>
          {up ? "\u25B2 +" : "\u25BC "}
          {change.toFixed(1)}%
        </p>
      </div>

      <div className="h-40 md:h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 4, left: 4, bottom: 0 }}>
            <defs>
              <linearGradient id="snapFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.35} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="week" hide />
            <YAxis domain={["dataMin - 30", "dataMax + 30"]} hide />
            <Tooltip
              contentStyle={{
                background: "var(--color-canvas)",
                border: "1px solid var(--color-line)",
                fontSize: "12px",
              }}
              labelStyle={{ color: "var(--color-muted)" }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke={color}
              strokeWidth={2}
              fill="url(#snapFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <Link
        href="/auction-prices"
        className="mt-4 inline-block text-sm text-leaf-light transition-colors hover:text-ink"
      >
        Open full analysis &rarr;
      </Link>
    </div>
  );
}