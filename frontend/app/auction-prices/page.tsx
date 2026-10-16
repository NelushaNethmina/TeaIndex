"use client";

import { useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const grades = ["BOP", "BOPF", "PEKOE", "OP1", "FBOP"];
const regions = ["Uva", "Nuwara Eliya", "Western", "Udapussellawa", "Low Grown"];
const ranges = ["4W", "8W", "12W", "ALL"] as const;
type Range = (typeof ranges)[number];

const gradeFactor: Record<string, number> = {
  BOP: 1,
  BOPF: 0.95,
  PEKOE: 1.2,
  OP1: 1.8,
  FBOP: 1.35,
};
const regionFactor: Record<string, number> = {
  Uva: 1,
  "Nuwara Eliya": 1.05,
  Western: 1.1,
  Udapussellawa: 0.92,
  "Low Grown": 1.15,
};

const baseTrend = [
  { week: "07 Jan", price: 1145 },
  { week: "21 Jan", price: 1136 },
  { week: "03 Feb", price: 1151 },
  { week: "18 Feb", price: 1176 },
  { week: "04 Mar", price: 1161 },
  { week: "18 Mar", price: 1160 },
  { week: "08 Apr", price: 1170 },
  { week: "27 Apr", price: 1184 },
  { week: "06 May", price: 1171 },
  { week: "20 May", price: 1078 },
  { week: "03 Jun", price: 1074 },
  { week: "17 Jun", price: 1043 },
  { week: "01 Jul", price: 1071 },
  { week: "15 Jul", price: 1047 },
  { week: "28 Jul", price: 1088 },
  { week: "05 Aug", price: 1073 },
];

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: string;
}) {
  return (
    <div className="bg-[#171F19] border border-[#2A332C] p-4">
      <p className="text-xs text-[#8C9189] tracking-wide mb-1">{label}</p>
      <p className={"text-xl tabular-nums " + (tone ?? "")}>{value}</p>
    </div>
  );
}

const selectClass =
  "bg-[#171F19] border border-[#2A332C] text-[#EDE8DE] px-4 py-2 text-sm focus:outline-none focus:border-[#5C8A3A]";

export default function AuctionPrices() {
  const [grade, setGrade] = useState("BOP");
  const [region, setRegion] = useState("Uva");
  const [range, setRange] = useState<Range>("12W");
  const [showMA, setShowMA] = useState(true);

  const series = useMemo(() => {
    const factor = gradeFactor[grade] * regionFactor[region];
    const prices = baseTrend.map((p) => Math.round(p.price * factor));
    return baseTrend.map((p, i) => ({
      week: p.week,
      price: prices[i],
      ma4:
        i >= 3
          ? Math.round((prices[i] + prices[i - 1] + prices[i - 2] + prices[i - 3]) / 4)
          : null,
    }));
  }, [grade, region]);

  const count = range === "ALL" ? series.length : parseInt(range);
  const visible = series.slice(-count);
  const latest = series[series.length - 1];
  const prev = series[series.length - 2];
  const wow = ((latest.price - prev.price) / prev.price) * 100;
  const up = wow >= 0;
  const high = Math.max(...visible.map((p) => p.price));
  const low = Math.min(...visible.map((p) => p.price));

  return (
    <main className="min-h-screen px-6 md:px-12 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl mb-2" style={{ fontFamily: "var(--font-fraunces)" }}>
        Auction Prices
      </h1>
      <p className="text-[#8C9189] mb-8">
        Weekly Colombo auction prices, tracked by grade and region.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <label className="block text-xs text-[#8C9189] mb-2 tracking-wide">GRADE</label>
          <select value={grade} onChange={(e) => setGrade(e.target.value)} className={selectClass}>
            {grades.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-[#8C9189] mb-2 tracking-wide">REGION</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className={selectClass}>
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Stat label="LATEST (RS/KG)" value={latest.price.toLocaleString()} />
        <Stat
          label="WEEK OVER WEEK"
          value={(up ? "+" : "") + wow.toFixed(1) + "%"}
          tone={up ? "text-[#4A9D6E]" : "text-[#C4573B]"}
        />
        <Stat label={"HIGH (" + range + ")"} value={high.toLocaleString()} />
        <Stat label={"LOW (" + range + ")"} value={low.toLocaleString()} />
      </div>

      <div className="bg-[#171F19] border border-[#2A332C] p-6 mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <p className="text-sm text-[#8C9189]">
            {region} / {grade} - weekly average price
          </p>
          <div className="flex items-center gap-2">
            {ranges.map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={
                  "px-3 py-1 text-xs tracking-wide border transition-colors " +
                  (range === r
                    ? "bg-[#5C8A3A] text-[#0F1611] border-[#5C8A3A]"
                    : "border-[#2A332C] text-[#8C9189] hover:text-[#EDE8DE]")
                }
              >
                {r}
              </button>
            ))}
            <button
              onClick={() => setShowMA(!showMA)}
              className={
                "ml-2 px-3 py-1 text-xs tracking-wide border transition-colors " +
                (showMA
                  ? "border-[#C9A24D] text-[#C9A24D]"
                  : "border-[#2A332C] text-[#8C9189] hover:text-[#EDE8DE]")
              }
            >
              MA4
            </button>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={visible}>
            <CartesianGrid stroke="#2A332C" vertical={false} />
            <XAxis
              dataKey="week"
              stroke="#8C9189"
              fontSize={11}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="#8C9189"
              fontSize={11}
              tickLine={false}
              domain={["dataMin - 40", "dataMax + 40"]}
            />
            <Tooltip
              contentStyle={{
                background: "#0F1611",
                border: "1px solid #2A332C",
                fontSize: "13px",
              }}
              labelStyle={{ color: "#8C9189" }}
            />
            <Line type="monotone" dataKey="price" stroke="#5C8A3A" strokeWidth={2} dot={false} />
            {showMA && (
              <Line
                type="monotone"
                dataKey="ma4"
                stroke="#C9A24D"
                strokeWidth={1.5}
                strokeDasharray="4 3"
                dot={false}
                connectNulls
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-xs text-[#8C9189]">
        Sample data shown. Grade and region values are illustrative until the
        data pipeline is connected.
      </p>
    </main>
  );
}